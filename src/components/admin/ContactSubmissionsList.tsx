
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { ContactSubmissionItem } from "./ContactSubmissionItem";
import { ContactSubmissionFilters } from "./ContactSubmissionFilters";
import { Badge } from "@/components/ui/badge";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  restaurant: string | null;
  location: string | null;
  message: string | null;
  status: string;
  notes: string | null;
  created_at: string;
}

export function ContactSubmissionsList() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    dateFrom: '',
    dateTo: '',
  });

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      // Apply filters
      if (filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      if (filters.search) {
        query = query.or(
          `name.ilike.%${filters.search}%,restaurant.ilike.%${filters.search}%,location.ilike.%${filters.search}%,email.ilike.%${filters.search}%`
        );
      }

      if (filters.dateFrom) {
        query = query.gte('created_at', `${filters.dateFrom}T00:00:00`);
      }

      if (filters.dateTo) {
        query = query.lte('created_at', `${filters.dateTo}T23:59:59`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [filters]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(fetchSubmissions, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleStatusUpdate = async (id: string, newStatus: string, notes?: string) => {
    try {
      const updates: any = { status: newStatus };
      if (notes !== undefined) {
        updates.notes = notes;
      }

      const { error } = await supabase
        .from('contact_submissions')
        .update(updates)
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setSubmissions(submissions.map(sub => 
        sub.id === id ? { ...sub, ...updates } : sub
      ));
    } catch (error) {
      console.error('Error updating submission:', error);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-3">
              Formularios de Contacto
              <Badge variant="secondary">{submissions.length}</Badge>
            </CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchSubmissions}
            disabled={loading}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <ContactSubmissionFilters filters={filters} onFiltersChange={setFilters} />
        
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse border rounded-lg p-4">
                <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-muted rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No se encontraron formularios con los filtros aplicados
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <ContactSubmissionItem
                key={submission.id}
                submission={submission}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
