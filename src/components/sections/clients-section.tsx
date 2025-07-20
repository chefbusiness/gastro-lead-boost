
import { Badge } from "@/components/ui/badge";
import { getClientLogoUrl } from "@/lib/storage";

const clientLogos = [
  {
    name: "Cliente satisfecho 1",
    url: getClientLogoUrl('logos clientes gastromapspro-1.png'),
    alt: "Cliente satisfecho 1"
  },
  {
    name: "Cliente satisfecho 2",
    url: getClientLogoUrl('logos clientes gastromapspro-2.png'),
    alt: "Cliente satisfecho 2"
  },
  {
    name: "Cliente satisfecho 3",
    url: getClientLogoUrl('logos clientes gastromapspro-3.png'),
    alt: "Cliente satisfecho 3"
  },
  {
    name: "Cliente satisfecho 4",
    url: getClientLogoUrl('logos clientes gastromapspro-4.png'),
    alt: "Cliente satisfecho 4"
  },
  {
    name: "Cliente satisfecho 5",
    url: getClientLogoUrl('logos clientes gastromapspro-5.png'),
    alt: "Cliente satisfecho 5"
  },
  {
    name: "Cliente satisfecho 6",
    url: getClientLogoUrl('logos clientes gastromapspro-6.png'),
    alt: "Cliente satisfecho 6"
  },
  {
    name: "Cliente satisfecho 7",
    url: getClientLogoUrl('logos clientes gastromapspro-7.png'),
    alt: "Cliente satisfecho 7"
  },
  {
    name: "Cliente satisfecho 8",
    url: getClientLogoUrl('logos clientes gastromapspro-8.png'),
    alt: "Cliente satisfecho 8"
  },
  {
    name: "Cliente satisfecho 9",
    url: getClientLogoUrl('logos clientes gastromapspro-9.png'),
    alt: "Cliente satisfecho 9"
  },
  {
    name: "Cliente satisfecho 10",
    url: getClientLogoUrl('logos clientes gastromapspro-10.png'),
    alt: "Cliente satisfecho 10"
  },
  {
    name: "Cliente satisfecho 11",
    url: getClientLogoUrl('logos clientes gastromapspro-11.png'),
    alt: "Cliente satisfecho 11"
  },
  {
    name: "Cliente satisfecho 12",
    url: getClientLogoUrl('logos clientes gastromapspro-12.png'),
    alt: "Cliente satisfecho 12"
  },
  {
    name: "Cliente satisfecho 13",
    url: getClientLogoUrl('logos clientes gastromapspro-13.png'),
    alt: "Cliente satisfecho 13"
  },
  {
    name: "Cliente satisfecho 14",
    url: getClientLogoUrl('logos clientes gastromapspro-14.png'),
    alt: "Cliente satisfecho 14"
  }
];

export const ClientsSection = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    console.error('Error loading image:', target.src);
  };

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

        {/* Logos Grid - Better responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10 justify-items-center items-center max-w-6xl mx-auto">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center w-20 h-16 sm:w-24 sm:h-18 md:w-28 md:h-20 lg:w-32 lg:h-22 xl:w-36 xl:h-24 hover:scale-105 transition-transform duration-300 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={client.url}
                alt={client.alt}
                className="max-w-full max-h-full w-auto h-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                onError={handleImageError}
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
