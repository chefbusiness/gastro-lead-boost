
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  schema?: object;
}

const DEFAULT_SEO: SEOData = {
  title: "GastroMaps.pro - Te Traemos Más Clientes o Te Devolvemos El Dinero",
  description: "Especialistas en marketing digital para restaurantes. Garantizamos +40% más reservas en 90 días o te devolvemos tu dinero. Resultados reales, no promesas.",
  ogImage: "https://yparqvwqryaxpdyzlpif.supabase.co/storage/v1/object/public/gastromaps-assets/hero/restaurant-hero.jpg",
  ogType: "website",
  keywords: "marketing restaurantes, google my business, publicidad restaurantes, más clientes restaurante, reservas restaurante, SEO local restaurantes"
};

export const usePageSEO = (seoData?: Partial<SEOData>) => {
  const location = useLocation();
  
  useEffect(() => {
    const finalSEO = { ...DEFAULT_SEO, ...seoData };
    const baseUrl = "https://gastromaps.pro";
    const canonical = finalSEO.canonical || `${baseUrl}${location.pathname}`;

    // Update title
    document.title = finalSEO.title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', finalSEO.description);
    updateMetaTag('keywords', finalSEO.keywords || DEFAULT_SEO.keywords!);

    // Open Graph tags
    updateMetaTag('og:title', finalSEO.ogTitle || finalSEO.title, true);
    updateMetaTag('og:description', finalSEO.ogDescription || finalSEO.description, true);
    updateMetaTag('og:image', finalSEO.ogImage || DEFAULT_SEO.ogImage!, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:type', finalSEO.ogType || 'website', true);
    updateMetaTag('og:site_name', 'GastroMaps.pro', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', finalSEO.ogTitle || finalSEO.title);
    updateMetaTag('twitter:description', finalSEO.ogDescription || finalSEO.description);
    updateMetaTag('twitter:image', finalSEO.ogImage || DEFAULT_SEO.ogImage!);

    // Canonical URL
    let canonical_link = document.querySelector('link[rel="canonical"]');
    if (!canonical_link) {
      canonical_link = document.createElement('link');
      canonical_link.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical_link);
    }
    canonical_link.setAttribute('href', canonical);

    // Schema markup
    if (finalSEO.schema) {
      let schemaScript = document.querySelector('#schema-markup');
      if (!schemaScript) {
        schemaScript = document.createElement('script') as HTMLScriptElement;
        schemaScript.id = 'schema-markup';
        (schemaScript as HTMLScriptElement).type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      (schemaScript as HTMLScriptElement).textContent = JSON.stringify(finalSEO.schema);
    }

  }, [seoData, location.pathname]);
};
