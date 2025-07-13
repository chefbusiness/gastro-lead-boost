import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/restaurant-hero.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Restaurant success"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/70 to-transparent" />
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
          TE TRAEMOS MÁS
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            CLIENTES
          </span>
          {" "}O TE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
            DEVOLVEMOS
          </span>
          <br />
          EL DINERO
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-medium animate-fade-in-up delay-200">
          No es humo, es real y va por contrato. 
          <br />
          <span className="text-yellow-300">Resultados garantizados en 90 días</span> o te devolvemos cada euro.
        </p>

        {/* Pain Point */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-4xl mx-auto border border-white/20 animate-fade-in-up delay-300">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Los Community Managers y las Agencias están{" "}
            <span className="relative">
              <span className="text-red-400 line-through">muertos</span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-400"></span>
            </span>
          </h2>
          <p className="text-xl text-red-300 font-semibold">
            pero te siguen cobrando
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up delay-400">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">+247%</div>
            <div className="text-white/80 text-sm">Aumento promedio en reservas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">€13,590</div>
            <div className="text-white/80 text-sm">Máximo ROI generado</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">87</div>
            <div className="text-white/80 text-sm">Restaurantes transformados</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-gradient-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-accent animate-pulse-glow group"
          >
            QUIERO MÁS CLIENTES AHORA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
          >
            Ver Casos de Éxito
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