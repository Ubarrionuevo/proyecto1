'use client';

import React, { useEffect, useRef, useState } from 'react';

/* Entrada suave al entrar en viewport. Usa IntersectionObserver en vez de
   scroll listener: no dispara work en cada frame del scroll.
   Solo anima opacity y translate3d, asi que no genera layout shift.
   Con prefers-reduced-motion el CSS fuerza el estado final. */

type RevealTag = 'div' | 'section' | 'article' | 'li' | 'header' | 'figure';

export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  y = 14,
  once = true,
}: {
  children: React.ReactNode;
  as?: RevealTag;
  className?: string;
  /* ms de retraso para encadenar hijos y crear la sensacion de narrativa */
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /* No hace falta chequear prefers-reduced-motion aca: el CSS fuerza el
       estado final con !important, asi que el reveal queda visible igual.
       Solo evitamos Observe r el observer si no hay IntersectionObserver. */
    if (typeof IntersectionObserver === 'undefined') {
      /* Sin soporte el elemento se queda invisible, asi que lo mostramos. */
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    /* Chequeo directo por rectangulo: si el elemento ya esta en pantalla lo
       mostramos sin esperar al observer (cubre observers lentos o raros). */
    const showIfVisible = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight - 60 && r.bottom > 60) {
        setInView(true);
        return true;
      }
      return false;
    };
    if (showIfVisible()) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      {
        /* threshold bajo + rootMargin negativo: empieza un poco antes de
           que el elemento entre del todo, para que no se vea tarde. */
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    /* Re-chequeo a los 1.2s por si el observer no disparo (pestana en
       segundo plano al cargar, embeds, etc.). Solo muestra si esta visible. */
    const fallback = window.setTimeout(() => {
      if (showIfVisible()) observer.disconnect();
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [once]);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-y': `${y}px`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}