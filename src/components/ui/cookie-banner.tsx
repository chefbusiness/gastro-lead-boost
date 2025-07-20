
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cookie, Settings, Check, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const savePreferences = (newPreferences: typeof preferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Here you would integrate with your analytics/marketing tools
    console.log('Cookie preferences saved:', newPreferences);
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    savePreferences(necessaryOnly);
  };

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 w-full max-w-xs sm:max-w-lg md:max-w-xl">
      <Card className="bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg">
        <div className="p-3 sm:p-4">
          <div className="flex items-start gap-2 sm:gap-3">
            <Cookie className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
            
            <div className="flex-1 min-w-0">
              <h3 className="text-xs sm:text-sm font-semibold mb-1">
                🍪 Configuración de Cookies
              </h3>
              <p className="text-xs text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia. Las necesarias son esenciales, 
                otras nos ayudan a analizar el tráfico.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-2">
                <Button 
                  onClick={acceptAll}
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white text-xs px-3 py-1.5 h-auto"
                >
                  <Check className="w-3 h-3 mr-1" />
                  Aceptar Todas
                </Button>
                
                <Button 
                  onClick={acceptNecessary}
                  variant="outline"
                  size="sm"
                  className="text-xs px-3 py-1.5 h-auto"
                >
                  Solo Necesarias
                </Button>

                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-xs px-2 py-1.5 h-auto text-gray-600 hover:text-gray-900"
                    >
                      <Settings className="w-3 h-3 mr-1" />
                      Personalizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle className="text-lg">Preferencias de Cookies</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      {/* Necessary Cookies */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="font-medium text-sm">Cookies Necesarias</h4>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Esenciales para el funcionamiento básico del sitio web.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <input 
                            type="checkbox" 
                            checked={true} 
                            disabled 
                            className="w-4 h-4"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Analytics Cookies */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="font-medium text-sm">Cookies de Análisis</h4>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Nos ayudan a entender cómo interactúas con el sitio web.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <input 
                            type="checkbox" 
                            checked={preferences.analytics}
                            onChange={() => handlePreferenceChange('analytics')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Marketing Cookies */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="font-medium text-sm">Cookies de Marketing</h4>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Utilizadas para mostrar anuncios relevantes y medir campañas.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <input 
                            type="checkbox" 
                            checked={preferences.marketing}
                            onChange={() => handlePreferenceChange('marketing')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* Functional Cookies */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="font-medium text-sm">Cookies Funcionales</h4>
                          <p className="text-xs text-gray-600 mt-0.5">
                            Permiten funcionalidades mejoradas y personalización.
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <input 
                            type="checkbox" 
                            checked={preferences.functional}
                            onChange={() => handlePreferenceChange('functional')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>

                      <div className="flex gap-2 pt-3">
                        <Button 
                          onClick={() => savePreferences(preferences)}
                          size="sm"
                          className="flex-1 text-sm"
                        >
                          Guardar Preferencias
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setShowPreferences(false)}
                          className="text-sm"
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <p className="text-xs text-gray-500 mt-2 leading-tight">
                Consulta nuestra{" "}
                <a href="/cookies" className="text-primary hover:underline">
                  Política de Cookies
                </a>{" "}
                y{" "}
                <a href="/privacidad" className="text-primary hover:underline">
                  Política de Privacidad
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
