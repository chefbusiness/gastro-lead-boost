
-- Create bucket for case studies images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('case-studies-images', 'case-studies-images', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for case studies images bucket
CREATE POLICY "Case studies images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'case-studies-images');

CREATE POLICY "Allow public access to case studies images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'case-studies-images');
