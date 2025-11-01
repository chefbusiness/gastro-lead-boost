-- Add policy to allow creating first admin when no admins exist
CREATE POLICY "Allow first admin creation" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (
  role = 'admin' AND 
  NOT EXISTS (
    SELECT 1 FROM public.user_roles WHERE role = 'admin'
  )
);