-- Remove the insecure "Allow first admin creation" policy
DROP POLICY IF EXISTS "Allow first admin creation" ON public.user_roles;

-- Ensure only admins can manage roles (already exists but making sure)
-- This policy requires authentication as admin to create new admin roles