import React from 'react';

/* Encabezado de sección editorial: número grande en serif + label en versalitas.
   Reemplaza los badges redondeados con gradiente. */
export default function SectionHead({
  number,
  label,
  title,
  intro,
  align = 'left',
  tone = 'ink',
}: {
  number?: string;
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'ink' | 'paper';
}) {
  const onDark = tone === 'paper';
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : '';

  return (
    <div className={`flex flex-col ${alignCls} max-w-3xl`}>
      {number && <span className="num text-[4.5rem] sm:text-[6.5rem] mb-2">{number}</span>}

      <span className={`label ${onDark ? 'text-paper/50' : ''}`}>{label}</span>

      <h2
        className={`display-md mt-3 ${onDark ? 'text-paper' : 'text-ink'} ${
          onDark ? '' : 'text-balance'
        }`}
      >
        {title}
      </h2>

      {intro && (
        <p
          className={`mt-5 text-[15px] sm:text-base leading-relaxed max-w-xl ${
            onDark ? 'text-paper/70' : 'text-ink-soft'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
