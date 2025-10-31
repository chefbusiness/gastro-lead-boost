-- FASE 1: Sistema de Roles y Seguridad

-- 1.1 Crear enum para roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- 1.2 Crear tabla user_roles
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE (user_id, role)
);

-- 1.3 Habilitar RLS en user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 1.4 Crear función de seguridad para verificar si un usuario es admin
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = 'admin'
  )
$$;

-- 1.5 Eliminar políticas públicas peligrosas de contact_submissions
DROP POLICY IF EXISTS "Public can read contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Public can update contact submissions" ON contact_submissions;

-- 1.6 Nueva política: Solo INSERT público (para formulario de contacto)
CREATE POLICY "Anyone can submit contact form"
ON contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- 1.7 Nueva política: Solo ADMINS pueden leer datos sensibles
CREATE POLICY "Only admins can read submissions"
ON contact_submissions
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- 1.8 Nueva política: Solo ADMINS pueden actualizar
CREATE POLICY "Only admins can update submissions"
ON contact_submissions
FOR UPDATE
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- 1.9 RLS para user_roles: Solo admins pueden ver roles
CREATE POLICY "Admins can view all roles"
ON user_roles
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

-- 1.10 RLS para user_roles: Solo admins pueden gestionar roles
CREATE POLICY "Admins can manage roles"
ON user_roles
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));