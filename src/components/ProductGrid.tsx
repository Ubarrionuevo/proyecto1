import Link from 'next/link';
import Polaroid from '@/components/ui/Polaroid';
import { ArrowIcon } from '@/components/Icons';
import { getWhatsAppUrl, productTopic } from '@/lib/products';
import { productPages } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';

/* Todos los productos con foto, nombre, descripción corta y enlace a la ficha.
   Los precios se pasan por WhatsApp: solo aparecen si siteConfig.showPrices. */
export default function ProductGrid() {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {Object.values(productPages).map(({ product, seoName, urlPath }, i) => (
        <article key={urlPath} className="border border-rule bg-paper-card p-4 sm:p-5">
          <Link href={urlPath} className="group block">
            <Polaroid
              src={product.images[0].src}
              alt={product.images[0].alt}
              rotate={i % 2 === 0 ? -1 : 1}
              sizes="(max-width: 640px) 90vw, 340px"
              className="w-full"
              imgClassName="aspect-[4/3]"
            />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink flex items-center gap-2">
              {seoName}
              <ArrowIcon className="w-4 h-4 shrink-0 text-berry transition-transform duration-200 group-hover:translate-x-1" />
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.description}</p>
          {siteConfig.showPrices ? (
            <p className="mt-3 font-display text-2xl font-semibold text-berry">{product.price}</p>
          ) : (
            <a
              href={getWhatsAppUrl(productTopic(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm link-underline font-bold text-ink"
            >
              Consultá el precio por WhatsApp
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
