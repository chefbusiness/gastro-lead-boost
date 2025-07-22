
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Clock, 
  TrendingUp, 
  MapPin, 
  Star, 
  Smartphone, 
  Users, 
  CheckCircle 
} from "lucide-react";

const faqData = [
  {
    id: "seo-local",
    question: "¿Qué es SEO local y cómo ayuda a mi restaurante?",
    answer: "El SEO local es una estrategia que hace que tu restaurante aparezca cuando las personas buscan 'restaurante cerca de mí' o 'mejor restaurante en [tu ciudad]' en Google. Incluye optimizar tu perfil de Google Business, conseguir reseñas positivas, aparecer en Google Maps y posicionarte por palabras clave locales. Esto se traduce en más visibilidad, más clientes que te encuentren fácilmente y un aumento directo en las reservas.",
    icon: MapPin
  },
  {
    id: "tiempo-resultados",
    question: "¿Cuánto tiempo tardan en verse los resultados?",
    answer: "Con nuestras campañas SEM (publicidad pagada), los resultados son inmediatos - puedes empezar a recibir clientes en las primeras 24-48 horas. Para SEO orgánico, los primeros resultados se ven entre 4-8 semanas, con resultados sólidos en 2-3 meses. Por eso recomendamos la estrategia combinada: resultados inmediatos con SEM mientras construyes tu posicionamiento orgánico a largo plazo.",
    icon: Clock
  },
  {
    id: "diferencia-seo-sem",
    question: "¿Qué diferencia hay entre SEO orgánico y publicidad pagada (SEM)?",
    answer: "SEO orgánico es aparecer de forma natural en Google sin pagar por cada clic - es gratis una vez posicionado, pero toma tiempo. SEM es publicidad pagada donde pagas por cada persona que hace clic en tu anuncio, pero apareces inmediatamente. El SEO es una inversión a largo plazo más rentable, mientras que SEM da resultados inmediatos pero requiere presupuesto continuo. La combinación de ambos es la estrategia más efectiva.",
    icon: TrendingUp
  },
  {
    id: "necesito-web",
    question: "¿Necesito una página web para empezar?",
    answer: "No necesariamente. Podemos empezar optimizando tu perfil de Google Business Profile, que es gratuito y muy efectivo. Sin embargo, tener una página web profesional aumenta significativamente tu credibilidad y conversiones. Si no tienes web, podemos crear una página optimizada para móviles que incluya menú, horarios, ubicación y sistema de reservas. Muchos clientes deciden después de ver tu presencia online.",
    icon: Smartphone
  },
  {
    id: "google-business",
    question: "¿Cómo funciona Google Business Profile?",
    answer: "Google Business Profile es tu 'tarjeta de presentación' gratuita en Google. Aparece cuando alguien busca tu restaurante o restaurantes en tu zona. Incluye fotos, horarios, ubicación, reseñas, menú y permite a los clientes llamarte o hacer reservas directamente. Lo optimizamos completamente: fotos profesionales, descripción atractiva, categorías correctas, posts regulares y gestión de reseñas para maximizar tu visibilidad local.",
    icon: Star
  },
  {
    id: "ya-tengo-algo",
    question: "¿Qué pasa si ya tengo algo configurado?",
    answer: "¡Perfecto! Realizamos una auditoría completa de tu presencia actual (Google Business, redes sociales, web si tienes) y identificamos qué está funcionando y qué se puede mejorar. Muchas veces encontramos configuraciones incorrectas o oportunidades perdidas que, una vez corregidas, generan resultados inmediatos. Aprovechamos lo bueno que ya tienes y lo potenciamos al máximo.",
    icon: CheckCircle
  },
  {
    id: "mantenimiento",
    question: "¿Incluye el mantenimiento continuo?",
    answer: "Sí, el marketing digital para restaurantes requiere mantenimiento continuo. Incluimos: actualizaciones regulares de contenido, gestión de reseñas, optimización continua de campañas, reportes mensuales de resultados, ajustes según temporadas/eventos locales, y soporte técnico. No es un 'trabajo una vez y olvídate' - es una estrategia viva que se adapta y mejora constantemente.",
    icon: Users
  },
  {
    id: "tipos-restaurante",
    question: "¿Funciona para todos los tipos de restaurantes?",
    answer: "¡Absolutamente! Hemos trabajado con restaurantes de todo tipo: comida rápida, fine dining, pizzerías, bares de tapas, comida étnica, food trucks, cafeterías, pastelerías... Cada tipo de restaurante tiene su estrategia específica. Por ejemplo, para comida rápida enfocamos en pedidos a domicilio, para fine dining en reservas y eventos especiales. Adaptamos la estrategia a tu público objetivo y tipo de negocio.",
    icon: HelpCircle
  },
  {
    id: "cobertura-geografica",
    question: "¿En qué países y ciudades ofrecen sus servicios?",
    answer: "Trabajamos desde Madrid pero atendemos restaurantes en toda España (Madrid, Barcelona, Sevilla, Granada, San Sebastián). Tenemos clientes en Portugal (Lisboa, Oporto, Algarve), Francia (Burdeos), Italia (Milán, Venecia), toda América Latina (Ciudad de México, Bogotá, Buenos Aires, Santiago de Chile) y el área hispana de Estados Unidos (Miami, Houston, Texas, San Francisco, Los Ángeles, Nueva York). Ofrecemos nuestros servicios en español, inglés, francés, alemán, italiano y portugués.",
    icon: MapPin
  }
];

export function FaqSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            <HelpCircle className="w-4 h-4 mr-2" />
            PREGUNTAS FRECUENTES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">
              Resolvemos tus
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dudas Más Comunes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre marketing digital para restaurantes. 
            Si tienes más preguntas, ¡llámanos!
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className="bg-white rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow px-6"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-2 pl-14 pr-8">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Footer */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Nuestro equipo está aquí para resolver todas tus dudas sobre marketing digital para restaurantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <span>📞</span>
                <span>0034 744 717 942</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-muted-foreground/20"></div>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span>✉️</span>
                <span>local@gastroseo.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
