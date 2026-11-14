import { facts } from '@/components/QuickFacts';
import { guides } from '@/lib/guias';
import { cajas, desayunos, ramos } from '@/lib/products';
import { countryLinks, localityLinks, originLinks, productLinks, provinceLinks, siteConfig } from '@/lib/site';

/* Resumen en texto plano para asistentes de IA. Sale de las mismas fuentes que
   la web y no publica precios: los campos price de products.ts no se usan acá. */

export const dynamic = 'force-static';

const url = (path: string) => `${siteConfig.url}${path}`;

function productLines() {
  return [...desayunos, ...ramos, ...cajas].map((product) => {
    const link = productLinks.find((item) => item.id === product.id);
    return `- [${link?.label ?? product.name}](${url(link?.href ?? '/catalogo')}): ${product.description} ${product.detail}`;
  });
}

function body() {
  return [
    `# ${siteConfig.name}`,
    '',
    `> Regalería de Catamarca con regalos a domicilio: desayunos sorpresa y ramos de golosinas, con entrega en ${siteConfig.city}, ${siteConfig.region}, Argentina. Se pide por WhatsApp, también desde otras provincias y desde el exterior.`,
    '',
    '## Datos esenciales',
    '',
    ...facts.map((fact) => `- ${fact.t}: ${fact.d}`),
    '- Flores: no se venden. Los ramos son de golosinas y de chocolates.',
    '',
    '## Productos',
    '',
    ...productLines(),
    '',
    '## Enviar un regalo desde lejos',
    '',
    `- [Enviar un regalo a Catamarca](${url('/enviar-regalo-a-catamarca')}): cómo pedir y pagar si no estás en la ciudad.`,
    ...originLinks.map((link) => `- [${link.label}](${url(link.href)})`),
    ...countryLinks.map((link) => `- [${link.label}](${url(link.href)})`),
    ...provinceLinks.map((link) => `- [${link.label}](${url(link.href)})`),
    '',
    `Desde el interior de Catamarca (la entrega es siempre en ${siteConfig.city}, no en estas localidades):`,
    ...localityLinks.map((link) => `- [${link.label}](${url(link.href)})`),
    '',
    '## Guías de regalo',
    '',
    `- [Guías de regalo](${url('/guias-de-regalo')}): qué regalar según para quién y cómo sorprender.`,
    ...guides.map((g) => `- [${g.label}](${url(`/guias-de-regalo/${g.slug}`)}): ${g.description}`),
    '',
    '## Páginas principales',
    '',
    `- [Inicio](${url('/')})`,
    `- [Regalos en Catamarca a domicilio](${url('/regalos-en-catamarca')})`,
    `- [Catálogo](${url('/catalogo')})`,
    `- [Desayunos sorpresa en Catamarca](${url('/desayunos-sorpresa-catamarca')})`,
    `- [Ramos de golosinas en Catamarca](${url('/ramos-de-golosinas-catamarca')})`,
    `- [Regalos para el Día de la Madre](${url('/dia-de-la-madre')})`,
    `- [Regalos de Navidad](${url('/navidad')})`,
    `- [Regalos personalizados en Catamarca](${url('/regalos-personalizados-catamarca')})`,
    `- [Cartas personalizadas](${url('/cartas-personalizadas')})`,
    `- [Regalos empresariales](${url('/regalos-empresariales')})`,
    '',
  ].join('\n');
}

export function GET() {
  return new Response(body(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
