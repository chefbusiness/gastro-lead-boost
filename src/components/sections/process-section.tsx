import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Shield, ArrowRight } from "lucide-react";
import { ProcessCard } from "@/components/common/ProcessCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { processStepsData } from "@/lib/data/process-steps";
import { useScrollTo } from "@/hooks/useScrollTo";
import { BADGES, CTA_TEXTS } from "@/lib/constants";

export const ProcessSection = () => {
  const { scrollToContact } = useScrollTo();

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge={{ icon: Target, text: BADGES.process }}
          title={["Transformación", "en 3 Pasos"]}
          subtitle="Método probado en más de 94 restaurantes. Simple, transparente y efectivo."
          titleGradient={true}
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {processStepsData.map((step) => (
            <ProcessCard key={step.step} step={step} />
          ))}
        </div>

        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">Timeline de Resultados</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">30</span>
                  </div>
                  <h4 className="font-semibold mb-2">Primeros 30 días</h4>
                  <p className="text-sm text-muted-foreground">Setup y primeros resultados</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-success">60</span>
                  </div>
                  <h4 className="font-semibold mb-2">60 días</h4>
                  <p className="text-sm text-muted-foreground">Crecimiento sostenido</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">90</span>
                  </div>
                  <h4 className="font-semibold mb-2">90 días</h4>
                  <p className="text-sm text-muted-foreground">Resultados garantizados</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-accent text-white border-0 shadow-elegant mb-12">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Garantía de Resultados 90 Días</h3>
            <p className="text-xl mb-6 text-white/90 max-w-3xl mx-auto">
              Si en 90 días no aumentamos tus reservas, te devolvemos el 100% de tu inversión.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:bg-primary-dark px-12 py-4 text-lg font-bold rounded-xl shadow-primary group">
            {CTA_TEXTS.primary}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
