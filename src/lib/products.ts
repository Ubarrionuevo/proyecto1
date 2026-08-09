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
export const ramosProducts = [
  {
    id: "ramo-clasico",
    images: ["/RamoMundialista.jpeg"],
    name: "Ramo Clásico de Golosinas",
    badge: "El Favorito",
    description: "Más de 20 golosinas y chocolates seleccionados, armados con envoltorio de lujo y dedicado a medida.",
    price: "$21.000"
  },
  {
    id: "ramo-oso",
    images: ["/ramooso.png"],
    name: "Ramo con Oso de Peluche",
    badge: "Incluye Peluche",
    description: "El ramo ideal para abrazar dos veces: golosinas riquísimas acompañadas de un peluche tierno.",
    price: "$22.000"
  },
  {
    id: "ramo-chocolates",
    images: ["/ramos.golosinas.definitivo.jpeg"],
    name: "Ramo de Chocolates",
    badge: "Edición Especial",
    description: "Chocolates de primeras marcas presentados en un ramo que se roba todas las miradas.",
    price: "$23.000"
  }
];

// Modelos de Desayuno a Domicilio
export const desayunoModels = [
  {
    id: "desayuno-sorpresa",
    name: "Desayuno Sorpresa",
    price: "$40.000",
    badge: "El Clásico",
    description: "Café o té caliente, delicias dulces y saladas artesanales, taza personalizada y nota escrita a mano.",
    image: "/desayuno.jpeg"
  },
  {
    id: "desayuno-aniversario",
    name: "Desayuno Aniversario",
    price: "$40.000",
    badge: "Especial",
    description: "Todo el cariño del desayuno a domicilio con detalles extra y una presentación pensada para emocionar.",
    image: "/WhatsApp Image 2025-11-29 at 21.17.56 (1).jpeg"
  }
];
