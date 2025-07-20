import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Euro, Calendar, Star, ArrowRight, MapPin } from "lucide-react";
import { getCaseStudyImageUrl, ASSETS } from "@/lib/storage";
const caseStudies = [{
  id: 1,
  restaurant: "Restaurante Mediterráneo",
  location: "Madrid",
  type: "Mediterránea",
  investment: 380,
  revenue: 8420,
  roi: 2116,
  period: "60 días",
  rating: 4.8,
  highlight: "De 2 a 15 reservas diarias",
  image: getCaseStudyImageUrl(ASSETS.caseStudies.mediterraneanRestaurant)
}, {
  id: 2,
  restaurant: "Tapas & Vinos",
  location: "Valencia",
  type: "Tapas",
  investment: 450,
  revenue: 12650,
  roi: 2711,
  period: "75 días",
  rating: 4.9,
  highlight: "3x más clientes en fin de semana",
  image: getCaseStudyImageUrl(ASSETS.caseStudies.tapasAndWine)
}, {
  id: 3,
  restaurant: "Bistró Gourmet",
  location: "Sevilla",
  type: "Internacional",
  investment: 520,
  revenue: 9840,
  roi: 1792,
  period: "45 días",
  rating: 4.7,
  highlight: "Lista de espera en horario pico",
  image: getCaseStudyImageUrl(ASSETS.caseStudies.gourmetBistro)
}, {
  id: 4,
  restaurant: "Casa de Mariscos",
  location: "Vigo",
  type: "Mariscos",
  investment: 600,
  revenue: 15200,
  roi: 2433,
  period: "90 días",
  rating: 4.8,
  highlight: "Dobló su facturación mensual",
  image: getCaseStudyImageUrl(ASSETS.caseStudies.seafoodHouse)
}];
export function CaseStudiesSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="case-studies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-success/10 text-success border-success/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            CASOS DE ÉXITO REALES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
              Aquí tienes la prueba
            </span>
            <br />
            <span className="text-foreground">
              que lo demuestran
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Estos son solo algunos de los 87 restaurantes que han transformado su negocio con nosotros en este 2025</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => <Card key={study.id} className="shadow-elegant border-0 overflow-hidden hover:shadow-primary transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="relative h-48">
                <img src={study.image} alt={study.restaurant} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-foreground">
                    <MapPin className="w-3 h-3 mr-1" />
                    {study.location}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge className="bg-success text-white">
                    ROI: +{study.roi}%
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2">{study.restaurant}</h3>
                  <p className="text-muted-foreground mb-2">{study.type}</p>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < Math.floor(study.rating) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} />)}
                    <span className="text-sm text-muted-foreground ml-2">{study.rating}/5</span>
                  </div>

                  <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-lg p-3 mb-4 border border-primary/20">
                    <div className="text-sm font-semibold text-primary mb-1">{study.highlight}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{study.investment}€</div>
                    <div className="text-xs text-muted-foreground">Inversión</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">{study.revenue.toLocaleString()}€</div>
                    <div className="text-xs text-muted-foreground">Generado</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>En {study.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Euro className="w-4 h-4" />
                    <span>1€ → {(study.revenue / study.investment).toFixed(1)}€</span>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">87</div>
            <div className="text-sm text-muted-foreground">Restaurantes transformados</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-success/10 to-success/5 rounded-xl border border-success/20">
            <div className="text-3xl font-bold text-success mb-2">€284K</div>
            <div className="text-sm text-muted-foreground">Ingresos generados</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl border border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">+247%</div>
            <div className="text-sm text-muted-foreground">ROI promedio</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-warning/10 to-warning/5 rounded-xl border border-warning/20">
            <div className="text-3xl font-bold text-warning mb-2">4.8/5</div>
            <div className="text-sm text-muted-foreground">Satisfacción promedio</div>
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-primary text-white border-0 shadow-elegant">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              No esperes más. Cada día que pasa es dinero que dejas sobre la mesa.
            </p>
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl group break-words">
              <span className="text-sm sm:text-base">SÍ, QUIERO SER EL SIGUIENTE</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>;
}