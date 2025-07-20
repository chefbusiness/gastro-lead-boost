
import { HeaderSection } from "@/components/sections/header-section";
import { HeroSection } from "@/components/sections/hero-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { FooterSection } from "@/components/sections/footer-section";
import { FloatingCTA } from "@/components/ui/floating-cta";
import { CookieBanner } from "@/components/ui/cookie-banner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection />
      <TestimonialSection />
      <SolutionSection />
      <CaseStudiesSection />
      <ProcessSection />
      <ContactFormSection />
      <FooterSection />
      <FloatingCTA />
      <CookieBanner />
    </div>
  );
};

export default Index;
