'use client';

import React, { useEffect, useRef } from 'react';

/* Carrusel horizontal liviano, mobile-first, sin dependencias.
   - Autoplay lento a velocidad constante (px/segundo, sin aceleraciones).
   - Loop infinito sin saltos: el contenido se duplica exacto y al llegar a
     la mitad se resta ese ancho de una vez (mismo contenido, sin costura).
   - Swipe/touch nativo con scroll-snap suave; el autoplay se pausa mientras
     el usuario interactua (touch, wheel, hover, foco) y vuelve solo a los 2.5s.
   - Con prefers-reduced-motion no hay autoplay: queda como lista scrolleable.
   - overscroll-behavior-x: contain evita que el gesto mueva la pagina. */

const RESUME_MS = 2500;

export default function Carousel<T>({
  label,
  items,
  keyOf,
  renderSlide,
  speed = 32,
  gap = '1rem',
  className = '',
}: {
  label: string;
  items: T[];
  keyOf: (item: T, index: number) => string;
  renderSlide: (item: T, index: number, copy: 0 | 1) => React.ReactNode;
  speed?: number;
  gap?: string;
  className?: string;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef(0);

  const pause = () => {
    pausedRef.current = true;
    window.clearTimeout(resumeTimer.current);
    /* Mientras el usuario manipula, el snap alinea lindo al soltar. */
    scrollerRef.current?.classList.add('snap-on');
  };

  const scheduleResume = () => {
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      pausedRef.current = false;
      /* Al volver el autoplay el snap debe salir: si no, el navegador
         re-engancha cada escritura de scrollLeft y el carrusel se clava. */
      scrollerRef.current?.classList.remove('snap-on');
    }, RESUME_MS);
  };

  /* La rueda pausa y reanuda sola: si solo pausara, quedaria frenado para siempre. */
  const onWheel = () => {
    pause();
    scheduleResume();
  };

  const onMouseEnter = () => {
    if (window.matchMedia('(hover: hover)').matches) pause();
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let raf = 0;
    let last = performance.now();
    let inView = false;

    /* Solo anima cuando la seccion esta en pantalla: ahorra bateria y CPU. */
    const updateInView = () => {
      const r = scroller.getBoundingClientRect();
      inView = r.top < window.innerHeight && r.bottom > 0;
      last = performance.now();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        last = performance.now();
      },
      { threshold: 0.05 }
    );
    io.observe(scroller);

    /* Re-chequeo por si el observer tarda o no dispara: sin esto, si el
       observer falla el carrusel queda frenado para siempre. */
    updateInView();
    const fallback = window.setTimeout(() => {
      updateInView();
    }, 1000);

    const onVisibility = () => {
      last = performance.now();
    };
    document.addEventListener('visibilitychange', onVisibility);

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (
        pausedRef.current ||
        !inView ||
        document.hidden ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      /* El track son dos copias exactas: la mitad es el periodo del loop. */
      const half = scroller.scrollWidth / 2;
      if (half <= scroller.clientWidth + 1) return;

      let next = scroller.scrollLeft + speed * dt;
      if (next >= half) next -= half;
      scroller.scrollLeft = next;
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.clearTimeout(resumeTimer.current);
      window.clearTimeout(fallback);
    };
  }, [speed]);

  return (
    <div
      ref={scrollerRef}
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      className={`carousel ${className}`}
      style={{ '--carousel-gap': gap } as React.CSSProperties}
      onPointerDown={pause}
      onPointerUp={scheduleResume}
      onPointerCancel={scheduleResume}
      onPointerLeave={scheduleResume}
      onWheel={onWheel}
      onFocusCapture={pause}
      onBlurCapture={scheduleResume}
      onMouseEnter={onMouseEnter}
      onMouseLeave={scheduleResume}
    >
      <div className="carousel-track">
        <div className="carousel-copy">
          {items.map((item, i) => (
            <div key={keyOf(item, i)} className="carousel-slide">
              {renderSlide(item, i, 0)}
            </div>
          ))}
        </div>
        {/* Segunda copia: oculta a lectores de pantalla para no duplicar anuncios. */}
        <div className="carousel-copy" aria-hidden="true">
          {items.map((item, i) => (
            <div key={`${keyOf(item, i)}-dup`} className="carousel-slide">
              {renderSlide(item, i, 1)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
