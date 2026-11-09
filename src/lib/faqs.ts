import { siteConfig } from '@/lib/site';

/* Preguntas y respuestas con solo información que ya figura en el sitio.
   Lo no confirmado (plazos, zonas extra, sabores) va a TODO-contenido.md.
   Regla de redacción: la primera oración responde directo (sí/no + el dato),
   que es lo que levantan los resúmenes de IA; el detalle va después. */

export type FaqItem = { q: string; a: string };

const whatsapp = siteConfig.phoneDisplay;

const cuantoSale: FaqItem = {
  q: '¿Cuánto sale?',
  a: 'Te pasamos los precios actualizados por WhatsApp, según el producto y lo que quieras agregar.',
};

const horario = `De ${siteConfig.hours.toLowerCase()}, en hora de Argentina.`;

export const homeFaqs: FaqItem[] = [
  {
    q: 'Estoy lejos de Catamarca, ¿puedo encargar igual?',
    a: `Sí. Lo pedís por WhatsApp desde otra provincia o desde otro país, y nosotras lo preparamos y lo entregamos en ${siteConfig.city}. Te mandamos foto o video de la entrega.`,
  },
  {
    q: '¿Cómo hago un pedido?',
    a: `Por WhatsApp al ${whatsapp}. Contanos el nombre de quien lo recibe y el motivo, y coordinamos el resto con esa persona. Hablás directo con nosotras, sin intermediarios.`,
  },
  {
    q: '¿Dónde entregan?',
    a: `En ${siteConfig.city}. Llevamos el desayuno o el ramo hasta la puerta.`,
  },
  cuantoSale,
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia en pesos. Desde el exterior también podés pagar con Prex, sin necesidad de cuenta argentina. Te pasamos los datos por WhatsApp.',
  },
  {
    q: '¿Puedo personalizar el regalo?',
    a: 'Sí. Lo armamos a tu manera con los sabores, el tema, la decoración y el mensaje que elijas. Contanos qué tenés en mente y te pasamos el presupuesto.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `${horario} Escribinos y te respondemos con opciones en el momento.`,
  },
  {
    q: '¿Con cuánta anticipación tengo que pedir?',
    a: 'No tenemos un plazo fijo publicado. Escribinos por WhatsApp con la fecha que necesitás y te confirmamos la disponibilidad en el momento.',
  },
];

export const regalosFaqs: FaqItem[] = [
  {
    q: '¿Qué regalos se pueden mandar a domicilio en Catamarca?',
    a: `En ${siteConfig.name} podés mandar desayunos sorpresa en caja de madera o de cartón y ramos de golosinas, de chocolates, futboleros o con oso de peluche. Los llevamos hasta la puerta en ${siteConfig.city}.`,
  },
  {
    q: '¿Dónde comprar un regalo en Catamarca sin salir de casa?',
    a: `Lo podés pedir por WhatsApp a ${siteConfig.name}, al ${whatsapp}. Atendemos ${siteConfig.hoursCopy} y hablás directo con nosotras, sin intermediarios.`,
  },
  {
    q: '¿Venden flores?',
    a: 'No. Nuestros ramos son de golosinas y de chocolates, y son una alternativa si querés regalar algo distinto a las flores.',
  },
  {
    q: '¿Entregan en toda la provincia de Catamarca?',
    a: `No. Los desayunos y los ramos se entregan solo en ${siteConfig.city}.`,
  },
  {
    q: '¿Puedo mandar un regalo a Catamarca desde otra provincia o desde otro país?',
    a: 'Sí. Lo pedís por WhatsApp y pagás por transferencia en pesos o, desde el exterior, con Prex. Te mandamos foto o video de la entrega.',
  },
  {
    q: '¿Se puede personalizar el regalo?',
    a: 'Sí. Podés elegir los sabores, el tema, la decoración y el mensaje. Contanos qué tenés en mente y te pasamos el presupuesto.',
  },
  {
    q: '¿Con cuánta anticipación conviene pedir un regalo?',
    a: 'No hay un plazo fijo publicado. Escribinos por WhatsApp con la fecha que necesitás y te confirmamos la disponibilidad.',
  },
  cuantoSale,
];

