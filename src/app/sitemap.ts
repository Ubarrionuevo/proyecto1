import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

/* Todas las páginas indexables. Cuando se agregue una página, sumarla acá. */
const routes = [
  '/',
  '/catalogo',
  '/desayunos-sorpresa-catamarca',
  '/ramos-de-golosinas-catamarca',
  '/dia-de-la-madre',
  '/enviar-regalo-a-catamarca',
  '/desayunos/caja-de-madera',
  '/desayunos/caja-de-carton',
  '/ramos/ramo-comun',
  '/ramos/ramo-con-oso',
  '/ramos/ramo-de-chocolates',
  '/ramos/ramo-futbolero',
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
