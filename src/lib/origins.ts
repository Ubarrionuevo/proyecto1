import { siteConfig } from './site';
import type { FaqItem } from './faqs';

/* Una entrada por origen. Los textos son propios de cada uno, no una plantilla
   con el nombre cambiado. Sin conversiones de moneda ni datos sin confirmar: el
   horario sale de siteConfig y las diferencias horarias son las de cada país. */

export type OriginData = {
  path: string;
  crumb: string;
  title: string;
  description: string;
  label: string;
  h1: string;
  whatsapp: string;
  cta: string;
  lead: string[];
  timeTitle: string;
  time: string[];
  paymentTitle: string;
  payment: { t: string; d: string }[];
  occasionsTitle: string;
  occasions: { t: string; d: string }[];
  proofTitle: string;
  proof: string;
  quote?: string;
  /* Aviso destacado arriba (páginas de localidad: dónde se entrega). */
  notice?: { t: string; d: string };
  faqs: FaqItem[];
};

const { openHour, closeHour } = siteConfig;

/* Hora en texto: 23.5 -> "23:30", 8 -> "8". */
export const fmtHour = (hour: number) =>
  Number.isInteger(hour) ? `${hour}` : `${Math.floor(hour)}:${String(Math.round((hour % 1) * 60)).padStart(2, '0')}`;

/* Hora local a la que equivale una hora de Argentina, según la diferencia. */
export const localHour = (hour: number, diff: number) => fmtHour((hour + diff + 24) % 24);

export const pagoCuentaArgentina = {
  t: '¿Todavía tenés cuenta en Argentina?',
  d: 'Transferís en pesos, como si estuvieras acá.',
};

export const pagoPrex = {
  t: '¿Solo tenés Prex?',
  d: 'Pagás desde Prex, sin necesidad de cuenta argentina.',
};

