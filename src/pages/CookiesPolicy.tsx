
import { LegalLayout } from "@/components/layout/legal-layout";

const CookiesPolicy = () => {
  return (
    <LegalLayout 
      title="Política de Cookies" 
      description="Información detallada sobre el uso de cookies en GastroMaps.pro"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. ¿Qué son las Cookies?</h2>
          <p className="mb-4">
            Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
            (ordenador, tablet o móvil) cuando visitas un sitio web. Estas cookies permiten 
            que el sitio web reconozca tu dispositivo y recuerde información sobre tu visita.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              <strong>En GastroMaps.pro utilizamos cookies para mejorar tu experiencia, 
              analizar el tráfico web y personalizar el contenido según tus preferencias.</strong>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Tipos de Cookies que Utilizamos</h2>
          
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-green-700">🔒 Cookies Necesarias (Siempre Activas)</h3>
              <p className="mb-3">
                Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p><strong>Ejemplos:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• <strong>cookieConsent:</strong> Recuerda tus preferencias de cookies</li>
                  <li>• <strong>sessionId:</strong> Mantiene tu sesión activa durante la navegación</li>
                  <li>• <strong>security_token:</strong> Protege contra ataques de seguridad</li>
                </ul>
                <p className="mt-2"><strong>Duración:</strong> Sesión del navegador o hasta 1 año</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">📊 Cookies de Análisis</h3>
              <p className="mb-3">
                Nos ayudan a entender cómo interactúas con nuestro sitio web para mejorarlo.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p><strong>Google Analytics:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• <strong>_ga:</strong> Identifica usuarios únicos</li>
                  <li>• <strong>_ga_*:</strong> Mantiene el estado de la sesión</li>
                  <li>• <strong>_gid:</strong> Identifica usuarios únicos (24 horas)</li>
                </ul>
                <p className="mt-2"><strong>Proveedor:</strong> Google LLC</p>
                <p><strong>Duración:</strong> Entre 24 horas y 2 años</p>
                <p><strong>Propósito:</strong> Estadísticas de tráfico, páginas más visitadas, tiempo de permanencia</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">🎯 Cookies de Marketing</h3>
              <p className="mb-3">
                Utilizadas para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p><strong>Google Ads:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• <strong>_gcl_au:</strong> Mide conversiones de Google Ads</li>
                  <li>• <strong>_gac_*:</strong> Datos de campañas de Google Ads</li>
                </ul>
                <p className="mt-2"><strong>Facebook Pixel:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• <strong>_fbp:</strong> Identifica navegadores para publicidad</li>
                  <li>• <strong>_fbc:</strong> Almacena información de clics</li>
                </ul>
                <p className="mt-2"><strong>Duración:</strong> Entre 3 meses y 2 años</p>
                <p><strong>Propósito:</strong> Remarketing, medición de conversiones, optimización de anuncios</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-3 text-orange-700">⚙️ Cookies Funcionales</h3>
              <p className="mb-3">
                Permiten funcionalidades mejoradas y personalización del sitio.
              </p>
              <div className="bg-gray-50 p-3 rounded text-sm">
                <p><strong>Ejemplos:</strong></p>
                <ul className="mt-2 space-y-1">
                  <li>• <strong>language_preference:</strong> Recuerda tu idioma preferido</li>
                  <li>• <strong>form_data:</strong> Guarda temporalmente datos de formularios</li>
                  <li>• <strong>chat_history:</strong> Mantiene historial de conversaciones de soporte</li>
                </ul>
                <p className="mt-2"><strong>Duración:</strong> Entre 30 días y 1 año</p>
                <p><strong>Propósito:</strong> Mejorar la experiencia del usuario</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Cookies de Terceros</h2>
          <p className="mb-4">
            Algunos servicios externos que utilizamos pueden establecer sus propias cookies:
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">🔍 Google (Analytics y Ads)</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Propósito:</strong> Análisis de tráfico y publicidad segmentada</li>
                <li><strong>Política:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Google Privacy Policy</a></li>
                <li><strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">📘 Facebook/Meta</h3>
              <ul className="text-sm space-y-1">
                <li><strong>Propósito:</strong> Remarketing y medición de campañas sociales</li>
                <li><strong>Política:</strong> <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Facebook Privacy Policy</a></li>
                <li><strong>Configuración:</strong> <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Facebook Ad Settings</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Gestión de tus Preferencias de Cookies</h2>
          
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">✅ Panel de Preferencias</h3>
              <p className="text-green-700 mb-3">
                Puedes gestionar tus preferencias de cookies en cualquier momento usando 
                nuestro panel de configuración.
              </p>
              <button 
                onClick={() => {
                  // This would trigger the cookie banner to show again
                  localStorage.removeItem('cookieConsent');
                  window.location.reload();
                }}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
              >
                Abrir Configuración de Cookies
              </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">🌐 Configuración del Navegador</h3>
              <p className="text-blue-700 mb-3">
                También puedes gestionar cookies directamente desde tu navegador:
              </p>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                <li>• <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                <li>• <strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Impacto de Desactivar Cookies</h2>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">⚠️ Importante</h3>
            <p className="text-yellow-700 mb-3">
              Desactivar ciertas cookies puede afectar tu experiencia en nuestro sitio:
            </p>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• <strong>Cookies necesarias:</strong> El sitio puede no funcionar correctamente</li>
              <li>• <strong>Cookies de análisis:</strong> No podremos mejorar el sitio basándome en tu uso</li>
              <li>• <strong>Cookies de marketing:</strong> Recibirás anuncios menos relevantes</li>
              <li>• <strong>Cookies funcionales:</strong> Perderás personalizaciones y preferencias</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Actualizaciones de esta Política</h2>
          <p className="mb-4">
            Esta política de cookies puede actualizarse ocasionalmente para reflejar 
            cambios en nuestras prácticas o por motivos legales. Te notificaremos sobre 
            cambios significativos mediante nuestro banner de cookies o por email.
          </p>
          <p className="mb-4">
            Te recomendamos revisar esta página periódicamente para estar informado 
            sobre cómo utilizamos las cookies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Base Legal</h2>
          <p className="mb-4">
            El uso de cookies se basa en tu consentimiento, según lo requerido por:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Reglamento General de Protección de Datos (GDPR)</li>
            <li>Ley de Servicios de la Sociedad de la Información (LSSI-CE)</li>
            <li>Directiva ePrivacy de la UE</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Contacto</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Para consultas sobre cookies:</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>Email:</strong> hola@gastromaps.pro</li>
              <li><strong>Teléfono:</strong> 0034 744 717 942</li>
              <li><strong>Horario:</strong> Lunes a Viernes, 9:00-19:00</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              Responderemos a tu consulta en un plazo máximo de 48 horas.
            </p>
          </div>
        </section>

        <div className="border-t pt-8 mt-12">
          <p className="text-sm text-gray-500">
            <strong>Última actualización:</strong> Julio 2025
          </p>
        </div>
      </div>
    </LegalLayout>
  );
};

export default CookiesPolicy;
