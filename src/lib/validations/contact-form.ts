import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es demasiado largo"),
  email: z.string()
    .email("Introduce un email válido")
    .min(1, "El email es obligatorio"),
  phone: z.string()
    .min(9, "Introduce un teléfono válido")
    .regex(/^(\+34|0034|34)?[6789]\d{8}$/, "Formato de teléfono español inválido"),
  restaurant: z.string()
    .min(2, "El nombre del restaurante debe tener al menos 2 caracteres")
    .max(100, "El nombre es demasiado largo"),
  service: z.enum(["seo-organico", "sem-pagado", "ambas-soluciones"]).refine(
    (value) => value !== undefined,
    { message: "Por favor selecciona un servicio" }
  ),
  street_address: z.string()
    .min(5, "La dirección debe tener al menos 5 caracteres")
    .max(100, "La dirección es demasiado larga"),
  location: z.string()
    .min(2, "La ciudad debe tener al menos 2 caracteres")
    .max(50, "El nombre de la ciudad es demasiado largo"),
  postal_code: z.string()
    .min(4, "El código postal debe tener al menos 4 caracteres")
    .max(10, "El código postal es demasiado largo"),
  message: z.string()
    .max(500, "El mensaje es demasiado largo")
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
