/* Reseñas reales de Google para la sección de prueba social.
   Por ahora está vacío: el componente de reseñas no se renderiza si no hay
   contenido. Pedir al dueño 5 o 6 reseñas reales con nombre y permiso
   (ver TODO-contenido.md). No inventar reseñas. */

export type Review = {
  name: string;
  text: string;
  date?: string;
};

export const reviews: Review[] = [];
