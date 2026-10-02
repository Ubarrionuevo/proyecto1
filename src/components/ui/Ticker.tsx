'use client';

import React from 'react';

/* Cinta de texto en movimiento.
   Separa el destino de cada uno con un diamante. La lista se duplica para que
   el bucle no tenga costura y el duplicado se oculta a lectores de pantalla,
   asi announces cada lugar una sola vez.
   El padre debe envolverla en un contenedor con overflow-hidden. */

const Sep = () => (
  <span aria-hidden className="text-butter/50 select-none shrink-0">
    &#10022;
  </span>
);

export default function Ticker({
  items,
  direction = 'right',
  duration,
  className = '',
  itemClassName = 'font-display text-lg sm:text-xl italic',
}: {
  items: string[];
  direction?: 'left' | 'right';
  duration?: string;
  className?: string;
  itemClassName?: string;
}) {
  const animation = direction === 'left' ? 'ticker-left' : 'ticker-right';

  return (
    <div
      className={`${animation} ${className}`}
      style={duration ? { animationDuration: duration } : undefined}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex items-center gap-4 sm:gap-6 shrink-0 px-3"
        >
          {items.map((item) => (
            <React.Fragment key={`${copy}-${item}`}>
              <span className={`whitespace-nowrap ${itemClassName}`}>{item}</span>
              <Sep />
            </React.Fragment>
          ))}
        </div>
      ))}
    </div>
  );
}