export const origins: Record<'peru' | 'italia' | 'suiza' | 'provincias', OriginData> = {
  peru: {
    path: '/enviar-regalo-a-catamarca/desde-peru',
    crumb: 'Desde Perú',
    title: 'Enviar Regalo a Catamarca desde Perú | LaPrincesaCta',
    description:
      'Vivís en Perú y querés sorprender a alguien en Catamarca: pedí por WhatsApp, pagá con transferencia o Prex y recibí foto o video de la entrega.',
    label: 'Desde Perú',
    h1: 'Mandá un regalo a Catamarca desde Perú',
    whatsapp: 'un regalo desde Perú',
    cta: 'Quiero mandar un regalo desde Perú',
    lead: [
      'Estás en Lima, en Arequipa o en Cusco, y la persona que querés sorprender está en Catamarca. No hace falta que coordines con un pariente ni que esperes al próximo viaje: nos escribís por WhatsApp y nosotras armamos el regalo y lo llevamos hasta su puerta.',
      'Como la diferencia horaria con Perú es chica, podés resolverlo en un rato, en el mismo horario en que estás despierto, sin mensajes a deshora.',
    ],
    timeTitle: 'Dos horas de diferencia, todo el año',
    time: [
      `En Perú son 2 horas menos que en Argentina. Por ejemplo, si pedís a las 10 en Lima, en Catamarca son las 12. Perú no cambia la hora durante el año, así que la cuenta siempre es la misma.`,
      `Atendemos de ${openHour} a ${fmtHour(closeHour)} h, hora de Argentina: en Lima, eso es de ${localHour(openHour, -2)} a ${localHour(closeHour, -2)} h. Para el día y la hora de la entrega, hablamos siempre en hora de Argentina y así nadie se confunde.`,
    ],
    paymentTitle: 'Cómo pagás desde Perú',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Para qué fechas nos escriben desde lejos',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Le llega a la puerta a la mañana, aunque vos estés a varios países de distancia.' },
      { t: 'Un aniversario a distancia', d: 'Para acompañar con algo concreto el saludo por videollamada.' },
      { t: 'El Día de la Madre argentino', d: 'En Perú se festeja en mayo y en Argentina, en octubre: anotá la fecha de acá para no quedarte afuera.' },
      { t: 'Navidad', d: 'Para estar presente en la mesa de Catamarca aunque pases las fiestas en Perú.' },
      { t: 'Sorprender a un amigo', d: 'Ese que dejaste allá y al que le debés un abrazo desde hace rato.' },
    ],
    proofTitle: 'Lo ves vos también',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así te enterás en el momento y ves su cara aunque no estés ahí.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Perú y Catamarca?',
        a: 'En Perú son 2 horas menos que en Argentina, todo el año. Si en Lima son las 10, en Catamarca son las 12.',
      },
      {
        q: '¿Puedo pagar desde Perú sin cuenta en Argentina?',
        a: 'Sí, con Prex. Si todavía tenés cuenta argentina, también podés transferir en pesos. Te pasamos los datos por WhatsApp.',
      },
      {
        q: '¿Me pasan el precio en soles?',
        a: 'No: el precio es en pesos argentinos y te confirmamos el total por WhatsApp.',
      },
      {
        q: '¿Entregan en Perú?',
        a: `No: entregamos solo en ${siteConfig.city}. Desde Perú hacés el pedido; el regalo lo recibe alguien en Catamarca.`,
      },
    ],
  },

  italia: {
    path: '/enviar-regalo-a-catamarca/desde-italia',
    crumb: 'Desde Italia',
    title: 'Enviar Regalo a Catamarca desde Italia | LaPrincesaCta',
    description:
      'Desde Italia también llegás a Catamarca: pedí por WhatsApp en pesos, con transferencia o Prex, y te mandamos foto o video de la entrega.',
    label: 'Desde Italia',
    h1: 'Mandá un regalo a Catamarca desde Italia',
    whatsapp: 'un regalo desde Italia',
    cta: 'Quiero mandar un regalo desde Italia',
    lead: [
      'Cuando vivís en Italia, la distancia con Catamarca se siente sobre todo en las fechas importantes. Roma, Milán o Turín quedan a un océano de la casa de tu mamá, pero un mensaje de WhatsApp alcanza para que el desayuno o el ramo llegue a su puerta.',
      'No es un caso raro: ya nos encargaron regalos desde Italia, y sabemos lo que significa confiarnos algo así desde tan lejos.',
    ],
    timeTitle: 'Cuatro o cinco horas de diferencia',
    time: [
      'Italia va 4 horas adelante de Argentina durante el invierno europeo y 5 horas durante el verano europeo. Por ejemplo, si pedís a las 9 en Roma, en Catamarca son las 5 o las 4.',
      `Atendemos de ${openHour} a ${fmtHour(closeHour)} h, hora de Argentina. En invierno, en Italia eso es de las ${localHour(openHour, 4)} a las ${localHour(closeHour, 4)} de la madrugada; en verano, de las ${localHour(openHour, 5)} a las ${localHour(closeHour, 5)} de la madrugada. Tu mañana es nuestra madrugada, así que escribinos desde el mediodía de Italia en adelante y te contestamos en el momento.`,
    ],
    paymentTitle: 'Cómo pagás desde Italia',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Fechas para no dejar pasar desde Italia',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Con la diferencia horaria, puede ser tu forma de llegar primero: lo recibe a la mañana de allá.' },
      { t: 'Un aniversario a distancia', d: 'Para esa pareja o esos padres que festejan en Catamarca mientras vos estás de este lado.' },
      { t: 'El Día de la Madre argentino', d: 'En Italia se festeja en mayo; en Argentina, en octubre. Si tu mamá está en Catamarca, la fecha que vale es la de allá.' },
      { t: 'Navidad', d: 'Vos en pleno invierno y ellos en pleno verano: un regalo en la puerta acorta bastante esa distancia.' },
      { t: 'Sorprender a un amigo', d: 'Porque un “te extraño, che” se entiende mejor con un ramo en la mano.' },
    ],
    proofTitle: 'Desde tan lejos, querés verlo',
    proof: 'Por eso te mandamos foto o video de la entrega por WhatsApp. Lo ves desde Italia, a la hora que sea, aunque te agarre durmiendo y lo abras a la mañana.',
    quote:
      'Un cliente que vive en Italia nos confió el desayuno de su mamá acá. Nos escribió, lo armamos y se lo entregamos.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Italia y Catamarca?',
        a: 'Italia va 4 horas adelante en el invierno europeo y 5 horas en el verano europeo. Si en Roma son las 9, en Catamarca son las 5 o las 4.',
      },
      {
        q: '¿A qué hora de Italia me conviene escribir?',
        a: `Desde el mediodía de Italia en adelante. Atendemos desde las ${openHour} de Argentina, que en Italia son las ${localHour(openHour, 4)} en invierno y las ${localHour(openHour, 5)} en verano.`,
      },
      {
        q: '¿Puedo pagar desde Italia?',
        a: 'Sí, de dos formas: con transferencia en pesos si conservás tu cuenta argentina, o con Prex. Los datos te llegan por WhatsApp.',
      },
      {
        q: '¿Me pasan el precio en euros?',
        a: 'No: el precio es en pesos argentinos y te confirmamos el total por WhatsApp.',
      },
    ],
  },

  suiza: {
    path: '/enviar-regalo-a-catamarca/desde-suiza',
    crumb: 'Desde Suiza',
    title: 'Enviar Regalo a Catamarca desde Suiza | LaPrincesaCta',
    description:
      'Mandá un regalo a Catamarca desde Suiza: elegís por WhatsApp, pagás con transferencia o Prex y te llega foto o video de cuando lo reciben.',
    label: 'Desde Suiza',
    h1: 'Mandá un regalo a Catamarca desde Suiza',
    whatsapp: 'un regalo desde Suiza',
    cta: 'Quiero mandar un regalo desde Suiza',
    lead: [
      'Desde Zúrich, Ginebra o Lugano, no hace falta que despaches nada a través del océano. La forma simple es esta: lo armamos acá, en Catamarca, y lo llevamos nosotras hasta la puerta de quien lo recibe.',
      'Vos elegís, nos pasás los datos y sabés cuándo se entregó. Te lleva menos tiempo que ir al correo.',
    ],
    timeTitle: 'Organizate con la diferencia horaria',
    time: [
      'Suiza va 4 horas adelante de Argentina durante el invierno europeo y 5 horas durante el verano europeo. Por ejemplo, si escribís a las 9 en Zúrich, en Catamarca son las 5 o las 4.',
      `Nuestro horario es de ${openHour} a ${fmtHour(closeHour)} h, hora de Argentina, así que antes del mediodía suizo todavía no arrancamos. Podés dejarnos el mensaje cuando quieras y lo vemos apenas abrimos, a las ${localHour(openHour, 4)} de Suiza en invierno y a las ${localHour(openHour, 5)} en verano.`,
    ],
    paymentTitle: 'Cómo pagás desde Suiza',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Cuándo nos escriben desde Suiza',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Dejás el pedido coordinado con tiempo y ese día lo recibe sin que tengas que estar pendiente.' },
      { t: 'Un aniversario a distancia', d: 'Un desayuno en la puerta, y la llamada después de que lo abrió.' },
      { t: 'El Día de la Madre argentino', d: 'En Suiza cae en mayo y en Argentina, en octubre: son dos fechas distintas y a la de acá conviene agendarla.' },
      { t: 'Navidad', d: 'Si este año no viajás, el regalo sí puede estar en Catamarca para las fiestas.' },
      { t: 'Sorprender a un amigo', d: 'Sin excusa ni fecha: el ramo futbolero de su club habla por vos.' },
    ],
    proofTitle: 'Tu comprobante es la foto',
    proof: 'Te mandamos foto o video de la entrega. Así no te queda la duda de si llegó: lo ves en tu WhatsApp, desde Suiza.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Suiza y Catamarca?',
        a: 'Suiza va 4 horas adelante en el invierno europeo y 5 horas en el verano europeo. Si en Zúrich son las 9, en Catamarca son las 5 o las 4.',
      },
      {
        q: '¿Puedo pagar desde Suiza sin cuenta argentina?',
        a: 'Sí, con Prex. Si todavía tenés cuenta en Argentina, también podés transferir en pesos.',
      },
      {
        q: '¿Me pasan el precio en francos suizos?',
        a: 'No: el precio es en pesos argentinos y te confirmamos el total por WhatsApp.',
      },
      {
        q: '¿Tengo que despachar algo desde Suiza?',
        a: 'No. El regalo lo armamos en Catamarca y lo entregamos nosotras; desde Suiza solo hacés el pedido por WhatsApp.',
      },
    ],
  },

  provincias: {
    path: '/enviar-regalo-a-catamarca/desde-otras-provincias',
    crumb: 'Desde otras provincias',
    title: 'Regalo a Catamarca desde Otras Provincias | LaPrincesaCta',
    description:
      'Desde Buenos Aires, Córdoba, Tucumán, Mendoza o Santa Fe: mandá tu regalo a Catamarca por WhatsApp, sin viajar. Te enviamos foto o video de la entrega.',
    label: 'Desde otras provincias',
    h1: 'Mandá un regalo a Catamarca desde otra provincia',
    whatsapp: 'un regalo desde otra provincia',
    cta: 'Quiero mandar un regalo desde mi provincia',
    lead: [
      'Si estás en Buenos Aires, Córdoba, Tucumán, Mendoza, Santa Fe o en cualquier otro lugar del país, no hace falta que viajes ni que consigas a alguien que lo lleve. Nos escribís por WhatsApp y nosotras nos encargamos de todo en Catamarca.',
      'Es la solución para ese cumpleaños que te agarra a mitad de semana, cuando no llegás a estar y tampoco querés que pase como un día más.',
    ],
    timeTitle: 'Misma hora, cero vueltas',
    time: [
      `Estás en la misma hora que Catamarca, así que no hay nada que calcular. Atendemos ${siteConfig.hoursCopy}: nos escribís cuando te queda cómodo y coordinamos la entrega por WhatsApp.`,
    ],
    paymentTitle: 'Cómo pagás desde otra provincia',
    payment: [
      {
        t: 'Transferencia en pesos',
        d: 'Te pasamos el detalle del pedido y los datos por WhatsApp, y transferís como cualquier otra compra.',
      },
    ],
    occasionsTitle: 'Para qué nos lo piden',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Para los que se fueron a estudiar o a trabajar, y esta vez no llegan.' },
      { t: 'Un aniversario a distancia', d: 'Cuando la pareja está en Catamarca y el laburo te tiene en otra provincia.' },
      { t: 'El Día de la Madre argentino', d: 'Si los pasajes están por las nubes o el domingo no te da, el regalo igual está.' },
      { t: 'Navidad', d: 'Para estar en la mesa familiar aunque las fiestas te encuentren en otro lado.' },
      { t: 'Sorprender a un amigo', d: 'Ese de toda la vida que se quedó en Catamarca.' },
    ],
    proofTitle: 'Te enterás al toque',
    proof: 'Te mandamos foto o video de la entrega, así no tenés que llamar a nadie para preguntar si llegó ni arruinar la sorpresa.',
    faqs: [
      {
        q: '¿Hace falta que alguien en Catamarca retire el regalo?',
        a: 'No. Lo llevamos nosotras hasta la puerta de quien lo recibe. Vos solo nos pasás el nombre y el motivo.',
      },
      {
        q: '¿Desde qué provincias se puede pedir?',
        a: `Desde todas. La entrega es siempre en ${siteConfig.city}; lo que cambia es desde dónde lo encargás.`,
      },
      {
        q: '¿Puedo mandar un regalo a otra provincia?',
        a: `No: los desayunos y los ramos se entregan solo en ${siteConfig.city}. Lo que sí sale a todo el país son las cartas personalizadas.`,
      },
      {
        q: '¿Cómo pago desde otra provincia?',
        a: 'Por transferencia en pesos. Te pasamos el detalle del pedido y los datos por WhatsApp.',
      },
    ],
  },
};
