
import { LegalLayout } from "@/components/layout/legal-layout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout 
      title="Política de Privacidad" 
      description="Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales en GastroMaps.pro"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Información General</h2>
          <p className="mb-4">
            En GastroMaps.pro, operado por <strong>John Guerrero</strong> (NIE: X3655405S), 
            nos comprometemos a proteger y respetar tu privacidad. Esta política explica 
            cuándo y por qué recopilamos información personal, cómo la utilizamos y 
            cómo la mantenemos segura.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Datos del Responsable:</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>Nombre:</strong> John Guerrero</li>
              <li><strong>NIE:</strong> X3655405S</li>
              <li><strong>Condición:</strong> Autónomo en España</li>
              <li><strong>Email:</strong> info@gastromaps.pro</li>
              <li><strong>Teléfono:</strong> 0034 744 717 942</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Información que Recopilamos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Información que nos proporcionas:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre del restaurante</li>
                <li>Información sobre tu negocio</li>
                <li>Mensajes y comunicaciones que nos envías</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Información recopilada automáticamente:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de navegación</li>
                <li>Cookies y tecnologías similares</li>
                <li>Datos de Google Analytics (cuando está activado)</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Cómo Utilizamos tu Información</h2>
          <p className="mb-4">Utilizamos tu información personal para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Proporcionar nuestros servicios:</strong> Análisis de marketing digital, optimización de Google Maps, gestión de campañas publicitarias</li>
            <li><strong>Comunicación:</strong> Responder a tus consultas, enviar análisis gratuitos, proporcionar soporte técnico</li>
            <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web, mejorar la experiencia del usuario</li>
            <li><strong>Marketing (con tu consentimiento):</strong> Enviar información sobre nuestros servicios, casos de éxito, ofertas especiales</li>
            <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y fiscales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Base Legal para el Tratamiento</h2>
          <p className="mb-4">Procesamos tus datos personales bajo las siguientes bases legales del GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consentimiento:</strong> Para marketing directo y cookies no esenciales</li>
            <li><strong>Ejecución contractual:</strong> Para proporcionar los servicios solicitados</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación comercial</li>
            <li><strong>Obligación legal:</strong> Para cumplir con requisitos fiscales y legales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Compartir Información</h2>
          <p className="mb-4">
            No vendemos, alquilamos ni compartimos tu información personal con terceros, 
            excepto en las siguientes circunstancias:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Proveedores de servicios:</strong> Google Ads, Google Analytics, herramientas de email marketing (solo datos necesarios)</li>
            <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o autoridades competentes</li>
            <li><strong>Protección de derechos:</strong> Para proteger nuestros derechos legales o seguridad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Tus Derechos</h2>
          <p className="mb-4">Bajo el GDPR, tienes los siguientes derechos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
            <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
            <li><strong>Limitación:</strong> Restringir el procesamiento de tus datos</li>
            <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
            <li><strong>Oposición:</strong> Oponerte al procesamiento por interés legítimo</li>
            <li><strong>Retirar consentimiento:</strong> En cualquier momento para marketing directo</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, contacta con nosotros en: 
            <a href="mailto:info@gastromaps.pro" className="text-primary hover:underline ml-1">
              info@gastromaps.pro
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Seguridad de Datos</h2>
          <p className="mb-4">
            Implementamos medidas técnicas y organizativas apropiadas para proteger 
            tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Encriptación SSL/TLS para transmisión de datos</li>
            <li>Acceso restringido a datos personales</li>
            <li>Backups seguros y regulares</li>
            <li>Monitoreo de seguridad continuo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Retención de Datos</h2>
          <p className="mb-4">Conservamos tus datos personales durante:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Datos de contacto:</strong> Hasta que solicites su eliminación o 3 años de inactividad</li>
            <li><strong>Datos contractuales:</strong> Durante la relación comercial y 6 años adicionales (obligación fiscal)</li>
            <li><strong>Datos de marketing:</strong> Hasta que retires tu consentimiento</li>
            <li><strong>Cookies:</strong> Según se especifica en nuestra Política de Cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Transferencias Internacionales</h2>
          <p className="mb-4">
            Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del EEE 
            (como Google). En estos casos, nos aseguramos de que existan garantías adecuadas 
            para la protección de tus datos, como cláusulas contractuales estándar aprobadas 
            por la Comisión Europea.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Menores de Edad</h2>
          <p className="mb-4">
            Nuestros servicios están dirigidos a adultos y propietarios de restaurantes. 
            No recopilamos intencionalmente información personal de menores de 16 años. 
            Si descubrimos que hemos recopilado datos de un menor, los eliminaremos inmediatamente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Cambios en esta Política</h2>
          <p className="mb-4">
            Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos 
            sobre cambios significativos por email o mediante un aviso prominente en nuestro sitio web. 
            La fecha de la última actualización se indica al final de esta política.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">12. Contacto y Reclamaciones</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Para cualquier consulta sobre esta política:</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>Email:</strong> info@gastromaps.pro</li>
              <li><strong>Teléfono:</strong> 0034 744 717 942</li>
              <li><strong>Horario:</strong> Lunes a Viernes, 9:00-19:00</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) 
            si consideras que el tratamiento de tus datos personales no cumple con la normativa vigente.
          </p>
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

export default PrivacyPolicy;
