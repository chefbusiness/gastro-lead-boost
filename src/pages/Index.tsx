
import { HeaderSection } from "@/components/sections/header-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { ProcessSection } from "@/components/sections/process-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { usePageSEO } from "@/hooks/usePageSEO";
import { 
  getLocalBusinessSchema, 
  getOrganizationSchema, 
  getServiceSchema, 
  getFAQSchema,
  getHowToSchema,
  getWebsiteSchema
} from "@/lib/schema";

const Index = () => {
  usePageSEO({
    title: "GastroMaps.pro - Te Traemos Más Clientes o Te Devolvemos El Dinero",
    description: "Especialistas en marketing digital para restaurantes. Garantizamos +40% más reservas en 90 días o te devolvemos tu dinero. Resultados reales, no promesas.",
    keywords: "marketing restaurantes, google my business, publicidad restaurantes, más clientes restaurante, reservas restaurante, SEO local restaurantes, SEM restaurantes, marketing digital gastronomía, aumentar ventas restaurante, posicionamiento google maps",
    ogTitle: "GastroMaps.pro - Llenamos tu Restaurante de Clientes",
    ogDescription: "Especialistas en marketing digital para restaurantes. Garantía de resultados en 90 días o devolución del dinero. +247% ROI promedio.",
    ogType: "website",
    ogImage: "https://yparqvwqryaxpdyzlpif.supabase.co/storage/v1/object/public/gastromaps-assets/hero/restaurant-hero.jpg",
    twitterTitle: "GastroMaps.pro - Marketing Digital para Restaurantes",
    twitterDescription: "Te traemos más clientes o te devolvemos el dinero. Garantía de resultados en 90 días.",
    twitterCard: "summary_large_image"
  });

  return (
    <div className="min-h-screen">
      {/* Schema Markup for SEO */}
      <SchemaMarkup schema={getWebsiteSchema()} id="website-schema" />
      <SchemaMarkup schema={getLocalBusinessSchema()} id="local-business-schema" />
      <SchemaMarkup schema={getOrganizationSchema()} id="organization-schema" />
      <SchemaMarkup schema={getServiceSchema()} id="service-schema" />
      <SchemaMarkup schema={getFAQSchema()} id="faq-schema" />
      <SchemaMarkup schema={getHowToSchema()} id="howto-schema" />
      
      <HeaderSection />
      <HeroSection />
      <TestimonialSection />
      <SolutionSection />
      <CaseStudiesSection />
      <ClientsSection />
      <ProcessSection />
      <FaqSection />
      <ContactFormSection />
      <FooterSection />
      <FloatingCTA />
      <CookieBanner />
    </div>
  );
};

export default Index;
