import { cajas, desayunos, ramos } from './products';
import { productLinks } from './site';
import type { ProductPageData } from '@/components/ProductDetail';

/* Un slug por producto, con nombre SEO y relacionados de la misma categoría. */

const hrefById: Record<string, string> = Object.fromEntries(
  productLinks.map((link) => [link.id, link.href])
);

/* Se usa como anchor text de los enlaces internos: describe el producto. */
const seoNameById: Record<string, string> = Object.fromEntries(
  productLinks.map((link) => [link.id, link.label])
);

function relatedIn(list: typeof desayunos, currentId: string) {
  return list
    .filter((p) => p.id !== currentId)
    .map((p) => ({ name: seoNameById[p.id], price: p.price, href: hrefById[p.id] }));
}

export const productPages: Record<string, ProductPageData> = {
  'caja-de-madera': {
    product: desayunos[0],
    seoName: seoNameById['desayuno-caja-madera'],
    categoryName: 'Desayunos sorpresa',
    categoryPath: '/desayunos-sorpresa-catamarca',
    urlPath: hrefById['desayuno-caja-madera'],
    related: relatedIn(desayunos, 'desayuno-caja-madera'),
    forWhom:
      'Para quien quiere que el regalo dure más que la mañana: la madera se queda y muchas familias la vuelven a usar para guardar cosas. Por algo es la que más pedimos.',
    occasions:
      'Un cumpleaños, un aniversario, un agradecimiento o un regalo espontáneo, y también fechas como el Día de la Madre o Navidad.',
  },
  'caja-de-carton': {
    product: desayunos[1],
    seoName: seoNameById['desayuno-caja-carton'],
    categoryName: 'Desayunos sorpresa',
    categoryPath: '/desayunos-sorpresa-catamarca',
    urlPath: hrefById['desayuno-caja-carton'],
    related: relatedIn(desayunos, 'desayuno-caja-carton'),
    forWhom:
      'Para quien quiere la misma sorpresa que la caja de madera, con presentación de cartón premium: café, delicias, taza personalizada y la nota a mano.',
    occasions:
      'Un saludo de cumpleaños, un “gracias” o un “te extraño” cuando no podés estar ahí, y cualquier fecha en la que quieras llegar a su puerta a la mañana.',
  },
  'ramo-comun': {
    product: ramos[0],
    seoName: seoNameById['ramo-comun'],
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: hrefById['ramo-comun'],
    related: relatedIn(ramos, 'ramo-comun'),
    forWhom:
      'Para los que disfrutan de todo un poco: trae golosinas de todo tipo y es el ramo que más enviamos a las familias, porque se comparte.',
    occasions:
      'Un cumpleaños, un festejo en familia o un mimo sin motivo. Va solo o sumado a cualquier desayuno.',
  },
  'ramo-futbolero': {
    product: ramos[1],
    seoName: seoNameById['ramo-futbolero'],
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: hrefById['ramo-futbolero'],
    related: relatedIn(ramos, 'ramo-futbolero'),
    forWhom:
      'Para los hinchas que no se pierden un partido. Lo armamos por pedido con los colores del club, los escudos y la camiseta adentro: nos decís el equipo y lo dejamos a tu manera.',
    occasions:
      'El cumpleaños de tu viejo, de tu hermano o de ese amigo con el que ves los partidos a la distancia, o el día en que su equipo juega una final.',
  },
  'ramo-de-chocolates': {
    product: ramos[2],
    seoName: seoNameById['ramo-chocolates'],
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: hrefById['ramo-chocolates'],
    related: relatedIn(ramos, 'ramo-chocolates'),
    forWhom:
      'Para quien prefiere el chocolate antes que cualquier otra golosina y para cuando buscás un gesto elegante: es todo chocolate, con envuelto fino y moño.',
    occasions:
      'Un aniversario, un agradecimiento o una fecha en la que querés quedar bien de verdad. Va solo o sumado a un desayuno.',
  },
  'ramo-con-oso': {
    product: ramos[3],
    seoName: seoNameById['ramo-oso'],
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: hrefById['ramo-oso'],
    related: relatedIn(ramos, 'ramo-oso'),
    forWhom:
      'Es el que más se regala para novios y para chicas: combina golosinas con un oso de peluche que queda de recuerdo cuando las golosinas ya se terminaron.',
    occasions:
      'Un aniversario, un cumpleaños o una reconciliación, y esos días en que la distancia pesa y querés que tenga algo tuyo cerca.',
  },
  'ramo-de-peluche': {
    product: ramos[4],
    seoName: seoNameById['ramo-peluche'],
    categoryName: 'Ramos de golosinas',
    categoryPath: '/ramos-de-golosinas-catamarca',
    urlPath: hrefById['ramo-peluche'],
    related: relatedIn(ramos, 'ramo-peluche'),
    forWhom:
      'Para quien quiere un regalo que dure: las golosinas se comen y el peluche queda de recuerdo.',
    occasions:
      'Un cumpleaños, un saludo de felicidades o un mimo sin motivo. Va solo o sumado a un desayuno.',
  },
  /* Cajas: no tienen landing propia, así que la categoría es la página de regalos. */
  'corazon-transparente': {
    product: cajas[0],
    seoName: seoNameById['corazon-transparente'],
    categoryName: 'Regalos',
    categoryPath: '/regalos-en-catamarca',
    urlPath: hrefById['corazon-transparente'],
    related: relatedIn(cajas, 'corazon-transparente'),
    forWhom:
      'Para quien es más de chocolate que de flores: un detalle chico y lindo de ver, que se regala entero o se comparte.',
    occasions:
      'Un aniversario, San Valentín, un “te amo” sin fecha o un perdón. También sirve para saludar desde lejos.',
  },
  'caja-ventana-corazon': {
    product: cajas[1],
    seoName: seoNameById['caja-ventana-corazon'],
    categoryName: 'Regalos',
    categoryPath: '/regalos-en-catamarca',
    urlPath: hrefById['caja-ventana-corazon'],
    related: relatedIn(cajas, 'caja-ventana-corazon'),
    forWhom:
      'Para tu pareja o para alguien especial: se abre como un regalo y la tarjeta lleva tus palabras escritas a mano.',
    occasions:
      'Un aniversario, San Valentín, un cumpleaños o un mimo para decirle lo que sentís.',
  },
  'caja-crema-te-amo': {
    product: cajas[2],
    seoName: seoNameById['caja-crema-te-amo'],
    categoryName: 'Regalos',
    categoryPath: '/regalos-en-catamarca',
    urlPath: hrefById['caja-crema-te-amo'],
    related: relatedIn(cajas, 'caja-crema-te-amo'),
    forWhom:
      'Para quien busca una presentación elegante y un mensaje claro desde antes de abrirla: “Te amo” en letras doradas.',
    occasions: 'Un aniversario, San Valentín o cualquier día en que quieras decirle “te amo”.',
  },
};

/* Ficha de cada producto por id, para enlazar desde home, catálogo y landings. */
export const productPageById: Record<string, ProductPageData> = Object.fromEntries(
  Object.values(productPages).map((page) => [page.product.id, page])
);
