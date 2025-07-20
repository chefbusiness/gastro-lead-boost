-- Upload new solution images to storage
INSERT INTO storage.objects (bucket_id, name, metadata) 
VALUES 
  ('gastromaps-assets', 'solutions/google-my-business-mobile.png', '{}'),
  ('gastromaps-assets', 'solutions/google-ads-geo-targeting.png', '{}');