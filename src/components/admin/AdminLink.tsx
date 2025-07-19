
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";

export function AdminLink() {
  return (
    <Link
      to="/admin/login"
      className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors opacity-50 hover:opacity-100"
      title="Panel de Administración"
    >
      <Shield className="w-3 h-3" />
      Admin
    </Link>
  );
}
