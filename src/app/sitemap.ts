import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

/* Páginas indexables escritas a mano. Cuando se agregue una, sumarla acá. Las
   que salen de una plantilla (por origen y fichas) van en sitemap-pseo.xml. */
const routes = [
  '/',
  '/regalos-en-catamarca',
  '/catalogo',
  '/desayunos-sorpresa-catamarca',
  '/ramos-de-golosinas-catamarca',
  '/dia-de-la-madre',
  '/navidad',
  '/enviar-regalo-a-catamarca',
  '/cartas-personalizadas',
  '/regalos-empresariales',
  '/regalos-personalizados-catamarca',
];

/* No se declara `lastModified`: no hay una fecha real por página que se pueda
   determinar de forma fiable en build, y no se inventan fechas. Si en el futuro
   se conoce la fecha real de cada página, se agrega por-url. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    changeFrequency: route === '/' ? 'weekly' : ('monthly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));
}
