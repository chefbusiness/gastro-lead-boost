
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  MessageCircle, 
  Building2,
  Edit3,
  Save,
  X
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

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

interface ContactSubmissionItemProps {
  submission: ContactSubmission;
  onStatusUpdate: (id: string, status: string, notes?: string) => void;
}

export function ContactSubmissionItem({ submission, onStatusUpdate }: ContactSubmissionItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editStatus, setEditStatus] = useState(submission.status);
  const [editNotes, setEditNotes] = useState(submission.notes || '');

  const handleSave = () => {
    onStatusUpdate(submission.id, editStatus, editNotes);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditStatus(submission.status);
    setEditNotes(submission.notes || '');
    setIsEditing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'contacted': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'contacted': return 'Contactado';
      case 'completed': return 'Completado';
      default: return status;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-primary font-semibold">
                {submission.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{submission.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {format(new Date(submission.created_at), "dd 'de' MMMM, yyyy 'a las' HH:mm", { locale: es })}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Badge className={getStatusColor(submission.status)}>
              {getStatusText(submission.status)}
            </Badge>
            {!isEditing && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="text-muted-foreground hover:text-foreground"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <a href={`mailto:${submission.email}`} className="text-primary hover:underline">
                {submission.email}
              </a>
            </div>
            
            {submission.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <a href={`tel:${submission.phone}`} className="text-primary hover:underline">
                  {submission.phone}
                </a>
              </div>
            )}
          </div>
          
          <div className="space-y-3">
            {submission.restaurant && (
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-muted-foreground" />
                <span>{submission.restaurant}</span>
              </div>
            )}
            
            {submission.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{submission.location}</span>
              </div>
            )}
          </div>
        </div>

        {submission.message && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircle className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Mensaje:</span>
            </div>
            <p className="text-sm bg-muted/30 p-3 rounded-lg">{submission.message}</p>
          </div>
        )}

        {isEditing ? (
          <div className="space-y-4 border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Estado</label>
                <Select value={editStatus} onValueChange={setEditStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pendiente</SelectItem>
                    <SelectItem value="contacted">Contactado</SelectItem>
                    <SelectItem value="completed">Completado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Notas internas</label>
              <Textarea
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                placeholder="Añadir notas sobre el seguimiento..."
                rows={3}
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleSave} size="sm" className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Guardar
              </Button>
              <Button onClick={handleCancel} variant="outline" size="sm" className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Cancelar
              </Button>
            </div>
          </div>
        ) : submission.notes && (
          <div className="border-t pt-4">
            <div className="flex items-center gap-2 mb-2">
              <Edit3 className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">Notas:</span>
            </div>
            <p className="text-sm bg-blue-50 p-3 rounded-lg border border-blue-200">{submission.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
