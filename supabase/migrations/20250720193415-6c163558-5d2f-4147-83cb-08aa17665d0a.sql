-- Create bucket for client logos if it doesn't exist
INSERT INTO storage.buckets (id, name, public) 
VALUES ('client-logos', 'client-logos', true)
ON CONFLICT (id) DO NOTHING;

-- Create policies for client logos bucket
CREATE POLICY "Client logos are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'client-logos');

CREATE POLICY "Allow public access to client logos" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'client-logos');