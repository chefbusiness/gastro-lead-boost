import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, TrendingUp, Euro } from "lucide-react";
import { getCaseStudyImageUrl, ASSETS } from "@/lib/storage";
import { CaseStudy } from "@/lib/types";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-card hover:shadow-elegant transition-all duration-300 hover:scale-105">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={getCaseStudyImageUrl(ASSETS.caseStudies[caseStudy.imageKey])}
          alt={caseStudy.restaurant}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-success text-white font-bold">
            <Star className="w-4 h-4 mr-1 fill-current" />
            {caseStudy.rating}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-1">
            {caseStudy.restaurant}
          </h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {caseStudy.location}
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <Badge variant="outline" className="text-sm">
            {caseStudy.type}
          </Badge>
        </div>
        
        <div className="space-y-4">
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Inversión</span>
              <span className="font-bold text-foreground flex items-center">
                <Euro className="w-4 h-4 mr-1" />
                {caseStudy.investment}
              </span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Ingresos generados</span>
              <span className="font-bold text-success flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                €{caseStudy.revenue.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">ROI</span>
              <span className="font-bold text-accent">
                +{caseStudy.roi}%
              </span>
            </div>
          </div>
          
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Periodo</span>
              <span className="font-semibold">{caseStudy.period}</span>
            </div>
          </div>
          
          <div className="bg-accent/5 rounded-lg p-3 border border-accent/10">
            <p className="text-sm font-semibold text-center text-accent">
              {caseStudy.highlight}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
