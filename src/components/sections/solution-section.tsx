
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Star, 
  Camera, 
  MessageSquare, 
  TrendingUp, 
  Search,
  Users,
  Target,
  ArrowRight
} from "lucide-react";
import { getAssetUrl, ASSETS } from "@/lib/storage";

export function SolutionSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Target className="w-4 h-4 mr-2" />
            LA SOLUCIÓN REAL
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mientras las agencias te llenan de informes,
            </span>
            <br />
            <span className="text-foreground">
              nosotros te llenamos el restaurante
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dos soluciones potentes que trabajan juntas para convertir búsquedas en clientes reales
          </p>
        </div>

        {/* Solution 1 - Google My Business */}
        <Card className="mb-12 shadow-elegant border-0 overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Badge className="bg-primary text-white mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  SOLUCIÓN 1: POSICIONAMIENTO ORGÁNICO
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Optimización Google My Business
                </CardTitle>
                <p className="text-lg text-muted-foreground mb-6">
                  Convertimos tu ficha de Google en una máquina de generar reservas que funciona 24/7
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Search className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Información Optimizada</h4>
                    <p className="text-muted-foreground text-sm">Completamos y ajustamos toda la información clave para máxima visibilidad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Gestión de Reseñas</h4>
                    <p className="text-muted-foreground text-sm">Respondemos todas las reseñas (incluso las negativas) para mejorar tu reputación</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Camera className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contenido Estratégico</h4>
                    <p className="text-muted-foreground text-sm">Fotos atractivas y publicaciones que escalan en resultados orgánicos</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-lg p-4 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Resultado Promedio</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-primary">+180% más visibilidad</span> en búsquedas locales en los primeros 30 días
                </p>
              </div>
            </CardContent>

            <div className="relative">
              <img
                src={getAssetUrl(ASSETS.solutions.googleMyBusiness)}
                alt="Google My Business optimization mobile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20" />
            </div>
          </div>
        </Card>

        {/* Solution 2 - Targeted Advertising */}
        <Card className="mb-12 shadow-elegant border-0 overflow-hidden animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative order-2 lg:order-1">
              <img
                src={getAssetUrl(ASSETS.solutions.geoTargeting)}
                alt="Google Ads geo-targeted advertising"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-accent/20" />
            </div>

            <CardContent className="p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
              <div className="mb-6">
                <Badge className="bg-accent text-white mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  SOLUCIÓN 2: PUBLICIDAD GEOLOCALIZADA
                </Badge>
                <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Anuncios Hipersegmentados
                </CardTitle>
                <p className="text-lg text-muted-foreground mb-6">
                  Llegamos exactamente a las personas que están buscando restaurantes como el tuyo en tu zona
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Geolocalización Precisa</h4>
                    <p className="text-muted-foreground text-sm">Dirigimos anuncios solo a personas en un radio específico de tu restaurante</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Audiencia Cualificada</h4>
                    <p className="text-muted-foreground text-sm">Segmentamos por intereses gastronómicos y comportamientos de compra</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimización Continua</h4>
                    <p className="text-muted-foreground text-sm">Ajustamos campañas en tiempo real para maximizar conversiones</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-4 border border-accent/20">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-accent">ROI Promedio</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-accent">1€ invertido = 5€ en reservas</span> (promedio de nuestros clientes)
                </p>
              </div>
            </CardContent>
          </div>
        </Card>

        {/* Combined Power CTA */}
        <Card className="bg-gradient-hero text-white border-0 shadow-elegant animate-fade-in">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              El Poder de Ambas Soluciones Trabajando Juntas
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Mientras tu competencia paga por cada click, tú apareces gratis en búsquedas locales 
              Y cuando necesitas un boost extra, activamos anuncios precisos que convierten.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-400 mb-2">Orgánico</div>
                <div className="text-white/80">Visibilidad 24/7 sin pagar por clicks</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">Pagado</div>
                <div className="text-white/80">Boost inmediato cuando lo necesites</div>
              </div>
            </div>

            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl group break-words"
            >
              <span className="text-sm sm:text-base">QUIERO ESTA COMBINACIÓN</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
