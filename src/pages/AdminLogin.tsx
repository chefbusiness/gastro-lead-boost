
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield, UserPlus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false);
  const [hasAdmins, setHasAdmins] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/admin");
      }
    });

    // Check if there are any admins in the system
    const checkAdmins = async () => {
      const { count } = await supabase
        .from('user_roles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'admin');
      
      setHasAdmins((count ?? 0) > 0);
    };
    
    checkAdmins();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) {
        toast({
          title: "Error de autenticación",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (data.session) {
        toast({
          title: "¡Bienvenido!",
          description: "Has accedido al panel de administración de GastroLocal",
        });
        navigate("/admin");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create the user
      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          emailRedirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) {
        toast({
          title: "Error al crear usuario",
          description: error.message,
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      if (data.user) {
        // Assign admin role
        const { error: roleError } = await supabase
          .from('user_roles')
          .insert({
            user_id: data.user.id,
            role: 'admin',
          });

        if (roleError) {
          toast({
            title: "Error al asignar rol",
            description: roleError.message,
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        toast({
          title: "¡Admin creado exitosamente!",
          description: "Ya puedes iniciar sesión con tus credenciales",
        });
        
        setIsSignupMode(false);
        setHasAdmins(true);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl">Panel de Administración</CardTitle>
          <p className="text-muted-foreground">Acceso exclusivo para John Guerrero</p>
        </CardHeader>
        <CardContent>
          {!hasAdmins && !isSignupMode && (
            <div className="mb-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                No hay administradores registrados. Crea el primer admin para continuar.
              </p>
              <Button
                onClick={() => setIsSignupMode(true)}
                variant="outline"
                className="w-full"
              >
                <UserPlus className="w-4 h-4 mr-2" />
                Crear Primer Administrador
              </Button>
            </div>
          )}

          <form onSubmit={isSignupMode ? handleSignup : handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading 
                ? "Procesando..." 
                : isSignupMode 
                  ? "Crear Administrador" 
                  : "Acceder al Panel"}
            </Button>
            
            {isSignupMode && (
              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setIsSignupMode(false)}
              >
                Cancelar
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
