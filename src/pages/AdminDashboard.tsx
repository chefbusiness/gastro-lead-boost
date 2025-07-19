
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContactSubmissionsList } from "@/components/admin/ContactSubmissionsList";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminStats } from "@/components/admin/AdminStats";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("admin_authenticated");
    if (!auth) {
      navigate("/admin/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
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