export const desayunosFaqs: FaqItem[] = [
  {
    q: '¿Dónde comprar un desayuno sorpresa en Catamarca?',
    a: `En ${siteConfig.name}, por WhatsApp al ${whatsapp}. Atendemos ${siteConfig.hoursCopy} y lo llevamos hasta la puerta en ${siteConfig.city}.`,
  },
  {
    q: '¿Qué trae un desayuno sorpresa?',
    a: 'Café o té bien caliente, delicias artesanales, taza personalizada y una nota escrita a mano. Todo va presentado en caja de madera o de cartón premium.',
  },
  {
    q: '¿Cuál es la diferencia entre la caja de madera y la de cartón?',
    a: 'Cambia la presentación; la sorpresa es la misma. La caja de madera se puede volver a usar para guardar cosas y la de cartón sale un poco menos.',
  },
  {
    q: '¿Cómo lo entregan?',
    a: `Lo llevamos nosotras hasta la puerta en ${siteConfig.city}, bien envuelto. Solo necesitamos el nombre de quien lo recibe y el motivo.`,
  },
  {
    q: '¿Se puede mandar un desayuno sorpresa desde otra provincia o desde otro país?',
    a: `Sí. Lo pedís por WhatsApp y lo entregamos en ${siteConfig.city}. Te mandamos foto o video de la entrega.`,
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp. Desde el exterior también podés pagar con Prex.',
  },
  {
    q: '¿En qué horario atienden?',
    a: horario,
  },
];

export const ramosFaqs: FaqItem[] = [
  {
    q: '¿Qué traen los ramos?',
    a: 'Golosinas armadas en forma de ramo y envueltas para regalar. Según el modelo suman chocolates, golosinas surtidas, camiseta y escudos del club, u oso de peluche.',
  },
  {
    q: '¿El ramo futbolero se arma de mi club?',
    a: 'Sí. Se arma por pedido con los colores de tu club y la camiseta adentro. Decinos tu equipo y lo dejamos a tu manera.',
  },
  {
    q: '¿El ramo va solo o con desayuno?',
    a: 'Las dos opciones: se suma a cualquier desayuno o va solo, como vos quieras.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp. Desde el exterior también podés pagar con Prex.',
  },
  {
    q: '¿En qué horario atienden?',
    a: horario,
  },
];

export const cartasFaqs: FaqItem[] = [
  {
    q: '¿A dónde envían las cartas?',
    a: 'A todo el país. Despachamos la carta física a cualquier provincia de Argentina y coordinamos destino, dirección y fecha por WhatsApp.',
  },
  {
    q: '¿Cómo personalizo la carta?',
    a: 'Con el nombre de quien la recibe y el mensaje que querés decirle. Nos lo pasás y nosotras la preparamos con ese texto y la enviamos.',
  },
  {
    q: '¿Puede ser una sorpresa?',
    a: 'Sí. Si la persona no sabe que va a recibirla, coordinamos la entrega con vos para que la sorpresa salga bien.',
  },
  {
    q: '¿Cuánto tarda en llegar?',
    a: 'Depende del destino y del medio de envío, y no publicamos un plazo fijo. Escribinos con la fecha que necesitás y te confirmamos la disponibilidad.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp. Hablás directo con nosotras, sin intermediarios.',
  },
  {
    q: '¿Hacen envíos al exterior?',
    a: 'No: las cartas se envían dentro de Argentina. Si necesitás otro destino, escribinos y lo vemos.',
  },
];

export const empresasFaqs: FaqItem[] = [
  {
    q: '¿Qué regalos pueden pedir las empresas?',
    a: 'Desayunos y ramos. Armamos propuestas para empleados, clientes o equipos, según la cantidad, la fecha y el presupuesto.',
  },
  {
    q: '¿Arman regalos de fin de año para empresas?',
    a: 'Sí. Escribinos con la cantidad y la fecha, y te pasamos una propuesta por WhatsApp para cerrar el año con tu equipo o con tus clientes.',
  },
  {
    q: '¿Dónde entregan?',
    a: `Solo en ${siteConfig.city}. Tu empresa puede estar en otra provincia, pero quien recibe el regalo tiene que estar acá. Coordinamos cada entrega por WhatsApp.`,
  },
  {
    q: '¿Hay una cantidad mínima?',
    a: 'No publicamos una cantidad mínima. Consultanos por la cantidad que necesitás y te pasamos una propuesta a medida.',
  },
  {
    q: '¿Con cuánta anticipación conviene pedir?',
    a: 'No tenemos un plazo fijo publicado. Escribinos con la fecha y la cantidad y te confirmamos la disponibilidad.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp.',
  },
];

