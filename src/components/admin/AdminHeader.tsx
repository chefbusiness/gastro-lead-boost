
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

export function AdminHeader() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user.email) {
        setUserEmail(session.user.email);
      }
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
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
            <p className="text-sm text-muted-foreground">GastroMaps - Admin</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-muted-foreground">{userEmail}</p>
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
