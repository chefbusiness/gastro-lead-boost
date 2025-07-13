import { Button } from "@/components/ui/button";
import { getAssetUrl, ASSETS } from "@/lib/storage";

export function HeaderSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-muted shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/gastromaps-logo-full.png"
              alt="GastroMaps"
              className="h-12 w-auto"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#case-studies"
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Casos de Éxito
            </a>
            <a
              href="#solutions"
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Soluciones
            </a>
            <a
              href="#process"
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Proceso
            </a>
            <a
              href="#contact-form"
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            className="bg-gradient-accent hover:bg-accent/90 text-white px-6 py-2 font-semibold rounded-lg shadow-accent"
          >
            Análisis Gratuito
          </Button>
        </div>
      </div>
    </header>
  );
}