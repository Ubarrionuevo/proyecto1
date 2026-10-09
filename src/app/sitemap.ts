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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route === '/' ? '' : route}`,
    lastModified,
    changeFrequency: route === '/' ? 'weekly' : ('monthly' as const),
    priority: route === '/' ? 1 : 0.8,
  }));
}
