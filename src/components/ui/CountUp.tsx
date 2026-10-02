'use client';

import React, { useEffect, useRef, useState } from 'react';

/* Contador que arranca cuando el numero entra en pantalla.
   Curva easeOutCubic para que frene alfinal y se lea "contado", no "teletipo".
   Con prefers-reduced-motion muestra el valor final directo. */

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  to,
  duration = 1100,
  className = '',
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          observer.disconnect();

          /* Con reduced motion mostramos el valor final y listo.
            Va adentro del callback para no hacer setState sincrónico. */
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setValue(to);
            return;
          }

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setValue(Math.round(easeOutCubic(progress) * to));
            if (progress < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}