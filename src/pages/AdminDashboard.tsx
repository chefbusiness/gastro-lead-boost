
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactSubmissionsList } from "@/components/admin/ContactSubmissionsList";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStats } from "@/components/admin/AdminStats";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate("/admin/login");
        return;
      }

      // Verify admin role
      const { data: roleData, error } = await supabase.rpc('is_admin', { 
        _user_id: session.user.id 
      });

      if (error || !roleData) {
        toast({
          title: "Acceso denegado",
          description: "No tienes permisos de administrador",
          variant: "destructive",
        });
        navigate("/");
        return;
      }

      setIsAuthenticated(true);
      setIsAdmin(true);
      setIsLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT' || !session) {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  if (isLoading || !isAuthenticated || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader />
      <div className="container mx-auto px-4 py-8">
        <AdminStats />
        <ContactSubmissionsList />
      </div>
    </div>
  );
}
