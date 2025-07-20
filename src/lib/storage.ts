import { supabase } from "@/integrations/supabase/client";

/**
 * Get public URL for a file in Supabase Storage
 */
export function getStorageUrl(bucketName: string, filePath: string): string {
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Get URL for GastroMaps assets
 */
export function getAssetUrl(path: string): string {
  return getStorageUrl('gastromaps-assets', path);
}

/**
 * Asset paths for the application
 */
export const ASSETS = {
  hero: {
    restaurant: 'hero/restaurant-hero.jpg',
  },
  solutions: {
    googleMaps: 'solutions/google-maps-mockup.jpg',
    googleMyBusiness: 'solutions/google-my-business-mobile.png',
    geoTargeting: 'solutions/google-ads-geo-targeting.png',
  },
  testimonials: {
    chef: 'testimonials/chef-testimonial.jpg',
  },
  logos: {
    gastromapsFull: 'logos/gastromaps-full.png',
    gastromapsIcon: 'logos/gastromaps-icon-3d.png',
  },
} as const;