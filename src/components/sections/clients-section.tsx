import { Badge } from "@/components/ui/badge";
import { getClientLogoUrl } from "@/lib/storage";

const clientLogos = [
  {
    name: "Restaurant Logo 1",
    url: getClientLogoUrl('logo-1.png'),
    alt: "Cliente satisfecho 1"
  },
  {
    name: "Fusion Kitchen",
    url: getClientLogoUrl('fusion-kitchen.png'),
    alt: "Fusion Kitchen"
  },
  {
    name: "Green Leaf",
    url: getClientLogoUrl('green-leaf.png'),
    alt: "Green Leaf"
  },
  {
    name: "Restaurant Logo 4",
    url: getClientLogoUrl('logo-4.png'),
    alt: "Cliente satisfecho 4"
  },
  {
    name: "Forno Antico",
    url: getClientLogoUrl('forno-antico.png'),
    alt: "Forno Antico"
  },
  {
    name: "Spice Temple",
    url: getClientLogoUrl('spice-temple.png'),
    alt: "Spice Temple Thai Restaurant"
  },
  {
    name: "Restaurant Logo 7",
    url: getClientLogoUrl('logo-7.png'),
    alt: "Cliente satisfecho 7"
  },
  {
    name: "Ocean Blue",
    url: getClientLogoUrl('ocean-blue.png'),
    alt: "Ocean Blue Seafood Shack"
  },
  {
    name: "Olive Garden",
    url: getClientLogoUrl('olive-garden.png'),
    alt: "Olive Garden"
  },
  {
    name: "Burger Bros",
    url: getClientLogoUrl('burger-bros.png'),
    alt: "Burger Bros"
  },
  {
    name: "Restaurant Logo 11",
    url: getClientLogoUrl('logo-11.png'),
    alt: "Cliente satisfecho 11"
  },
  {
    name: "Restaurant Logo 12",
    url: getClientLogoUrl('logo-12.png'),
    alt: "Cliente satisfecho 12"
  },
  {
    name: "Restaurant Logo 13",
    url: getClientLogoUrl('logo-13.png'),
    alt: "Cliente satisfecho 13"
  },
  {
    name: "Restaurant Logo 14",
    url: getClientLogoUrl('logo-14.png'),
    alt: "Cliente satisfecho 14"
  }
];

export const ClientsSection = () => {
  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-white/20 text-white bg-white/5">
            Nuestros Clientes
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Restaurantes que Confían en Nosotros
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Más de 500 restaurantes han multiplicado sus ventas con nuestras estrategias
          </p>
        </div>

        {/* Logos Grid - Centered layout */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-24 h-16 md:w-32 md:h-20 lg:w-36 lg:h-24 hover:scale-105 transition-transform duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={client.url}
                alt={client.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-300">Restaurantes Satisfechos</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2.5M+</div>
            <div className="text-gray-300">Clientes Nuevos Generados</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">247%</div>
            <div className="text-gray-300">ROI Promedio</div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-200 italic max-w-4xl mx-auto">
            "GastroMaps nos ayudó a aumentar nuestras reservas en un 180% en solo 3 meses. 
            Su estrategia de marketing digital es realmente efectiva."
          </blockquote>
          <cite className="block mt-4 text-gray-400">
            — María González, Propietaria de Sabores Mediterráneos
          </cite>
        </div>
      </div>
    </section>
  );
};