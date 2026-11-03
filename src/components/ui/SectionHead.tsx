import React from 'react';

/* Encabezado de sección editorial: número grande en serif + título.
   Reemplaza los badges redondeados con gradiente. */
export default function SectionHead({
  number,
  title,
  intro,
  align = 'left',
  tone = 'ink',
}: {
  number?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'ink' | 'paper';
}) {
  const onDark = tone === 'paper';
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : '';

  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl`}>
      {/* Numeral puramente decorativo: oculto a lectores (el título ya anuncia
          la sección) y así no cuenta para contraste. */}
      {number && (
        <span aria-hidden="true" className="num text-[4.5rem] sm:text-[6.5rem] mb-5">
          {number}
        </span>
      )}

      <h2
        className={`display-md ${onDark ? 'text-paper' : 'text-ink'} ${
          onDark ? '' : 'text-balance'
        }`}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed max-w-xl ${
            onDark ? 'text-paper/70' : 'text-ink-soft'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
