const WHATSAPP_NUMBER = '5493834903387';

export const getWhatsAppUrl = (producto: string = 'desayuno a domicilio') => {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const message = `¡Hola! Vengo de la web y quiero consultar para armar un ${producto} en Catamarca 🌸🎁`;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

// Producto Estrella: Desayuno a Domicilio
export const mainDesayuno = {
  subtitle: "Café o té caliente, delicias artesanales, taza personalizada y una nota escrita a mano.",
  heroImage: "/desayuno.jpeg",
  alt: "Desayuno a domicilio personalizado listo para entregar en Catamarca"
};

// Motion con fotos de clientes reales (desayunos y ramos)
export const clientPhotos = [
  {
    image: "/cliente1.png",
    tag: "Desayuno a Domicilio"
  },
  {
    image: "/cliente2.png",
    tag: "Desayuno a Domicilio"
  },
  {
    image: "/cliente3.png",
    tag: "Ramo de Golosinas"
  },
  {
    image: "/cliente4.png",
    tag: "Desayuno a Domicilio"
  },
  {
    image: "/cliente5.png",
    tag: "Ramo de Golosinas"
  },
  {
    image: "/cliente6.png",
    tag: "Ramo de Golosinas"
  },
  {
    image: "/cliente7.png",
    tag: "Desayuno a Domicilio"
  },
  {
    image: "/WhatsApp Image 2026-01-05 at 11.17.56.jpeg",
    tag: "Desayuno Aniversario"
  },
  {
    image: "/WhatsApp Image 2026-04-10 at 9.18.50 PM.jpeg",
    tag: "Desayuno Sorpresa"
  }
];

// Producto Secundario: Ramos de Golosinas
export const ramosProducts: Array<{
  id: string;
  images: string[];
  video?: string;
  name: string;
  description: string;
  price: string;
}> = [
  {
    id: "ramo-clasico",
    images: ["/ramos.golosinas.jpg"],
    name: "Ramo Clásico de Golosinas",
    description: "Un ramo clásico con golosinas irresistibles y un diseño elegante.",
    price: "$21.000"
  },
 
  {
    id: "ramo-chocolates",
    images: ["/ramos.golosinas.definitivo.jpeg"],
    video: "/WhatsApp Video 2026-06-28 at 8.47.33 PM.mp4",
    name: "Ramo de Chocolates",
    description: "Un gesto elegante con chocolates que enamoran desde el primer vistazo.",
    price: "$24.000"
  },
   {
    id: "ramo-oso",
    images: ["/ramooso.png"],
    name: "Ramo con Oso de Peluche",
    description: "Una combinación tierna y dulce con peluche incluido.",
    price: "$26.000"
  },
];

// Modelos de Desayuno a Domicilio
export const desayunoModels = [
  {
    id: "desayuno-sorpresa",
    name: "Desayuno Caja de Madera",
    price: "$39.000",
    description: "Una sorpresa cálida y elegante, pensada para regalar en cualquier ocasión.",
    image: "/desayuno.jpeg"
  },
  {
    id: "desayuno-aniversario",
    name: "Desayuno Caja de Cartón",
    price: "$36.000",
    description: "Un detalle especial con presentación premium y un toque inolvidable.",
    image: "/desayunocajacarton.jpeg"
  }
];
