import React from 'react';
import Image from 'next/image';

/* Marco de papel tipo polaroid: foto + pie de foto, rotación sutil.
   Sustituye a las "cards" repetidas. Usa next/image con fill: el padre
   (aspecto vía imgClassName) define el tamaño, sin width/height fijos. */
export default function Polaroid({
  src,
  caption,
  rotate = 0,
  className = '',
  imgClassName = '',
  priority = false,
  sizes = '(max-width: 640px) 76vw, 330px',
  alt,
  decorative = false,
}: {
  src: string;
  caption?: string;
  rotate?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  alt?: string;
  /* decorative: para copias duplicadas del carrusel (aria-hidden + alt vacío). */
  decorative?: boolean;
}) {
  return (
    <figure
      className={`polaroid inline-block ${className}`}
      /* La rotacion va como variable CSS, no como transform inline: si fuera
         inline pisaria el transform del :hover y el hover no funcionaria. */
      style={{ '--rot': `${rotate}deg` } as React.CSSProperties}
    >
      <span className={`relative block w-full overflow-hidden ${imgClassName}`}>
        <Image
          src={src}
          alt={decorative ? '' : (alt ?? caption ?? 'Foto real de una entrega')}
          fill
          sizes={sizes}
          priority={priority}
          className="zoom-media object-cover"
        />
      </span>
      {caption && (
        <figcaption className="quote pt-2.5 text-center text-[13px] leading-none text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
