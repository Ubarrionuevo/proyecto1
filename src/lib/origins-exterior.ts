import { siteConfig } from './site';
import { fmtHour, localHour, pagoCuentaArgentina, pagoPrex, type OriginData } from './origins';

/* Países con muchos argentinos y catamarqueños viviendo afuera. A diferencia de
   Perú, Italia y Suiza (origins.ts), de estos países el dueño todavía no
   confirmó pedidos: por eso estas páginas NO dicen "ya nos pidieron desde acá"
   ni llevan cita, y no se suman a "Nos compran desde".

   Diferencias horarias (Argentina = UTC-3 todo el año):
   - España peninsular: +4 en invierno europeo, +5 en verano europeo.
   - Estados Unidos: costa este -2 en su invierno, -1 en su verano;
     costa oeste -5 y -4.
   - Chile continental: misma hora en su verano (sep-abr), -1 en su invierno.
   - Uruguay y Brasil (Brasilia, São Paulo, Río): misma hora todo el año.
   - México (Ciudad de México): -3 todo el año. */

const { city, hoursCopy, openHour, closeHour } = siteConfig;
const horario = `de ${openHour} a ${fmtHour(closeHour)} h`;

const enPesos = (moneda: string) => ({
  q: `¿Me pasan el precio en ${moneda}?`,
  a: 'No: el precio es en pesos argentinos y te confirmamos el total por WhatsApp.',
});

const noDespachas = (pais: string) => ({
  q: `¿Tengo que mandar algo desde ${pais}?`,
  a: `No. El regalo lo armamos en Catamarca y lo entregamos nosotras en ${city}; desde ${pais} solo hacés el pedido por WhatsApp.`,
});

const fotoEntrega = {
  q: '¿Cómo sé que llegó?',
  a: 'Te mandamos foto o video de la entrega por WhatsApp, estés donde estés.',
};

const mismaHora = (pais: string) =>
  `${pais} y Argentina tienen la misma hora, así que no hay nada que calcular. Atendemos ${hoursCopy} y coordinamos la entrega por WhatsApp.`;

