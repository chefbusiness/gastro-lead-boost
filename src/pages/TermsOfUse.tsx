
import { LegalLayout } from "@/components/layout/legal-layout";

const TermsOfUse = () => {
  return (
    <LegalLayout 
      title="Términos de Uso" 
      description="Condiciones que rigen el uso de los servicios de GastroMaps.pro"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">1. Información General</h2>
          <p className="mb-4">
            Estos Términos de Uso rigen el acceso y uso del sitio web GastroMaps.pro 
            y todos los servicios relacionados, operados por <strong>John Guerrero</strong> 
            (NIE: X3655405S), autónomo registrado en España.
          </p>
          <p className="mb-4">
            Al acceder y utilizar nuestros servicios, aceptas estar sujeto a estos términos. 
            Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">2. Descripción de Servicios</h2>
          <p className="mb-4">GastroMaps.pro ofrece servicios de marketing digital especializados para restaurantes, incluyendo:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Optimización de Google Maps:</strong> Mejora de la visibilidad local de restaurantes</li>
            <li><strong>Gestión de Google Ads:</strong> Campañas publicitarias segmentadas</li>
            <li><strong>Marketing Digital:</strong> Estrategias integrales de promoción online</li>
            <li><strong>Análisis y Consultoría:</strong> Evaluación gratuita de presencia digital</li>
            <li><strong>Gestión de Reputación:</strong> Optimización de reseñas y presencia online</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">3. Condiciones de Contratación</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">3.1 Proceso de Contratación</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Análisis gratuito inicial de 60 minutos</li>
                <li>Propuesta personalizada basada en el análisis</li>
                <li>Contrato por escrito con objetivos específicos</li>
                <li>Facturación mensual con términos de pago acordados</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">3.2 Garantía de Resultado</h3>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="font-semibold text-green-800 mb-2">Garantía de 90 días:</p>
                <p className="text-green-700">
                  Si no observas mejoras medibles en los indicadores acordados durante 
                  los primeros 90 días, te devolvemos el 100% de tu inversión.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">4. Obligaciones del Cliente</h2>
          <p className="mb-4">Como cliente de GastroMaps.pro, te comprometes a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Información veraz:</strong> Proporcionar información precisa y actualizada sobre tu restaurante</li>
            <li><strong>Colaboración:</strong> Participar activamente en el proceso de optimización</li>
            <li><strong>Accesos necesarios:</strong> Facilitar acceso a cuentas de Google My Business, Google Ads, etc.</li>
            <li><strong>Cumplimiento de políticas:</strong> Respetar las políticas de Google y otras plataformas</li>
            <li><strong>Pago puntual:</strong> Realizar los pagos según los términos acordados</li>
            <li><strong>Comunicación:</strong> Mantener canales de comunicación abiertos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">5. Nuestras Obligaciones</h2>
          <p className="mb-4">GastroMaps.pro se compromete a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Servicios profesionales:</strong> Ejecutar las estrategias acordadas con diligencia profesional</li>
            <li><strong>Reporting transparente:</strong> Proporcionar informes mensuales detallados</li>
            <li><strong>Disponibilidad:</strong> Soporte durante horario comercial (Lun-Vie, 9:00-19:00)</li>
            <li><strong>Confidencialidad:</strong> Proteger la información comercial del cliente</li>
            <li><strong>Cumplimiento normativo:</strong> Operar según las mejores prácticas del sector</li>
            <li><strong>Formación:</strong> Capacitar al cliente en herramientas básicas cuando sea necesario</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">6. Política de Pagos y Reembolsos</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">6.1 Términos de Pago</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Facturación mensual por adelantado</li>
                <li>Métodos de pago: Transferencia bancaria, PayPal</li>
                <li>Plazo de pago: 7 días desde la emisión de factura</li>
                <li>Recargos por mora: 1.5% mensual sobre el importe pendiente</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">6.2 Política de Reembolsos</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Garantía de 90 días:</strong> Reembolso completo si no se alcanzan objetivos</li>
                <li><strong>Cancelación anticipada:</strong> Aviso de 30 días, sin reembolso del mes en curso</li>
                <li><strong>Incumplimiento del cliente:</strong> No aplica reembolso si el cliente no cumple sus obligaciones</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">7. Propiedad Intelectual</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">7.1 Contenido de GastroMaps.pro</h3>
              <p>
                Todo el contenido del sitio web, incluyendo textos, gráficos, logos, 
                metodologías y software, es propiedad de John Guerrero o sus licenciantes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">7.2 Materiales del Cliente</h3>
              <p>
                El cliente retiene la propiedad de sus materiales (fotos, textos, logos). 
                Nos otorga licencia para utilizarlos en el marco de los servicios contratados.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">7.3 Casos de Éxito</h3>
              <p>
                Podemos utilizar los resultados obtenidos como casos de éxito en nuestro 
                marketing, previa anonimización de datos sensibles.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">8. Limitación de Responsabilidad</h2>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
            <p className="font-semibold text-yellow-800 mb-2">Importante:</p>
            <p className="text-yellow-700">
              Los resultados en marketing digital pueden variar según múltiples factores 
              fuera de nuestro control, incluyendo competencia, estacionalidad, y cambios 
              en algoritmos de plataformas.
            </p>
          </div>
          
          <p className="mb-4">Nuestra responsabilidad se limita a:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>El importe facturado en los últimos 12 meses</li>
            <li>Daños directos, excluyendo lucro cesante o daños indirectos</li>
            <li>Responsabilidades derivadas del uso correcto de nuestros servicios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">9. Terminación del Servicio</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">9.1 Por parte del Cliente</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Aviso por escrito con 30 días de antelación</li>
                <li>Pago de servicios prestados hasta la fecha de terminación</li>
                <li>Transferencia ordenada de accesos y materiales</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">9.2 Por parte de GastroMaps.pro</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Impago superior a 15 días</li>
                <li>Incumplimiento grave de obligaciones contractuales</li>
                <li>Comportamiento que dañe nuestra reputación</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">10. Confidencialidad</h2>
          <p className="mb-4">
            Ambas partes se comprometen a mantener la confidencialidad de la información 
            comercial sensible compartida durante la relación comercial. Esta obligación 
            permanece vigente incluso después de la terminación del servicio.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium mb-2">Información confidencial incluye:</p>
            <ul className="text-sm space-y-1">
              <li>• Estrategias de marketing y metodologías propietarias</li>
              <li>• Datos financieros y comerciales del restaurante</li>
              <li>• Información sobre competidores y análisis de mercado</li>
              <li>• Accesos y credenciales de cuentas</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">11. Resolución de Disputas</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">11.1 Mediación</h3>
              <p>
                En caso de disputa, las partes se comprometen a intentar una resolución 
                amistosa mediante mediación antes de iniciar acciones legales.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">11.2 Jurisdicción</h3>
              <p>
                Para cualquier disputa legal, las partes se someten a la jurisdicción 
                de los tribunales españoles, aplicándose la legislación española.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">12. Modificaciones</h2>
          <p className="mb-4">
            Nos reservamos el derecho de modificar estos términos ocasionalmente. 
            Los cambios significativos serán comunicados con al menos 30 días de antelación 
            vía email. El uso continuado de nuestros servicios constituye aceptación 
            de los términos modificados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">13. Contacto</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Para consultas sobre estos términos:</h3>
            <ul className="space-y-1 text-sm">
              <li><strong>John Guerrero</strong></li>
              <li><strong>Email:</strong> info@gastromaps.pro</li>
              <li><strong>Teléfono:</strong> 0034 744 717 942</li>
              <li><strong>Horario:</strong> Lunes a Viernes, 9:00-19:00</li>
            </ul>
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

export default TermsOfUse;
