import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, MapPin } from "lucide-react";
import { getAssetUrl, ASSETS } from "@/lib/storage";
export function TestimonialSection() {
  return <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            LA IMAGEN DEL ÉXITO
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Resultados Reales, No Promesas Vacías
          </h2>
        </div>

        {/* Main Testimonial */}
        <Card className="max-w-5xl mx-auto shadow-elegant border-0 bg-white/50 backdrop-blur-sm animate-fade-in">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative">
                <img src="/chef-mexican-tacos.jpg?v=2" alt="Chef de cocina mexicana con tacos creativos" className="w-full h-full object-cover rounded-l-lg" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-success text-white">
                    <MapPin className="w-3 h-3 mr-1" />
                    Barcelona
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />)}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Valoración Google</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Mexicali - Neo Gastro Bar</h3>

                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-success text-white px-4 py-2 rounded-lg font-bold text-lg">
                      ROI: +2,440%
                    </div>
                    <div className="text-2xl font-bold text-accent">
                      €18,920
                    </div>
                  </div>
                </div>

                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                  "En solo 4 meses, GastroMaps transformó nuestro neo gastro bar. Invertimos{" "}
                  <span className="font-bold text-primary">€745</span> y generamos{" "}
                  <span className="font-bold text-success">€18,920</span> en reservas verificadas. 
                  La cocina mexicana creativa ahora tiene el reconocimiento que merece en Barcelona.{" "}
                  <span className="font-bold text-accent">GastroMaps hizo que fuéramos visibles.</span>"
                </blockquote>

                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-lg">Carlos Mendoza</div>
                    <div className="text-muted-foreground">Chef-Propietario, Mexicali</div>
                  </div>
                </div>

                {/* Results Breakdown */}
                <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">745€</div>
                      <div className="text-sm text-muted-foreground">Inversión inicial</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">18,920€</div>
                      <div className="text-sm text-muted-foreground">Ingresos generados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center animate-fade-in-up delay-200">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-2">247%</div>
            <div className="text-muted-foreground">Aumento promedio en reservas</div>
          </div>

          <div className="text-center animate-fade-in-up delay-300">
            <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Valoración promedio</div>
          </div>

          <div className="text-center animate-fade-in-up delay-400">
            <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-success mb-2">87</div>
            <div className="text-muted-foreground">Restaurantes transformados</div>
          </div>
        </div>
      </div>
    </section>;
}