export const enviarRegaloFaqs: FaqItem[] = [
  {
    q: '¿Puedo pagar desde el exterior?',
    a: 'Sí. Si tenés cuenta en Argentina, transferís en pesos; si no, pagás con Prex. Te pasamos los datos por WhatsApp.',
  },
  {
    q: '¿Cómo sé que el regalo llegó?',
    a: 'Te mandamos foto o video de la entrega. Te llega por WhatsApp, estés donde estés.',
  },
  cuantoSale,
  {
    q: '¿En qué moneda pago?',
    a: 'En pesos argentinos; te confirmamos el total por WhatsApp.',
  },
  {
    q: '¿En qué horario entregan?',
    a: `${horario} Coordinamos el día y el horario de la entrega por WhatsApp.`,
  },
  {
    q: '¿Puedo agregar una carta?',
    a: 'Sí. Los desayunos ya traen una nota escrita a mano con tu mensaje y también podés sumar una carta personalizada: contanos por WhatsApp qué querés decirle.',
  },
  {
    q: '¿A qué lugares entregan?',
    a: `Solo en ${siteConfig.city}. Vos podés estar en cualquier provincia o país; lo que tiene que estar en Catamarca es la persona que lo recibe.`,
  },
];

/* FAQ de la landing de Navidad.
   Confirmado por el dueño: se toman pedidos hasta el 25 de diciembre y el 24
   y el 25 se trabaja hasta las 20 h. */
export const navidadFaqs: FaqItem[] = [
  {
    q: '¿Qué puedo regalar en Navidad en Catamarca?',
    a: `Un desayuno sorpresa, un ramo de golosinas o de chocolates, o una caja con chocolates en forma de corazón, entregados a domicilio en ${siteConfig.city}. Se piden por WhatsApp, ${siteConfig.hoursCopy}.`,
  },
  {
    q: '¿Cómo pido un regalo de Navidad?',
    a: 'Por WhatsApp. Elegís el desayuno o el ramo, nos pasás el nombre de quien lo recibe y el día que querés, y coordinamos el resto.',
  },
  {
    q: '¿Entregan el 24 y el 25 de diciembre?',
    a: 'Sí. El 24 y el 25 de diciembre entregamos hasta las 20 h. Son los días con más pedidos: escribinos con tiempo por WhatsApp y reservá el día y el horario.',
  },
  {
    q: '¿Hasta cuándo puedo pedir para Navidad?',
    a: 'Hasta el mismo 25 de diciembre: ese día trabajamos hasta las 20 h. Igual conviene reservar con tiempo, porque el 24 y el 25 son los días con más pedidos.',
  },
  {
    q: '¿Puedo mandarlo desde otro país?',
    a: `Sí. Lo pedís por WhatsApp desde donde estés y lo entregamos en ${siteConfig.city}. Pagás en pesos, con transferencia desde tu cuenta argentina o con Prex.`,
  },
  {
    q: '¿Puedo sumar una nota con mi saludo navideño?',
    a: 'Sí. Los desayunos traen una nota escrita a mano: nos pasás el saludo y va adentro. Si querés algo más largo, también hacemos cartas personalizadas.',
  },
  {
    q: '¿Cómo me entero de que se entregó?',
    a: 'Te mandamos foto o video de la entrega por WhatsApp, así la ves aunque estés lejos.',
  },
  {
    q: '¿Hacen regalos de fin de año para empresas?',
    a: 'Sí. Armamos propuestas con los mismos desayunos y ramos para tu equipo o tus clientes. Escribinos por WhatsApp con la cantidad y la fecha que necesitás.',
  },
];

/* ── FAQ por producto ────────────────────────────────────────────
   Solo usan informacion que ya esta publicada en el sitio: el detalle de
   cada producto, la entrega a domicilio en San Fernando del Valle, el pago
   por transferencia, los horarios y el hecho de que se puede encargar
   desde cualquier provincia. No se inventan precios, plazos ni medidas. */

const fueraDeProvincia =
  'Sí. Lo pedís por WhatsApp desde otra provincia o desde otro país, y nosotras lo preparamos y ' +
  'lo entregamos en San Fernando del Valle de Catamarca. Te mandamos foto o video de la entrega.';

const pagoPorTransferencia =
  'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp. Desde el exterior ' +
  'también podés pagar con Prex. Hablás directo con nosotras, sin intermediarios.';

