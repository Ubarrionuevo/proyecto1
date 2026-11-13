import { siteConfig } from './site';
import type { FaqItem } from './faqs';

/* Guías de regalo: "qué regalar" según para quién o la ocasión, y "cómo"
   (sorpresa, tarjeta, elegir). Es la versión regalería del glosario.

   Reglas: solo se usan datos que ya están publicados en la web (productos,
   entrega solo en la Capital, pago, horario, foto de la entrega). Sin precios,
   sin plazos, sin contenidos de productos que el dueño no confirmó. Los
   mensajes de ejemplo para la tarjeta son propios, no copiados. */

const { city, hoursCopy } = siteConfig;

export type GuideLink = { href: string; name: string };
export type GuideItem = { t: string; d: string; links?: GuideLink[] };
export type GuideSection = { h2: string; paragraphs?: string[]; items?: GuideItem[]; list?: string[] };

export type Guide = {
  slug: string;
  kind: 'que-regalar' | 'como';
  /* Texto del enlace en listas y footer. */
  label: string;
  crumb: string;
  title: string;
  description: string;
  h1: string;
  lead: string[];
  sections: GuideSection[];
  faqs: FaqItem[];
  whatsapp: string;
  cta: string;
};

/* Fichas de producto (mismas URL que productLinks en site.ts). */
const P = {
  madera: { href: '/desayunos/caja-de-madera', name: 'Desayuno en caja de madera' },
  carton: { href: '/desayunos/caja-de-carton', name: 'Desayuno en caja de cartón' },
  comun: { href: '/ramos/ramo-comun', name: 'Ramo común de golosinas' },
  futbolero: { href: '/ramos/ramo-futbolero', name: 'Ramo futbolero' },
  chocolates: { href: '/ramos/ramo-de-chocolates', name: 'Ramo de chocolates' },
  oso: { href: '/ramos/ramo-con-oso', name: 'Ramo con oso de peluche' },
  peluche: { href: '/ramos/ramo-de-peluche', name: 'Ramo de peluche con conejito' },
  corazon: { href: '/cajas/corazon-transparente', name: 'Corazón transparente con bombones' },
  ventana: { href: '/cajas/caja-ventana-corazon', name: 'Caja de ventana de corazón' },
  crema: { href: '/cajas/caja-crema-te-amo', name: 'Caja crema Te amo' },
  cartas: { href: '/cartas-personalizadas', name: 'Cartas personalizadas' },
};

const entrega: FaqItem = {
  q: '¿Dónde lo entregan?',
  a: `Solo en ${city}. Vos podés estar en otra provincia o en otro país; quien lo recibe tiene que estar en la Capital de Catamarca.`,
};

const precio: FaqItem = {
  q: '¿Cuánto sale?',
  a: 'Te pasamos los precios actualizados por WhatsApp, según el producto y lo que quieras sumar.',
};

const anticipacion: FaqItem = {
  q: '¿Con cuánta anticipación tengo que pedir?',
  a: 'No tenemos un plazo fijo publicado. Escribinos por WhatsApp con la fecha que necesitás y te confirmamos la disponibilidad.',
};

/* ---------- Qué regalar ---------- */

