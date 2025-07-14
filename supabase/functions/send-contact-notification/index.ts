import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  restaurant: string;
  location: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, restaurant, location, message }: ContactEmailRequest = await req.json();

    // Send notification to the business
    const businessNotification = await resend.emails.send({
      from: "GastroMaps <hola@gastromaps.pro>",
      to: ["hola@gastromaps.pro"],
      subject: `🎯 Nueva consulta de ${restaurant} - ${location}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">🎯 Nueva Consulta - ${restaurant}</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Datos del Cliente:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Restaurante:</strong> ${restaurant}</p>
            <p><strong>Ubicación:</strong> ${location}</p>
            ${message ? `<p><strong>Mensaje:</strong><br>${message}</p>` : ''}
          </div>
          
          <div style="background: #ecfdf5; border: 1px solid #10b981; padding: 15px; border-radius: 8px;">
            <p style="margin: 0; color: #059669;">
              <strong>⏰ Recordatorio:</strong> Contactar en menos de 2 horas según la garantía prometida.
            </p>
          </div>
        </div>
      `,
    });

    // Send confirmation to the client
    const clientConfirmation = await resend.emails.send({
      from: "GastroMaps <hola@gastromaps.pro>",
      to: [email],
      subject: `✅ Hemos recibido tu solicitud - ${restaurant}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">¡Hola ${name}! ✅</h2>
          
          <p>Hemos recibido tu solicitud de análisis gratuito para <strong>${restaurant}</strong> y ya estamos trabajando en ello.</p>
          
          <div style="background: #f0f9ff; border: 1px solid #0ea5e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0c4a6e;">📞 Te contactaremos en menos de 2 horas</h3>
            <p>Nuestro equipo especializado está preparando tu análisis personalizado. Muy pronto recibirás una llamada para:</p>
            <ul>
              <li>✅ Auditoría digital completa de ${restaurant}</li>
              <li>✅ Análisis de competencia en ${location}</li>
              <li>✅ Estrategia personalizada de 90 días</li>
              <li>✅ Proyección realista de nuevos clientes</li>
            </ul>
          </div>
          
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #059669;">
              <strong>💚 Garantía de Privacidad:</strong> Tus datos están 100% protegidos y nunca los compartimos.
            </p>
          </div>
          
          <hr style="margin: 30px 0; border: none; height: 1px; background: #e2e8f0;">
          
          <div style="text-align: center; color: #64748b;">
            <p><strong>GastroMaps.pro</strong></p>
            <p>📱 WhatsApp: <a href="https://wa.me/34744717942">744 717 942</a></p>
            <p>📧 Email: <a href="mailto:hola@gastromaps.pro">hola@gastromaps.pro</a></p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { businessNotification, clientConfirmation });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);