import type { ReactNode } from 'react';
import { siteConfig } from '@/lib/site';
import { contact } from '@/lib/products';
import { GoogleGIcon, StarIcon, ArrowIcon } from './Icons';

type Size = 'sm' | 'md' | 'lg';

const starSize: Record<Size, string> = {
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
};

const textSize: Record<Size, string> = {
  sm: 'text-[12px]',
  md: 'text-[13px]',
  lg: 'text-sm',
};

/* Bloque de reputación de Google: estrellas, nota, cantidad de opiniones y
   enlace a la ficha real. Si no hay URL en siteConfig se renderiza como texto
   plano, sin enlace. Mobile-first: text-xs en pantallas chicas. */
export default function GoogleRating({
  size = 'md',
  className = '',
  prefix,
  suffix,
  hideCount = false,
}: {
  size?: Size;
  className?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  hideCount?: boolean;
}) {
  const content = (
    <>
      {prefix}
      <GoogleGIcon className={`${starSize[size]} shrink-0`} />
      <span
        className="flex items-center gap-px shrink-0"
        role="img"
        aria-label={`${contact.rating} de 5 estrellas en Google`}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} className={`star ${starSize[size]} text-butter-deep`} />
        ))}
      </span>
      <span>
        <span className="font-bold text-ink">{contact.rating}</span>
        {!hideCount && (
          <>
            {' · '}
            {contact.reviews} opiniones
          </>
        )}
      </span>
      {suffix}
      {siteConfig.googleMapsUrl && (
        <ArrowIcon className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  const classes = `stars-hover group inline-flex items-center gap-1.5 ${textSize[size]} text-ink-soft ${className}`;

  if (!siteConfig.googleMapsUrl) {
    return <span className={classes}>{content}</span>;
  }

  return (
    <a
      href={siteConfig.googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${classes} link-underline`}
    >
      {content}
    </a>
  );
}
