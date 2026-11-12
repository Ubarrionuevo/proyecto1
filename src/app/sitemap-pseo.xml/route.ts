import { guides } from '@/lib/guias';
import { localityLinks, originLinks, productLinks, provinceLinks, siteConfig } from '@/lib/site';

/* Páginas que salen de una plantilla: por origen (OriginPage), fichas de
   producto y guías de regalo (GuidePage). Se arma desde las mismas listas que usa el Footer, así una página
   nueva entra sola. Estas URL no van en sitemap.ts, para no repetirlas. Igual
   que allá, no se declara `lastmod` porque no hay una fecha real por página. */

export const dynamic = 'force-static';

function body() {
  const guideLinks = [
    { href: '/guias-de-regalo' },
    ...guides.map((g) => ({ href: `/guias-de-regalo/${g.slug}` })),
  ];
  const urls = [...originLinks, ...provinceLinks, ...localityLinks, ...productLinks, ...guideLinks].map((link) =>
    [
      '  <url>',
      `    <loc>${siteConfig.url}${link.href}</loc>`,
      '    <changefreq>monthly</changefreq>',
      '    <priority>0.8</priority>',
      '  </url>',
    ].join('\n'),
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');
}

export function GET() {
  return new Response(body(), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
