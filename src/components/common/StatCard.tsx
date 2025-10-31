import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  variant?: 'primary' | 'success' | 'accent' | 'warning';
  className?: string;
};

const variantStyles = {
  primary: 'text-primary',
  success: 'text-success',
  accent: 'text-accent',
  warning: 'text-warning'
};

export function StatCard({ 
  value, 
  label, 
  variant = 'primary',
  className = ""
}: StatCardProps) {
  return (
    <div className={cn(
      "text-center bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/30",
      className
    )}>
      <div className={cn(
        "text-4xl md:text-5xl font-bold mb-2",
        variantStyles[variant]
      )}>
        {value}
      </div>
      <div className="text-muted-foreground">
        {label}
      </div>
    </div>
  );
}
