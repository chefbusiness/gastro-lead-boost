import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ArrowRight } from "lucide-react";
import { CaseStudyCard } from "@/components/common/CaseStudyCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { StatCard } from "@/components/common/StatCard";
import { caseStudiesData, caseStudiesSummary } from "@/lib/data/case-studies";
import { useScrollTo } from "@/hooks/useScrollTo";
import { BADGES } from "@/lib/constants";

export const CaseStudiesSection = () => {
  const { scrollToContact } = useScrollTo();

  return (
    <section id="case-studies" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <SectionHeader
          badge={{ icon: Award, text: BADGES.caseStudies }}
          title={["Resultados", "100% Reales", "y Auditados"]}
          subtitle="Estos restaurantes estaban igual que tú: con mesas vacías y perdiendo dinero cada día. Ahora tienen lista de espera."
          titleGradient={true}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard 
            value={`€${caseStudiesSummary.totalInvestment.toLocaleString()}`}
            label="Inversión Total"
            variant="primary"
          />
          <StatCard 
            value={`€${caseStudiesSummary.totalRevenue.toLocaleString()}`}
            label="Ingresos Generados"
            variant="success"
          />
          <StatCard 
            value={`${caseStudiesSummary.averageROI}%`}
            label="ROI Promedio"
            variant="accent"
          />
          <StatCard 
            value={`${caseStudiesSummary.averagePeriod} días`}
            label="Tiempo Promedio"
            variant="warning"
          />
        </div>

        <Card className="bg-gradient-primary text-white border-0 shadow-elegant">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-xl mb-6 text-white/90 max-w-2xl mx-auto">
              No esperes más. Cada día que pasa es dinero que dejas sobre la mesa.
            </p>
            <Button size="lg" onClick={scrollToContact} className="bg-white text-primary hover:bg-white/90 px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl group">
              <span className="hidden sm:inline">SÍ, QUIERO SER EL SIGUIENTE</span>
              <span className="sm:hidden">Quiero ser el siguiente</span>
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
