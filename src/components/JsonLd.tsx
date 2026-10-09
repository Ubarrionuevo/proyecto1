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
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsappNumber}`,
    image: [`${siteConfig.url}/og-laprincesacta.jpg`],
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

export function productJsonLd({
  name,
  description,
  image,
  price,
  urlPath,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  urlPath: string;
}) {
  return {
    '@context': CONTEXT,
    '@type': 'Product',
    name,
    description,
    image: [`${siteConfig.url}${image}`],
    brand: { '@type': 'Brand', name: siteConfig.name },
    offers: {
      '@type': 'Offer',
      url: `${siteConfig.url}${urlPath}`,
      priceCurrency: 'ARS',
      /* Precios como "$39.000": se normalizan a número para el schema. */
      price: price.replace(/[$.]/g, ''),
      availability: 'https://schema.org/InStock',
    },
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
