import { SectionHeader } from "@/components/common/SectionHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tag, ExternalLink, TrendingUp } from "lucide-react";
import { restaurantCategories } from "@/lib/data/restaurant-categories";

export const RestaurantCategoriesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          badge={{ icon: Tag, text: "Categorías de Negocio" }}
          title={["¿En Qué Tipo de Restaurante", "Especializa Tu Negocio?"]}
          subtitle="Optimizamos tu Google Maps según tu categoría específica - Noviembre 2025"
          titleGradient={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {restaurantCategories.map((category) => (
            <Card
              key={category.id}
              className="relative p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border group"
            >
              {category.trending && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 bg-accent/10 text-accent border-accent/20 animate-pulse"
                >
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={category.name}>
                  {category.emoji}
                </span>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                Descubre Todas las Categorías
              </h3>
              <p className="text-muted-foreground">
                Más de 100 categorías específicas de Google Maps para optimizar tu negocio
              </p>
            </div>
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href="https://blog.gastrolocal.pro/categorias-de-google-maps-para-restaurantes-y-negocios-de-hosteleria/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Leer Guía Completa
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
