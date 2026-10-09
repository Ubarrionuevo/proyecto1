import { getWhatsAppUrl } from '@/lib/products';
import type { FaqItem } from '@/lib/faqs';

/* FAQ renderizado en el HTML (details nativo, sin JS): Google lo lee directo.
   El JSON-LD de FAQPage se agrega aparte en cada página. */
export default function Faq({
  items,
  label = 'Preguntas frecuentes',
  title = 'Preguntas frecuentes',
}: {
  items: FaqItem[];
  label?: string;
  title?: string;
}) {
  return (
    <section aria-label={label} className="border-t border-rule py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <span className="label">{label}</span>
        <h2 className="display-md mt-3 text-ink text-balance">{title}</h2>
        <div className="mt-8 border-t border-rule">
          {items.map((faq) => (
            <details key={faq.q} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-display text-lg sm:text-xl font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden
                  className="shrink-0 font-body text-2xl leading-none text-berry transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-[15px] leading-relaxed text-ink-soft max-w-prose">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft">
          ¿Otra duda?{' '}
          <a
            href={getWhatsAppUrl('una consulta')}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline font-bold text-ink"
          >
            Escribinos por WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
