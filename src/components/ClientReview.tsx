import { siteConfig } from '@/lib/site';
import { ArrowIcon } from './Icons';

/* Reseña real de Google, copiada tal cual de la ficha del negocio. Si se cambia,
   usar siempre el texto textual de una reseña publicada: no redactar ni editar. */
const review = {
  name: 'Brisa Magali Soria',
  text: 'Les compro desayunos desde la provincia de Santa Cruz, para que se los entreguen a mi papá y mamá que viven en Catamarca. Siempre puntual, todo fresco, abundante, con detalles delicados que hacen que además de rico se vea lindo, me responden los mensajes rápido y me mantienen al tanto de la entrega. Super confiables!!',
};

export default function ClientReview() {
  return (
    <section
      aria-label="Reseña de cliente"
      className="border-t border-rule bg-paper-deep py-16 sm:py-24"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <span className="label">Lo que dicen</span>

        <figure className="mt-6 border-l-2 border-butter pl-5">
          <blockquote className="quote text-xl sm:text-2xl leading-snug text-ink">
            “{review.text}”
          </blockquote>
          <figcaption className="label mt-4">{review.name}</figcaption>
        </figure>

        {siteConfig.googleMapsUrl && (
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink link-underline"
          >
            Ver más opiniones en Google
            <ArrowIcon className="w-4 h-4 text-berry" />
          </a>
        )}
      </div>
    </section>
  );
}
