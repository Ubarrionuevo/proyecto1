import React from 'react';

/* Texto plegado con <details> nativo: queda en el HTML aunque esté cerrado, así
   que los buscadores lo leen, y no necesita JS. No reemplazar por display:none
   ni por texto fuera de pantalla: eso Google lo trata como texto oculto. */
export default function ReadMore({
  summary,
  children,
  variant = 'inline',
  align = 'left',
  className = '',
}: {
  summary: React.ReactNode;
  children: React.ReactNode;
  /* inline: enlace chico debajo de un bloque. section: título de sección. */
  variant?: 'inline' | 'section';
  align?: 'left' | 'center';
  className?: string;
}) {
  const summaryLayout =
    variant === 'section'
      ? 'justify-between gap-4'
      : `gap-2 min-h-11 text-sm font-bold text-ink ${align === 'center' ? 'justify-center' : ''}`;

  return (
    <details className={`group ${className}`}>
      <summary
        className={`flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden ${summaryLayout}`}
      >
        {summary}
        <span
          aria-hidden
          className={`shrink-0 font-body leading-none text-berry transition-transform duration-200 group-open:rotate-45 ${
            variant === 'section' ? 'text-2xl' : 'text-lg'
          }`}
        >
          +
        </span>
      </summary>
      {children}
    </details>
  );
}
