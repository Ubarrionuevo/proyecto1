import { siteConfig } from '@/lib/site';

/* Preguntas y respuestas con solo información que ya figura en el sitio.
   Lo no confirmado (plazos, zonas extra, sabores) va a TODO-contenido.md. */

export type FaqItem = { q: string; a: string };

const whatsapp = siteConfig.phoneDisplay;

export const homeFaqs: FaqItem[] = [
  {
    q: '¿Cómo hago un pedido?',
    a: `Por WhatsApp al ${whatsapp}: contanos el nombre de quien lo recibe y el motivo, y coordinamos el resto con esa persona. Hablás directo con nosotras, sin intermediarios.`,
  },
  {
    q: '¿Dónde entregan?',
    a: `Entregamos a domicilio en ${siteConfig.city}: llevamos el desayuno o el ramo hasta la puerta.`,
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia. Te pasamos el detalle del pedido por WhatsApp y abonás ahí mismo.',
  },
  {
    q: '¿Puedo personalizar el regalo?',
    a: 'Sí: lo armamos a tu manera con los sabores, el tema, la decoración y el mensaje que elijas. Contanos qué tenés en mente y te pasamos el presupuesto.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `De ${siteConfig.hours.toLowerCase()}. Escribinos y te respondemos con opciones en el momento.`,
  },
  {
    q: '¿Con cuánta anticipación tengo que pedir?',
    a: 'No tenemos un plazo publicado: escribinos por WhatsApp con la fecha que necesitás y te confirmamos la disponibilidad en el momento.',
  },
];

export const desayunosFaqs: FaqItem[] = [
  {
    q: '¿Qué trae un desayuno sorpresa?',
    a: 'Café o té bien caliente, delicias artesanales, taza personalizada y una nota escrita a mano, todo presentado en caja de madera o de cartón premium.',
  },
  {
    q: '¿Cuál es la diferencia entre la caja de madera y la de cartón?',
    a: 'La sorpresa es la misma; cambia la presentación. La caja de madera se puede volver a usar para guardar cosas y la de cartón sale un poco menos.',
  },
  {
    q: '¿Cómo lo entregan?',
    a: `Lo envolvemos y lo llevamos nosotras hasta la puerta en ${siteConfig.city}. Solo necesitamos el nombre de quien lo recibe y el motivo.`,
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `De ${siteConfig.hours.toLowerCase()}.`,
  },
];

export const ramosFaqs: FaqItem[] = [
  {
    q: '¿Qué traen los ramos?',
    a: 'Golosinas armadas en forma de ramo y envueltas para regalar. Según el modelo: chocolates, golosinas surtidas, camiseta y escudos del club, u oso de peluche.',
  },
  {
    q: '¿El ramo futbolero se arma de mi club?',
    a: 'Sí: se arma por pedido con los colores de tu club y la camiseta adentro. Decinos tu equipo y lo dejamos a tu manera.',
  },
  {
    q: '¿El ramo va solo o con desayuno?',
    a: 'Las dos cosas: se suma a cualquier desayuno o va solo, como vos quieras.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `De ${siteConfig.hours.toLowerCase()}.`,
  },
];

export const enviarRegaloFaqs: FaqItem[] = [
  {
    q: 'Estoy lejos de Catamarca, ¿puedo encargar igual?',
    a: `Sí: nos escriben de toda la Argentina y de otros países. Vos lo pedís desde donde estés y nosotras lo preparamos y lo llevamos hasta su puerta en ${siteConfig.city}.`,
  },
  {
    q: '¿Cómo coordinan la entrega si no estoy allá?',
    a: 'Nos pasás el nombre de quien recibe y el motivo, y coordinamos el resto con esa persona. Cuando la entrega está hecha, te avisamos por WhatsApp.',
  },
  {
    q: '¿Cómo se paga desde otra ciudad o país?',
    a: 'Por transferencia, con el detalle del pedido que te pasamos por WhatsApp. Hablás directo con nosotras, sin intermediarios.',
  },
  {
    q: '¿En qué horario atienden?',
    a: `De ${siteConfig.hours.toLowerCase()}.`,
  },
];
