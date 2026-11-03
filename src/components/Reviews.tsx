import { reviews } from '@/lib/reviews';
import { siteConfig } from '@/lib/site';
import { contact } from '@/lib/products';
import SectionHead from './ui/SectionHead';
import GoogleRating from './GoogleRating';
import { GoogleGIcon, StarIcon, ArrowIcon } from './Icons';

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

/* Card de reputación: se muestra siempre (aunque no haya reseñas cargadas),
   porque la nota y la cantidad de opiniones son reales y verificables. */
function RatingCard() {
  const href = siteConfig.googleMapsUrl;
  const inner = (
    <>
      <div className="flex items-center gap-3">
        <GoogleGIcon className="w-7 h-7 shrink-0" />
        <div>
          <p className="font-display text-3xl font-semibold text-ink leading-none">
            {contact.rating}
          </p>
          <span
            className="mt-1.5 flex items-center gap-0.5"
            role="img"
            aria-label={`${contact.rating} de 5 estrellas en Google`}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="star w-4 h-4 text-butter-deep" />
            ))}
          </span>
        </div>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink-soft">
        <strong className="font-bold text-ink">
          Desayunos y ramos a domicilio en Catamarca.
        </strong>{' '}
        {contact.reviews} opiniones de clientes en Google Maps.
      </p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink">
          Ver la ficha en Google
          <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  const classes = 'group border border-rule bg-paper-card p-6';

  if (!href) return <div className={classes}>{inner}</div>;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {inner}
    </a>
  );
}

export default function Reviews() {
  return (
    <section aria-label="Opiniones de clientes" className="border-t border-rule py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHead title="Opiniones de quienes ya nos eligieron." />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <RatingCard />
          {reviews.map((review) => (
            <figure key={review.name} className="border border-rule bg-paper-card p-6">
              <blockquote className="quote text-base leading-relaxed text-ink">
                {review.text}
              </blockquote>
              <figcaption className="label mt-4">
                {review.name}
                {review.date ? ` · ${review.date}` : ''}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <GoogleReviewsButton />
          <GoogleRating size="md" />
        </div>
      </div>
    </section>
  );
}
