import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/restaurant-hero.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Restaurant success"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-white/90 text-primary border-0 px-6 py-2 text-sm font-semibold shadow-elegant">
            <Shield className="w-4 h-4 mr-2" />
            GARANTÍA DE RESULTADOS POR CONTRATO
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
          DUPLICAMOS TUS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            RESERVAS
          </span>
          {" "}O NO
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            PAGAS NADA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200">
          Transformamos restaurantes vacíos en espacios llenos de vida. 
          <br />
          <span className="text-yellow-300">Compromiso blindado de 90 días</span> con garantía total de reembolso.
        </p>

        {/* Pain Point */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-slate-600/30 shadow-elegant animate-fade-in-up delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Las agencias tradicionales están{" "}
            <span className="relative">
              <span className="text-orange-400 line-through font-extrabold">obsoletas</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400"></span>
            </span>
          </h2>
          <p className="text-xl text-orange-300 font-semibold">
            mientras drenan tu presupuesto sin resultados
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">+312%</div>
            <div className="text-white/80 text-sm">Incremento medio de ocupación</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">€18,470</div>
            <div className="text-white/80 text-sm">Mayor retorno registrado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">94</div>
            <div className="text-white/80 text-sm">Establecimientos reinventados</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 justify-center items-center animate-fade-in-up delay-500 max-w-lg mx-auto px-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full bg-gradient-accent hover:bg-accent/90 text-white px-6 py-4 text-lg font-bold rounded-xl shadow-accent animate-pulse-glow group"
          >
            SOLICITAR ANÁLISIS GRATUITO
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full border-slate-300/40 text-white hover:bg-slate-700/50 px-6 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
          >
            Revisar Transformaciones
            <TrendingUp className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8 animate-fade-in-up delay-600">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
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
    </section>
  );
}