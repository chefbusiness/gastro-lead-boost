
-- Add new columns to contact_submissions table
ALTER TABLE public.contact_submissions 
ADD COLUMN service TEXT,
ADD COLUMN street_address TEXT,
ADD COLUMN postal_code TEXT;

-- Update the status check constraint to include the new service field validation
-- We'll add a check constraint for the service field
ALTER TABLE public.contact_submissions 
ADD CONSTRAINT check_service_type 
CHECK (service IN ('seo-organico', 'sem-pagado', 'ambas-soluciones') OR service IS NULL);
