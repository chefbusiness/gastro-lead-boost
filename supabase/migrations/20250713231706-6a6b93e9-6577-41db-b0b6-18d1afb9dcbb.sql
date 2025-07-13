-- Create storage bucket for GastroMaps assets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gastromaps-assets', 'gastromaps-assets', true);

-- Create policy for public read access to assets
CREATE POLICY "Public read access for gastromaps assets" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'gastromaps-assets');

-- Create policy for authenticated uploads (for future admin use)
CREATE POLICY "Authenticated users can upload assets" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'gastromaps-assets' AND auth.role() = 'authenticated');