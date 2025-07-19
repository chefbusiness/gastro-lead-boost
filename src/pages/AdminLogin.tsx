
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Shield } from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Personalized authentication for John Guerrero
    if (credentials.username === "john@chefbusiness.co" && credentials.password === "ChefBusiness2024!") {
      localStorage.setItem("admin_authenticated", "true");
      localStorage.setItem("admin_name", "John Guerrero");
      localStorage.setItem("admin_email", "john@chefbusiness.co");
      toast({
        title: "¡Bienvenido John!",
        description: "Has accedido al panel de administración de GastroMaps",
      });
      navigate("/admin");
    } else {
      toast({
        title: "Credenciales incorrectas",
        description: "Email o contraseña incorrectos",
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
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Email</Label>
              <Input
                id="username"
                type="email"
                placeholder="john@chefbusiness.co"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
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
              {isLoading ? "Verificando acceso..." : "Acceder al Panel"}
            </Button>
            <div className="text-center text-xs text-muted-foreground mt-4">
              Credenciales: john@chefbusiness.co / ChefBusiness2024!
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
