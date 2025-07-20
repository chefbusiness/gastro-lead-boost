import { LegalLayout } from "@/components/layout/legal-layout";
import { usePageSEO } from "@/hooks/usePageSEO";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { getBreadcrumbSchema } from "@/lib/schema";

const CookiesPolicy = () => {
  usePageSEO({
    title: "Política de Cookies - GastroMaps.pro",
    description: "Información sobre el uso de cookies en GastroMaps.pro. Tipos de cookies, finalidad y cómo gestionar tus preferencias.",
    keywords: "política cookies, cookies técnicas, privacidad web, GastroMaps cookies, gestión cookies",
    canonical: "https://gastromaps.pro/cookies"
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: "https://gastromaps.pro/" },
    { name: "Política de Cookies", url: "https://gastromaps.pro/cookies" }
  ]);

  return (
    <LegalLayout 
      title="Política de Cookies" 
      description="Información sobre cómo utilizamos las cookies en nuestro sitio web"
    >
      <SchemaMarkup schema={breadcrumbSchema} id="breadcrumb-cookies" />
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
            visitas un sitio web. Nos ayudan a hacer que tu experiencia en nuestro sitio sea mejor, 
            más rápida y segura.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">¿Cómo utilizamos las cookies?</h2>
          <p>
            En GastroMaps.pro utilizamos cookies únicamente para fines esenciales y mejorar 
            tu experiencia de navegación:
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tipos de cookies que utilizamos</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-green-700">Cookies técnicas (Esenciales)</h3>
              <p className="text-gray-700 mb-2">
                Son imprescindibles para el funcionamiento del sitio web y no se pueden desactivar.
              </p>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Gestión de sesiones de usuario</li>
                <li>Recordar preferencias de idioma</li>
                <li>Funcionalidad del formulario de contacto</li>
                <li>Seguridad y prevención de ataques</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Duración: Sesión</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">Cookies de funcionalidad</h3>
              <p className="text-gray-700 mb-2">
                Permiten recordar tus preferencias para mejorar tu experiencia.
              </p>
              <ul className="list-disc pl-6 text-sm space-y-1">
                <li>Preferencias de cookies aceptadas</li>
                <li>Estado de elementos colapsables</li>
                <li>Configuración de interfaz</li>
              </ul>
              <p className="text-xs text-gray-500 mt-2">Duración: 30 días</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Cookies de análisis</h3>
              <p className="text-gray-700 mb-2">
                <strong>Actualmente NO utilizamos</strong> cookies de análisis o seguimiento. 
                Si en el futuro decidimos implementarlas, solicitaremos tu consentimiento explícito.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Cookies publicitarias</h3>
              <p className="text-gray-700">
                <strong>NO utilizamos</strong> cookies publicitarias ni de terceros para rastrearte 
                o mostrarte publicidad personalizada.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gestión de cookies</h2>
          <p className="mb-4">
            Puedes gestionar las cookies de varias maneras:
          </p>
          
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-4">
            <h3 className="font-semibold text-blue-800 mb-2">Banner de cookies</h3>
            <p className="text-blue-700">
              Al visitar nuestro sitio por primera vez, aparece un banner donde puedes aceptar 
              o configurar tus preferencias de cookies.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Configuración del navegador</h3>
            <p className="text-yellow-700 mb-2">
              También puedes configurar tu navegador para:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-1 text-yellow-700">
              <li>Rechazar todas las cookies</li>
              <li>Aceptar solo cookies de sitios específicos</li>
              <li>Eliminar cookies al cerrar el navegador</li>
              <li>Recibir avisos antes de aceptar cookies</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Configuración por navegador</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Google Chrome</h3>
              <p className="text-sm text-gray-600">
                Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Mozilla Firefox</h3>
              <p className="text-sm text-gray-600">
                Opciones → Privacidad y seguridad → Cookies y datos del sitio
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Safari</h3>
              <p className="text-sm text-gray-600">
                Preferencias → Privacidad → Gestión de datos de sitios web
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Microsoft Edge</h3>
              <p className="text-sm text-gray-600">
                Configuración → Cookies y permisos de sitio → Cookies y datos del sitio
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Impacto de desactivar cookies</h2>
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <p className="text-orange-700">
              Si desactivas las cookies esenciales, algunas funcionalidades del sitio web 
              podrían no funcionar correctamente:
            </p>
            <ul className="list-disc pl-6 mt-2 text-sm space-y-1 text-orange-700">
              <li>El formulario de contacto podría no enviarse correctamente</li>
              <li>Tus preferencias no se recordarán entre sesiones</li>
              <li>Algunos elementos interactivos podrían no funcionar</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Actualizaciones de esta política</h2>
          <p>
            Esta política de cookies puede actualizarse ocasionalmente. Te recomendamos 
            revisarla periódicamente para estar informado de cualquier cambio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
          <p>
            Si tienes preguntas sobre nuestra política de cookies, puedes contactarnos:
          </p>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p><strong>GastroMaps.pro</strong></p>
            <p>Email: info@gastromaps.pro</p>
            <p>Teléfono: +34 744 717 942</p>
          </div>
        </section>

        <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-green-800">Compromiso con tu privacidad</h2>
          <p className="text-green-700">
            En GastroMaps.pro respetamos tu privacidad. Solo utilizamos las cookies estrictamente 
            necesarias para ofrecerte el mejor servicio posible, sin rastrearte ni comprometer 
            tu información personal.
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-8">
          Última actualización: 20 de enero de 2025
        </p>
      </div>
    </LegalLayout>
  );
};

export default CookiesPolicy;
