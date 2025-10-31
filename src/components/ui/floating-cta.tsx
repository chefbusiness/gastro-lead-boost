import { useState, useEffect } from "react";
import { Button } from "./button";
import { Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Delay initial appearance to be less intrusive
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleExpand = () => {
    setIsExpanded(true);
    // Auto-collapse after 10 seconds
    setTimeout(() => {
      setIsExpanded(false);
    }, 10000);
  };

  const handleCollapse = () => {
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-2 right-2 z-50 transition-all duration-500 ease-bounce",
      "sm:bottom-6 sm:right-6",
      "w-fit max-w-[calc(100vw-16px)]"
    )}>
      <div className="flex flex-col gap-2 sm:gap-3">
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-elegant p-3 sm:p-4 max-w-[220px] sm:max-w-[280px] animate-fade-in border border-primary/20">
            <div className="flex items-start justify-between mb-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <button
                onClick={handleCollapse}
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Cerrar banner"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm font-medium mb-1">¿Tu restaurante está vacío?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Transformamos locales sin vida en espacios llenos de clientes.
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-primary hover:bg-primary-dark text-xs sm:text-sm"
              onClick={() => window.location.href = '#contact-form'}
            >
              Análisis Gratuito
            </Button>
          </div>
        )}
        
        <div className="flex gap-2 justify-end">
          <Button
            size="icon"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-success hover:bg-success/90 shadow-accent transition-all sm:hover:scale-105"
            onClick={() => {
              window.open('https://wa.me/34744717942?text=Hola%2C%20me%20interesa%20el%20an%C3%A1lisis%20gratuito%20para%20mi%20restaurante', '_blank');
              handleExpand();
            }}
            onMouseEnter={handleExpand}
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
          
          <Button
            size="icon"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-primary hover:bg-primary-dark shadow-primary transition-all sm:hover:scale-105"
            onClick={() => {
              window.open('tel:+34744717942', '_blank');
              handleExpand();
            }}
            onMouseEnter={handleExpand}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}