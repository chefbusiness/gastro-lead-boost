
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";

interface Stats {
  total: number;
  today: number;
  pending: number;
  contacted: number;
}

export function AdminStats() {
  const [stats, setStats] = useState<Stats>({ total: 0, today: 0, pending: 0, contacted: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Total submissions
        const { count: total } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true });

        // Today's submissions
        const today = new Date().toISOString().split('T')[0];
        const { count: todayCount } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true })
          .gte('created_at', `${today}T00:00:00`);

        // Pending submissions
        const { count: pending } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending');

        // Contacted submissions
        const { count: contacted } = await supabase
          .from('contact_submissions')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'contacted');

        setStats({
          total: total || 0,
          today: todayCount || 0,
          pending: pending || 0,
          contacted: contacted || 0,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statItems = [
    {
      title: "Total Formularios",
      value: stats.total,
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Hoy",
      value: stats.today,
      icon: TrendingUp,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Pendientes",
      value: stats.pending,
      icon: Clock,
      color: "text-yellow-600",
      bg: "bg-yellow-50",
    },
    {
      title: "Contactados",
      value: stats.contacted,
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-20 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.title}
            </CardTitle>
            <div className={`w-8 h-8 ${item.bg} rounded-full flex items-center justify-center`}>
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
