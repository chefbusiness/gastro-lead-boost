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
      "fixed bottom-4 right-4 z-50 transition-all duration-500 ease-bounce",
      "sm:bottom-6 sm:right-6",
      isExpanded ? "scale-110" : "scale-100"
    )}>
      <div className="flex flex-col gap-3">
        {isExpanded && (
          <div className="bg-white rounded-lg shadow-elegant p-3 sm:p-4 max-w-[280px] sm:max-w-xs animate-fade-in border border-primary/20">
            <div className="flex items-start justify-between mb-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
            <p className="text-xs sm:text-sm font-medium mb-1">¿Tu restaurante está vacío?</p>
            <p className="text-xs text-muted-foreground mb-3">
              Transformamos locales sin vida en espacios llenos de clientes.
            </p>
            <Button size="sm" className="w-full bg-gradient-primary hover:bg-primary-dark text-xs sm:text-sm">
              Análisis Gratuito
            </Button>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button
            size="icon"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-success hover:bg-success/90 shadow-accent animate-pulse-glow"
            onClick={() => window.open('https://wa.me/message', '_blank')}
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          <Button
            size="icon"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-primary hover:bg-primary-dark shadow-primary"
            onClick={() => window.open('tel:0034744717942', '_blank')}
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}