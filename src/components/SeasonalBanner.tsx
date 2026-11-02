import StickerButton from '@/components/ui/StickerButton';
import { siteConfig } from '@/lib/site';

/* Bloque de temporada de la home: se prende y se apaga desde siteConfig. */
export default function SeasonalBanner() {
  const { enabled, label, href } = siteConfig.seasonalBanner;
  if (!enabled) return null;

  return (
    <section aria-label={`Regalos de ${label}`} className="border-t border-rule bg-paper-deep">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-wrap items-center justify-between gap-5">
        <div className="min-w-0">
          <span className="label text-berry">{label}</span>
          <p className="font-display text-2xl font-semibold text-ink mt-1 text-balance">
            Regalos de {label} a domicilio en Catamarca
          </p>
          <p className="mt-1 text-sm text-ink-soft">
            Aunque este año no llegues a la mesa: lo pedís desde donde estés.
          </p>
        </div>
        <StickerButton href={href} variant="outline" icon="none" size="md">
          Ver regalos de {label}
        </StickerButton>
      </div>
    </section>
  );
}
