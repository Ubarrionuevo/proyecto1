'use client';

import Script from 'next/script';
import { useEffect } from 'react';

/* Analítica opcional: solo se activa si existe NEXT_PUBLIC_GA_ID.
   Registra un evento `whatsapp_click` en cada clic a un enlace de WhatsApp
   (delegación única en document, sin tocar cada botón), con la página y el
   texto del enlace para saber de qué producto salió. */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href^="https://wa.me"]');
      if (!a || typeof window.gtag !== 'function') return;
      const label =
        a.getAttribute('aria-label') || a.textContent?.trim().slice(0, 80) || 'whatsapp';
      window.gtag('event', 'whatsapp_click', {
        page_path: window.location.pathname,
        link_label: label,
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
