import { siteConfig } from '@/lib/site';

/* JSON-LD con JSON.stringify: el JSON siempre sale válido por construcción.
   Sin aggregateRating ni reviews propias: Google no muestra estrellas de
   reseñas del propio negocio. */

const CONTEXT = 'https://schema.org';

function sameAs(): string[] {
  return [siteConfig.googleMapsUrl, siteConfig.instagramUrl, siteConfig.facebookUrl].filter(
    (url): url is string => url.length > 0
  );
}

export function localBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': CONTEXT,
    '@type': 'Store',
    name: siteConfig.name,
    alternateName: 'La Princesa Cta',
    description: `Regalos a domicilio en ${siteConfig.city}: desayunos sorpresa y ramos de golosinas.`,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    image: [`${siteConfig.url}/og-laprincesacta.jpg`],
    logo: `${siteConfig.url}/og-laprincesacta.jpg`,
    hasMap: siteConfig.googleMapsUrl,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '23:00',
    },
    areaServed: {
      '@type': 'City',
      name: siteConfig.city,
    },
  };
  const links = sameAs();
  if (links.length > 0) data.sameAs = links;
  return data;
}

export function websiteJsonLd() {
  return {
    '@context': CONTEXT,
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'es-AR',
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path?: string }[]) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.path ? { item: `${siteConfig.url}${item.path}` } : {}),
    })),
  };
}

/* ItemList de las páginas de categoría: enlaza cada ficha, sin precios. */
export function itemListJsonLd(
  items: { name: string; urlPath: string; image: string }[]
) {
  return {
    '@context': CONTEXT,
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `${siteConfig.url}${item.urlPath}`,
      image: `${siteConfig.url}${item.image}`,
    })),
  };
}

/* Service: para páginas de servicio (cartas personalizadas, regalos
   empresariales). Declara el alcance real (ciudad/país) y el proveedor,
   sin precios ni valoraciones inventadas. */
export function serviceJsonLd({
  name,
  description,
  urlPath,
  serviceType,
  areaServed,
}: {
  name: string;
  description: string;
  urlPath: string;
  serviceType: string;
  areaServed: Record<string, unknown> | Record<string, unknown>[];
}) {
  return {
    '@context': CONTEXT,
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${siteConfig.url}${urlPath}`,
    areaServed,
    provider: {
      '@type': 'Store',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: `+${siteConfig.whatsappNumber}`,
      image: `${siteConfig.url}/og-laprincesacta.jpg`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.city,
        addressRegion: siteConfig.region,
        addressCountry: siteConfig.country,
      },
    },
  };
}

/* VideoObject: solo para videos reales publicados en la ficha. */
export function videoJsonLd({
  name,
  description,
  thumbnail,
  contentPath,
  uploadDate,
  duration,
}: {
  name: string;
  description: string;
  thumbnail: string;
  contentPath: string;
  uploadDate: string;
  duration: string;
}) {
  return {
    '@context': CONTEXT,
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: [`${siteConfig.url}${thumbnail}`],
    contentUrl: `${siteConfig.url}${contentPath}`,
    /* Google pide fecha con hora y zona horaria: si viene solo la fecha
       (AAAA-MM-DD), se completa con el mediodía de Argentina. */
    uploadDate: /^\d{4}-\d{2}-\d{2}$/.test(uploadDate)
      ? `${uploadDate}T12:00:00-03:00`
      : uploadDate,
    duration,
  };
}

export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  const list = Array.isArray(data) ? data : [data];
  return (
    <>
      {list.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
