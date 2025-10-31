import { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, TrendingUp, ZoomIn, ArrowRight } from "lucide-react";
import { useScrollTo } from "@/hooks/useScrollTo";
export function HeatmapProofSection() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    scrollToContact
  } = useScrollTo();
  return <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-success rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-success/10 text-success border-success/20">
            <MapPin className="w-4 h-4 mr-2" />
            PRUEBA VISUAL
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Así Se Ve</span>
            <br />
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">El Dominio Local Total en Tu Área de Influencia</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uno de nuestros clientes en Tenerife: 99% de posiciones #1 en Google Maps. 
            <span className="font-semibold text-foreground"> Esto no son promesas, son mapas de calor.</span>
          </p>
        </div>

        {/* Heatmap Image with Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <div className="relative group cursor-pointer animate-fade-in">
              <img src="/case-studies/heatmap-pistacho.jpg" alt="Heatmap de ranking en Google Maps - Pistacho Coffee Brunch" className="w-full rounded-2xl shadow-elegant border-4 border-white transition-transform duration-300 group-hover:scale-[1.02]" />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-4">
                  <ZoomIn className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Click Indicator */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Click para ampliar</span>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
            <div className="w-full h-full flex items-center justify-center p-4">
              <img src="/case-studies/heatmap-pistacho.jpg" alt="Heatmap de ranking en Google Maps - Pistacho Coffee Brunch (ampliado)" className="max-w-full max-h-full object-contain rounded-lg" />
            </div>
          </DialogContent>
        </Dialog>

        {/* Stats Cards Below Image */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in">
          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-success" />
              </div>
              <div className="text-3xl font-bold text-success">1.1</div>
            </div>
            <div className="text-sm text-muted-foreground">
              Keyword Ranking Score
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">99%</div>
            </div>
            <div className="text-sm text-muted-foreground">
              Posiciones #1 en zona
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">175</div>
            </div>
            <div className="text-sm text-muted-foreground">
              Búsquedas dominadas
            </div>
          </div>
        </div>

        {/* Description with CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-8 border border-primary/20 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Qué Significa Este Mapa de Calor?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Cada estrella verde marca una búsqueda donde <span className="font-semibold text-success">Pistacho Coffee Brunch aparece en posición #1</span>. 
              Las estrellas naranjas son posiciones 2-4. Este cliente domina completamente su zona en Google Maps 
              para búsquedas como <span className="font-semibold">"brunch los cristianos"</span>, <span className="font-semibold">"desayuno tenerife"</span>, etc.
            </p>
            
            <Button size="lg" onClick={scrollToContact} className="bg-gradient-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded-xl group">
              Quiero Dominar Mi Zona Así
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
}