import { LegalLayout } from "@/components/layout/legal-layout";
import { usePageSEO } from "@/hooks/usePageSEO";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { getBreadcrumbSchema } from "@/lib/schema";

const PrivacyPolicy = () => {
  usePageSEO({
    title: "Política de Privacidad - GastroMaps.pro",
    description: "Política de privacidad y protección de datos de GastroMaps.pro. Conoce cómo tratamos y protegemos tu información personal según el RGPD.",
    keywords: "política privacidad, protección datos, RGPD, GastroMaps, privacidad restaurantes",
    canonical: "https://gastromaps.pro/privacidad"
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "https://gastromaps.pro/" },
    { name: "Política de Privacidad", url: "https://gastromaps.pro/privacidad" }
  ]);

  return (
    <LegalLayout 
      title="Política de Privacidad" 
      description="Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales"
    >
      <SchemaMarkup schema={breadcrumbSchema} id="breadcrumb-privacy" />
      
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
          <p>
            En GastroMaps.pro recopilamos únicamente la información necesaria para proporcionarte nuestros servicios:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Datos de contacto (nombre, email, teléfono)</li>
            <li>Información del negocio (nombre del restaurante, dirección)</li>
            <li>Preferencias de servicio</li>
            <li>Datos de navegación (cookies técnicas)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Cómo utilizamos tu información</h2>
          <p>Utilizamos tus datos para:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Proporcionarte nuestros servicios de marketing digital</li>
            <li>Contactarte para consultas y seguimiento</li>
            <li>Enviar análisis y reportes de resultados</li>
            <li>Cumplir obligaciones legales y contractuales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Base legal del tratamiento</h2>
          <p>
            Tratamos tus datos personales basándonos en:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Tu consentimiento explícito</li>
            <li>Ejecución del contrato de servicios</li>
            <li>Interés legítimo para mejorar nuestros servicios</li>
            <li>Cumplimiento de obligaciones legales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Compartir información</h2>
          <p>
            No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Proveedores de servicios necesarios (hosting, email marketing)</li>
            <li>Cumplimiento de obligaciones legales</li>
            <li>Con tu consentimiento explícito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Tus derechos</h2>
          <p>Según el RGPD, tienes derecho a:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Acceder a tus datos personales</li>
            <li>Rectificar información incorrecta</li>
            <li>Suprimir tus datos</li>
            <li>Limitar el tratamiento</li>
            <li>Portabilidad de datos</li>
            <li>Oposición al tratamiento</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, contacta con nosotros en: <strong>info@gastromaps.pro</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Seguridad de datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos personales 
            contra el acceso no autorizado, alteración, divulgación o destrucción.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Retención de datos</h2>
          <p>
            Conservamos tus datos personales solo durante el tiempo necesario para los fines para los que 
            fueron recopilados, o según lo requerido por la ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
          <p>
            Utilizamos cookies técnicas esenciales para el funcionamiento del sitio web. 
            Puedes consultar más información en nuestra <a href="/cookies" className="text-primary hover:underline">Política de Cookies</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contacto</h2>
          <p>
            Para cualquier consulta sobre esta política de privacidad, puedes contactarnos:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>GastroMaps.pro</strong></p>
            <p>Email: info@gastromaps.pro</p>
            <p>Teléfono: +34 744 717 942</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos cualquier 
            cambio importante por email o mediante un aviso en nuestro sitio web.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            Última actualización: 20 de enero de 2025
          </p>
        </section>
      </div>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
