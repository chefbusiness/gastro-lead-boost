import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Gift
} from "lucide-react";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    restaurant: "",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Solicitud enviada!",
      description: "Te contactaremos en menos de 2 horas para diseñar tu estrategia personalizada.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      restaurant: "",
      location: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Gift className="w-4 h-4 mr-2" />
            CONSULTA GRATUITA
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">
              Consigue tu
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Análisis Personalizado
            </span>
            <br />
            <span className="text-foreground">
              100% Gratis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Te llamamos en menos de 2 horas y diseñamos una estrategia específica para tu restaurante. 
            Sin compromiso, sin letra pequeña.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="shadow-elegant border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Solicita tu Análisis Gratuito
              </CardTitle>
              <div className="flex justify-center">
                <Badge className="bg-success text-white">
                  <Clock className="w-4 h-4 mr-2" />
                  Respuesta en menos de 2 horas
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nombre *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Teléfono *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+34 123 456 789"
                      required
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ciudad *</label>
                    <Input
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Madrid, Barcelona, Valencia..."
                      required
                      className="border-muted-foreground/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Nombre del Restaurante *</label>
                  <Input
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    placeholder="Nombre de tu restaurante"
                    required
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cuéntanos tu situación (opcional)</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿Cuál es tu principal desafío? ¿Pocas reservas? ¿Competencia? ¿Mala reputación online?"
                    rows={4}
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary">Garantía de Privacidad</h4>
                      <p className="text-sm text-muted-foreground">
                        Tus datos están 100% protegidos. No los compartimos con nadie.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-accent hover:bg-accent/90 text-white py-4 text-lg font-bold rounded-xl shadow-accent"
                >
                  {isSubmitting ? "Enviando..." : "QUIERO MI ANÁLISIS GRATIS"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario, aceptas que te contactemos para proporcionarte la consulta solicitada.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-8 animate-fade-in">
            {/* What you get */}
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">¿Qué Incluye tu Análisis Gratuito?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Auditoría Digital Completa</h4>
                      <p className="text-sm text-muted-foreground">
                        Analizamos tu presencia online actual y identificamos oportunidades perdidas
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Análisis de Competencia</h4>
                      <p className="text-sm text-muted-foreground">
                        Estudiamos qué hacen tus competidores y cómo superarlos
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Estrategia Personalizada</h4>
                      <p className="text-sm text-muted-foreground">
                        Plan específico de 90 días diseñado para tu restaurante y ubicación
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Proyección de Resultados</h4>
                      <p className="text-sm text-muted-foreground">
                        Estimación realista de cuántos clientes nuevos puedes conseguir
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-0 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">¿Prefieres Llamarnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-accent" />
                    <div>
                      <div className="font-semibold">Teléfono Directo</div>
                      <div className="text-accent font-bold">+34 912 345 678</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-primary font-bold">hola@gastromaps.pro</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-success" />
                    <div>
                      <div className="font-semibold">Horario de Atención</div>
                      <div className="text-muted-foreground">Lun-Vie: 9:00-19:00</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white rounded-lg border border-accent/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold">Respuesta Garantizada</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Te contactamos en menos de 2 horas laborables, o la consulta es gratis para siempre.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">87</div>
                <div className="text-xs text-muted-foreground">Restaurantes</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Users className="w-8 h-8 text-success mx-auto mb-2" />
                <div className="text-2xl font-bold text-success">247%</div>
                <div className="text-xs text-muted-foreground">ROI Promedio</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border">
                <Star className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-accent">4.9/5</div>
                <div className="text-xs text-muted-foreground">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}