
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AdminHeader() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    localStorage.removeItem("admin_name");
    localStorage.removeItem("admin_email");
    toast({
      title: "Hasta luego John",
      description: "Has cerrado sesión correctamente",
    });
    navigate("/admin/login");
  };

  return (
    <header className="bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Panel de Administración</h1>
            <p className="text-sm text-muted-foreground">GastroMaps - Bienvenido John Guerrero</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">John Guerrero</p>
            <p className="text-xs text-muted-foreground">john@chefbusiness.co</p>
          </div>
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            Cerrar Sesión
          </Button>
        </div>
      </div>
    </header>
  );
}
