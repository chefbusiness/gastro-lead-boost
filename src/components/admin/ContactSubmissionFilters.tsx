
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Filters {
  status: string;
  search: string;
  dateFrom: string;
  dateTo: string;
}

interface ContactSubmissionFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export function ContactSubmissionFilters({ filters, onFiltersChange }: ContactSubmissionFiltersProps) {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-muted/30 rounded-lg">
      <div className="space-y-2">
        <Label htmlFor="search">Buscar</Label>
        <Input
          id="search"
          placeholder="Nombre, restaurante, ciudad..."
          value={filters.search}
          onChange={(e) => updateFilter('search', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label>Estado</Label>
        <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="pending">Pendiente</SelectItem>
            <SelectItem value="contacted">Contactado</SelectItem>
            <SelectItem value="completed">Completado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateFrom">Desde</Label>
        <Input
          id="dateFrom"
          type="date"
          value={filters.dateFrom}
          onChange={(e) => updateFilter('dateFrom', e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateTo">Hasta</Label>
        <Input
          id="dateTo"
          type="date"
          value={filters.dateTo}
          onChange={(e) => updateFilter('dateTo', e.target.value)}
        />
      </div>
    </div>
  );
}
