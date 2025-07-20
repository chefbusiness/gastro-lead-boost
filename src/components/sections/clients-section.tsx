import { Badge } from "@/components/ui/badge";

const clientLogos = [
  {
    name: "Restaurant Logo 1",
    url: "/lovable-uploads/07c0ddb6-8105-4821-bfb6-a567f72a7f41.png",
    alt: "Cliente satisfecho 1"
  },
  {
    name: "Fusion Kitchen",
    url: "/lovable-uploads/e3a921c1-d701-452d-9e87-16517edeb0a9.png",
    alt: "Fusion Kitchen"
  },
  {
    name: "Green Leaf",
    url: "/lovable-uploads/13ab0619-2f2f-4476-b6b9-5fde4161becc.png",
    alt: "Green Leaf"
  },
  {
    name: "Restaurant Logo 4",
    url: "/lovable-uploads/fd30a53c-ff8d-41c5-a906-41d086fc7925.png",
    alt: "Cliente satisfecho 4"
  },
  {
    name: "Forno Antico",
    url: "/lovable-uploads/fcb99d33-1190-48d2-b0b0-b3cdbb2944bd.png",
    alt: "Forno Antico"
  },
  {
    name: "Spice Temple",
    url: "/lovable-uploads/9413a230-4612-4cf2-bff1-5ed1d78b212c.png",
    alt: "Spice Temple Thai Restaurant"
  },
  {
    name: "Restaurant Logo 7",
    url: "/lovable-uploads/809e6747-5786-438e-97d8-5c591878981f.png",
    alt: "Cliente satisfecho 7"
  },
  {
    name: "Ocean Blue",
    url: "/lovable-uploads/d88e2a83-7100-4592-bab4-a455fc88050b.png",
    alt: "Ocean Blue Seafood Shack"
  },
  {
    name: "Olive Garden",
    url: "/lovable-uploads/e0be6d9f-0aa1-4b8a-a2cc-7b0e7eae1bb5.png",
    alt: "Olive Garden"
  },
  {
    name: "Burger Bros",
    url: "/lovable-uploads/b3960b86-cac9-4d21-ac0c-68e0106f6eb0.png",
    alt: "Burger Bros"
  },
  {
    name: "Restaurant Logo 11",
    url: "/lovable-uploads/2e62a6f2-a2d4-4b48-b363-3b48ddd77cd5.png",
    alt: "Cliente satisfecho 11"
  },
  {
    name: "Restaurant Logo 12",
    url: "/lovable-uploads/3ef07def-0139-459f-9ad7-a4faa1806505.png",
    alt: "Cliente satisfecho 12"
  },
  {
    name: "Restaurant Logo 13",
    url: "/lovable-uploads/3b2abae6-2734-41c3-8ddf-9cce241af058.png",
    alt: "Cliente satisfecho 13"
  },
  {
    name: "Restaurant Logo 14",
    url: "/lovable-uploads/64d5abce-bba4-4ef0-ab13-d10436f3ed87.png",
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

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-8 md:gap-12 items-center">
          {clientLogos.map((client, index) => (
            <div
              key={client.name}
              className="flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <img
                src={client.url}
                alt={client.alt}
                className="max-w-full max-h-16 w-auto h-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
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