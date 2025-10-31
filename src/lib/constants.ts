// Global constants and configuration for the GastroLocal.pro application

export const CONTACT_INFO = {
  phone: '+34 677 49 25 55',
  email: 'hola@gastrolocal.pro',
  address: 'Calle Serrano 45, Madrid, España',
  location: 'Madrid, España',
  coordinates: {
    lat: 40.4168,
    lng: -3.7038
  }
} as const;

export const SOCIAL_MEDIA = {
  instagram: 'https://instagram.com/gastrolocalpro',
  facebook: 'https://facebook.com/gastrolocalpro',
  linkedin: 'https://www.linkedin.com/company/gastrolocalpro',
  twitter: 'https://twitter.com/gastrolocalpro'
} as const;

export const RELATED_BRANDS = {
  gastroseo: {
    name: 'GastroSEO.com',
    url: 'https://gastroseo.com'
  },
  chefbusiness: {
    name: 'ChefBusiness.co',
    url: 'https://chefbusiness.co'
  }
} as const;

export const HERO_STATS = {
  occupancyIncrease: '+312%',
  occupancyLabel: 'Incremento medio de ocupación',
  maxReturn: '€18,470',
  maxReturnLabel: 'Mayor retorno registrado',
  establishments: '94',
  establishmentsLabel: 'Establecimientos reinventados'
} as const;

export const CLIENTS_STATS = {
  satisfied: '124+',
  satisfiedLabel: 'Restaurantes Satisfechos desde 2023',
  newClients: '2.5M+',
  newClientsLabel: 'Clientes Nuevos Generados',
  avgROI: '247%',
  avgROILabel: 'ROI Promedio'
} as const;

export const CTA_TEXTS = {
  primary: 'SOLICITAR ANÁLISIS GRATUITO',
  secondary: 'Revisar Transformaciones',
  contact: 'QUIERO MI ANÁLISIS GRATIS',
  submitting: 'Enviando...'
} as const;

export const BADGES = {
  guarantee: 'GARANTÍA DE RESULTADOS POR CONTRATO',
  freeConsult: 'CONSULTA GRATUITA',
  clients: 'Nuestros Clientes',
  caseStudies: 'Casos de Éxito Verificados',
  solutions: 'Nuestras Soluciones',
  process: 'Nuestro Proceso',
  faq: 'Preguntas Frecuentes'
} as const;

export const SEO_DEFAULTS = {
  siteName: 'GastroLocal.pro',
  defaultTitle: 'GastroLocal.pro - Marketing Digital para Restaurantes',
  defaultDescription: 'Transformamos restaurantes vacíos en espacios llenos con estrategias de marketing digital garantizadas.',
  ogImage: '/gastrolocal-logo-full.png'
} as const;

export const SERVICE_OPTIONS = {
  seoOrganic: {
    value: 'seo-organico' as const,
    title: 'SEO Local Orgánico (Posicionamiento Natural)',
    description: 'Aparece en Google Search y Google Maps de forma natural y sostenible'
  },
  semPaid: {
    value: 'sem-pagado' as const,
    title: 'SEM Local Pagado (Publicidad en Google Maps)',
    description: 'Anuncios optimizados para aparecer al instante a clientes en búsquedas locales de tu zona'
  },
  both: {
    value: 'ambas-soluciones' as const,
    title: 'Ambas Soluciones Juntas (Recomendado)',
    description: 'Resultados inmediatos + crecimiento sostenible'
  }
} as const;

export const FORM_MESSAGES = {
  success: {
    title: '¡Solicitud enviada correctamente!',
    description: 'Te contactaremos en menos de 2 horas para diseñar tu estrategia personalizada.'
  },
  error: {
    title: 'Error al enviar el formulario',
    description: 'Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.'
  }
} as const;
