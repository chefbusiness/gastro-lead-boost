import { Badge } from "@/components/ui/badge";
import { getClientLogoUrl } from "@/lib/storage";
import { StatCard } from "@/components/common/StatCard";
import { clientLogosData } from "@/lib/data/clients";
import { CLIENTS_STATS, BADGES } from "@/lib/constants";
export const ClientsSection = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    console.error('Error loading image:', target.src);
  };
  return <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-white/20 text-white bg-white/5">
            {BADGES.clients}
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

        {/* Logos Grid - Distribución uniforme 5-5-4 y centrado perfecto */}
        <div className="flex flex-col items-center gap-8 md:gap-10 max-w-6xl mx-auto">
          {/* Primera fila - 5 logos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {clientLogosData.slice(0, 5).map((client, index) => <div key={client.name} className="flex items-center justify-center w-24 h-20 sm:w-28 sm:h-22 md:w-32 md:h-24 lg:w-36 lg:h-28 xl:w-40 xl:h-32 hover:scale-110 transition-all duration-300 group" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <img src={getClientLogoUrl(client.filename)} alt={client.alt} className="max-w-full max-h-full w-auto h-auto object-contain opacity-75 contrast-125 brightness-110 saturate-110 group-hover:opacity-100 group-hover:contrast-150 group-hover:brightness-125 group-hover:saturate-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300" loading="lazy" onError={handleImageError} />
              </div>)}
          </div>
          
          {/* Segunda fila - 5 logos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {clientLogosData.slice(5, 10).map((client, index) => <div key={client.name} className="flex items-center justify-center w-24 h-20 sm:w-28 sm:h-22 md:w-32 md:h-24 lg:w-36 lg:h-28 xl:w-40 xl:h-32 hover:scale-110 transition-all duration-300 group" style={{
            animationDelay: `${(index + 5) * 100}ms`
          }}>
                <img src={getClientLogoUrl(client.filename)} alt={client.alt} className="max-w-full max-h-full w-auto h-auto object-contain opacity-75 contrast-125 brightness-110 saturate-110 group-hover:opacity-100 group-hover:contrast-150 group-hover:brightness-125 group-hover:saturate-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300" loading="lazy" onError={handleImageError} />
              </div>)}
          </div>
          
          {/* Tercera fila - 4 logos */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {clientLogosData.slice(10, 14).map((client, index) => <div key={client.name} className="flex items-center justify-center w-24 h-20 sm:w-28 sm:h-22 md:w-32 md:h-24 lg:w-36 lg:h-28 xl:w-40 xl:h-32 hover:scale-110 transition-all duration-300 group" style={{
            animationDelay: `${(index + 10) * 100}ms`
          }}>
                <img src={getClientLogoUrl(client.filename)} alt={client.alt} className="max-w-full max-h-full w-auto h-auto object-contain opacity-75 contrast-125 brightness-110 saturate-110 group-hover:opacity-100 group-hover:contrast-150 group-hover:brightness-125 group-hover:saturate-125 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300" loading="lazy" onError={handleImageError} />
              </div>)}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{CLIENTS_STATS.satisfied}</div>
            <div className="text-gray-300">{CLIENTS_STATS.satisfiedLabel}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{CLIENTS_STATS.newClients}</div>
            <div className="text-gray-300">{CLIENTS_STATS.newClientsLabel}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{CLIENTS_STATS.avgROI}</div>
            <div className="text-gray-300">{CLIENTS_STATS.avgROILabel}</div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-gray-200 italic max-w-4xl mx-auto">
            "GastroLocal nos ayudó a aumentar nuestras reservas en un 180% en solo 3 meses. 
            Su estrategia de marketing digital es realmente efectiva."
          </blockquote>
          <cite className="block mt-4 text-gray-400">
            — María González, Propietaria de Sabores Mediterráneos
          </cite>
        </div>
      </div>
    </section>;
};