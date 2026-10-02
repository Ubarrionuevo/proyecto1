import React from 'react';

/* Marco de papel tipo polaroid: foto + pie de foto, rotación sutil.
   Sustituye a las "cards" repetidas. */
export default function Polaroid({
  src,
  caption,
  rotate = 0,
  className = '',
  imgClassName = '',
  priority = false,
}: {
  src: string;
  caption?: string;
  rotate?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={`polaroid inline-block ${className}`}
      /* La rotacion va como variable CSS, no como transform inline: si fuera
         inline pisaria el transform del :hover y el hover no funcionaria. */
      style={{ '--rot': `${rotate}deg` } as React.CSSProperties}
    >
      <img
        src={src}
        alt={caption ?? 'Foto real de una entrega'}
        className={`zoom-media w-full object-cover ${imgClassName}`}
        loading={priority ? 'eager' : 'lazy'}
      />
      {caption && (
        <figcaption className="quote pt-2.5 text-center text-[13px] leading-none text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
