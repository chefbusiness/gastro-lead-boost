
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AdminHeader() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    toast({
      title: "Sesión cerrada",
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
            <p className="text-sm text-muted-foreground">GastroMaps</p>
          </div>
        </div>
        
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </Button>
      </div>
    </header>
  );
}
