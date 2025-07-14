import { useState, useEffect } from "react";
import { Button } from "./button";
import { Phone, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if user has hidden the banner permanently
    const hiddenState = localStorage.getItem('floating-cta-hidden');
    if (hiddenState === 'true') {
      setIsHidden(true);
      return;
    }

    // Delay initial appearance to be less intrusive
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleHide = () => {
    setIsHidden(true);
    localStorage.setItem('floating-cta-hidden', 'true');
  };

  const handleExpand = () => {
    setIsExpanded(true);
    // Auto-collapse after 10 seconds
    setTimeout(() => {
      setIsExpanded(false);
    }, 10000);
  };

  if (!isVisible || isHidden) return null;

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50 transition-all duration-500 ease-bounce",
      "sm:bottom-6 sm:right-6",
      "w-fit"
    )}>
      {/* Collapse button when expanded */}
      {isExpanded && (
        <button
          onClick={handleHide}
          className="absolute -top-2 -right-2 z-10 w-6 h-6 bg-destructive/80 hover:bg-destructive rounded-full flex items-center justify-center text-white text-xs transition-colors"
          title="Ocultar permanentemente"
        >
          <X className="w-3 h-3" />
        </button>
      )}

      <div className="flex flex-col gap-2 sm:gap-3">
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-elegant p-3 sm:p-4 max-w-[250px] sm:max-w-[280px] animate-fade-in border border-primary/20">
            <div className="flex items-start justify-between mb-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success hover:bg-success/90 shadow-accent transition-all hover:scale-105"
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary hover:bg-primary-dark shadow-primary transition-all hover:scale-105"
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