export const countryOrigins: OriginData[] = [
  {
    path: '/enviar-regalo-a-catamarca/desde-espana',
    crumb: 'Desde España',
    title: 'Enviar Regalo a Catamarca desde España | LaPrincesaCta',
    description:
      'Desde Madrid, Barcelona o Valencia: mandá un desayuno sorpresa o un ramo a Catamarca. Pedís por WhatsApp, pagás en pesos o con Prex y recibís foto de la entrega.',
    label: 'Desde España',
    h1: 'Mandá un regalo a Catamarca desde España',
    whatsapp: 'un regalo desde España',
    cta: 'Quiero mandar un regalo desde España',
    lead: [
      'España es uno de los países donde más argentinos viven. Desde Madrid, Barcelona, Valencia o Málaga, la familia que quedó en Catamarca está a un océano, pero un mensaje de WhatsApp alcanza para que el regalo llegue a su puerta.',
      'Lo armamos acá y lo llevamos nosotras hasta la casa de quien lo recibe. Vos no despachás nada.',
    ],
    timeTitle: 'Cuatro o cinco horas de diferencia',
    time: [
      'España peninsular va 4 horas adelante de Argentina en el invierno europeo y 5 horas en el verano europeo. En Canarias es una hora menos que en la península.',
      `Atendemos ${horario}, hora de Argentina: en Madrid es de las ${localHour(openHour, 4)} a las ${localHour(closeHour, 4)} de la madrugada en invierno y de las ${localHour(openHour, 5)} a las ${localHour(closeHour, 5)} de la madrugada en verano. Escribinos desde el mediodía de España y te contestamos en el momento.`,
    ],
    paymentTitle: 'Cómo pagás desde España',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Fechas para no dejar pasar desde España',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Por la diferencia horaria, lo recibe a la mañana de allá mientras vos ya estás a media tarde.' },
      { t: 'El Día de la Madre argentino', d: 'En España se festeja en mayo; en Argentina, el tercer domingo de octubre. Si tu mamá está en Catamarca, vale la de allá.' },
      { t: 'Un aniversario a distancia', d: 'Un desayuno en la puerta y la videollamada después.' },
      { t: 'Navidad', d: 'Vos en invierno y ellos en pleno verano: el regalo acorta la distancia.' },
      { t: 'Sorprender a un amigo', d: 'Ese que te despidió en Ezeiza y todavía te espera.' },
    ],
    proofTitle: 'Desde España, lo ves',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp. Si te agarra durmiendo, lo ves cuando te levantás.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre España y Catamarca?',
        a: 'España peninsular va 4 horas adelante en el invierno europeo y 5 en el verano europeo. Si en Madrid son las 9, en Catamarca son las 5 o las 4.',
      },
      {
        q: '¿Puedo pagar desde España sin cuenta argentina?',
        a: 'Sí, con Prex. Si conservás tu cuenta en Argentina, también podés transferir en pesos.',
      },
      enPesos('euros'),
      noDespachas('España'),
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-estados-unidos',
    crumb: 'Desde Estados Unidos',
    title: 'Enviar Regalo a Catamarca desde Estados Unidos | LaPrincesaCta',
    description:
      'Desde Miami, Nueva York o cualquier estado: mandá un desayuno o un ramo a domicilio en Catamarca. Pedís por WhatsApp, pagás en pesos o con Prex y recibís foto.',
    label: 'Desde Estados Unidos',
    h1: 'Mandá un regalo a Catamarca desde Estados Unidos',
    whatsapp: 'un regalo desde Estados Unidos',
    cta: 'Quiero mandar un regalo desde Estados Unidos',
    lead: [
      'Desde Miami, Nueva York, Houston o Los Ángeles, mandar algo a Catamarca por correo es caro y lento. La forma simple es otra: lo armamos acá y lo llevamos nosotras hasta la puerta.',
      'Vos elegís por WhatsApp, nos pasás el mensaje y te llega la foto de la entrega.',
    ],
    timeTitle: 'Según la costa, de 1 a 5 horas',
    time: [
      'Argentina va adelante de Estados Unidos. En la costa este (Miami, Nueva York) son 2 horas en su invierno y 1 hora en su verano; en la costa oeste (Los Ángeles), 5 y 4 horas.',
      `Atendemos ${horario}, hora de Argentina. En Nueva York eso es de las ${localHour(openHour, -2)} a las ${localHour(closeHour, -2)} en invierno y de las ${localHour(openHour, -1)} a las ${localHour(closeHour, -1)} en verano. Casi todo tu día coincide con el nuestro.`,
    ],
    paymentTitle: 'Cómo pagás desde Estados Unidos',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Fechas para no dejar pasar desde Estados Unidos',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Lo coordinás en tu hora de almuerzo y ese día lo recibe en su casa.' },
      { t: 'El Día de la Madre argentino', d: 'En Estados Unidos es en mayo; en Argentina, el tercer domingo de octubre.' },
      { t: 'Un aniversario', d: 'Chocolates en caja de corazón con tu mensaje.' },
      { t: 'Navidad', d: 'Si este año no viajás, el regalo sí llega a la mesa de Catamarca.' },
      { t: 'Los chicos de la familia', d: 'El ramo futbolero de su club o un ramo de golosinas para su cumple.' },
    ],
    proofTitle: 'Tu comprobante es la foto',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp, así lo ves desde Estados Unidos en el momento.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Estados Unidos y Catamarca?',
        a: 'Depende de la costa. Desde Miami o Nueva York, Argentina va 2 horas adelante en su invierno y 1 en su verano; desde Los Ángeles, 5 y 4 horas.',
      },
      {
        q: '¿Puedo pagar desde Estados Unidos sin cuenta argentina?',
        a: 'Sí, con Prex. Si conservás tu cuenta en Argentina, también podés transferir en pesos.',
      },
      enPesos('dólares'),
      noDespachas('Estados Unidos'),
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-chile',
    crumb: 'Desde Chile',
    title: 'Enviar Regalo a Catamarca desde Chile | LaPrincesaCta',
    description:
      'Desde Santiago, Antofagasta o Calama: mandá un desayuno sorpresa o un ramo a domicilio en Catamarca. Pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde Chile',
    h1: 'Mandá un regalo a Catamarca desde Chile',
    whatsapp: 'un regalo desde Chile',
    cta: 'Quiero mandar un regalo desde Chile',
    lead: [
      'Chile está del otro lado de la cordillera, y mucha gente del norte argentino trabaja allá, en Santiago, Antofagasta o Calama. Cruzar para cada cumpleaños no siempre se puede.',
      'Nos escribís por WhatsApp, elegís el desayuno o el ramo y nosotras lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora o una menos',
    time: [
      'De septiembre a abril, Chile continental tiene la misma hora que Argentina. De abril a septiembre, en Chile es una hora menos.',
      `Atendemos ${horario}, hora de Argentina: en el invierno chileno, eso es de las ${localHour(openHour, -1)} a las ${localHour(closeHour, -1)} en Santiago.`,
    ],
    paymentTitle: 'Cómo pagás desde Chile',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Para qué nos escriben desde Chile',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Cuando el turno en la mina o el trabajo no te deja cruzar.' },
      { t: 'El Día de la Madre argentino', d: 'En Chile es en mayo; en Argentina, el tercer domingo de octubre.' },
      { t: 'Tu pareja en Catamarca', d: 'Un mimo para acortar la cordillera.' },
      { t: 'Navidad', d: 'El regalo en la mesa familiar aunque vos estés del otro lado.' },
      { t: 'Los chicos de la familia', d: 'Un ramo de golosinas o con peluche para su cumple.' },
    ],
    proofTitle: 'Lo ves desde Chile',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Chile y Catamarca?',
        a: 'De septiembre a abril, la misma hora. De abril a septiembre, en Chile continental es una hora menos.',
      },
      {
        q: '¿Puedo pagar desde Chile sin cuenta argentina?',
        a: 'Sí, con Prex. Si conservás tu cuenta en Argentina, también podés transferir en pesos.',
      },
      enPesos('pesos chilenos'),
      fotoEntrega,
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-uruguay',
    crumb: 'Desde Uruguay',
    title: 'Enviar Regalo a Catamarca desde Uruguay | LaPrincesaCta',
    description:
      'Desde Montevideo o Punta del Este: mandá un desayuno sorpresa o un ramo a domicilio en Catamarca. Pedís por WhatsApp, pagás con Prex o en pesos y recibís foto.',
    label: 'Desde Uruguay',
    h1: 'Mandá un regalo a Catamarca desde Uruguay',
    whatsapp: 'un regalo desde Uruguay',
    cta: 'Quiero mandar un regalo desde Uruguay',
    lead: [
      'Desde Montevideo, Punta del Este o Colonia, Argentina está al lado, pero Catamarca queda lejos. Para un cumpleaños o una fecha especial, el viaje no siempre da.',
      'Nos escribís por WhatsApp, elegís y nosotras lo llevamos hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora, sin cálculos',
    time: [mismaHora('Uruguay')],
    paymentTitle: 'Cómo pagás desde Uruguay',
    payment: [pagoPrex, pagoCuentaArgentina],
    occasionsTitle: 'Para qué nos escriben desde Uruguay',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Lo recibe en su casa y vos lo ves en el video.' },
      { t: 'El Día de la Madre argentino', d: 'En Uruguay es en mayo; en Argentina, el tercer domingo de octubre.' },
      { t: 'Un aniversario a distancia', d: 'Un desayuno sorpresa y tu mensaje en la nota.' },
      { t: 'Navidad', d: 'Un regalo en la mesa de Catamarca.' },
      { t: 'Sorprender a un amigo', d: 'El ramo futbolero de su club.' },
    ],
    proofTitle: 'Lo ves al toque',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      { q: '¿Qué diferencia horaria hay entre Uruguay y Catamarca?', a: 'Ninguna: tienen la misma hora todo el año.' },
      {
        q: '¿Puedo pagar desde Uruguay?',
        a: 'Sí, con Prex, o con transferencia en pesos si tenés cuenta en Argentina. Los datos te llegan por WhatsApp.',
      },
      enPesos('pesos uruguayos'),
      fotoEntrega,
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-brasil',
    crumb: 'Desde Brasil',
    title: 'Enviar Regalo a Catamarca desde Brasil | LaPrincesaCta',
    description:
      'Desde São Paulo, Río de Janeiro o Florianópolis: mandá un desayuno o un ramo a domicilio en Catamarca. Pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde Brasil',
    h1: 'Mandá un regalo a Catamarca desde Brasil',
    whatsapp: 'un regalo desde Brasil',
    cta: 'Quiero mandar un regalo desde Brasil',
    lead: [
      'Desde São Paulo, Río de Janeiro o Florianópolis, Catamarca queda a muchas horas de viaje. Para las fechas que importan, el regalo puede llegar igual.',
      'Lo pedís por WhatsApp, lo armamos acá y lo llevamos nosotras hasta la puerta en la Capital de Catamarca.',
    ],
    timeTitle: 'Misma hora, sin cálculos',
    time: [
      'São Paulo, Río de Janeiro y Brasilia tienen la misma hora que Argentina todo el año. En algunas zonas del norte y el oeste de Brasil es una hora menos.',
      `Atendemos ${hoursCopy} y coordinamos la entrega por WhatsApp.`,
    ],
    paymentTitle: 'Cómo pagás desde Brasil',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Para qué nos escriben desde Brasil',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Para que ese día arranque con un desayuno en su casa.' },
      { t: 'El Día de la Madre argentino', d: 'En Brasil es en mayo; en Argentina, el tercer domingo de octubre.' },
      { t: 'Un aniversario', d: 'Chocolates en caja de corazón con tu mensaje.' },
      { t: 'Navidad', d: 'Un regalo en la mesa de Catamarca.' },
      { t: 'Sorprender a un amigo', d: 'Un ramo de golosinas y dos líneas tuyas.' },
    ],
    proofTitle: 'Lo ves desde Brasil',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre Brasil y Catamarca?',
        a: 'Desde São Paulo, Río o Brasilia, ninguna: la misma hora todo el año. En algunas zonas del norte y el oeste de Brasil es una hora menos.',
      },
      {
        q: '¿Puedo pagar desde Brasil sin cuenta argentina?',
        a: 'Sí, con Prex. Si conservás tu cuenta en Argentina, también podés transferir en pesos.',
      },
      enPesos('reales'),
      noDespachas('Brasil'),
    ],
  },
  {
    path: '/enviar-regalo-a-catamarca/desde-mexico',
    crumb: 'Desde México',
    title: 'Enviar Regalo a Catamarca desde México | LaPrincesaCta',
    description:
      'Desde Ciudad de México, Guadalajara o Monterrey: mandá un desayuno sorpresa o un ramo a domicilio en Catamarca. Pedís por WhatsApp y recibís foto de la entrega.',
    label: 'Desde México',
    h1: 'Mandá un regalo a Catamarca desde México',
    whatsapp: 'un regalo desde México',
    cta: 'Quiero mandar un regalo desde México',
    lead: [
      'Desde Ciudad de México, Guadalajara o Monterrey, mandar algo a Catamarca por correo es complicado. Mejor así: lo armamos acá y lo llevamos nosotras hasta la puerta.',
      'Vos elegís por WhatsApp, nos pasás el mensaje y te llega la foto de la entrega.',
    ],
    timeTitle: 'Tres horas de diferencia',
    time: [
      'Argentina va 3 horas adelante de Ciudad de México todo el año. Si en CDMX son las 9, en Catamarca son las 12.',
      `Atendemos ${horario}, hora de Argentina: en Ciudad de México, eso es de las ${localHour(openHour, -3)} a las ${localHour(closeHour, -3)}. Todo tu día coincide con el nuestro.`,
    ],
    paymentTitle: 'Cómo pagás desde México',
    payment: [pagoCuentaArgentina, pagoPrex],
    occasionsTitle: 'Para qué nos escriben desde México',
    occasions: [
      { t: 'El cumpleaños de mamá', d: 'Lo coordinás a la mañana de México y ese día lo recibe en su casa.' },
      { t: 'El Día de la Madre argentino', d: 'En México es el 10 de mayo; en Argentina, el tercer domingo de octubre.' },
      { t: 'Un aniversario a distancia', d: 'Un desayuno sorpresa con tu mensaje.' },
      { t: 'Navidad', d: 'Un regalo en la mesa de Catamarca.' },
      { t: 'Los chicos de la familia', d: 'Un ramo de golosinas o con peluche para su cumple.' },
    ],
    proofTitle: 'Lo ves desde México',
    proof: 'Te mandamos foto o video de la entrega por WhatsApp.',
    faqs: [
      {
        q: '¿Qué diferencia horaria hay entre México y Catamarca?',
        a: 'Argentina va 3 horas adelante de Ciudad de México todo el año.',
      },
      {
        q: '¿Puedo pagar desde México sin cuenta argentina?',
        a: 'Sí, con Prex. Si conservás tu cuenta en Argentina, también podés transferir en pesos.',
      },
      enPesos('pesos mexicanos'),
      noDespachas('México'),
    ],
  },
];