export const productFaqs: Record<string, FaqItem[]> = {
  'desayuno-caja-madera': [
    {
      q: '¿Qué trae la caja de madera?',
      a: 'Café o té bien caliente, delicias artesanales, una taza y una nota escrita a mano. Todo viene ordenado y bien envuelto, y la caja se puede volver a usar para guardar cosas.',
    },
    {
      q: '¿Puedo pedirlo si estoy fuera de Catamarca?',
      a: fueraDeProvincia,
    },
    {
      q: '¿Cómo se paga?',
      a: pagoPorTransferencia,
    },
    {
      q: '¿Puedo personalizar el mensaje?',
      a: 'Sí. Contanos qué querés que diga la nota y lo armamos a tu manera. También podés sumarle una carta personalizada.',
    },
  ],
  'desayuno-caja-carton': [
    {
      q: '¿Qué trae la caja de cartón?',
      a: 'Café, delicias, taza personalizada y la nota a mano. Es la misma sorpresa que la caja de madera, con presentación de cartón premium.',
    },
    {
      q: '¿Cuál me conviene, la de madera o la de cartón?',
      a: 'Depende de la presentación que prefieras; la sorpresa es la misma. La caja de madera se puede volver a usar para guardar cosas y la de cartón sale un poco menos.',
    },
    {
      q: '¿Lo entregan a domicilio?',
      a: `Sí. Lo envolvemos y lo llevamos hasta la puerta en ${siteConfig.city}. Solo necesitamos el nombre de quien lo recibe y el motivo.`,
    },
    {
      q: '¿Cómo se paga y a qué horario atienden?',
      a: `${pagoPorTransferencia} Atendemos de ${siteConfig.hours.toLowerCase()}.`,
    },
  ],
  'ramo-comun': [
    {
      q: '¿Qué trae el ramo común?',
      a: 'Golosinas de todo tipo armadas en forma de ramo y envueltas para regalar. Es el que más enviamos a las familias.',
    },
    {
      q: '¿Puedo sumarlo a un desayuno?',
      a: 'Sí. El ramo se suma a cualquier desayuno o va solo, como vos quieras.',
    },
    {
      q: '¿Lo puedo pedir desde otra provincia?',
      a: fueraDeProvincia,
    },
    {
      q: '¿Cómo se paga?',
      a: pagoPorTransferencia,
    },
  ],
  'ramo-futbolero': [
    {
      q: '¿El ramo futbolero se arma con los colores de mi club?',
      a: 'Sí. Se arma por pedido con los colores de tu club y la camiseta adentro. Decinos tu equipo y lo dejamos a tu manera.',
    },
    {
      q: '¿Qué trae además de la camiseta?',
      a: 'Golosinas y escudos del club, armados y envueltos para regalar. Es el ramo que se usa para regalar en un partido, un cumple o cualquier fecha especial.',
    },
    {
      q: '¿Para quién es el ramo futbolero?',
      a: 'Para los que no se pierden un partido. Funciona muy bien cuando querés saludar a un hincha que está en Catamarca y vos estás lejos.',
    },
    {
      q: '¿Tengo que avisar con qué equipo lo quiero?',
      a: 'Sí, porque se arma por pedido. Pasanos el club de quien lo recibe cuando nos escribas por WhatsApp.',
    },
    {
      q: '¿Se puede sumar a un desayuno?',
      a: 'Sí. Se suma a cualquier desayuno o va solo.',
    },
    {
      q: '¿Puedo pedirlo si estoy fuera de Catamarca?',
      a: fueraDeProvincia,
    },
  ],
  'ramo-chocolates': [
    {
      q: '¿Qué trae el ramo de chocolates?',
      a: 'Todo chocolate, con envuelto fino y un moño que no se deshace en el camino. Es el que se ve premium incluso sin decir el precio.',
    },
    {
      q: '¿Cómo se entrega?',
      a: `Envuelto y listo para regalar: lo llevamos hasta la puerta en ${siteConfig.city}.`,
    },
    {
      q: '¿Lo puedo encargar desde otra ciudad o país?',
      a: fueraDeProvincia,
    },
    {
      q: '¿Cómo se paga?',
      a: pagoPorTransferencia,
    },
  ],
  'ramo-oso': [
    {
      q: '¿Qué trae el ramo con oso?',
      a: 'Golosinas y un oso de peluche adentro. Es el que más se regala para novios y para chicas.',
    },
    {
      q: '¿El oso llega entero?',
      a: 'Sí. El oso va envuelto para que llegue entero, y el ramo se entrega listo para regalar.',
    },
    {
      q: '¿En qué se diferencia del ramo de peluche?',
      a: 'En el peluche: este lleva un oso. El ramo de peluche va con un conejito u otro peluche.',
    },
    {
      q: '¿Sirve para un aniversario a distancia?',
      a: 'Sí. Lo pedís por WhatsApp desde donde estés, lo entregamos en Catamarca y te mandamos foto o video de la entrega.',
    },
    {
      q: '¿Se suma a un desayuno?',
      a: 'Sí. Los ramos se suman a cualquier desayuno o van solos.',
    },
    {
      q: '¿A qué horario atienden?',
      a: `${horario} Escribinos y te respondemos con opciones en el momento.`,
    },
  ],
  'ramo-peluche': [
    {
      q: '¿Qué trae el ramo de peluche?',
      a: 'Golosinas armadas en forma de ramo alrededor de un peluche, con moño y tarjeta. Se entrega envuelto y listo para regalar.',
    },
    {
      q: '¿Qué peluche lleva?',
      a: 'Un conejito, como el de la foto, u otro peluche. Preguntanos por WhatsApp qué peluches hay.',
    },
    {
      q: '¿En qué se diferencia del ramo con oso?',
      a: 'En el peluche: el ramo con oso lleva un oso, y este va con un conejito u otro peluche.',
    },
    {
      q: '¿Lo puedo pedir desde otra provincia o desde otro país?',
      a: fueraDeProvincia,
    },
    {
      q: '¿Se suma a un desayuno?',
      a: 'Sí. Los ramos se suman a cualquier desayuno o van solos.',
    },
    {
      q: '¿Cómo se paga?',
      a: pagoPorTransferencia,
    },
  ],
  'corazon-transparente': cajaFaqs(
    '¿Qué trae el corazón transparente?',
    'Bombones y chocolates dentro de un corazón transparente, con moño dorado y una tarjeta para tu mensaje.'
  ),
  'caja-ventana-corazon': cajaFaqs(
    '¿Qué trae la caja de ventana de corazón?',
    'Bombones y chocolates que se ven por la ventana en forma de corazón, con moño rojo y una tarjeta para escribir tu mensaje.'
  ),
  'caja-crema-te-amo': cajaFaqs(
    '¿Qué trae la caja crema Te amo?',
    'Preguntanos por WhatsApp qué trae adentro y cómo la podés armar. Por fuera es una caja crema con “Te amo” en letras doradas y moño blanco.'
  ),
};

