import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin,
  ExternalLink,
  Star,
  Shield
} from "lucide-react";
import { getAssetUrl, ASSETS } from "@/lib/storage";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/gastromaps-icon-3d.png"
                alt="GastroMaps Icon"
                className="w-10 h-10"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div>
                <h3 className="text-2xl font-bold">GastroMaps.pro</h3>
                <p className="text-slate-300 text-sm">Llenamos tu restaurante de clientes</p>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
              Somos especialistas en marketing digital para restaurantes. Convertimos búsquedas en reservas 
              y garantizamos resultados reales en 90 días o te devolvemos tu dinero.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Badge className="bg-success text-white">
                <Shield className="w-4 h-4 mr-2" />
                Garantía 90 días
              </Badge>
              <Badge className="bg-primary text-white">
                <Star className="w-4 h-4 mr-2" />
                87 restaurantes transformados
              </Badge>
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-gradient-accent hover:bg-accent/90 text-white font-bold"
            >
              Empezar Ahora
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <div className="space-y-3">
              <button
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Casos de Éxito
              </button>
              <button
                onClick={scrollToContact}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Análisis Gratuito
              </button>
              <a 
                href="#garantia"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Nuestra Garantía
              </a>
              <a 
                href="#proceso"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Cómo Trabajamos
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">+34 912 345 678</div>
                  <div className="text-slate-400 text-sm">Lun-Vie: 9:00-19:00</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">hola@gastromaps.pro</div>
                  <div className="text-slate-400 text-sm">Respuesta en 2h</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <div className="font-medium">España</div>
                  <div className="text-slate-400 text-sm">Servicio nacional</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h5 className="font-medium mb-4">Síguenos</h5>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => window.open('https://instagram.com', '_blank')}
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => window.open('https://facebook.com', '_blank')}
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-slate-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <p className="text-slate-300 mb-2">
              © 2024 GastroMaps.pro - Todos los derechos reservados
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-400">
              <span>Una marca filial de</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://gastroseo.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors font-semibold flex items-center gap-1"
                >
                  GastroSEO.com
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>by</span>
                <a 
                  href="https://chefbusiness.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/90 transition-colors font-semibold flex items-center gap-1"
                >
                  ChefBusiness.co
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-6 text-sm">
              <a href="#privacidad" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#terminos" className="text-slate-400 hover:text-white transition-colors">
                Términos de Uso
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white"
            >
              Volver Arriba ↑
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}