const queRegalar: Guide[] = [
  {
    slug: 'que-regalarle-a-mama',
    kind: 'que-regalar',
    label: 'Qué regalarle a mamá',
    crumb: 'Qué regalarle a mamá',
    title: 'Qué Regalarle a Mamá: Ideas a Domicilio en Catamarca',
    description:
      'Ideas para regalarle a tu mamá en Catamarca: desayunos sorpresa, ramos de golosinas y chocolates, con nota para tu mensaje. Entrega a domicilio en la Capital.',
    h1: 'Qué regalarle a mamá: ideas que llegan a su puerta en Catamarca',
    lead: [
      'A una mamá rara vez le hace falta una cosa más. Lo que se acuerda es el gesto: que alguien pensó en ella, le armó algo lindo y se lo llevó hasta la casa.',
      `Por eso las ideas de esta guía son para disfrutar en el momento y para leer: un desayuno, algo dulce y unas palabras tuyas. Todo se entrega en ${city}.`,
    ],
    sections: [
      {
        h2: 'Ideas según cómo es tu mamá',
        items: [
          {
            t: 'La que arranca el día con un café',
            d: 'Un desayuno sorpresa: café o té, delicias artesanales, una taza y una nota escrita a mano. La caja de madera después le sirve para guardar cosas.',
            links: [P.madera, P.carton],
          },
          {
            t: 'La que siempre tiene algo dulce escondido',
            d: 'Un ramo de chocolates o un ramo de golosinas, armados y envueltos para regalar. Una alternativa a las flores que se disfruta varios días.',
            links: [P.chocolates, P.comun],
          },
          {
            t: 'La que guarda todas las tarjetas',
            d: 'Sumale una carta personalizada con lo que nunca le dijiste en voz alta. Es lo que más se relee.',
            links: [P.cartas],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Elegí un horario en el que sepas que va a estar en casa. Lo coordinamos por WhatsApp.',
          'Si es sorpresa, avisanos: así sabemos con quién coordinar la entrega.',
          'Escribí el mensaje con tus palabras, aunque sea corto. Si no sabés qué poner, mirá la guía de qué escribir en la tarjeta.',
          'Si estás lejos, te mandamos foto o video de la entrega: ves su cara aunque no estés.',
        ],
      },
      {
        h2: 'Si es para el Día de la Madre',
        paragraphs: [
          'En Argentina se festeja el tercer domingo de octubre y son días de muchos pedidos. Tenemos una página con todo lo de esa fecha.',
        ],
        items: [{ t: 'Regalos para el Día de la Madre', d: 'Ideas y cómo pedir para esa fecha.', links: [{ href: '/dia-de-la-madre', name: 'Ver regalos para el Día de la Madre' }] }],
      },
    ],
    faqs: [
      {
        q: '¿Qué le puedo regalar a mi mamá en Catamarca?',
        a: `Un desayuno sorpresa, un ramo de golosinas o de chocolates, o una caja con chocolates, entregados a domicilio en ${city}. Se piden por WhatsApp, ${hoursCopy}.`,
      },
      {
        q: '¿Puedo mandarle un regalo a mi mamá si vivo en otra provincia?',
        a: 'Sí. Lo pedís por WhatsApp, pagás por transferencia en pesos y te mandamos foto o video de la entrega.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo para mi mamá',
    cta: 'Quiero un regalo para mi mamá',
  },
  {
    slug: 'que-regalarle-a-mi-novia',
    kind: 'que-regalar',
    label: 'Qué regalarle a tu novia',
    crumb: 'Qué regalarle a mi novia',
    title: 'Qué Regalarle a mi Novia: Ideas a Domicilio en Catamarca',
    description:
      'Ideas para sorprender a tu novia en Catamarca: ramo con oso, chocolates en caja de corazón o un desayuno sorpresa en su puerta. Pedilo por WhatsApp.',
    h1: 'Qué regalarle a tu novia: ideas para sorprenderla en Catamarca',
    lead: [
      'Lo que más sorprende no es lo más grande: es que llegue sin aviso, a su puerta, con un mensaje que solo vos le podés escribir.',
      `Estas son las ideas que más se eligen para una novia. Todas se entregan a domicilio en ${city}, también si vos estás lejos.`,
    ],
    sections: [
      {
        h2: 'Ideas según el momento',
        items: [
          {
            t: 'Para un mimo sin motivo',
            d: 'El ramo con oso de peluche es el que más se regala para novias: golosinas y un oso envuelto para que llegue entero.',
            links: [P.oso, P.peluche],
          },
          {
            t: 'Para decir "te amo" sin vueltas',
            d: 'Chocolates en una caja con forma de corazón, con moño y tarjeta para tu mensaje.',
            links: [P.ventana, P.corazon, P.crema],
          },
          {
            t: 'Para arrancarle bien el día',
            d: 'Un desayuno sorpresa con una nota escrita a mano. Sirve para un cumple, un aniversario o un lunes cualquiera.',
            links: [P.madera, P.carton],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Pensá a qué hora la encontrás en casa y si vive con alguien que te pueda ayudar con la sorpresa.',
          'Contanos qué le gusta: chocolate, golosinas, un color. Lo armamos a tu manera.',
          'El mensaje es lo que más pesa. Dos líneas tuyas valen más que una frase hecha.',
          'Si están a distancia, te mandamos foto o video de la entrega.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué le regalo a mi novia en Catamarca?',
        a: `Lo que más se elige es el ramo con oso de peluche, los chocolates en caja de corazón y el desayuno sorpresa. Se entregan a domicilio en ${city}.`,
      },
      {
        q: '¿Puede ser sorpresa?',
        a: 'Sí. Avisanos que es sorpresa y coordinamos por WhatsApp cómo hacer la entrega.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo para mi novia',
    cta: 'Quiero sorprender a mi novia',
  },
  {
    slug: 'que-regalarle-a-mi-novio',
    kind: 'que-regalar',
    label: 'Qué regalarle a tu novio',
    crumb: 'Qué regalarle a mi novio',
    title: 'Qué Regalarle a mi Novio: Ideas a Domicilio en Catamarca',
    description:
      'Ideas para regalarle a tu novio en Catamarca: ramo futbolero de su club, ramo de chocolates o desayuno sorpresa. Entrega a domicilio en la Capital.',
    h1: 'Qué regalarle a tu novio: ideas que sí van a usar (y comer)',
    lead: [
      'Con los varones la duda es siempre la misma: "no le gustan las flores, ¿qué le regalo?". La respuesta casi siempre está en lo que le gusta comer o en su club.',
      `Estas ideas se entregan a domicilio en ${city} y se piden por WhatsApp.`,
    ],
    sections: [
      {
        h2: 'Ideas según cómo es',
        items: [
          {
            t: 'El que no se pierde un partido',
            d: 'El ramo futbolero se arma con los colores de su club y la camiseta adentro, junto con golosinas y escudos. Decinos el equipo.',
            links: [P.futbolero],
          },
          {
            t: 'El fanático del chocolate',
            d: 'Un ramo todo de chocolate, con envuelto fino y moño.',
            links: [P.chocolates],
          },
          {
            t: 'El que nunca desayuna bien',
            d: 'Un desayuno sorpresa con café o té, delicias y una nota escrita a mano.',
            links: [P.madera, P.carton],
          },
          {
            t: 'El que es más tierno de lo que admite',
            d: 'Un ramo con oso de peluche o un corazón con bombones.',
            links: [P.oso, P.corazon],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Si va el ramo futbolero, confirmá bien el club: es lo único que no se puede adivinar.',
          'Elegí un horario en el que esté en casa. Lo coordinamos por WhatsApp.',
          'Un mensaje corto y con humor suele funcionar mejor que uno largo.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué le regalo a mi novio si no le gustan las flores?',
        a: 'Un ramo de golosinas, de chocolates o el ramo futbolero con los colores de su club. No vendemos flores: todos nuestros ramos son de golosinas o de chocolates.',
      },
      {
        q: '¿El ramo futbolero se arma de cualquier club?',
        a: 'Se arma por pedido con los colores del club que nos digas y la camiseta adentro. Consultanos por WhatsApp.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo para mi novio',
    cta: 'Quiero un regalo para mi novio',
  },
  {
    slug: 'que-regalarle-a-una-amiga',
    kind: 'que-regalar',
    label: 'Qué regalarle a una amiga',
    crumb: 'Qué regalarle a una amiga',
    title: 'Qué Regalarle a una Amiga: Ideas a Domicilio en Catamarca',
    description:
      'Ideas para regalarle a una amiga en Catamarca: ramos de golosinas, de chocolates, con peluche o un desayuno sorpresa. Pedilo por WhatsApp.',
    h1: 'Qué regalarle a una amiga: ideas para hacerle el día en Catamarca',
    lead: [
      'A una amiga se le regala para festejar, para acompañar o simplemente para decirle "me acordé de vos". Cualquiera de las tres vale.',
      `Estas ideas se llevan hasta su puerta en ${city}, aunque vos estés en otra ciudad.`,
    ],
    sections: [
      {
        h2: 'Ideas según la ocasión',
        items: [
          {
            t: 'Para su cumpleaños',
            d: 'Un ramo común de golosinas o un desayuno sorpresa para arrancar el día festejando.',
            links: [P.comun, P.madera],
          },
          {
            t: 'Para darle ánimo',
            d: 'Algo dulce y una tarjeta: un ramo de chocolates o un ramo de peluche con conejito.',
            links: [P.chocolates, P.peluche],
          },
          {
            t: 'Para un logro: se recibió, consiguió trabajo, se mudó',
            d: 'Un desayuno para la mañana siguiente, con un mensaje de felicitaciones.',
            links: [P.madera, P.carton],
          },
          {
            t: 'Si está lejos de vos',
            d: 'Vos estés donde estés, nosotras se lo llevamos y te mandamos la foto de la entrega.',
            links: [{ href: '/enviar-regalo-a-catamarca', name: 'Cómo pedir desde lejos' }],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Contanos qué le gusta y qué no come: lo armamos a tu manera.',
          'Si quieren regalarle entre varias amigas, una sola persona nos escribe y coordina.',
          'Un chiste interno en la tarjeta vale más que cualquier frase linda.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué le puedo regalar a una amiga en Catamarca?',
        a: `Un ramo de golosinas, de chocolates o con peluche, o un desayuno sorpresa. Se entregan a domicilio en ${city}.`,
      },
      {
        q: '¿Se puede personalizar?',
        a: 'Sí. Podés elegir los sabores, el tema, la decoración y el mensaje. Contanos qué tenés en mente y te pasamos el presupuesto.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo para una amiga',
    cta: 'Quiero un regalo para mi amiga',
  },
  {
    slug: 'que-regalar-de-cumpleanos',
    kind: 'que-regalar',
    label: 'Qué regalar de cumpleaños',
    crumb: 'Qué regalar de cumpleaños',
    title: 'Qué Regalar de Cumpleaños en Catamarca: Ideas a Domicilio',
    description:
      'Ideas de regalos de cumpleaños a domicilio en Catamarca: desayuno sorpresa para la mañana, ramos de golosinas y chocolates. Pedí por WhatsApp.',
    h1: 'Qué regalar de cumpleaños: ideas para que llegue a su puerta',
    lead: [
      'Un cumpleaños tiene una ventaja: sabés la fecha. Eso permite que el regalo llegue justo ese día, a primera hora o cuando la persona esté en casa.',
      `Todo lo que ves acá se entrega en ${city} y se coordina por WhatsApp.`,
    ],
    sections: [
      {
        h2: 'Ideas según para quién',
        items: [
          {
            t: 'Para empezar el día festejando',
            d: 'Un desayuno sorpresa con café o té, delicias y una nota escrita a mano.',
            links: [P.madera, P.carton],
          },
          {
            t: 'Para los chicos',
            d: 'Un ramo de golosinas, un ramo de peluche o el ramo futbolero de su club.',
            links: [P.comun, P.peluche, P.futbolero],
          },
          {
            t: 'Para tu pareja',
            d: 'Un ramo con oso o chocolates en caja de corazón.',
            links: [P.oso, P.ventana],
          },
          {
            t: 'Para alguien que tiene todo',
            d: 'Un ramo de chocolates y una carta personalizada con lo que le querés decir en su día.',
            links: [P.chocolates, P.cartas],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Pensá en el horario: un desayuno se disfruta a la mañana; un ramo queda bien a cualquier hora del día.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué puedo regalar de cumpleaños a domicilio en Catamarca?',
        a: `Un desayuno sorpresa, un ramo de golosinas, de chocolates, futbolero o con peluche. Lo llevamos hasta la puerta en ${city}.`,
      },
      {
        q: '¿Entregan el mismo día del cumpleaños?',
        a: 'Coordinamos el día y el horario por WhatsApp. Escribinos con la fecha y te confirmamos la disponibilidad.',
      },
      anticipacion,
      entrega,
    ],
    whatsapp: 'un regalo de cumpleaños',
    cta: 'Quiero un regalo de cumpleaños',
  },
  {
    slug: 'que-regalar-en-un-aniversario',
    kind: 'que-regalar',
    label: 'Qué regalar en un aniversario',
    crumb: 'Qué regalar en un aniversario',
    title: 'Qué Regalar en un Aniversario: Ideas a Domicilio en Catamarca',
    description:
      'Ideas para un aniversario de novios o de casados en Catamarca: desayuno sorpresa, chocolates en caja de corazón y cartas. Entrega a domicilio.',
    h1: 'Qué regalar en un aniversario: ideas para celebrar en Catamarca',
    lead: [
      'En un aniversario el regalo es casi una excusa: lo importante es lo que dice. Por eso todas estas ideas van con un mensaje tuyo.',
      `Se entregan a domicilio en ${city}, también si están a distancia.`,
    ],
    sections: [
      {
        h2: 'Ideas para un aniversario',
        items: [
          {
            t: 'Desayuno en la cama',
            d: 'Un desayuno sorpresa que llega a la mañana, con una nota escrita a mano.',
            links: [P.madera, P.carton],
          },
          {
            t: 'Chocolates con forma de corazón',
            d: 'Una caja con ventana de corazón, un corazón transparente o la caja crema Te amo.',
            links: [P.ventana, P.corazon, P.crema],
          },
          {
            t: 'Algo para guardar',
            d: 'Una carta personalizada que repase lo que vivieron juntos.',
            links: [P.cartas],
          },
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Si viven juntos, el desayuno funciona mejor si no sos vos quien abre la puerta.',
          'Nombrá algo concreto en el mensaje: un lugar, una fecha, un chiste de ustedes.',
          'Si están lejos, te mandamos foto o video de la entrega.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué le regalo a mi pareja en nuestro aniversario?',
        a: `Un desayuno sorpresa, chocolates en caja de corazón o una carta personalizada, entregados en ${city}.`,
      },
      {
        q: '¿Puedo poner mi propio mensaje?',
        a: 'Sí. Los desayunos traen una nota escrita a mano con lo que quieras decirle, y las cajas llevan tarjeta para tu mensaje.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo de aniversario',
    cta: 'Quiero un regalo de aniversario',
  },
  {
    slug: 'que-regalarle-a-un-hincha-de-futbol',
    kind: 'que-regalar',
    label: 'Qué regalarle a un hincha',
    crumb: 'Qué regalarle a un hincha de fútbol',
    title: 'Qué Regalarle a un Hincha de Fútbol en Catamarca',
    description:
      'Qué regalarle a un hincha de fútbol en Catamarca: ramo futbolero con los colores de su club, camiseta y golosinas. Pedilo por WhatsApp.',
    h1: 'Qué regalarle a un hincha de fútbol: el ramo de su club',
    lead: [
      'Para un hincha, lo que lleva los colores del club ya es medio regalo. Si además trae golosinas y llega a su puerta, mejor.',
      `El ramo futbolero se arma por pedido y se entrega en ${city}.`,
    ],
    sections: [
      {
        h2: 'Qué es el ramo futbolero',
        paragraphs: [
          'Un ramo de golosinas armado con los colores del club que nos digas, con escudos y la camiseta adentro. Sirve para papás, novios, hermanos, amigos y chicos.',
        ],
        items: [{ t: 'Ramo futbolero', d: 'Fotos y detalles del ramo.', links: [P.futbolero] }],
      },
      {
        h2: 'Cuándo regalarlo',
        list: [
          'En su cumpleaños.',
          'Cuando su equipo sale campeón (o para consolarlo cuando pierde).',
          'Para el Día del Padre, si es futbolero.',
          'Para un amigo que se fue a vivir lejos y extraña la cancha.',
        ],
      },
      {
        h2: 'Para que salga bien',
        list: [
          'Confirmá bien el club antes de pedir.',
          'Contanos si querés sumarle algo más: lo armamos a tu manera.',
          'Si querés acompañarlo con un desayuno, se puede.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿El ramo futbolero se arma de cualquier club?',
        a: 'Se arma por pedido con los colores del club que nos digas y la camiseta adentro. Consultanos por WhatsApp.',
      },
      {
        q: '¿El ramo va solo o con desayuno?',
        a: 'Las dos opciones: se suma a cualquier desayuno o va solo, como vos quieras.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'el ramo futbolero',
    cta: 'Quiero el ramo de su club',
  },
  {
    slug: 'que-regalar-en-vez-de-flores',
    kind: 'que-regalar',
    label: 'Qué regalar en vez de flores',
    crumb: 'Qué regalar en vez de flores',
    title: 'Qué Regalar en Vez de Flores: Ramos de Golosinas en Catamarca',
    description:
      'Una alternativa a las flores en Catamarca: ramos de golosinas, de chocolates, con oso o con peluche, armados y entregados a domicilio.',
    h1: 'Qué regalar en vez de flores: ramos que se comen',
    lead: [
      'Las flores son lindas, pero a mucha gente no le gustan o le duran poco. Un ramo de golosinas o de chocolates tiene la misma forma de ramo y se disfruta de otra manera.',
      `Nosotras no vendemos flores: todos nuestros ramos son de golosinas o de chocolates y se entregan en ${city}.`,
    ],
    sections: [
      {
        h2: 'Los ramos que reemplazan a las flores',
        items: [
          { t: 'Ramo común de golosinas', d: 'El de siempre, el que más enviamos a las familias.', links: [P.comun] },
          { t: 'Ramo de chocolates', d: 'Todo chocolate, con envuelto fino y moño.', links: [P.chocolates] },
          { t: 'Ramo con oso', d: 'Golosinas y un oso de peluche en el centro.', links: [P.oso] },
          { t: 'Ramo de peluche', d: 'Golosinas alrededor de un conejito u otro peluche.', links: [P.peluche] },
          { t: 'Ramo futbolero', d: 'Con los colores del club y la camiseta adentro.', links: [P.futbolero] },
        ],
      },
      {
        h2: 'Cuándo conviene un ramo de golosinas',
        list: [
          'Cuando la persona no es "de flores".',
          'Para un varón, que pocas veces recibe un ramo.',
          'Para chicos.',
          'Cuando querés que dure más que un par de días.',
        ],
      },
    ],
    faqs: [
      { q: '¿Venden flores?', a: 'No. Nuestros ramos son de golosinas y de chocolates.' },
      {
        q: '¿Qué traen los ramos?',
        a: 'Golosinas armadas en forma de ramo y envueltas para regalar. Según el modelo suman chocolates, golosinas surtidas, camiseta y escudos del club, u oso de peluche.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un ramo de golosinas',
    cta: 'Quiero un ramo de golosinas',
  },
  {
    slug: 'que-regalarle-a-un-hombre',
    kind: 'que-regalar',
    label: 'Qué regalarle a un hombre',
    crumb: 'Qué regalarle a un hombre',
    title: 'Qué Regalarle a un Hombre en Catamarca: Ideas por Edad',
    description:
      'Ideas de regalos para hombres de 30, 40, 50, 60 y 70 años en Catamarca: desayunos, ramo futbolero y chocolates, con entrega a domicilio.',
    h1: 'Qué regalarle a un hombre en Catamarca: ideas según su edad',
    lead: [
      'A los hombres se les regala poco y casi siempre lo mismo. Por eso un regalo que llega a su puerta, armado para él y con un mensaje tuyo, sorprende más de lo que parece.',
      `Ordenamos las ideas por edad porque es como más se busca, pero lo que manda es lo que le gusta. Todo se entrega a domicilio en ${city}.`,
    ],
    sections: [
      {
        h2: 'Regalos para hombres de 30 a 40 años',
        paragraphs: [
          'A esta edad suele pesar lo que le apasiona: su club, el chocolate, algo para compartir con amigos.',
        ],
        items: [
          { t: 'Si es futbolero', d: 'El ramo futbolero se arma con los colores de su club, escudos, golosinas y la camiseta adentro.', links: [P.futbolero] },
          { t: 'Si es goloso', d: 'Un ramo de chocolates con envuelto fino y moño, o un ramo de golosinas.', links: [P.chocolates, P.comun] },
        ],
      },
      {
        h2: 'Regalos para hombres de 40 años',
        paragraphs: [
          'Para un cumpleaños de 40 funciona algo que le cambie la mañana: un desayuno que llega a su casa con una nota tuya.',
        ],
        items: [
          { t: 'Desayuno sorpresa', d: 'Café o té, delicias artesanales, una taza y una nota escrita a mano.', links: [P.madera, P.carton] },
        ],
      },
      {
        h2: 'Regalos para hombres de 50 años',
        paragraphs: [
          'Para los 50 conviene algo que quede: la caja de madera del desayuno se vuelve a usar para guardar cosas.',
        ],
        items: [
          { t: 'Desayuno en caja de madera', d: 'La sorpresa del desayuno y una caja que se queda en su casa.', links: [P.madera] },
          { t: 'Con una carta', d: 'Sumale una carta personalizada con lo que querés decirle en una fecha así.', links: [P.cartas] },
        ],
      },
      {
        h2: 'Regalos para hombres de 60 y 70 años',
        paragraphs: [
          'Para papás y abuelos, muchas veces lo que más se valora es que alguien se acordó y se tomó el trabajo. Un desayuno en su casa y unas palabras escritas para él.',
        ],
        items: [
          { t: 'Desayuno y carta', d: 'Un desayuno sorpresa con una carta personalizada de toda la familia.', links: [P.madera, P.cartas] },
          { t: 'Si es hincha de toda la vida', d: 'El ramo futbolero con los colores de su club.', links: [P.futbolero] },
        ],
      },
      {
        h2: 'Para su cumpleaños',
        list: [
          'Un desayuno sorpresa para que arranque el día festejando.',
          'Un ramo de golosinas o de chocolates si no sabés a qué hora va a estar en casa.',
          'Si están lejos, te mandamos foto o video de la entrega.',
        ],
      },
      {
        h2: 'Ideas originales',
        list: [
          'Un ramo de golosinas en lugar de flores: a un hombre casi nunca le regalan un ramo.',
          'El ramo futbolero de su club.',
          'Un desayuno que llega sin aviso un día cualquiera.',
        ],
      },
    ],
    faqs: [
      {
        q: '¿Qué le puedo regalar a un hombre en Catamarca?',
        a: `Un desayuno sorpresa, un ramo de chocolates o de golosinas, o el ramo futbolero con los colores de su club. Se entregan a domicilio en ${city}.`,
      },
      {
        q: '¿Qué le regalo a un hombre de 50 o 60 años?',
        a: 'Un desayuno en caja de madera, que después le queda para guardar cosas, y una carta personalizada con tu mensaje.',
      },
      {
        q: '¿El ramo futbolero se arma de cualquier club?',
        a: 'Se arma por pedido con los colores del club que nos digas y la camiseta adentro. Consultanos por WhatsApp.',
      },
      entrega,
      precio,
    ],
    whatsapp: 'un regalo para un hombre',
    cta: 'Quiero un regalo para él',
  },
];

/* ---------- Cómo ---------- */

const como: Guide[] = [
  {
    slug: 'como-dar-un-regalo-sorpresa',
    kind: 'como',
    label: 'Cómo dar un regalo sorpresa',
    crumb: 'Cómo dar un regalo sorpresa',
    title: 'Cómo Dar un Regalo Sorpresa a Domicilio en Catamarca',
    description:
      'Paso a paso para que un regalo sorpresa salga bien: elegir el horario, la dirección, el mensaje y la entrega a domicilio en Catamarca.',
    h1: 'Cómo dar un regalo sorpresa (y que salga bien)',
    lead: [
      'Una sorpresa sale bien cuando la persona está en casa, el regalo llega entero y el mensaje es tuyo. Casi todo depende de unos pocos datos.',
      `Esta guía sirve para cualquier regalo, pero está pensada para los que entregamos nosotras en ${city}.`,
    ],
    sections: [
      {
        h2: 'Paso a paso',
        items: [
          { t: '1. Elegí el regalo', d: 'Si no sabés qué, mirá la guía para elegir entre un desayuno y un ramo.', links: [{ href: '/guias-de-regalo/desayuno-o-ramo', name: '¿Desayuno o ramo?' }] },
          { t: '2. Averiguá cuándo está en casa', d: 'Es lo que más arruina una sorpresa. Si podés, preguntale a alguien que viva con esa persona.' },
          { t: '3. Confirmá la dirección', d: 'Calle, número, barrio y alguna referencia. Si es un departamento, el piso.' },
          { t: '4. Escribí el mensaje', d: 'Con tus palabras. Si te trabás, tenés ideas en la guía de qué escribir en la tarjeta.', links: [{ href: '/guias-de-regalo/que-escribir-en-la-tarjeta', name: 'Qué escribir en la tarjeta' }] },
          { t: '5. Avisanos que es sorpresa', d: 'Por WhatsApp coordinamos con vos cómo hacer la entrega.' },
        ],
      },
      {
        h2: 'Si estás lejos',
        paragraphs: [
          'Podés pedir desde otra provincia o desde otro país. Pagás por transferencia en pesos o, desde el exterior, con Prex. Cuando lo entregamos, te mandamos foto o video por WhatsApp.',
        ],
        items: [{ t: 'Enviar un regalo a Catamarca', d: 'Cómo pedir y pagar desde lejos.', links: [{ href: '/enviar-regalo-a-catamarca', name: 'Ver cómo funciona' }] }],
      },
      {
        h2: 'Errores comunes',
        list: [
          'Mandarlo a un horario en el que la persona trabaja.',
          'Dar una dirección incompleta.',
          'Contarle "tengo algo para vos" y arruinar la sorpresa.',
          'Dejar el mensaje para último momento.',
        ],
      },
    ],
    faqs: [
      { q: '¿Cómo coordinan una entrega sorpresa?', a: 'Avisanos por WhatsApp que es sorpresa y coordinamos con vos el día, el horario y cómo hacer la entrega.' },
      { q: '¿Cómo sé que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
      anticipacion,
      entrega,
    ],
    whatsapp: 'un regalo sorpresa',
    cta: 'Quiero armar una sorpresa',
  },
  {
    slug: 'que-escribir-en-la-tarjeta',
    kind: 'como',
    label: 'Qué escribir en la tarjeta',
    crumb: 'Qué escribir en la tarjeta',
    title: 'Qué Escribir en la Tarjeta de un Regalo: Ideas y Ejemplos',
    description:
      'Ideas y ejemplos cortos para la tarjeta de un regalo: cumpleaños, aniversario, mamá, amigos y regalos a distancia. Con tus palabras se nota.',
    h1: 'Qué escribir en la tarjeta de un regalo: ideas y ejemplos',
    lead: [
      'La tarjeta es lo que se guarda cuando el regalo ya se terminó. No hace falta escribir mucho: alcanza con que se note que es tuya.',
      'Acá van ejemplos cortos para que tomes la idea y la cambies a tu manera.',
    ],
    sections: [
      {
        h2: 'Una fórmula simple',
        list: [
          'Nombrá a la persona.',
          'Decí por qué le mandás esto hoy.',
          'Sumá algo que solo ustedes entienden.',
          'Firmá con el apodo que usa para vos.',
        ],
      },
      {
        h2: 'Ejemplos por ocasión',
        items: [
          { t: 'Cumpleaños', d: '"Feliz cumple, Caro. Que este año te traiga todo lo que venís esperando. Hoy arrancás con desayuno y yo invito."' },
          { t: 'Para mamá', d: '"Ma: gracias por todo lo que no se ve. Hoy te toca a vos que te atiendan."' },
          { t: 'Aniversario', d: '"Tres años y todavía me reís los chistes malos. Gracias por elegirme todos los días."' },
          { t: 'A distancia', d: '"No llego a darte el abrazo, pero esto va en mi lugar. Te extraño."' },
          { t: 'Para un amigo', d: '"Para que festejes como corresponde. El próximo lo festejamos juntos."' },
          { t: 'Para dar ánimo', d: '"Sé que es una semana difícil. Esto es para que sepas que no estás sola."' },
          { t: 'Sin motivo', d: '"Ningún motivo. Me acordé de vos y listo."' },
        ],
      },
      {
        h2: 'Si querés decir más',
        paragraphs: [
          'En una tarjeta entra poco. Si tenés más para decir, una carta personalizada te da el espacio.',
        ],
        items: [{ t: 'Cartas personalizadas', d: 'Con el nombre de quien la recibe y tu mensaje.', links: [P.cartas] }],
      },
    ],
    faqs: [
      { q: '¿Los regalos traen tarjeta?', a: 'Los desayunos traen una nota escrita a mano con tu mensaje, y las cajas con forma de corazón llevan tarjeta. Nos pasás el texto por WhatsApp.' },
      { q: '¿Puedo mandar un mensaje más largo?', a: 'Sí: podés sumar una carta personalizada. Contanos por WhatsApp qué querés decirle.' },
    ],
    whatsapp: 'un regalo con mensaje',
    cta: 'Quiero mandar un regalo con mi mensaje',
  },
  {
    slug: 'desayuno-o-ramo',
    kind: 'como',
    label: '¿Desayuno o ramo?',
    crumb: '¿Desayuno o ramo?',
    title: '¿Desayuno Sorpresa o Ramo de Golosinas? Cómo Elegir',
    description:
      'Diferencias entre un desayuno sorpresa y un ramo de golosinas: cuándo conviene cada uno, para quién y a qué hora. Con entrega en Catamarca.',
    h1: '¿Desayuno sorpresa o ramo de golosinas? Cómo elegir',
    lead: [
      'Es una de las dudas más comunes. Los dos se entregan a domicilio y los dos sorprenden, pero se disfrutan distinto.',
      'Acá te contamos en qué se diferencian para que elijas rápido.',
    ],
    sections: [
      {
        h2: 'En qué se diferencian',
        items: [
          {
            t: 'El desayuno sorpresa',
            d: 'Café o té, delicias artesanales, una taza y una nota escrita a mano, en caja de madera o de cartón. Se disfruta a la mañana y en el momento.',
            links: [P.madera, P.carton],
          },
          {
            t: 'El ramo de golosinas',
            d: 'Golosinas o chocolates armados en forma de ramo y envueltos para regalar. Hay modelos con oso, con peluche o futbolero. Se disfruta de a poco.',
            links: [P.comun, P.chocolates, P.oso, P.futbolero],
          },
        ],
      },
      {
        h2: 'Elegí el desayuno si…',
        list: [
          'Querés que arranque el día con el regalo: un cumpleaños, un aniversario, el Día de la Madre.',
          'Sabés que a la mañana está en casa.',
          'Te gusta la idea de que la caja quede (la de madera se vuelve a usar para guardar cosas).',
        ],
      },
      {
        h2: 'Elegí el ramo si…',
        list: [
          'No sabés a qué hora va a estar: un ramo queda bien a cualquier hora del día.',
          'Es para alguien a quien le encanta lo dulce o el chocolate.',
          'Es para un varón, un hincha o un chico.',
          'Buscás algo en lugar de flores.',
        ],
      },
      {
        h2: '¿Y si quiero los dos?',
        paragraphs: ['Se puede: el ramo se suma a cualquier desayuno o va solo, como quieras.'],
      },
    ],
    faqs: [
      { q: '¿Cuál es la diferencia entre la caja de madera y la de cartón?', a: 'Cambia la presentación; la sorpresa es la misma. La caja de madera se puede volver a usar para guardar cosas y la de cartón sale un poco menos.' },
      { q: '¿El ramo va solo o con desayuno?', a: 'Las dos opciones: se suma a cualquier desayuno o va solo, como vos quieras.' },
      entrega,
      precio,
    ],
    whatsapp: 'un desayuno o un ramo',
    cta: 'Ayudame a elegir',
  },
];

export const guides: Guide[] = [...queRegalar, ...como];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
