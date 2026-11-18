import { siteConfig } from './site';
import type { OriginData } from './origins';

/* Páginas por provincia (las más pobladas, de donde es más probable que
   alguien le mande un regalo a un familiar en Catamarca) y por localidad del
   interior de Catamarca. Cada una tiene su texto propio.

   Reglas: la entrega es SOLO en la Capital (siteConfig.city), y las páginas de
   localidad lo dicen arriba de todo para que nadie crea que entregamos en su
   pueblo. Sin distancias, plazos ni datos que el dueño no confirmó. */

const { city, hoursCopy } = siteConfig;

const transferencia = (desde: string) => ({
  t: 'Transferencia en pesos',
  d: `Desde ${desde} pagás como cualquier compra: te pasamos el detalle del pedido y los datos por WhatsApp.`,
});

const noEntregamosEn = (lugar: string) =>
  `No: entregamos solo en ${city}. Desde ${lugar} hacés el pedido y el regalo lo recibe alguien en la Capital de Catamarca.`;

/* ---------- Provincias ---------- */

export const provinceOrigins: OriginData[] = [
  {
    path: '/enviar-regalo-a-catamarca/desde-buenos-aires',
    crumb: 'Desde Buenos Aires',
    title: 'Enviar Regalo a Catamarca desde Buenos Aires | LaPrincesaCta',
    description:
      'Desde CABA, el conurbano, La Plata o Mar del Plata: pedí por WhatsApp un desayuno sorpresa o un ramo a domicilio en Catamarca y recibí foto de la entrega.',
    label: 'Desde Buenos Aires',
    h1: 'Mandá un regalo a Catamarca desde Buenos Aires',
    whatsapp: 'un regalo desde Buenos Aires',
    cta: 'Quiero mandar un regalo desde Buenos Aires',
    lead: [
      'Vivís en la Capital Federal, en el conurbano, en La Plata o en Mar del Plata, y la familia quedó en Catamarca. Entre el viaje largo y lo que cuestan los pasajes, no siempre se puede ir para cada cumpleaños.',
      'Para estar presente no hace falta viajar: nos escribís por WhatsApp, elegís el desayuno o el ramo, y nosotras lo armamos y lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'La misma hora que en Buenos Aires',
    time: [
      `Catamarca y Buenos Aires tienen la misma hora, así que no hay nada que calcular. Atendemos ${hoursCopy}: podés escribirnos en el viaje al trabajo o a la noche, cuando llegás a casa.`,
    ],
    paymentTitle: 'Cómo pagás desde Buenos Aires',
    payment: [transferencia('Buenos Aires')],
    occasionsTitle: 'Para qué nos escriben desde Buenos Aires',
    occasions: [
      { t: 'El cumpleaños de mamá o de la abuela', d: 'Para que ese día tenga algo en la puerta, aunque vos estés a cientos de kilómetros.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, cuando viajar al interior se complica y los pasajes vuelan.' },
      { t: 'Un aniversario a distancia', d: 'Si tu pareja quedó en Catamarca mientras vos trabajás en Buenos Aires.' },
      { t: 'Navidad', d: 'Si este año las fiestas te encuentran en Buenos Aires, el regalo igual llega a la mesa familiar.' },
      { t: 'Un amigo de toda la vida', d: 'Ese que se quedó en Catamarca y al que le debés una visita hace rato.' },
    ],
    proofTitle: 'La entrega, en tu celular',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp. Lo ves desde Buenos Aires en el momento, sin tener que llamar a nadie para preguntar si llegó.',
    faqs: [
      {
        q: '¿Puedo pedir desde Buenos Aires un regalo para alguien en Catamarca?',
        a: `Sí. Nos escribís por WhatsApp, elegís el regalo y lo entregamos en ${city}.`,
      },
      {
        q: '¿Hay diferencia horaria entre Buenos Aires y Catamarca?',
        a: `No, es la misma hora. Atendemos ${hoursCopy}.`,
      },
      { q: '¿Entregan en Buenos Aires?', a: noEntregamosEn('Buenos Aires') },
      {
        q: '¿Cómo me entero de que llegó?',
        a: 'Te mandamos foto o video de la entrega por WhatsApp.',
      },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-cordoba',
    crumb: 'Desde Córdoba',
    title: 'Enviar Regalo a Catamarca desde Córdoba | LaPrincesaCta',
    description:
      'Estudiás o trabajás en Córdoba y tu familia está en Catamarca: pedí un desayuno sorpresa o un ramo por WhatsApp y te mandamos foto de la entrega.',
    label: 'Desde Córdoba',
    h1: 'Mandá un regalo a Catamarca desde Córdoba',
    whatsapp: 'un regalo desde Córdoba',
    cta: 'Quiero mandar un regalo desde Córdoba',
    lead: [
      'Mucha gente de Catamarca se fue a Córdoba a estudiar o a trabajar: a la capital, a Río Cuarto, a Villa María o a Carlos Paz. Queda cerca, pero no tanto como para ir y volver un martes por un cumpleaños.',
      'Nos escribís por WhatsApp entre una clase y otra, elegís el regalo y nosotras lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Sin diferencia horaria',
    time: [
      `Córdoba y Catamarca tienen la misma hora. Atendemos ${hoursCopy}, así que podés pedir a la mañana antes de cursar o a la noche cuando terminás.`,
    ],
    paymentTitle: 'Cómo pagás desde Córdoba',
    payment: [transferencia('Córdoba')],
    occasionsTitle: 'Para qué nos escriben desde Córdoba',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'En plena época de parciales, cuando viajar no es una opción.' },
      { t: 'Para agradecerles a tus viejos', d: 'A los que te bancan la carrera desde Catamarca: un desayuno dice gracias sin discursos.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, aunque ese fin de semana te quedes en Córdoba.' },
      { t: 'Navidad', d: 'Si las fiestas te agarran trabajando en Córdoba, el regalo llega igual a casa.' },
      { t: 'Tu amiga del secundario', d: 'La que se quedó en Catamarca y extrañás cada vez que pasa algo importante.' },
    ],
    proofTitle: 'Lo ves desde Córdoba',
    proof: 'Cuando lo entregamos, te llega la foto o el video por WhatsApp. Ves su cara aunque estés en Córdoba.',
    faqs: [
      {
        q: '¿Puedo pedir desde Córdoba para alguien en Catamarca?',
        a: `Sí, por WhatsApp. Lo armamos y lo entregamos en ${city}.`,
      },
      {
        q: '¿Hay diferencia horaria entre Córdoba y Catamarca?',
        a: `No. Es la misma hora y atendemos ${hoursCopy}.`,
      },
      { q: '¿Entregan en Córdoba?', a: noEntregamosEn('Córdoba') },
      {
        q: '¿Cómo pago desde Córdoba?',
        a: 'Por transferencia en pesos. Te pasamos los datos por WhatsApp.',
      },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-santa-fe',
    crumb: 'Desde Santa Fe',
    title: 'Enviar Regalo a Catamarca desde Santa Fe | LaPrincesaCta',
    description:
      'Desde Rosario, Santa Fe capital o Rafaela: mandá un desayuno sorpresa o un ramo de golosinas a domicilio en Catamarca. Pedido por WhatsApp y foto de la entrega.',
    label: 'Desde Santa Fe',
    h1: 'Mandá un regalo a Catamarca desde Santa Fe',
    whatsapp: 'un regalo desde Santa Fe',
    cta: 'Quiero mandar un regalo desde Santa Fe',
    lead: [
      'Estás en Rosario, en la ciudad de Santa Fe, en Rafaela o en Venado Tuerto, y alguien que querés mucho está en Catamarca. Hay fechas que no se pueden dejar pasar, aunque estés lejos.',
      'Por WhatsApp elegís el regalo y le escribís el mensaje. Nosotras lo armamos en Catamarca y lo llevamos hasta su puerta.',
    ],
    timeTitle: 'Mismo horario, todo por WhatsApp',
    time: [
      `Santa Fe y Catamarca tienen la misma hora. Atendemos ${hoursCopy} y coordinamos el día, el horario y el mensaje de la nota por WhatsApp.`,
    ],
    paymentTitle: 'Cómo pagás desde Santa Fe',
    payment: [transferencia('Santa Fe')],
    occasionsTitle: 'Para qué nos escriben desde Santa Fe',
    occasions: [
      { t: 'El cumpleaños de un hermano', d: 'Para que sepa que te acordaste, aunque estés en Rosario.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, con un desayuno en la puerta de su casa.' },
      { t: 'Un aniversario de tus viejos', d: 'Para acompañar el festejo desde lejos con algo que puedan compartir.' },
      { t: 'Navidad', d: 'Para estar en la mesa de Catamarca aunque pases las fiestas en Santa Fe.' },
      { t: 'Una buena noticia', d: 'Un título, un trabajo nuevo o una mudanza: se festeja mejor con un ramo.' },
    ],
    proofTitle: 'Te avisamos con una foto',
    proof: 'Te mandamos foto o video de la entrega. Así te enterás desde Santa Fe sin arruinar la sorpresa.',
    faqs: [
      {
        q: '¿Puedo mandar un regalo desde Rosario a Catamarca?',
        a: `Sí. Desde Rosario o desde cualquier lugar de Santa Fe pedís por WhatsApp y lo entregamos en ${city}.`,
      },
      {
        q: '¿Hay diferencia horaria entre Santa Fe y Catamarca?',
        a: 'No, es la misma hora.',
      },
      { q: '¿Entregan en Santa Fe?', a: noEntregamosEn('Santa Fe') },
      {
        q: '¿Cómo me entero de que llegó?',
        a: 'Te mandamos foto o video por WhatsApp cuando lo entregamos.',
      },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-tucuman',
    crumb: 'Desde Tucumán',
    title: 'Enviar Regalo a Catamarca desde Tucumán | LaPrincesaCta',
    description:
      'Desde San Miguel de Tucumán, Yerba Buena o Tafí Viejo: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca, con foto de la entrega.',
    label: 'Desde Tucumán',
    h1: 'Mandá un regalo a Catamarca desde Tucumán',
    whatsapp: 'un regalo desde Tucumán',
    cta: 'Quiero mandar un regalo desde Tucumán',
    lead: [
      'De San Miguel de Tucumán, Yerba Buena o Tafí Viejo a Catamarca hay unas horas de ruta. Es cerca, pero un día de semana, con el trabajo o la facultad, no llegás.',
      'Nos escribís por WhatsApp, elegís el desayuno o el ramo, y nosotras lo llevamos hasta la puerta en la Capital de Catamarca. Vos te quedás en Tucumán y el regalo llega igual.',
    ],
    timeTitle: 'Misma hora, sin vueltas',
    time: [
      `Tucumán y Catamarca tienen la misma hora. Atendemos ${hoursCopy}: escribinos cuando te quede cómodo.`,
    ],
    paymentTitle: 'Cómo pagás desde Tucumán',
    payment: [transferencia('Tucumán')],
    occasionsTitle: 'Para qué nos escriben desde Tucumán',
    occasions: [
      { t: 'Un cumpleaños entre semana', d: 'Cuando cae un miércoles y no podés hacerte la escapada.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, si ese domingo te toca quedarte en Tucumán.' },
      { t: 'Tu pareja en Catamarca', d: 'Para acortar los kilómetros entre una visita y la otra.' },
      { t: 'Navidad', d: 'Un regalo en la puerta mientras vos terminás el año en Tucumán.' },
      { t: 'Un amigo que se recibió', d: 'Para festejar con él aunque no llegues a la celebración.' },
    ],
    proofTitle: 'Lo ves al toque',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así te enterás desde Tucumán en el momento.',
    faqs: [
      {
        q: '¿Puedo pedir desde Tucumán para alguien en Catamarca?',
        a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.`,
      },
      {
        q: '¿Entregan en Tucumán?',
        a: noEntregamosEn('Tucumán'),
      },
      {
        q: '¿Cómo pago desde Tucumán?',
        a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.',
      },
      {
        q: '¿Cómo me entero de que llegó?',
        a: 'Te mandamos foto o video de la entrega por WhatsApp.',
      },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-mendoza',
    crumb: 'Desde Mendoza',
    title: 'Enviar Regalo a Catamarca desde Mendoza | LaPrincesaCta',
    description:
      'Desde Mendoza capital, Godoy Cruz o San Rafael: mandá un desayuno sorpresa o un ramo a domicilio en Catamarca. Lo pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde Mendoza',
    h1: 'Mandá un regalo a Catamarca desde Mendoza',
    whatsapp: 'un regalo desde Mendoza',
    cta: 'Quiero mandar un regalo desde Mendoza',
    lead: [
      'Te fuiste a Mendoza por trabajo o por estudio: a la capital, a Godoy Cruz, a Guaymallén o a San Rafael. La familia sigue en Catamarca y las fechas importantes llegan igual.',
      'Desde Mendoza nos escribís por WhatsApp y nos contás para quién es. Nosotras armamos el regalo y lo llevamos hasta su casa en la Capital de Catamarca.',
    ],
    timeTitle: 'Sin diferencia horaria',
    time: [
      `Mendoza y Catamarca tienen la misma hora. Atendemos ${hoursCopy} y coordinamos todo por WhatsApp.`,
    ],
    paymentTitle: 'Cómo pagás desde Mendoza',
    payment: [transferencia('Mendoza')],
    occasionsTitle: 'Para qué nos escriben desde Mendoza',
    occasions: [
      { t: 'El cumpleaños de papá o mamá', d: 'Que arranque el día con un desayuno en la puerta.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, aunque ese fin de semana no puedas viajar.' },
      { t: 'Un aniversario', d: 'Para acompañar desde Mendoza el festejo de alguien que querés.' },
      { t: 'Navidad', d: 'Si pasás las fiestas en Mendoza, el regalo llega a Catamarca por vos.' },
      { t: 'Porque sí', d: 'A veces un ramo de golosinas es la mejor forma de decir “te extraño”.' },
    ],
    proofTitle: 'Tu confirmación es la foto',
    proof: 'Te mandamos foto o video de cuando lo reciben. Así lo vivís desde Mendoza.',
    faqs: [
      {
        q: '¿Puedo mandar un regalo desde Mendoza a Catamarca?',
        a: `Sí. Lo pedís por WhatsApp y lo entregamos en ${city}.`,
      },
      {
        q: '¿Hay diferencia horaria entre Mendoza y Catamarca?',
        a: 'No, es la misma hora.',
      },
      { q: '¿Entregan en Mendoza?', a: noEntregamosEn('Mendoza') },
      {
        q: '¿Cómo pago desde Mendoza?',
        a: 'Por transferencia en pesos. Los datos te llegan por WhatsApp.',
      },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-salta',
    crumb: 'Desde Salta',
    title: 'Enviar Regalo a Catamarca desde Salta | LaPrincesaCta',
    description:
      'Desde Salta capital, Orán o Tartagal: pedí por WhatsApp un desayuno sorpresa o un ramo de golosinas para alguien en Catamarca y recibí foto de la entrega.',
    label: 'Desde Salta',
    h1: 'Mandá un regalo a Catamarca desde Salta',
    whatsapp: 'un regalo desde Salta',
    cta: 'Quiero mandar un regalo desde Salta',
    lead: [
      'Vivís en Salta capital, en Orán, en Tartagal o en Metán, y alguien de tu familia está en Catamarca. Somos vecinos del norte, pero igual hay viaje de por medio.',
      'Con un mensaje de WhatsApp alcanza: elegís el regalo, nos pasás el mensaje de la nota y nosotras lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'La misma hora que en Salta',
    time: [
      `Salta y Catamarca tienen la misma hora. Atendemos ${hoursCopy}, así que nos escribís cuando puedas.`,
    ],
    paymentTitle: 'Cómo pagás desde Salta',
    payment: [transferencia('Salta')],
    occasionsTitle: 'Para qué nos escriben desde Salta',
    occasions: [
      { t: 'El cumpleaños de la abuela', d: 'Para que sepa que la tenés presente, aunque estés en Salta.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, con algo rico en la puerta.' },
      { t: 'Un aniversario', d: 'Si la otra mitad está en Catamarca, un desayuno acorta la distancia.' },
      { t: 'Navidad', d: 'Para sumarte a la mesa de Catamarca desde Salta.' },
      { t: 'Un primo, un tío, un amigo', d: 'Esa persona que siempre te recibe cuando vas: hoy le llega algo de tu parte.' },
    ],
    proofTitle: 'Te llega la foto',
    proof: 'Cuando lo entregamos, te mandamos foto o video por WhatsApp. Lo ves desde Salta en el momento.',
    faqs: [
      {
        q: '¿Puedo pedir desde Salta para alguien en Catamarca?',
        a: `Sí, por WhatsApp. Lo entregamos en ${city}.`,
      },
      { q: '¿Entregan en Salta?', a: noEntregamosEn('Salta') },
      {
        q: '¿Hay diferencia horaria entre Salta y Catamarca?',
        a: 'No, es la misma hora.',
      },
      {
        q: '¿Cómo me entero de que llegó?',
        a: 'Te mandamos foto o video de la entrega por WhatsApp.',
      },
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-jujuy',
    crumb: 'Desde Jujuy',
    title: 'Enviar Regalo a Catamarca desde Jujuy | LaPrincesaCta',
    description:
      'Desde San Salvador de Jujuy, Palpalá o Perico: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca y recibí foto de la entrega.',
    label: 'Desde Jujuy',
    h1: 'Mandá un regalo a Catamarca desde Jujuy',
    whatsapp: 'un regalo desde Jujuy',
    cta: 'Quiero mandar un regalo desde Jujuy',
    lead: [
      'Desde San Salvador de Jujuy, Palpalá o Perico, Catamarca queda en el mismo norte pero no a la vuelta de la esquina. Para un cumpleaños o una fecha especial, no siempre se puede viajar.',
      'Nos escribís por WhatsApp, elegís el desayuno o el ramo y nosotras lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora, sin cálculos',
    time: [`Jujuy y Catamarca tienen la misma hora. Atendemos ${hoursCopy}: escribinos cuando te quede cómodo.`],
    paymentTitle: 'Cómo pagás desde Jujuy',
    payment: [transferencia('Jujuy')],
    occasionsTitle: 'Para qué nos escriben desde Jujuy',
    occasions: [
      { t: 'El cumpleaños de mamá o de la abuela', d: 'Cuando la familia quedó en Catamarca y vos armaste tu vida en Jujuy.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, aunque ese fin de semana no puedas viajar.' },
      { t: 'Tu pareja en Catamarca', d: 'Un mimo entre visita y visita.' },
      { t: 'Navidad', d: 'Un regalo en la mesa familiar mientras vos pasás las fiestas en Jujuy.' },
      { t: 'Un amigo que se recibió', d: 'Para estar en el festejo aunque sea con un ramo.' },
    ],
    proofTitle: 'Lo ves desde Jujuy',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así sabés que llegó sin tener que preguntar.',
    faqs: [
      { q: '¿Puedo pedir desde Jujuy para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Jujuy?', a: noEntregamosEn('Jujuy') },
      { q: '¿Cómo pago desde Jujuy?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-santiago-del-estero',
    crumb: 'Desde Santiago del Estero',
    title: 'Enviar Regalo a Catamarca desde Santiago del Estero | LaPrincesaCta',
    description:
      'Desde Santiago del Estero, La Banda o Termas de Río Hondo: pedí por WhatsApp un desayuno o un ramo a domicilio en Catamarca, con foto de la entrega.',
    label: 'Desde Santiago del Estero',
    h1: 'Mandá un regalo a Catamarca desde Santiago del Estero',
    whatsapp: 'un regalo desde Santiago del Estero',
    cta: 'Quiero mandar un regalo desde Santiago',
    lead: [
      'Santiago del Estero y Catamarca son vecinas, y muchas familias están repartidas entre las dos. Desde Santiago, La Banda o Termas de Río Hondo, a veces la distancia es poca pero el tiempo no alcanza.',
      'Para esos días, nos escribís por WhatsApp y el regalo llega a la puerta en la Capital de Catamarca sin que tengas que moverte.',
    ],
    timeTitle: 'Misma hora, sin vueltas',
    time: [`Santiago del Estero y Catamarca tienen la misma hora. Atendemos ${hoursCopy} y coordinamos todo por WhatsApp.`],
    paymentTitle: 'Cómo pagás desde Santiago del Estero',
    payment: [transferencia('Santiago del Estero')],
    occasionsTitle: 'Para qué nos escriben desde Santiago',
    occasions: [
      { t: 'Un cumpleaños en la familia', d: 'Para ese tío, prima o abuela que está del otro lado del límite.' },
      { t: 'El Día de la Madre', d: 'Si ese domingo te toca quedarte en Santiago.' },
      { t: 'Tu pareja en Catamarca', d: 'Un desayuno sorpresa para empezar bien la semana.' },
      { t: 'Navidad', d: 'El regalo llega aunque las fiestas las pases en Santiago.' },
      { t: 'Un amigo de toda la vida', d: 'El ramo futbolero de su club dice más que un audio.' },
    ],
    proofTitle: 'Te enterás en el momento',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Santiago del Estero para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Santiago del Estero?', a: noEntregamosEn('Santiago del Estero') },
      { q: '¿Cómo pago?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-la-rioja',
    crumb: 'Desde La Rioja',
    title: 'Enviar Regalo a Catamarca desde La Rioja | LaPrincesaCta',
    description:
      'Desde La Rioja capital o Chilecito: pedí por WhatsApp un desayuno sorpresa o un ramo de golosinas a domicilio en Catamarca y recibí foto de la entrega.',
    label: 'Desde La Rioja',
    h1: 'Mandá un regalo a Catamarca desde La Rioja',
    whatsapp: 'un regalo desde La Rioja',
    cta: 'Quiero mandar un regalo desde La Rioja',
    lead: [
      'Entre La Rioja y Catamarca hay mucha familia cruzada: gente que estudia, trabaja o se casó de un lado y tiene a los suyos del otro. Desde La Rioja capital o Chilecito, el regalo no tiene que esperar a tu próxima visita.',
      'Elegís por WhatsApp, nos pasás el mensaje y lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora, sin cálculos',
    time: [`La Rioja y Catamarca tienen la misma hora. Atendemos ${hoursCopy}, así que nos escribís cuando puedas.`],
    paymentTitle: 'Cómo pagás desde La Rioja',
    payment: [transferencia('La Rioja')],
    occasionsTitle: 'Para qué nos escriben desde La Rioja',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Para que ese día arranque con un desayuno en su casa.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, aunque no llegues a viajar.' },
      { t: 'Un aniversario', d: 'Chocolates en caja de corazón y tu mensaje en la tarjeta.' },
      { t: 'Navidad', d: 'Un regalo en Catamarca mientras vos festejás en La Rioja.' },
      { t: 'Un amigo que necesita ánimo', d: 'Un ramo de golosinas y dos líneas tuyas.' },
    ],
    proofTitle: 'Lo ves al toque',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así te enterás desde La Rioja.',
    faqs: [
      { q: '¿Puedo pedir desde La Rioja para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en La Rioja?', a: noEntregamosEn('La Rioja') },
      { q: '¿Cómo pago desde La Rioja?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-entre-rios',
    crumb: 'Desde Entre Ríos',
    title: 'Enviar Regalo a Catamarca desde Entre Ríos | LaPrincesaCta',
    description:
      'Desde Paraná, Concordia o Gualeguaychú: mandá un desayuno sorpresa o un ramo a domicilio en Catamarca. Pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde Entre Ríos',
    h1: 'Mandá un regalo a Catamarca desde Entre Ríos',
    whatsapp: 'un regalo desde Entre Ríos',
    cta: 'Quiero mandar un regalo desde Entre Ríos',
    lead: [
      'Desde Paraná, Concordia o Gualeguaychú, Catamarca queda en la otra punta del mapa. Viajar para cada cumpleaños no es opción, pero el regalo sí puede estar.',
      'Nos escribís por WhatsApp, elegís y nosotras lo llevamos hasta la puerta en la Capital de Catamarca. Vos no despachás nada.',
    ],
    timeTitle: 'Misma hora, cero vueltas',
    time: [`Entre Ríos y Catamarca tienen la misma hora. Atendemos ${hoursCopy} y coordinamos el día y el horario por WhatsApp.`],
    paymentTitle: 'Cómo pagás desde Entre Ríos',
    payment: [transferencia('Entre Ríos')],
    occasionsTitle: 'Para qué nos escriben desde Entre Ríos',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Lo recibe en su casa y vos lo ves en el video.' },
      { t: 'El Día de la Madre', d: 'Cuando el viaje es largo y el domingo no alcanza.' },
      { t: 'Un aniversario a distancia', d: 'Un desayuno en la puerta y la videollamada después.' },
      { t: 'Navidad', d: 'Para estar presente en la mesa de Catamarca.' },
      { t: 'Sorprender a un amigo', d: 'Ese que se quedó en Catamarca cuando vos te fuiste.' },
    ],
    proofTitle: 'Desde lejos, lo ves',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Entre Ríos para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Entre Ríos?', a: noEntregamosEn('Entre Ríos') },
      { q: '¿Tengo que mandar algo por correo?', a: 'No. El regalo lo armamos en Catamarca y lo entregamos nosotras; vos solo hacés el pedido por WhatsApp.' },
      { q: '¿Cómo pago desde Entre Ríos?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-neuquen',
    crumb: 'Desde Neuquén',
    title: 'Enviar Regalo a Catamarca desde Neuquén | LaPrincesaCta',
    description:
      'Desde Neuquén capital, Plottier o Añelo: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca, con foto de la entrega.',
    label: 'Desde Neuquén',
    h1: 'Mandá un regalo a Catamarca desde Neuquén',
    whatsapp: 'un regalo desde Neuquén',
    cta: 'Quiero mandar un regalo desde Neuquén',
    lead: [
      'Si te fuiste a trabajar a Neuquén, a la capital, a Plottier o a Añelo, sabés lo que es perderse cumpleaños por los turnos y los kilómetros.',
      'Para esas fechas, nos escribís por WhatsApp entre turno y turno, y nosotras llevamos el desayuno o el ramo hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora, sin cálculos',
    time: [`Neuquén y Catamarca tienen la misma hora. Atendemos ${hoursCopy}: si salís tarde del trabajo, igual nos encontrás.`],
    paymentTitle: 'Cómo pagás desde Neuquén',
    payment: [transferencia('Neuquén')],
    occasionsTitle: 'Para qué nos escriben desde Neuquén',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Cuando el franco no coincide con la fecha.' },
      { t: 'Los chicos en Catamarca', d: 'Un ramo de golosinas o el futbolero de su club para su cumple.' },
      { t: 'Tu pareja', d: 'Un mimo para acortar las semanas lejos.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, estés de turno o no.' },
      { t: 'Navidad', d: 'Si este año las fiestas te encuentran trabajando.' },
    ],
    proofTitle: 'Lo ves desde el sur',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así lo ves cuando salís del turno.',
    faqs: [
      { q: '¿Puedo pedir desde Neuquén para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Neuquén?', a: noEntregamosEn('Neuquén') },
      { q: '¿Cómo pago desde Neuquén?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  /* Santa Cruz: hay pedidos confirmados (reseña real en Google de Brisa Magali
     Soria). La cita es textual: no editarla. */
  {
    path: '/enviar-regalo-a-catamarca/desde-santa-cruz',
    crumb: 'Desde Santa Cruz',
    title: 'Enviar Regalo a Catamarca desde Santa Cruz | LaPrincesaCta',
    description:
      'Desde Río Gallegos, Caleta Olivia o El Calafate: pedí por WhatsApp un desayuno sorpresa o un ramo para tu familia en Catamarca y recibí foto de la entrega.',
    label: 'Desde Santa Cruz',
    h1: 'Mandá un regalo a Catamarca desde Santa Cruz',
    whatsapp: 'un regalo desde Santa Cruz',
    cta: 'Quiero mandar un regalo desde Santa Cruz',
    lead: [
      'Muchos catamarqueños trabajan en Santa Cruz, en Río Gallegos, Caleta Olivia, Pico Truncado o El Calafate, y la familia quedó a miles de kilómetros. Desde Santa Cruz ya nos piden desayunos para papás que viven en Catamarca.',
      'Nos escribís por WhatsApp, elegís el regalo y nosotras lo armamos y lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'La misma hora, aunque estés en el sur',
    time: [`Santa Cruz y Catamarca tienen la misma hora. Atendemos ${hoursCopy}, así que podés pedir al salir del trabajo.`],
    paymentTitle: 'Cómo pagás desde Santa Cruz',
    payment: [transferencia('Santa Cruz')],
    occasionsTitle: 'Para qué nos escriben desde Santa Cruz',
    occasions: [
      { t: 'Desayunos para papá y mamá', d: 'Para que tengan algo rico en la puerta aunque vos estés en el sur.' },
      { t: 'El cumpleaños de la abuela', d: 'Cuando el viaje es demasiado largo para ir y volver en un fin de semana.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Si las fiestas te encuentran trabajando en Santa Cruz.' },
    ],
    proofTitle: 'Te mantenemos al tanto',
    proof: 'Te avisamos por WhatsApp cómo va el pedido y te mandamos foto o video de la entrega.',
    quote:
      '“Les compro desayunos desde la provincia de Santa Cruz, para que se los entreguen a mi papá y mamá que viven en Catamarca. Siempre puntual, todo fresco, abundante, con detalles delicados que hacen que además de rico se vea lindo, me responden los mensajes rápido y me mantienen al tanto de la entrega. Super confiables!!”',
    quoteBy: 'Brisa Magali Soria, reseña en Google',
    faqs: [
      { q: '¿Puedo pedir desde Santa Cruz para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Santa Cruz?', a: noEntregamosEn('Santa Cruz') },
      { q: '¿Cómo pago desde Santa Cruz?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-chubut',
    crumb: 'Desde Chubut',
    title: 'Enviar Regalo a Catamarca desde Chubut | LaPrincesaCta',
    description:
      'Desde Comodoro Rivadavia, Trelew o Puerto Madryn: pedí por WhatsApp un desayuno sorpresa o un ramo a domicilio en Catamarca, con foto de la entrega.',
    label: 'Desde Chubut',
    h1: 'Mandá un regalo a Catamarca desde Chubut',
    whatsapp: 'un regalo desde Chubut',
    cta: 'Quiero mandar un regalo desde Chubut',
    lead: [
      'Comodoro Rivadavia, Trelew, Puerto Madryn: el trabajo te llevó al sur y la familia quedó en Catamarca. Con los turnos y los kilómetros, las fechas importantes se pasan rápido.',
      'Nos escribís por WhatsApp y nosotras llevamos el desayuno o el ramo hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora en todo el país',
    time: [`Chubut y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Chubut',
    payment: [transferencia('Chubut')],
    occasionsTitle: 'Para qué nos escriben desde Chubut',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Cuando el franco no coincide con la fecha.' },
      { t: 'Tu pareja en Catamarca', d: 'Un desayuno o un ramo con oso para acortar la distancia.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Para estar en la mesa familiar aunque estés en el sur.' },
    ],
    proofTitle: 'Lo ves desde el sur',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Chubut para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Chubut?', a: noEntregamosEn('Chubut') },
      { q: '¿Cómo pago desde Chubut?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-tierra-del-fuego',
    crumb: 'Desde Tierra del Fuego',
    title: 'Enviar Regalo a Catamarca desde Tierra del Fuego | LaPrincesaCta',
    description:
      'Desde Ushuaia, Río Grande o Tolhuin: mandá un desayuno sorpresa o un ramo de golosinas a Catamarca. Pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde Tierra del Fuego',
    h1: 'Mandá un regalo a Catamarca desde Tierra del Fuego',
    whatsapp: 'un regalo desde Tierra del Fuego',
    cta: 'Quiero mandar un regalo desde Tierra del Fuego',
    lead: [
      'De Ushuaia o Río Grande a Catamarca hay todo el país de por medio. Viajar para cada cumpleaños no es opción.',
      'Lo que sí podés hacer es escribirnos por WhatsApp: armamos el regalo en Catamarca y lo llevamos hasta la puerta de tu familia en la Capital.',
    ],
    timeTitle: 'La punta del país, la misma hora',
    time: [`Tierra del Fuego y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Tierra del Fuego',
    payment: [transferencia('Tierra del Fuego')],
    occasionsTitle: 'Para qué nos escriben desde el fin del mundo',
    occasions: [
      { t: 'El cumpleaños de mamá o papá', d: 'Un desayuno sorpresa a primera hora.' },
      { t: 'Los chicos de la familia', d: 'Un ramo de golosinas o el futbolero de su club.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Para que el regalo llegue a la mesa de Catamarca.' },
    ],
    proofTitle: 'Lo ves desde el fin del mundo',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Tierra del Fuego para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Tierra del Fuego?', a: noEntregamosEn('Tierra del Fuego') },
      { q: '¿Cómo pago desde Tierra del Fuego?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-rio-negro',
    crumb: 'Desde Río Negro',
    title: 'Enviar Regalo a Catamarca desde Río Negro | LaPrincesaCta',
    description:
      'Desde Bariloche, General Roca, Cipolletti o Viedma: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca, con foto de la entrega.',
    label: 'Desde Río Negro',
    h1: 'Mandá un regalo a Catamarca desde Río Negro',
    whatsapp: 'un regalo desde Río Negro',
    cta: 'Quiero mandar un regalo desde Río Negro',
    lead: [
      'Vivís en Bariloche, en el Alto Valle o en Viedma, y tu gente está en Catamarca. La distancia no tiene por qué dejarte afuera de las fechas importantes.',
      'Nos escribís por WhatsApp, elegís el desayuno o el ramo, y nosotras lo entregamos en la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`Río Negro y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Río Negro',
    payment: [transferencia('Río Negro')],
    occasionsTitle: 'Para qué nos escriben desde Río Negro',
    occasions: [
      { t: 'Un cumpleaños en la familia', d: 'Un desayuno sorpresa o un ramo de chocolates.' },
      { t: 'Un aniversario a distancia', d: 'Con una nota escrita a mano con tu mensaje.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Para estar presente aunque no viajes.' },
    ],
    proofTitle: 'La entrega, en tu celular',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Río Negro para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Río Negro?', a: noEntregamosEn('Río Negro') },
      { q: '¿Cómo pago desde Río Negro?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-san-juan',
    crumb: 'Desde San Juan',
    title: 'Enviar Regalo a Catamarca desde San Juan | LaPrincesaCta',
    description:
      'Desde San Juan capital o Rivadavia: pedí por WhatsApp un desayuno sorpresa o un ramo de golosinas a domicilio en Catamarca y recibí foto de la entrega.',
    label: 'Desde San Juan',
    h1: 'Mandá un regalo a Catamarca desde San Juan',
    whatsapp: 'un regalo desde San Juan',
    cta: 'Quiero mandar un regalo desde San Juan',
    lead: [
      'San Juan y Catamarca son vecinas de cordillera, pero entre trabajo y estudio no siempre se puede viajar para un cumpleaños.',
      'Nos escribís por WhatsApp y nosotras armamos el regalo y lo llevamos a la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`San Juan y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde San Juan',
    payment: [transferencia('San Juan')],
    occasionsTitle: 'Para qué nos escriben desde San Juan',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Un desayuno sorpresa a la mañana.' },
      { t: 'Un amigo en Catamarca', d: 'Un ramo de golosinas o el futbolero de su club.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Un regalo en la mesa familiar.' },
    ],
    proofTitle: 'Lo ves en el momento',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde San Juan para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en San Juan?', a: noEntregamosEn('San Juan') },
      { q: '¿Cómo pago desde San Juan?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-chaco',
    crumb: 'Desde Chaco',
    title: 'Enviar Regalo a Catamarca desde Chaco | LaPrincesaCta',
    description:
      'Desde Resistencia o Sáenz Peña: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca. Te mandamos foto de la entrega.',
    label: 'Desde Chaco',
    h1: 'Mandá un regalo a Catamarca desde Chaco',
    whatsapp: 'un regalo desde Chaco',
    cta: 'Quiero mandar un regalo desde Chaco',
    lead: [
      'Desde Resistencia o Presidencia Roque Sáenz Peña, Catamarca queda lejos para ir y volver en un día. Si alguien que querés vive allá, el regalo puede llegar igual.',
      'Pedís por WhatsApp y nosotras lo entregamos en la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`Chaco y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Chaco',
    payment: [transferencia('Chaco')],
    occasionsTitle: 'Para qué nos escriben desde Chaco',
    occasions: [
      { t: 'Un cumpleaños', d: 'Un desayuno sorpresa o un ramo de golosinas.' },
      { t: 'Tu pareja', d: 'Un ramo con oso o chocolates en caja de corazón.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Un regalo para la familia.' },
    ],
    proofTitle: 'La entrega, en tu celular',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Chaco para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Chaco?', a: noEntregamosEn('Chaco') },
      { q: '¿Cómo pago desde Chaco?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-corrientes',
    crumb: 'Desde Corrientes',
    title: 'Enviar Regalo a Catamarca desde Corrientes | LaPrincesaCta',
    description:
      'Desde Corrientes capital o Goya: mandá un desayuno sorpresa o un ramo de golosinas a domicilio en Catamarca. Pedís por WhatsApp y recibís foto.',
    label: 'Desde Corrientes',
    h1: 'Mandá un regalo a Catamarca desde Corrientes',
    whatsapp: 'un regalo desde Corrientes',
    cta: 'Quiero mandar un regalo desde Corrientes',
    lead: [
      'Estudiás o trabajás en Corrientes y alguien importante quedó en Catamarca. Entre el litoral y el noroeste hay muchas horas de ruta.',
      'Nos escribís por WhatsApp y nosotras llevamos el regalo hasta su puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`Corrientes y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Corrientes',
    payment: [transferencia('Corrientes')],
    occasionsTitle: 'Para qué nos escriben desde Corrientes',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Un desayuno sorpresa con nota escrita a mano.' },
      { t: 'Un amigo', d: 'Un ramo de golosinas o de chocolates.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Un regalo para la mesa familiar.' },
    ],
    proofTitle: 'Lo ves en el momento',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Corrientes para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Corrientes?', a: noEntregamosEn('Corrientes') },
      { q: '¿Cómo pago desde Corrientes?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-misiones',
    crumb: 'Desde Misiones',
    title: 'Enviar Regalo a Catamarca desde Misiones | LaPrincesaCta',
    description:
      'Desde Posadas, Oberá o Puerto Iguazú: pedí por WhatsApp un desayuno sorpresa o un ramo para alguien en Catamarca, con foto de la entrega.',
    label: 'Desde Misiones',
    h1: 'Mandá un regalo a Catamarca desde Misiones',
    whatsapp: 'un regalo desde Misiones',
    cta: 'Quiero mandar un regalo desde Misiones',
    lead: [
      'De Posadas, Oberá o Iguazú a Catamarca hay que cruzar medio norte argentino. Para una fecha especial, no hace falta viajar.',
      'Pedís por WhatsApp, elegís el regalo y nosotras lo llevamos a la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`Misiones y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde Misiones',
    payment: [transferencia('Misiones')],
    occasionsTitle: 'Para qué nos escriben desde Misiones',
    occasions: [
      { t: 'Un cumpleaños en la familia', d: 'Un desayuno sorpresa a primera hora.' },
      { t: 'Un aniversario', d: 'Chocolates en caja de corazón con tu mensaje.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Un regalo que llega aunque vos no puedas.' },
    ],
    proofTitle: 'La entrega, en tu celular',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde Misiones para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en Misiones?', a: noEntregamosEn('Misiones') },
      { q: '¿Cómo pago desde Misiones?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },

  {
    path: '/enviar-regalo-a-catamarca/desde-san-luis',
    crumb: 'Desde San Luis',
    title: 'Enviar Regalo a Catamarca desde San Luis | LaPrincesaCta',
    description:
      'Desde San Luis capital, Villa Mercedes o Merlo: pedí por WhatsApp un desayuno sorpresa o un ramo a domicilio en Catamarca y recibí foto de la entrega.',
    label: 'Desde San Luis',
    h1: 'Mandá un regalo a Catamarca desde San Luis',
    whatsapp: 'un regalo desde San Luis',
    cta: 'Quiero mandar un regalo desde San Luis',
    lead: [
      'Vivís en San Luis, en Villa Mercedes o en Merlo, y tu familia está en Catamarca. Cuando no llegás a viajar, el regalo puede ir igual.',
      'Nos escribís por WhatsApp y nosotras lo entregamos en la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora',
    time: [`San Luis y Catamarca tienen la misma hora. Atendemos ${hoursCopy}.`],
    paymentTitle: 'Cómo pagás desde San Luis',
    payment: [transferencia('San Luis')],
    occasionsTitle: 'Para qué nos escriben desde San Luis',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Un desayuno o una merienda sorpresa.' },
      { t: 'Los chicos de la familia', d: 'Un ramo de golosinas o de peluche.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre.' },
      { t: 'Navidad', d: 'Un regalo para la familia.' },
    ],
    proofTitle: 'Lo ves en el momento',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Puedo pedir desde San Luis para alguien en Catamarca?', a: `Sí. Pedís por WhatsApp y lo entregamos en ${city}.` },
      { q: '¿Entregan en San Luis?', a: noEntregamosEn('San Luis') },
      { q: '¿Cómo pago desde San Luis?', a: 'Por transferencia en pesos. Te pasamos el detalle y los datos por WhatsApp.' },
      { q: '¿Cómo me entero de que llegó?', a: 'Te mandamos foto o video de la entrega por WhatsApp.' },
    ],
  },
];

/* ---------- Localidades del interior de Catamarca ---------- */

const localidad = ({
  slug,
  nombre,
  lugares,
  lead,
  occasions,
  extraFaq,
}: {
  slug: string;
  nombre: string;
  lugares: string;
  lead: string;
  occasions: { t: string; d: string }[];
  extraFaq: { q: string; a: string };
}): OriginData => ({
  path: `/enviar-regalo-a-catamarca/desde-${slug}`,
  crumb: `Desde ${nombre}`,
  title: `Regalo desde ${nombre} a la Capital de Catamarca | LaPrincesaCta`,
  description: `Estás en ${nombre} y querés sorprender a alguien que vive en la Capital de Catamarca: pedí por WhatsApp un desayuno sorpresa o un ramo y te mandamos foto de la entrega.`,
  label: `Desde ${nombre}`,
  h1: `Desde ${nombre}, un regalo para alguien en la Capital`,
  whatsapp: `un regalo desde ${nombre} para alguien en la Capital`,
  cta: `Quiero mandar un regalo desde ${nombre}`,
  notice: {
    t: `Entregamos en la Capital, no en ${nombre}`,
    d: `Los regalos se entregan solo en ${city}. Esta página es para quien está en ${lugares} y quiere sorprender a alguien que vive en la Capital.`,
  },
  lead: [
    lead,
    'Nos escribís por WhatsApp, elegís el desayuno o el ramo, y nosotras lo armamos y lo llevamos hasta su puerta en la Capital. No hace falta que viajes ni que alguien lo retire.',
  ],
  timeTitle: `Pedís desde ${nombre}, por WhatsApp`,
  time: [
    `Atendemos ${hoursCopy}. Coordinamos por WhatsApp el día, el horario y el mensaje de la nota, y vos no te movés de ${nombre}.`,
  ],
  paymentTitle: `Cómo pagás desde ${nombre}`,
  payment: [transferencia(nombre)],
  occasionsTitle: `Para qué nos pueden escribir desde ${nombre}`,
  occasions,
  proofTitle: 'Te mandamos la foto',
  proof: `Cuando lo entregamos en la Capital, te llega la foto o el video por WhatsApp. Lo ves desde ${nombre} en el momento.`,
  faqs: [
    { q: `¿Entregan en ${nombre}?`, a: noEntregamosEn(nombre) },
    {
      q: `¿Puedo pedir desde ${nombre} para alguien que vive en la Capital?`,
      a: 'Sí. Nos escribís por WhatsApp, elegís el regalo y lo llevamos hasta su puerta en la Capital de Catamarca.',
    },
    extraFaq,
    {
      q: '¿Cómo pago?',
      a: 'Por transferencia en pesos. Te pasamos el detalle del pedido y los datos por WhatsApp.',
    },
  ],
});

export const localityOrigins: OriginData[] = [
  localidad({
    slug: 'belen',
    nombre: 'Belén',
    lugares: 'Belén o en algún pueblo del departamento',
    lead: 'Tu hija estudia en la Capital, tu hermano se mudó por trabajo o tu mejor amiga vive allá. Vos estás en Belén y el viaje no se hace en un rato.',
    occasions: [
      { t: 'Un hijo o una hija que estudia en la Capital', d: 'Para su cumpleaños, un examen aprobado o el día que más lo extrañás.' },
      { t: 'El cumpleaños de mamá', d: 'Si ella vive en la Capital y vos en Belén.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, con un desayuno en su puerta.' },
      { t: 'Navidad', d: 'Para la familia que pasa las fiestas en la Capital.' },
    ],
    extraFaq: {
      q: '¿Tengo que viajar a la Capital para hacer el pedido?',
      a: 'No. Todo se hace por WhatsApp desde Belén.',
    },
  }),
  localidad({
    slug: 'andalgala',
    nombre: 'Andalgalá',
    lugares: 'Andalgalá',
    lead: 'Vivís en Andalgalá y la persona que querés sorprender está en la Capital: un hijo que se fue a estudiar, una nieta, una amiga que se mudó.',
    occasions: [
      { t: 'Los chicos que estudian en la Capital', d: 'Un desayuno para empezar bien la semana de parciales.' },
      { t: 'Un cumpleaños', d: 'Para que no pase como un día más aunque no puedas ir.' },
      { t: 'Un aniversario', d: 'Si tu pareja trabaja en la Capital durante la semana.' },
      { t: 'Navidad', d: 'Un regalo que llega a la Capital mientras vos estás en Andalgalá.' },
    ],
    extraFaq: {
      q: '¿Lo puedo pedir para un día y horario puntual?',
      a: 'Sí, el día y el horario de la entrega los coordinamos por WhatsApp.',
    },
  }),
  localidad({
    slug: 'tinogasta',
    nombre: 'Tinogasta',
    lugares: 'Tinogasta',
    lead: 'Desde Tinogasta hasta la Capital hay muchos kilómetros de ruta. Cuando alguien que querés vive allá, no siempre llegás para las fechas importantes.',
    occasions: [
      { t: 'El cumpleaños de un hijo en la Capital', d: 'Para que lo reciba en su casa aunque vos estés en Tinogasta.' },
      { t: 'El Día de la Madre', d: 'Si tu mamá vive en la Capital, el tercer domingo de octubre le llega tu regalo.' },
      { t: 'Para alguien que está en la Capital por trámites o tratamientos', d: 'Un gesto que acompaña cuando toca estar lejos de casa.' },
      { t: 'Navidad', d: 'Para estar presente en la mesa de la Capital.' },
    ],
    extraFaq: {
      q: '¿Alguien en la Capital tiene que retirar el regalo?',
      a: 'No. Lo llevamos nosotras hasta la puerta de quien lo recibe.',
    },
  }),
  localidad({
    slug: 'santa-maria',
    nombre: 'Santa María',
    lugares: 'Santa María o en San José',
    lead: 'En Santa María, del otro lado de la provincia, la Capital queda lejos. Si tenés a alguien allá, con un mensaje alcanza para que le llegue un regalo.',
    occasions: [
      { t: 'Un estudiante lejos de casa', d: 'Para el que se fue a estudiar a la Capital y extraña los Valles.' },
      { t: 'Un cumpleaños', d: 'Un desayuno sorpresa en su puerta, a la mañana.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, aunque no puedas viajar.' },
      { t: 'Navidad', d: 'Para la familia que pasa las fiestas en la Capital.' },
    ],
    extraFaq: {
      q: '¿Puedo agregar un mensaje?',
      a: 'Sí, nos pasás el texto por WhatsApp y va en la nota del regalo.',
    },
  }),
  localidad({
    slug: 'recreo',
    nombre: 'Recreo',
    lugares: 'Recreo o en algún pueblo del departamento La Paz',
    lead: 'Estás en Recreo y alguien que querés vive en la Capital. Con el trabajo y la ruta de por medio, no siempre podés ir a saludar en persona.',
    occasions: [
      { t: 'Un cumpleaños', d: 'Para que ese día empiece con un desayuno en la puerta.' },
      { t: 'Tu pareja en la Capital', d: 'Un ramo de golosinas o de chocolates para la semana que no se ven.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, con un regalo en su casa de la Capital.' },
      { t: 'Navidad', d: 'Para sumarte a las fiestas de la familia en la Capital.' },
    ],
    extraFaq: {
      q: '¿Cómo sé que llegó?',
      a: 'Te mandamos foto o video de la entrega por WhatsApp.',
    },
  }),
  localidad({
    slug: 'fiambala',
    nombre: 'Fiambalá',
    lugares: 'Fiambalá',
    lead: 'Desde Fiambalá, en el oeste de la provincia, ir hasta la Capital lleva tiempo. Si tu familia o tus amigos viven allá, el regalo puede llegar sin que hagas el viaje.',
    occasions: [
      { t: 'Un cumpleaños', d: 'Para que tenga algo tuyo en la mano ese día.' },
      { t: 'Los chicos que estudian en la Capital', d: 'Un mimo para los que están lejos de casa.' },
      { t: 'El Día de la Madre', d: 'El tercer domingo de octubre, si mamá vive en la Capital.' },
      { t: 'Navidad', d: 'Un regalo en la Capital mientras vos pasás las fiestas en Fiambalá.' },
    ],
    extraFaq: {
      q: '¿Puedo pedir con anticipación?',
      a: 'Sí. Nos escribís, reservamos el día y el horario, y lo entregamos en la fecha que elegiste.',
    },
  }),
];

/* Las listas de enlaces (provinceLinks, localityLinks) viven en site.ts para
   que el Footer, que es de cliente, no cargue estos textos. */
export const argentinaOrigins: OriginData[] = [...provinceOrigins, ...localityOrigins];
