import { ProcessStep } from "@/lib/types";

export const processStepsData: readonly ProcessStep[] = Object.freeze([
  {
    step: "01",
    title: "Análisis Profundo",
    subtitle: "Radiografía Digital Completa",
    description: "Analizamos tu situación actual, competencia y oportunidades perdidas. Identificamos exactamente por qué tu restaurante no aparece cuando la gente busca.",
    features: [
      "Auditoría de Google My Business",
      "Análisis de competencia local",
      "Identificación de palabras clave",
      "Oportunidades de mercado"
    ],
    iconName: "Search",
    color: "primary"
  },
  {
    step: "02",
    title: "Implementación Rápida",
    subtitle: "Estrategia en Marcha",
    description: "Optimizamos tu presencia digital y lanzamos campañas publicitarias ultra-segmentadas. Todo lo necesario para que empieces a recibir clientes desde el primer día.",
    features: [
      "Optimización completa de perfil",
      "Campañas de Google Ads locales",
      "Seguimiento de conversiones",
      "Ajustes diarios de rendimiento"
    ],
    iconName: "Zap",
    color: "accent"
  },
  {
    step: "03",
    title: "Resultados Garantizados",
    subtitle: "Medimos y Escalamos",
    description: "Monitorizamos resultados en tiempo real y escalamos lo que funciona. Recibes informes semanales con métricas claras: llamadas, reservas, ingresos.",
    features: [
      "Dashboard de resultados en vivo",
      "Informes semanales detallados",
      "Optimización continua",
      "Garantía contractual de ROI"
    ],
    iconName: "TrendingUp",
    color: "success"
  }
]);
