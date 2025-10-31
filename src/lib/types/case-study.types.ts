import { ASSETS } from "@/lib/storage";

export type CaseStudy = {
  id: number;
  restaurant: string;
  location: string;
  type: string;
  investment: number;
  revenue: number;
  roi: number;
  period: string;
  rating: number;
  highlight: string;
  imageKey: keyof typeof ASSETS.caseStudies;
};
