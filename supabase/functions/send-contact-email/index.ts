import { Resend } from "npm:resend@4.1.2";
import { createClient, SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { z } from "https://deno.land/x/zod@v3.23.8/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Zod schema for comprehensive input validation
const contactEmailSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name ist erforderlich." })
    .max(200, { message: "Name ist zu lang (max. 200 Zeichen)." })
    // Allow letters (including umlauts), spaces, hyphens, apostrophes
    .regex(/^[\p{L}\p{M}\s\-'.]+$/u, { 
      message: "Name enthält ungültige Zeichen." 
    }),
  email: z
    .string()
    .trim()
    .min(1, { message: "E-Mail ist erforderlich." })
    .max(320, { message: "E-Mail ist zu lang." })
    .email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Nachricht ist erforderlich." })
    .max(10000, { message: "Nachricht ist zu lang (max. 10.000 Zeichen)." })
    // Disallow common script injection patterns
    .refine(
      (msg) => !/<script[\s>]/i.test(msg) && !/javascript:/i.test(msg) && !/on\w+\s*=/i.test(msg),
      { message: "Nachricht enthält ungültige Inhalte." }
    ),
});

type ContactEmailPayload = z.infer<typeof contactEmailSchema>;

const TO_EMAIL = "office@artificall.at";
// NOTE: Using resend.dev until artificall.at is verified for sending.
// Once verified, switch back to e.g. "Artificall Website <noreply@artificall.at>".
const FROM_EMAIL = "Artificall Website <onboarding@resend.dev>";

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MINUTES = 15;
const MAX_REQUESTS_PER_WINDOW = 5;

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
    .replaceAll("/", "&#x2F;")
    .replaceAll("`", "&#x60;")
    .replaceAll("=", "&#x3D;");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function checkRateLimit(supabase: SupabaseClient<any>, ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60 * 1000).toISOString();
  
  // Count requests from this IP in the current window
  const { count, error: countError } = await supabase
    .from("contact_rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("ip_address", ip)
    .gte("created_at", windowStart);

  if (countError) {
    console.error("Rate limit check error:", countError);
    // On error, allow the request but log it
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW };
  }

  const currentCount = count ?? 0;
  const remaining = Math.max(0, MAX_REQUESTS_PER_WINDOW - currentCount);
  
  return { allowed: currentCount < MAX_REQUESTS_PER_WINDOW, remaining };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function recordRequest(supabase: SupabaseClient<any>, ip: string): Promise<void> {
  const { error } = await supabase
    .from("contact_rate_limits")
    .insert({ ip_address: ip });

  if (error) {
    console.error("Failed to record rate limit entry:", error);
  }

  // Occasionally clean up old entries (1% chance per request)
  if (Math.random() < 0.01) {
    try {
      await supabase.rpc("cleanup_old_rate_limits");
    } catch (err) {
      console.error("Failed to cleanup old rate limits:", err);
    }
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY secret");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error("Missing Supabase configuration");
      return new Response(JSON.stringify({ error: "Server misconfigured" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Create Supabase client with service role for rate limiting
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
      ?? req.headers.get("x-real-ip") 
      ?? "unknown";

    // Check rate limit
    const { allowed, remaining } = await checkRateLimit(supabase, clientIp);
    
    if (!allowed) {
      console.warn(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." }),
        {
          status: 429,
          headers: { 
            "Content-Type": "application/json",
            "Retry-After": String(RATE_LIMIT_WINDOW_MINUTES * 60),
            "X-RateLimit-Remaining": "0",
            ...corsHeaders 
          },
        }
      );
    }

    const payload = (await req.json()) as Partial<ContactEmailPayload>;
    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim();
    const message = (payload.message ?? "").trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Bitte füllen Sie alle Felder aus." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Very small sanity checks (avoid obvious junk)
    if (name.length > 200 || message.length > 10_000) {
      return new Response(JSON.stringify({ error: "Eingabe zu lang." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    // Record this request for rate limiting (before sending to count even failed attempts)
    await recordRequest(supabase, clientIp);

    const resend = new Resend(resendApiKey);
    const subject = `Kontaktformular: ${name}`;

    const html = `
      <h2>Neue Kontaktanfrage</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr />
      <p style="color:#666;font-size:12px;">Gesendet am ${new Date().toISOString()}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: "Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    console.log("Contact email sent:", data);
    return new Response(JSON.stringify({ ok: true, id: data?.id }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        "X-RateLimit-Remaining": String(remaining - 1),
        ...corsHeaders 
      },
    });
  } catch (err) {
    console.error("Unhandled error in send-contact-email:", err);
    return new Response(
      JSON.stringify({ error: "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
});