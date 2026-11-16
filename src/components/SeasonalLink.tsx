import Link from 'next/link';
import { siteConfig } from '@/lib/site';

/* Enlace de temporada dentro del texto (guías, categorías, fichas, orígenes).
   Se prende y se apaga junto con el banner, desde siteConfig.seasonalBanner. */
export default function SeasonalLink({ className = 'mt-4' }: { className?: string }) {
  const { enabled, label, href } = siteConfig.seasonalBanner;
  if (!enabled) return null;

  return (
    <p className={`${className} text-sm leading-relaxed text-ink-soft max-w-prose`}>
      Se acerca {label}: mirá los{' '}
      <Link href={href} className="link-underline font-bold text-ink">
        regalos de {label} a domicilio en Catamarca
      </Link>
      .
    </p>
  );
}
