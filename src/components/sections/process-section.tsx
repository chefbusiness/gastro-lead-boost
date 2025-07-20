
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Search, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  BarChart3
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Setup Inicial",
    subtitle: "Días 1 al 7",
    description: "Configuramos todo desde cero para que funcione perfecto",
    features: [
      "Auditoría completa de tu presencia online",
      "Optimización ficha Google My Business",
      "Setup inicial de campañas publicitarias",
      "Instalación sistemas de seguimiento"
    ],
    icon: Calendar,
    color: "primary"
  },
  {
    step: "02", 
    title: "Activación",
    subtitle: "Días 8 al 14",
    description: "Ponemos en marcha toda la maquinaria de captación",
    features: [
      "Lanzamiento campañas geotargeting",
      "Inicio gestión activa de reseñas", 
      "Publicación contenido estratégico",
      "Monitorización de primeros resultados"
    ],
    icon: Search,
    color: "accent"
  },
  {
    step: "03",
    title: "Optimización",
    subtitle: "Días 15 al 30", 
    description: "Ajustamos todo basado en datos reales para maximizar ROI",
    features: [
      "Análisis de rendimiento detallado",
      "Optimización de anuncios según conversiones",
      "Ajuste de targeting y audiencias",
      "Mejora continua basada en métricas"
    ],
    icon: TrendingUp,
    color: "success"
  }
];

export function ProcessSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <BarChart3 className="w-4 h-4 mr-2" />
            ¿CÓMO EMPEZAMOS?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">
              En 30 días tienes tu restaurante
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              funcionando como un imán de clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro proceso probado en 87 restaurantes. Sin complicaciones, sin sorpresas.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const colorClasses = {
              primary: "bg-primary text-white",
              accent: "bg-accent text-white", 
              success: "bg-success text-white"
            };

            return (
              <Card 
                key={step.step}
                className="shadow-elegant border-0 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-muted-foreground/20">
                      {step.step}
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorClasses[step.color as keyof typeof colorClasses]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <Badge variant="outline" className="mb-4 text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {step.subtitle}
                    </Badge>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Timeline Visual */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Timeline de Resultados Esperados</h3>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">7</span>
                  </div>
                  <h4 className="font-semibold mb-2">Días 1-7</h4>
                  <p className="text-sm text-muted-foreground">Setup completo y primeras optimizaciones</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">14</span>
                  </div>
                  <h4 className="font-semibold mb-2">Días 8-14</h4>
                  <p className="text-sm text-muted-foreground">Primeros clientes y mejora en búsquedas</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">30</span>
                  </div>
                  <h4 className="font-semibold mb-2">Días 15-30</h4>
                  <p className="text-sm text-muted-foreground">Aumento notable en reservas</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">90</span>
                  </div>
                  <h4 className="font-semibold mb-2">Día 90</h4>
                  <p className="text-sm text-muted-foreground">Resultados garantizados o devolución</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guarantee Section */}
        <Card className="bg-gradient-accent text-white border-0 shadow-elegant mb-12">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Garantía de Resultados 90 Días
            </h3>
            <p className="text-xl mb-6 text-white/90 max-w-3xl mx-auto">
              Si en 90 días no has aumentado tus reservas un mínimo del 40%, 
              te devolvemos cada euro que hayas invertido. Sin preguntas, sin excusas.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-3xl font-bold mb-2">40%+</div>
              <div className="text-white/80">Aumento mínimo garantizado en reservas</div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Final */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">¿Listo para empezar?</h3>
          <p className="text-xl text-muted-foreground mb-8">
            El proceso comienza en cuanto firmamos el contrato. Sin demoras, sin excusas.
          </p>
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-gradient-primary hover:bg-primary-dark px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-primary group break-words"
          >
            <span className="text-sm sm:text-base">EMPEZAR TRANSFORMACIÓN</span>
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
