import { supabase } from "@/integrations/supabase/client";

/**
 * Get public URL for a file in Supabase Storage
 */
export function getStorageUrl(bucketName: string, filePath: string): string {
  const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);
  return data.publicUrl;
}

/**
 * Get URL for GastroLocal assets
 */
export function getAssetUrl(path: string): string {
  return getStorageUrl('gastromaps-assets', path);
}

/**
 * Get URL for client logos
 */
export function getClientLogoUrl(path: string): string {
  return getStorageUrl('client-logos', path);
}

/**
 * Get URL for case studies images
 */
export function getCaseStudyImageUrl(path: string): string {
  return getStorageUrl('case-studies-images', path);
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
    gastrolocalFull: 'logos/gastromaps-full.png',
    gastrolocalIcon: 'logos/gastromaps-icon-3d.png',
  },
  clients: {
    logo1: 'client-logos/logo-1.png',
    fusionKitchen: 'client-logos/fusion-kitchen.png',
    greenLeaf: 'client-logos/green-leaf.png',
    logo4: 'client-logos/logo-4.png',
    fornoAntico: 'client-logos/forno-antico.png',
    spiceTemple: 'client-logos/spice-temple.png',
    logo7: 'client-logos/logo-7.png',
    oceanBlue: 'client-logos/ocean-blue.png',
    oliveGarden: 'client-logos/olive-garden.png',
    burgerBros: 'client-logos/burger-bros.png',
    logo11: 'client-logos/logo-11.png',
    logo12: 'client-logos/logo-12.png',
    logo13: 'client-logos/logo-13.png',
    logo14: 'client-logos/logo-14.png',
  },
  caseStudies: {
    mediterraneanRestaurant: 'restaurantemediterraneo-gastromapspro.jpeg',
    tapasAndWine: 'tapasyvinos-gastromapspro.jpeg',
    seafoodHouse: 'casamarisco-gastromapspro.jpeg',
    gourmetBistro: 'bistrogourmet-gastromapspro.jpeg',
  },
} as const;
