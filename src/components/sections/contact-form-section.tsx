import { useState } from "react"; // Fixed handleSubmit issue
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Form validation schema
const formSchema = z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es demasiado largo"),
  email: z.string()
    .email("Introduce un email válido")
    .min(1, "El email es obligatorio"),
  phone: z.string()
    .min(9, "Introduce un teléfono válido")
    .regex(/^(\+34|0034|34)?[6789]\d{8}$/, "Formato de teléfono español inválido"),
  restaurant: z.string()
    .min(2, "El nombre del restaurante debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  service: z.enum(["seo-organico", "sem-pagado", "ambas-soluciones"]).refine(
    (value) => value !== undefined,
    { message: "Por favor selecciona un servicio" }
  ),
  street_address: z.string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección es demasiado larga"),
  location: z.string()
    .min(2, "La ciudad debe tener al menos 2 caracteres")
    .max(50, "El nombre de la ciudad es demasiado largo"),
  postal_code: z.string()
    .min(4, "El código postal debe tener al menos 4 caracteres")
    .max(10, "El código postal es demasiado largo"),
  message: z.string()
    .max(500, "El mensaje es demasiado largo")
    .optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      restaurant: "",
      service: "ambas-soluciones" as const,
      street_address: "",
      location: "",
      postal_code: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Insert into Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          restaurant: data.restaurant,
          service: data.service,
          street_address: data.street_address,
          location: data.location,
          postal_code: data.postal_code,
          message: data.message || null,
        }]);

      if (error) {
        throw error;
      }

      // Send notification emails
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-notification', {
          body: {
            name: data.name,
            email: data.email,
            phone: data.phone,
            restaurant: data.restaurant,
            service: data.service,
            street_address: data.street_address,
            location: data.location,
            postal_code: data.postal_code,
            message: data.message,
          },
        });

        if (emailError) {
          console.error('Error sending notification emails:', emailError);
          // Don't fail the form submission if email fails
        }
      } catch (emailError) {
        console.error('Error calling email function:', emailError);
        // Don't fail the form submission if email fails
      }

      toast({
        title: "¡Solicitud enviada correctamente!",
        description: "Te contactaremos en menos de 2 horas para diseñar tu estrategia personalizada.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error al enviar el formulario",
        description: "Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre completo"
                              className="border-muted-foreground/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tu@email.com"
                              className="border-muted-foreground/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+34 123 456 789"
                              className="border-muted-foreground/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ciudad *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Madrid, Barcelona, Valencia..."
                              className="border-muted-foreground/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="restaurant"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del Restaurante *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nombre de tu restaurante"
                            className="border-muted-foreground/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servicio de Interés *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-muted-foreground/20 focus:border-primary">
                              <SelectValue placeholder="Selecciona el servicio que más te interesa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="seo-organico">
                              <div className="flex flex-col items-start">
                                <div className="font-medium">SEO Local Orgánico</div>
                                <div className="text-sm text-muted-foreground">Visibilidad sostenible a largo plazo</div>
                              </div>
                            </SelectItem>
                            <SelectItem value="sem-pagado">
                              <div className="flex flex-col items-start">
                                <div className="font-medium">SEM Local Pagado</div>
                                <div className="text-sm text-muted-foreground">Resultados inmediatos con anuncios</div>
                              </div>
                            </SelectItem>
                            <SelectItem value="ambas-soluciones">
                              <div className="flex flex-col items-start">
                                <div className="font-medium">Ambas Soluciones Juntas</div>
                                <div className="text-sm text-muted-foreground">Estrategia completa y optimizada</div>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="street_address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dirección del Restaurante *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Calle, número, piso..."
                            className="border-muted-foreground/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="postal_code"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Código Postal *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="28001, 08001, 46001..."
                              className="border-muted-foreground/20 focus:border-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex items-end">
                      <div className="text-sm text-muted-foreground p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        Esta información nos ayuda a hacer tu análisis más preciso
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cuéntanos tu situación (opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="¿Cuál es tu principal desafío? ¿Pocas reservas? ¿Competencia? ¿Mala reputación online?"
                            rows={4}
                            className="border-muted-foreground/20 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

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
              </Form>
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
                      <div className="text-accent font-bold">0034 744 717 942</div>
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