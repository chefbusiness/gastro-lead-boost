import { CaseStudy } from "@/lib/types";

export const caseStudiesData: readonly CaseStudy[] = Object.freeze([
  {
    id: 1,
    restaurant: "Restaurante Mediterráneo",
    location: "Madrid Centro",
    type: "Cocina Mediterránea",
    investment: 890,
    revenue: 18470,
    roi: 1975,
    period: "90 días",
    rating: 4.8,
    highlight: "De 12 a 87 reservas semanales",
    imageKey: "mediterraneanRestaurant"
  },
  {
    id: 2,
    restaurant: "Tapas & Vinos",
    location: "Valencia",
    type: "Tapas Gourmet",
    investment: 750,
    revenue: 14200,
    roi: 1793,
    period: "75 días",
    rating: 4.9,
    highlight: "+245% en ingresos mensuales",
    imageKey: "tapasAndWine"
  },
  {
    id: 3,
    restaurant: "Casa de Mariscos",
    location: "Vigo",
    type: "Marisquería",
    investment: 1200,
    revenue: 22100,
    roi: 1742,
    period: "120 días",
    rating: 4.7,
    highlight: "Líder en Google Maps de su zona",
    imageKey: "seafoodHouse"
  },
  {
    id: 4,
    restaurant: "Bistró Gourmet",
    location: "Sevilla",
    type: "Alta Cocina",
    investment: 980,
    revenue: 16750,
    roi: 1610,
    period: "85 días",
    rating: 4.9,
    highlight: "De 8 a 52 comensales/día",
    imageKey: "gourmetBistro"
  }
]);

export const caseStudiesSummary = {
  totalInvestment: 890 + 750 + 1200 + 980,
  totalRevenue: 18470 + 14200 + 22100 + 16750,
  averageROI: Math.round((1975 + 1793 + 1742 + 1610) / 4),
  averagePeriod: Math.round((90 + 75 + 120 + 85) / 4)
} as const;
