
import { HeaderSection } from "@/components/sections/header-section";
import { FooterSection } from "@/components/sections/footer-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export function LegalLayout({ children, title, description }: LegalLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <HeaderSection />
      
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Inicio
            </Button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="prose prose-lg max-w-none">
            {children}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
}
