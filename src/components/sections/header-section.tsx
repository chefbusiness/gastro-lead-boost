
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export function HeaderSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminName, setAdminName] = useState("");

  useEffect(() => {
    const checkAuthStatus = () => {
      const auth = localStorage.getItem("admin_authenticated");
      const name = localStorage.getItem("admin_name") || "Admin";
      setIsLoggedIn(!!auth);
      setAdminName(name);
    };

    checkAuthStatus();
    // Check auth status when localStorage changes
    window.addEventListener('storage', checkAuthStatus);
    return () => window.removeEventListener('storage', checkAuthStatus);
  }, []);

  // Handle navigation to sections with hash fragments
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.pathname, location.hash]);

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // Already on main page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to main page with hash fragment
      navigate(`/#${sectionId}`);
    }
  };

  const scrollToContact = () => {
    navigateToSection('contact-form');
  };

  const handleLogin = () => {
    navigate('/admin/login');
  };

  const handleDashboard = () => {
    navigate('/admin');
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    localStorage.removeItem("admin_name");
    localStorage.removeItem("admin_email");
    setIsLoggedIn(false);
    toast({
      title: "Hasta luego John",
      description: "Has cerrado sesión correctamente",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-muted shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/ed10ffb2-7da6-4633-ac13-3c28ae97ac92.png"
              alt="GastroMaps Icon"
              className="h-10 w-10"
              onError={(e) => {
                console.log('Error loading header logo');
                e.currentTarget.src = '/placeholder.svg';
              }}
            />
            <button
              onClick={() => navigate('/')}
              className="text-xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              GastroMaps.pro
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection('case-studies')}
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => navigateToSection('solutions')}
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Soluciones
            </button>
            <button
              onClick={() => navigateToSection('process')}
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Proceso
            </button>
            <button
              onClick={() => navigateToSection('contact-form')}
              className="text-muted-foreground hover:text-primary transition-colors story-link"
            >
              Contacto
            </button>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Admin Access */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span className="hidden sm:inline">{adminName}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={handleDashboard} className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogin}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
              >
                <User className="h-4 w-4" />
                <span className="hidden md:inline text-xs">Admin</span>
              </Button>
            )}

            {/* Main CTA Button - Responsive sizing */}
            <Button
              onClick={scrollToContact}
              className="bg-gradient-accent hover:bg-accent/90 text-white font-semibold rounded-lg shadow-accent text-xs sm:text-sm px-3 py-1.5 sm:px-6 sm:py-2"
            >
              <span className="hidden xs:inline">Análisis Gratuito</span>
              <span className="xs:hidden">Análisis</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
