import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSending) return;
    setIsSending(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Nachricht gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Senden fehlgeschlagen",
        description:
          err?.message ||
          "Bitte versuchen Sie es später erneut oder schreiben Sie direkt an office@artificall.at.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 section-gradient rotate-180" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Kontakt <span className="text-primary neon-text">aufnehmen</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Bereit, Ihr nächstes Projekt zu starten? Schreiben Sie uns und 
              wir melden uns innerhalb von 24 Stunden bei Ihnen.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">E-Mail</h3>
                <p className="text-muted-foreground text-sm">office@artificall.at</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:col-span-3 glass-card rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ihr Name"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ihre@email.de"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nachricht</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wie können wir Ihnen helfen?"
                    rows={4}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  variant="neon"
                  type="submit"
                  className="w-full group"
                  disabled={isSending}
                >
                  {isSending ? "Senden…" : "Nachricht senden"}
                  <Send
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
