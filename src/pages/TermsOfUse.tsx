import { LegalLayout } from "@/components/layout/legal-layout";
import { usePageSEO } from "@/hooks/usePageSEO";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { getBreadcrumbSchema } from "@/lib/schema";

const TermsOfUse = () => {
  usePageSEO({
    title: "Términos y Condiciones - GastroMaps.pro",
    description: "Términos y condiciones de uso de los servicios de GastroMaps.pro. Condiciones generales, garantías y política de reembolso para restaurantes.",
    keywords: "términos condiciones, garantía resultados, reembolso, condiciones servicio, GastroMaps restaurantes",
    canonical: "https://gastromaps.pro/terminos"
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "https://gastromaps.pro/" },
    { name: "Términos y Condiciones", url: "https://gastromaps.pro/terminos" }
  ]);

  return (
    <LegalLayout 
      title="Términos y Condiciones" 
      description="Condiciones generales de uso de nuestros servicios de marketing digital para restaurantes"
    >
      <SchemaMarkup schema={breadcrumbSchema} id="breadcrumb-terms" />
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Aceptación de términos</h2>
          <p>
            Al acceder y utilizar los servicios de GastroMaps.pro, aceptas estar sujeto a estos términos 
            y condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar 
            nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Descripción del servicio</h2>
          <p>
            GastroMaps.pro ofrece servicios especializados de marketing digital para restaurantes, incluyendo:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>SEO Local y optimización de Google My Business</li>
            <li>SEM y publicidad geo-localizada en Google Ads</li>
            <li>Gestión de reputación online</li>
            <li>Análisis y reportes de resultados</li>
            <li>Consultoría estratégica personalizada</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Garantía de resultados</h2>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Compromiso de resultados</h3>
            <p className="text-green-700">
              Garantizamos un incremento mínimo del 40% en clientes/reservas en un plazo de 90 días 
              desde el inicio del servicio. Si no se alcanzan estos resultados, procederemos al 
              reembolso íntegro del importe abonado.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold mt-6 mb-3">Condiciones de la garantía:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>El cliente debe implementar todas las recomendaciones proporcionadas</li>
            <li>Proporcionar acceso completo a las plataformas necesarias (Google My Business, etc.)</li>
            <li>Mantener la información del negocio actualizada</li>
            <li>No realizar cambios significativos en el negocio durante el período de prueba</li>
            <li>Colaborar en la provisión de contenido y feedback solicitado</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Política de reembolso</h2>
          <p>
            Si no se cumplen los objetivos establecidos en el plazo acordado, el cliente podrá 
            solicitar el reembolso íntegro en un plazo de 30 días tras finalizar el período de garantía.
          </p>
          <p className="mt-2">
            El reembolso se procesará en un plazo máximo de 15 días hábiles desde la solicitud.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Obligaciones del cliente</h2>
          <p>El cliente se compromete a:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Proporcionar información veraz y completa sobre su negocio</li>
            <li>Facilitar acceso a las plataformas digitales necesarias</li>
            <li>Implementar las recomendaciones proporcionadas</li>
            <li>Mantener comunicación fluida con nuestro equipo</li>
            <li>Informar de cualquier cambio relevante en el negocio</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Duración y terminación</h2>
          <p>
            Los contratos de servicio tienen una duración mínima de 90 días para poder evaluar 
            adecuadamente los resultados. Cualquiera de las partes puede terminar el contrato 
            con 30 días de antelación por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Limitación de responsabilidad</h2>
          <p>
            GastroMaps.pro no será responsable de daños indirectos, pérdida de beneficios, 
            o consecuencias derivadas de factores externos al marketing digital (crisis económicas, 
            pandemias, cambios regulatorios, etc.).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Propiedad intelectual</h2>
          <p>
            Todos los materiales, estrategias y metodologías desarrolladas por GastroMaps.pro 
            son de nuestra propiedad exclusiva. El cliente recibe una licencia de uso limitada 
            durante la vigencia del contrato.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Confidencialidad</h2>
          <p>
            Ambas partes se comprometen a mantener la confidencialidad de toda información 
            comercial, estratégica y técnica intercambiada durante la prestación del servicio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Modificaciones</h2>
          <p>
            GastroMaps.pro se reserva el derecho a modificar estos términos y condiciones. 
            Los cambios serán comunicados con al menos 30 días de antelación y entrarán 
            en vigor para nuevos contratos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Ley aplicable y jurisdicción</h2>
          <p>
            Estos términos se rigen por la legislación española. Para cualquier controversia, 
            las partes se someten a la jurisdicción de los tribunales de España.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Contacto</h2>
          <p>
            Para cualquier consulta sobre estos términos y condiciones:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>GastroMaps.pro</strong></p>
            <p>Email: local@gastroseo.com</p>
            <p>Teléfono: +34 744 717 942</p>
          </div>
        </section>

        <section className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-blue-800">Garantía sin letra pequeña</h2>
          <p className="text-blue-700">
            Nuestro compromiso es claro y transparente: más clientes en 90 días o devolución 
            íntegra del dinero. Sin excepciones, sin letra pequeña, sin excusas.
          </p>
        </section>

        <p className="text-sm text-gray-600 mt-8">
          Última actualización: 20 de enero de 2025
        </p>
      </div>
    </LegalLayout>
  );
};

export default TermsOfUse;
