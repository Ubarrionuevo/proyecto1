import { reviews } from '@/lib/reviews';
import { siteConfig } from '@/lib/site';
import SectionHead from './ui/SectionHead';

/* Prueba social: solo se renderiza si hay reseñas cargadas en reviews.ts.
   El botón de Google y el mapa solo aparecen si hay URL en siteConfig. */
export function GoogleReviewsButton() {
  if (!siteConfig.googleMapsUrl) return null;
  return (
    <a
      href={siteConfig.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sticker sticker-outline px-6 py-3.5 text-[15px]"
    >
      Ver nuestras opiniones en Google
    </a>
  );
}

export function GoogleMapEmbed() {
  if (!siteConfig.googleMapsUrl) return null;
  return (
    <div className="mt-10 overflow-hidden border border-rule">
      <iframe
        title={`Mapa: ${siteConfig.name} en ${siteConfig.city}`}
        src={siteConfig.googleMapsUrl}
        className="w-full h-[320px] sm:h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function Reviews() {
  if (reviews.length === 0) return null;
  return (
    <section aria-label="Opiniones de clientes" className="border-t border-rule py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead
          label="Lo que dicen"
          title="Opiniones de quienes ya nos eligieron."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="border border-rule bg-paper-card p-6">
              <blockquote className="quote text-[15px] leading-relaxed text-ink">
                {review.text}
              </blockquote>
              <figcaption className="label mt-4">
                {review.name}
                {review.date ? ` · ${review.date}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8">
          <GoogleReviewsButton />
        </div>
      </div>
    </section>
  );
}
