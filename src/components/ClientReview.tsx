import { siteConfig } from '@/lib/site';
import { ArrowIcon } from './Icons';

/* Reseña de cliente.
   `review` queda en null hasta tener el texto real (con permiso del cliente).
   En producción, mientras esté vacío, la sección no se renderiza: así no se
   publica una cita inventada. En desarrollo se muestra un mockup para revisar
   el diseño. Para cargarla, reemplazar null por { name, text, date? }. */
type ClientReviewData = { name: string; text: string; date?: string };

const review: ClientReviewData | null = null;

const mockup: ClientReviewData = {
  name: 'Nombre del cliente',
  text: 'Reseña de alguien que envió un regalo desde otra provincia. Reemplazar por el texto real, con permiso del cliente.',
};

export default function ClientReview() {
  const isDev = process.env.NODE_ENV === 'development';
  const data = review ?? (isDev ? mockup : null);

  if (!data) return null;

  return (
    <section
      aria-label="Reseña de cliente"
      className="border-t border-rule bg-paper-deep py-16 sm:py-24"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <span className="label">Lo que dicen</span>

        <figure className="mt-6 border-l-2 border-butter pl-5">
          <blockquote className="quote text-2xl sm:text-3xl leading-snug text-ink">
            “{data.text}”
          </blockquote>
          <figcaption className="label mt-4">
            {data.name}
            {data.date ? ` · ${data.date}` : ''}
          </figcaption>
        </figure>

        {!review && isDev && (
          <p className="mt-4 text-xs text-berry">
            Mockup: reemplazar con una reseña real antes de publicar.
          </p>
        )}

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
