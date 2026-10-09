import Link from 'next/link';
import type { CSSProperties } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd, { productJsonLd, breadcrumbJsonLd } from '@/components/JsonLd';
import Polaroid from '@/components/ui/Polaroid';
import StickerButton from '@/components/ui/StickerButton';
import { getWhatsAppUrl, type Product } from '@/lib/products';
import { ArrowIcon } from '@/components/Icons';

export type ProductPageData = {
  product: Product;
  seoName: string;
  categoryName: string;
  categoryPath: string;
  urlPath: string;
  related: { name: string; price: string; href: string }[];
};

/* Ficha de producto: H1 único, precio visible, galería con las fotos reales
   del producto, qué incluye según el texto actual, CTA a WhatsApp,
   relacionados y breadcrumbs. Sin inventar medidas, sabores ni contenido. */
export default function ProductDetail({ data }: { data: ProductPageData }) {
  const { product, seoName, categoryName, categoryPath, urlPath, related } = data;
  const crumbs = [
    { name: 'Inicio', path: '/' },
    { name: categoryName, path: categoryPath },
    { name: product.name },
  ];

  return (
    <main className="min-h-screen bg-paper text-ink">
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          productJsonLd({
            name: `${seoName} a domicilio en Catamarca`,
            description: `${product.description} ${product.detail}`,
            image: product.images[0],
            price: product.price,
            urlPath,
          }),
        ]}
      />
      <Navbar />
      <Breadcrumbs items={crumbs} />

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-10 sm:pt-14 pb-14">
        <span className="label">{categoryName}</span>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <h1 className="display-lg text-ink text-balance max-w-2xl">
            {seoName} a domicilio en Catamarca
          </h1>
          <p className="font-display text-3xl sm:text-4xl font-semibold text-berry leading-none shrink-0">
            {product.price}
          </p>
        </div>
        {product.tag && <p className="label text-berry mt-3">{product.tag}</p>}

        {/* Galería con las fotos reales del producto */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {product.images.map((src, i) => (
            <Polaroid
              key={src}
              src={src}
              rotate={i % 2 === 0 ? -1.5 : 1.5}
              priority={i === 0}
              className="w-full"
              imgClassName="aspect-[3/4]"
            />
          ))}
          {product.video && (
            <figure
              className="polaroid w-full"
              style={{ '--rot': '1.5deg' } as CSSProperties}
            >
              <video
                src={product.video}
                className="w-full aspect-[3/4] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={product.images[0]}
              />
            </figure>
          )}
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-x-8 gap-y-8">
          <div className="lg:col-span-7">
            <h2 className="display-md text-ink">Qué incluye</h2>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-ink-soft">
              {product.description}
            </p>
            <p className="mt-3 text-[15px] sm:text-base leading-relaxed text-ink-soft">
              {product.detail}
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-rule bg-paper-card p-6 sm:p-8 lg:sticky lg:top-28">
              <p className="font-display text-3xl font-semibold text-berry leading-none">
                {product.price}
              </p>
              <p className="label mt-2">Precio de lista</p>
              <StickerButton
                href={getWhatsAppUrl(`el ${product.name}`)}
                size="lg"
                className="mt-5 w-full"
              >
                Quiero este {product.name.toLowerCase()}
              </StickerButton>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">
                Se paga por transferencia y se entrega a domicilio en San Fernando del Valle
                de Catamarca.
              </p>
            </div>
          </div>
        </div>

        <h2 className="display-md mt-16 text-ink">También te puede gustar</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group border border-rule bg-paper-card p-6"
            >
              <span className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                {item.name}
                <ArrowIcon className="w-4 h-4 text-berry transition-transform duration-200 group-hover:translate-x-1" />
              </span>
              <span className="font-display text-2xl font-semibold text-berry mt-1 block">
                {item.price}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
