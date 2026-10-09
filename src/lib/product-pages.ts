import { desayunos, ramos } from './products';
import type { ProductPageData } from '@/components/ProductDetail';

/* Un slug por producto, con nombre SEO y relacionados de la misma categoría. */

function relatedIn(
  list: typeof desayunos,
  currentId: string,
  hrefOf: (id: string) => string
) {
  return list
    .filter((p) => p.id !== currentId)
    .map((p) => ({ name: p.name, price: p.price, href: hrefOf(p.id) }));
}

const desayunoHref = (id: string) =>
  id === 'desayuno-caja-madera' ? '/desayunos/caja-de-madera' : '/desayunos/caja-de-carton';

const ramoHref = (id: string) =>
  ({
    'ramo-comun': '/ramos/ramo-comun',
    'ramo-futbolero': '/ramos/ramo-futbolero',
    'ramo-de-chocolates': '/ramos/ramo-de-chocolates',
    'ramo-oso': '/ramos/ramo-con-oso',
  })[id] ?? '/catalogo';

export const productPages: Record<string, ProductPageData> = {
  'caja-de-madera': {
    product: desayunos[0],
    seoName: 'Desayuno sorpresa en caja de madera',
    categoryName: 'Desayunos sorpresa',
    categoryPath: '/desayunos-sorpresa-catamarca',
    urlPath: '/desayunos/caja-de-madera',
    related: relatedIn(desayunos, 'desayuno-caja-madera', desayunoHref),
  },
  'caja-de-carton': {
    product: desayunos[1],
    seoName: 'Desayuno sorpresa en caja de cartón',
    categoryName: 'Desayunos sorpresa',
    categoryPath: '/desayunos-sorpresa-catamarca',
    urlPath: '/desayunos/caja-de-carton',
    related: relatedIn(desayunos, 'desayuno-caja-carton', desayunoHref),
  },
  'ramo-comun': {
    product: ramos[0],
    seoName: 'Ramo común de golosinas',
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: '/ramos/ramo-comun',
    related: relatedIn(ramos, 'ramo-comun', ramoHref),
  },
  'ramo-futbolero': {
    product: ramos[1],
    seoName: 'Ramo futbolero de golosinas',
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: '/ramos/ramo-futbolero',
    related: relatedIn(ramos, 'ramo-futbolero', ramoHref),
  },
  'ramo-de-chocolates': {
    product: ramos[2],
    seoName: 'Ramo de chocolates',
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: '/ramos/ramo-de-chocolates',
    related: relatedIn(ramos, 'ramo-de-chocolates', ramoHref),
  },
  'ramo-con-oso': {
    product: ramos[3],
    seoName: 'Ramo con oso de peluche',
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: '/ramos/ramo-con-oso',
    related: relatedIn(ramos, 'ramo-oso', ramoHref),
  },
};