/* Las cinco preguntas de las cajas: qué trae (propia de cada una) y cuatro
   comunes con datos ya publicados en el sitio. */
function cajaFaqs(q: string, a: string): FaqItem[] {
  return [
    { q, a },
    {
      q: '¿Puedo elegir el mensaje de la tarjeta?',
      a: 'Sí. Contanos qué querés que diga y lo dejamos a tu manera.',
    },
    {
      q: '¿Lo puedo pedir desde otra provincia o desde otro país?',
      a: fueraDeProvincia,
    },
    {
      q: '¿Cómo se entrega?',
      a: `Listo para regalar: lo llevamos hasta la puerta en ${siteConfig.city}.`,
    },
    {
      q: '¿Cómo se paga?',
      a: pagoPorTransferencia,
    },
  ];
}

/* FAQ de la landing del Día de la Madre. Misma lógica: solo datos publicados. */
export const diaDeLaMadreFaqs: FaqItem[] = [
  {
    q: '¿Qué puedo regalar para el Día de la Madre?',
    a: 'Desayunos sorpresa completos o ramos de golosinas y de chocolates. El desayuno trae café o té, delicias, taza y nota a mano, y el ramo va solo o sumado.',
  },
  {
    q: '¿Puedo encargarlo desde otra provincia?',
    a: fueraDeProvincia,
  },
  {
    q: '¿Con cuánta anticipación conviene pedir?',
    a: 'Con la mayor anticipación posible, porque ese día los pedidos se juntan. No publicamos un plazo fijo: escribinos con la fecha que necesitás y te confirmamos la disponibilidad.',
  },
  {
    q: '¿Cómo se paga?',
    a: pagoPorTransferencia,
  },
];
