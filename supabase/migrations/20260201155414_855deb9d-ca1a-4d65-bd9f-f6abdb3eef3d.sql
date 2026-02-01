-- Create a table to track rate limits for the contact form
CREATE TABLE public.contact_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for efficient lookups by IP and time
CREATE INDEX idx_contact_rate_limits_ip_time ON public.contact_rate_limits (ip_address, created_at);

-- Enable RLS (but allow edge functions with service role to bypass)
ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

-- No public policies needed - only service role (edge functions) should access this table
-- The service role key bypasses RLS automatically

-- Create a function to clean up old rate limit entries (older than 1 hour)
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  DELETE FROM public.contact_rate_limits 
  WHERE created_at < now() - interval '1 hour';
$$;