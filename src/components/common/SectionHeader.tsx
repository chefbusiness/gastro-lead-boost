import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

type SectionHeaderProps = {
  badge: { 
    icon: LucideIcon; 
    text: string 
  };
  title: string[];
  subtitle?: string;
  titleGradient?: boolean;
  className?: string;
};

export function SectionHeader({ 
  badge, 
  title, 
  subtitle, 
  titleGradient = false,
  className = ""
}: SectionHeaderProps) {
  const BadgeIcon = badge.icon;

  return (
    <div className={`text-center mb-16 ${className}`}>
      <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
        <BadgeIcon className="w-4 h-4 mr-2" />
        {badge.text}
      </Badge>
      
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        {title.map((line, index) => (
          <span key={index}>
            {titleGradient && index === 1 ? (
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {line}
              </span>
            ) : (
              <span className="text-foreground">{line}</span>
            )}
            {index < title.length - 1 && <br />}
          </span>
        ))}
      </h2>
      
      {subtitle && (
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
