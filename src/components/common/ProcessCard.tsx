import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { ProcessStep } from "@/lib/types";
import * as LucideIcons from "lucide-react";

type ProcessCardProps = {
  step: ProcessStep;
};

const colorClasses = {
  primary: {
    badge: 'bg-primary/10 text-primary border-primary/20',
    icon: 'text-primary bg-primary/10'
  },
  accent: {
    badge: 'bg-accent/10 text-accent border-accent/20',
    icon: 'text-accent bg-accent/10'
  },
  success: {
    badge: 'bg-success/10 text-success border-success/20',
    icon: 'text-success bg-success/10'
  }
};

export function ProcessCard({ step }: ProcessCardProps) {
  const Icon = (LucideIcons as any)[step.iconName] as React.ElementType;
  const colors = colorClasses[step.color];

  return (
    <Card className="h-full border-0 bg-card hover:shadow-elegant transition-all duration-300">
      <CardContent className="p-8">
        <div className="flex items-start gap-6 mb-6">
          <div className={`w-16 h-16 rounded-2xl ${colors.icon} flex items-center justify-center flex-shrink-0`}>
            {Icon && <Icon className="w-8 h-8" />}
          </div>
          <div className="flex-1">
            <Badge className={`mb-3 ${colors.badge}`}>
              Paso {step.step}
            </Badge>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-lg text-accent font-semibold mb-4">{step.subtitle}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {step.description}
        </p>
        
        <div className="space-y-3">
          {step.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
