import { CheckCircle } from "lucide-react";

type FeatureItemProps = {
  text: string;
  className?: string;
};

export function FeatureItem({ text, className = "" }: FeatureItemProps) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
      <span className="text-sm">{text}</span>
    </div>
  );
}
