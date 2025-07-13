import { useState, useEffect } from "react";
import { Button } from "./button";
import { Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const shouldExpand = scrolled > 800;
      setIsExpanded(shouldExpand);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-6 right-6 z-50 transition-all duration-500 ease-bounce",
      isExpanded ? "scale-110" : "scale-100"
    )}>
      <div className="flex flex-col gap-3">
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-elegant p-4 max-w-xs animate-fade-in border border-primary/20">
            <div className="flex items-start justify-between mb-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm font-medium mb-1">¿Necesitas ayuda?</p>
            <p className="text-xs text-muted-foreground mb-3">
              ¡Hablemos de cómo podemos llenar tu restaurante de clientes!
            </p>
            <Button size="sm" className="w-full bg-gradient-primary hover:bg-primary-dark">
              Empezar Ahora
            </Button>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button
            size="icon"
            className="w-14 h-14 rounded-full bg-success hover:bg-success/90 shadow-accent animate-pulse-glow"
            onClick={() => window.open('https://wa.me/message', '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
          
          <Button
            size="icon"
            className="w-14 h-14 rounded-full bg-gradient-primary hover:bg-primary-dark shadow-primary"
            onClick={() => window.open('tel:+1234567890', '_blank')}
          >
            <Phone className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}