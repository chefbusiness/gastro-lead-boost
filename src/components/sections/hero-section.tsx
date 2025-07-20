import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import { getAssetUrl, ASSETS } from "@/lib/storage";
export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={getAssetUrl(ASSETS.hero.restaurant)} alt="Restaurant success" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="text-primary border-0 px-6 py-2 text-sm font-semibold shadow-elegant bg-yellow-100 rounded-sm">
            <Shield className="w-4 h-4 mr-2" />
            GARANTÍA DE RESULTADOS POR CONTRATO
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in-up px-2">
          MÁS CLIENTES PARA TU
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            RESTAURANTE
          </span>
          {" "}O NO
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            PAGAS NADA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200 px-4">
          Transformamos restaurantes vacíos en espacios llenos de vida. 
          <br className="hidden sm:block" />
          <span className="text-yellow-300">Compromiso blindado de 90 días</span> con garantía total de reembolso.
        </p>

        {/* Pain Point */}
        <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 max-w-4xl mx-auto border border-slate-600/40 shadow-elegant animate-fade-in-up delay-300">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-4">
            Las agencias tradicionales están{" "}
            <span className="relative">
              <span className="text-orange-400 line-through font-extrabold">obsoletas</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-orange-300 font-semibold">
            mientras drenan tu presupuesto sin resultados
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto animate-fade-in-up delay-400 px-4">
          <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-600/30">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-1 sm:mb-2">+312%</div>
            <div className="text-white/80 text-xs sm:text-sm">Incremento medio de ocupación</div>
          </div>
          <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-600/30">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-1 sm:mb-2">€18,470</div>
            <div className="text-white/80 text-xs sm:text-sm">Mayor retorno registrado</div>
          </div>
          <div className="text-center bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-600/30">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-1 sm:mb-2">94</div>
            <div className="text-white/80 text-xs sm:text-sm">Establecimientos reinventados</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center animate-fade-in-up delay-500 max-w-md sm:max-w-lg mx-auto px-4">
          <Button size="lg" onClick={scrollToContact} className="w-full bg-gradient-accent hover:bg-accent/90 text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-accent animate-pulse-glow group">
            <span className="text-sm sm:text-base">SOLICITAR ANÁLISIS GRATUITO</span>
            <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => document.getElementById('case-studies')?.scrollIntoView({
          behavior: 'smooth'
        })} className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm">
            <span className="text-sm sm:text-base">Revisar Transformaciones</span>
            <TrendingUp className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 animate-fade-in-up delay-600">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
          </div>
          <span className="text-white/80 ml-2">4.9/5 - Valoración de nuestros clientes</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-2 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>;
}