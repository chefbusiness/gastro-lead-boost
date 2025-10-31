import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, Phone } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { faqData } from "@/lib/data/faq";
import { useScrollTo } from "@/hooks/useScrollTo";
import { BADGES, CONTACT_INFO } from "@/lib/constants";

export const FaqSection = () => {
  const { scrollToContact } = useScrollTo();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        <SectionHeader
          badge={{ icon: HelpCircle, text: BADGES.faq }}
          title={["Todas tus Dudas", "Resueltas"]}
          subtitle="Las respuestas directas que necesitas para tomar la mejor decisión"
          titleGradient={true}
        />

        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqData.map((faq) => {
            const Icon = (LucideIcons as any)[faq.iconName] as React.ElementType;
            return (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-card border-0 rounded-xl overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-accent/5 transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-accent" />}
                    </div>
                    <span className="font-semibold text-lg">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed pl-14">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        <Card className="bg-card border-primary/10 shadow-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Aún tienes dudas?</h3>
            <p className="text-muted-foreground mb-6">
              Llámanos ahora y resolvemos todas tus preguntas
            </p>
            <Button onClick={scrollToContact} size="lg" className="bg-gradient-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg">
              <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Llamar ahora: {CONTACT_INFO.phone}</span>
              <span className="sm:hidden">Llamar ahora</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
