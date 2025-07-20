
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
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto bg-white border border-gray-200 shadow-lg">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                🍪 Configuración de Cookies
              </h3>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies para mejorar tu experiencia en GastroMaps.pro. 
                Las cookies necesarias son esenciales para el funcionamiento del sitio, 
                mientras que otras nos ayudan a analizar el tráfico y personalizar el contenido.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  onClick={acceptAll}
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Aceptar Todas
                </Button>
                
                <Button 
                  onClick={acceptNecessary}
                  variant="outline"
                >
                  <X className="w-4 h-4 mr-2" />
                  Solo Necesarias
                </Button>

                <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
                  <DialogTrigger asChild>
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Personalizar
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Preferencias de Cookies</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Necessary Cookies */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium">Cookies Necesarias</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Esenciales para el funcionamiento básico del sitio web.
                          </p>
                        </div>
                        <div className="ml-4">
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
                        <div className="flex-1">
                          <h4 className="font-medium">Cookies de Análisis</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Nos ayudan a entender cómo interactúas con el sitio web.
                          </p>
                        </div>
                        <div className="ml-4">
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
                        <div className="flex-1">
                          <h4 className="font-medium">Cookies de Marketing</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Utilizadas para mostrar anuncios relevantes y medir campañas.
                          </p>
                        </div>
                        <div className="ml-4">
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
                        <div className="flex-1">
                          <h4 className="font-medium">Cookies Funcionales</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Permiten funcionalidades mejoradas y personalización.
                          </p>
                        </div>
                        <div className="ml-4">
                          <input 
                            type="checkbox" 
                            checked={preferences.functional}
                            onChange={() => handlePreferenceChange('functional')}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button 
                          onClick={() => savePreferences(preferences)}
                          className="flex-1"
                        >
                          Guardar Preferencias
                        </Button>
                        <Button 
                          variant="outline" 
                          onClick={() => setShowPreferences(false)}
                        >
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Para más información, consulta nuestra{" "}
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
