import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppUrl, productTopic, type Product } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { siteConfig } from '@/lib/site';
import StickerButton from './ui/StickerButton';

/* Tarjeta angosta para grillas de dos columnas en celular: foto y nombre. El
   botón y el texto van como children, porque cada grilla los ordena distinto. */
export default function ProductCard({
  product,
  title = product.name,
  Heading = 'h3',
  priority = false,
  children,
}: {
  product: Product;
  title?: string;
  Heading?: 'h2' | 'h3';
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const image = product.images[0];
  const href = productPageById[product.id].urlPath;

  return (
    <div className="flex h-full min-w-0 flex-col">
      <Link
        href={href}
        aria-label={`Ver ${title}`}
        className="zoom-host relative block aspect-[3/4] overflow-hidden bg-paper-deep"
      >
        {product.video ? (
          <video
            src={product.video}
            className="zoom-media h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={image.src}
          />
        ) : (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 360px"
            preload={priority}
            className="zoom-media object-cover"
          />
        )}
      </Link>

      {product.tag && <span className="label mt-3 text-[10px] text-berry">{product.tag}</span>}
      <Heading
        className={`font-display text-base font-semibold leading-snug text-ink sm:text-xl ${
          product.tag ? 'mt-1' : 'mt-3'
        }`}
      >
        <Link href={href}>{title}</Link>
      </Heading>
      {siteConfig.showPrices && (
        <p className="mt-1 font-display text-lg font-semibold text-berry">{product.price}</p>
      )}

      {children}
    </div>
  );
}

export function ProductCardButton({
  product,
  children,
  variant = 'berry',
  className = 'mt-3',
}: {
  product: Product;
  children: React.ReactNode;
  variant?: 'berry' | 'outline';
  className?: string;
}) {
  return (
    <StickerButton
      href={getWhatsAppUrl(productTopic(product.name))}
      variant={variant}
      size="sm"
      wrap
      className={`w-full ${className}`}
    >
      {children}
    </StickerButton>
  );
}
