
// Schema.org markup generators for GastroMaps.pro

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gastromaps.pro/#organization",
  "name": "GastroMaps.pro",
  "alternateName": "GastroMaps",
  "description": "Especialistas en marketing digital para restaurantes. Garantizamos más clientes o devolvemos el dinero.",
  "url": "https://gastromaps.pro",
  "telephone": "+34744717942",
  "email": "local@gastroseo.com",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Credit Card, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ES",
    "addressLocality": "España"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "España"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.4168,
      "longitude": -3.7038
    },
    "geoRadius": "1000000"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Marketing Digital para Restaurantes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Local para Restaurantes",
          "description": "Posicionamiento orgánico en Google Maps y búsquedas locales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEM Local para Restaurantes", 
          "description": "Publicidad pagada geo-localizada en Google Ads"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Carlos Mendoza"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "En 3 meses hemos pasado de 2-3 reservas diarias a estar completos casi todos los días. No hay ningún otro proveedor que ofrezca este nivel de garantías."
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/gastromaps-pro",
    "https://www.facebook.com/gastromaps.pro"
  ]
});

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://gastromaps.pro/#organization",
  "name": "GastroMaps.pro",
  "url": "https://gastromaps.pro",
  "logo": {
    "@type": "ImageObject",
    "url": "https://gastromaps.pro/lovable-uploads/ed10ffb2-7da6-4633-ac13-3c28ae97ac92.png",
    "width": 512,
    "height": 512
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34744717942",
    "contactType": "customer service",
    "email": "local@gastroseo.com",
    "availableLanguage": ["Spanish", "English"]
  },
  "foundingDate": "2023",
  "numberOfEmployees": "5-10",
  "slogan": "Te Traemos Más Clientes o Te Devolvemos El Dinero"
});

export const getServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marketing Digital para Restaurantes",
  "description": "Servicios especializados de SEO y SEM local para restaurantes con garantía de resultados",
  "provider": {
    "@id": "https://gastromaps.pro/#organization"
  },
  "areaServed": {
    "@type": "Country",
    "name": "España"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios GastroMaps.pro",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Local Orgánico",
          "description": "Posicionamiento natural en Google Maps y búsquedas locales para restaurantes"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "price": "297-497"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "SEM Local Pagado",
          "description": "Publicidad geo-localizada en Google Ads para restaurantes"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "EUR",
          "price": "397-797"
        }
      }
    ]
  }
});

export const getFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona la garantía de resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si no consigues al menos un 40% más de clientes en 90 días, te devolvemos íntegramente tu inversión. Es un compromiso por contrato sin letra pequeña."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tardan en verse los primeros resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con SEM (publicidad pagada) los primeros clientes llegan en 48-72 horas. Con SEO orgánico, los primeros resultados aparecen entre 2-4 semanas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Trabajáis solo con restaurantes grandes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, trabajamos con restaurantes de todos los tamaños. Desde pequeños locales familiares hasta cadenas de restaurantes. Cada estrategia se personaliza según el tamaño y objetivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a GastroMaps de otras agencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Somos la única agencia especializada exclusivamente en restaurantes que ofrece garantía de resultados por contrato con devolución del 100% del dinero si no cumplimos."
      }
    }
  ]
});

export const getBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const getHowToSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo conseguir más clientes para tu restaurante",
  "description": "Proceso paso a paso para aumentar las reservas de tu restaurante con marketing digital",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Análisis Inicial",
      "text": "Realizamos una auditoría completa de tu presencia digital actual y analizamos a tu competencia local.",
      "position": 1
    },
    {
      "@type": "HowToStep", 
      "name": "Estrategia Personalizada",
      "text": "Diseñamos un plan específico combinando SEO local y publicidad geo-localizada según tus objetivos.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Implementación",
      "text": "Ejecutamos la estrategia optimizando tu Google My Business, creando contenido y lanzando campañas publicitarias.",
      "position": 3
    },
    {
      "@type": "HowToStep",
      "name": "Seguimiento",
      "text": "Monitorizamos resultados diariamente y ajustamos la estrategia para maximizar el retorno de inversión.",
      "position": 4
    }
  ],
  "totalTime": "P90D",
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Presencia digital del restaurante"
    }
  ]
});
