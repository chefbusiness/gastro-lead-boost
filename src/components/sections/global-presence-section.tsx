import { countriesData } from "@/lib/data/countries";

export const GlobalPresenceSection = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-center text-2xl md:text-3xl font-bold mb-8 text-slate-900">
          Algunos de nuestros clientes están en:
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 text-base md:text-lg">
          {countriesData.map((country, index) => (
            <div key={country.name} className="flex items-center gap-3">
              <div className="flex items-center gap-2 hover:scale-110 transition-transform duration-200">
                <span className="text-2xl" role="img" aria-label={`Bandera de ${country.name}`}>
                  {country.flag}
                </span>
                <span className="font-medium text-slate-700">{country.name}</span>
              </div>
              {index < countriesData.length - 1 && (
                <span className="text-slate-400">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
