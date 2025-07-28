-- Drop existing restrictive RLS policies
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Contact submissions are readable by authenticated users" ON public.contact_submissions;

-- Create new policies that allow admin access without authentication
-- Allow anyone to insert contact submissions (for the public form)
CREATE POLICY "Public can insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read contact submissions (for admin panel access)
CREATE POLICY "Public can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);

-- Allow updates for admin management
CREATE POLICY "Public can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (true);