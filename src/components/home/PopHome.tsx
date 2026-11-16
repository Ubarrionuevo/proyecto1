import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon, StarIcon, WhatsAppIcon } from '@/components/Icons';
import Ticker from '@/components/ui/Ticker';
import { cajas, clientPhotos, desayunos, getWhatsAppUrl, productTopic, ramos, type Product } from '@/lib/products';
import { productPageById } from '@/lib/product-pages';
import { fmtHour } from '@/lib/origins';
import { originLinks, siteConfig } from '@/lib/site';

/* Inicio rediseñado ("claro y colorido", pensado primero para celular).
   Mantiene el H1, los enlaces internos y los anchors #desayunos, #ramos y
   #clientes. Sin precios: se consultan por WhatsApp. */

const hoursShort = `${siteConfig.openHour} a ${fmtHour(siteConfig.closeHour)} h`;

/* ── Barra de temporada ───────────────────────────────────────── */

export function AnnounceBar() {
  const { enabled, label, href } = siteConfig.seasonalBanner;
  if (!enabled) return null;
  const extra = label === 'Navidad' ? ': pedidos hasta el 25/12 a las 20 h' : '';

  return (
    <Link
      href={href}
      className="flex min-h-11 items-center justify-center gap-2 bg-lemon px-4 py-2 text-center text-[13px] font-bold text-plum"
    >
      <span>
        Regalos de {label}
        {extra}
      </span>
      <ArrowIcon className="h-4 w-4 shrink-0" />
    </Link>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */

export function PopHero() {
  const photo = desayunos[0].images[0];

  return (
    <section className="relative overflow-hidden bg-cream px-4 pb-12 pt-8 text-plum">
      {/* Manchas de color de fondo */}
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full bg-bubble/45 blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -left-28 top-72 h-64 w-64 rounded-full bg-lemon/60 blur-2xl" />

      <div className="relative mx-auto max-w-xl">
        <span className="pop-kicker inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-2 text-plum shadow-sm">
          <span aria-hidden className="h-2 w-2 rounded-full bg-fuchsia" />
          Regalería en Catamarca
        </span>

        <h1 className="pop-display pop-xl mt-5 text-balance">
          <span className="text-fuchsia">Desayunos y ramos</span> a domicilio en Catamarca
        </h1>

        <p className="mt-5 text-lg leading-snug text-plum-soft">
          ¿Vivís lejos y tenés familia o amigos en Catamarca? Lo armamos, lo llevamos a su puerta y
          te mandamos la foto de la entrega.
        </p>

        <div className="mt-7 flex flex-col gap-3">
          <a
            href={getWhatsAppUrl('un regalo a entregar en Catamarca')}
            className="pop-btn pop-btn-main w-full text-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quiero enviar un regalo
          </a>
          <a href="#desayunos" className="pop-btn w-full border-2 border-plum text-plum">
            Ver los regalos
            <ArrowIcon className="h-4 w-4 rotate-90" />
          </a>
        </div>

        <dl className="mt-8 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl bg-white/80 px-2 py-3">
            <dt className="sr-only">Calificación en Google</dt>
            <dd className="pop-display flex items-center justify-center gap-1 text-3xl">
              {siteConfig.googleRating}
              <StarIcon className="h-5 w-5 text-[#e9a400]" />
            </dd>
            <dd className="mt-1 text-[11px] font-bold uppercase tracking-wide text-plum-soft">en Google</dd>
          </div>
          <div className="rounded-2xl bg-white/80 px-2 py-3">
            <dt className="sr-only">Opiniones</dt>
            <dd className="pop-display text-3xl">{siteConfig.googleReviews}</dd>
            <dd className="mt-1 text-[11px] font-bold uppercase tracking-wide text-plum-soft">opiniones</dd>
          </div>
          <div className="rounded-2xl bg-white/80 px-2 py-3">
            <dt className="sr-only">Horario</dt>
            <dd className="pop-display text-3xl">{hoursShort.replace(' h', '')}</dd>
            <dd className="mt-1 text-[11px] font-bold uppercase tracking-wide text-plum-soft">todos los días</dd>
          </div>
        </dl>

        <div className="relative mt-9">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-peach">
            <Image src={photo.src} alt={photo.alt} fill preload sizes="(max-width: 640px) 100vw, 576px" className="object-cover" />
          </div>
          <div className="pop-sticker absolute -right-2 -top-5 h-28 w-28 bg-peach text-plum shadow-lg">
            <span className="pop-display text-xl leading-[0.95]">
              Armado
              <br />a mano
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Cinta ────────────────────────────────────────────────────── */

export function PopTicker() {
  return (
    <div className="overflow-hidden bg-bubble py-3.5 text-plum" aria-label="Lo que hacemos">
      <Ticker
        direction="left"
        items={['Desayunos sorpresa', 'Ramos de golosinas', 'Foto de la entrega', 'Pedidos por WhatsApp', 'Desde cualquier lugar']}
        itemClassName="pop-display text-2xl"
      />
    </div>
  );
}

/* ── Encabezado de sección ────────────────────────────────────── */

function PopHead({ n, kicker, title, children }: { n: string; kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-xl px-4">
      <p className="pop-kicker text-plum-soft">
        {n} / {kicker}
      </p>
      <h2 className="pop-display pop-lg mt-2 text-balance text-plum">{title}</h2>
      {children && <div className="mt-4 text-base leading-relaxed text-plum-soft">{children}</div>}
    </div>
  );
}

const plainLink = 'font-bold text-plum underline decoration-fuchsia decoration-2 underline-offset-4';

function Media({ product, sizes, priority = false }: { product: Product; sizes: string; priority?: boolean }) {
  const image = product.images[0];
  return product.video ? (
    <video
      src={product.video}
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster={image.src}
    />
  ) : (
    <Image src={image.src} alt={image.alt} fill sizes={sizes} preload={priority} className="object-cover" />
  );
}

/* ── Desayunos: tarjetas grandes ──────────────────────────────── */

const desayunoChips = ['Café o té', 'Taza', 'Nota a mano'];

export function DesayunosPop() {
  return (
    <section id="desayunos" className="scroll-mt-20 bg-cream py-14">
      <PopHead n="01" kicker="Desayunos" title="Desayunos sorpresa a domicilio">
        Llegan a la puerta temprano, completos y bien envueltos. Mirá los{' '}
        <Link href="/desayunos-sorpresa-catamarca" className={plainLink}>
          desayunos sorpresa en Catamarca
        </Link>
        .
      </PopHead>

      <div className="mx-auto mt-8 grid max-w-xl gap-6 px-4">
        {desayunos.map((product, idx) => {
          const page = productPageById[product.id];
          return (
            <article key={product.id} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_10px_30px_-12px_rgba(43,21,48,0.25)]">
              <Link href={page.urlPath} className="relative block aspect-[4/5] bg-peach" aria-label={`Ver ${page.seoName}`}>
                <Media product={product} sizes="(max-width: 640px) 100vw, 576px" />
                <span aria-hidden className="pop-display absolute bottom-3 left-4 text-[5.5rem] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]">
                  0{idx + 1}
                </span>
                {product.tag && (
                  <span className="pop-kicker absolute right-4 top-4 rounded-full bg-lemon px-3 py-1.5 text-plum">
                    {product.tag}
                  </span>
                )}
              </Link>
              <div className="p-5">
                <h3 className="pop-display text-4xl text-plum">
                  <Link href={page.urlPath}>Desayuno en {product.name.toLowerCase()}</Link>
                </h3>
                <p className="mt-2 text-base leading-relaxed text-plum-soft">{product.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {desayunoChips.map((chip) => (
                    <li key={chip} className="rounded-full bg-cream px-3 py-1.5 text-sm font-bold text-plum">
                      {chip}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-plum/10 pt-4">
                  <Link href={page.urlPath} className={`${plainLink} text-sm`}>
                    Ver detalle
                  </Link>
                  <a
                    href={getWhatsAppUrl(productTopic(product.name))}
                    className="inline-flex min-h-12 items-center gap-3 rounded-full bg-fuchsia py-1.5 pl-5 pr-1.5 font-bold text-white"
                  >
                    Lo quiero
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-fuchsia">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mx-auto mt-6 max-w-xl px-4 text-sm leading-relaxed text-plum-soft">
        ¿Querés comparar todo junto? Mirá el{' '}
        <Link href="/catalogo" className={plainLink}>
          catálogo de desayunos y ramos
        </Link>
        . También hacemos{' '}
        <Link href="/cartas-personalizadas" className={plainLink}>
          cartas personalizadas
        </Link>
        .
      </p>
    </section>
  );
}

/* ── Ramos y cajas: carrusel horizontal ───────────────────────── */

function Rail({ items, verb }: { items: Product[]; verb: string }) {
  return (
    <ul className="mt-8 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-auto sm:max-w-xl">
      {items.map((product) => {
        const page = productPageById[product.id];
        return (
          <li key={product.id} className="w-[78%] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[1.75rem] bg-white">
            <Link href={page.urlPath} className="relative block aspect-[4/5] bg-cream" aria-label={`Ver ${page.seoName}`}>
              <Media product={product} sizes="78vw" />
              {product.tag && (
                <span className="pop-kicker absolute left-3 top-3 rounded-full bg-fuchsia px-3 py-1.5 text-white">
                  {product.tag}
                </span>
              )}
            </Link>
            <div className="p-4">
              <h3 className="pop-display text-[1.75rem] text-plum">
                <Link href={page.urlPath}>{product.name}</Link>
              </h3>
              <p className="mt-1.5 line-clamp-2 text-sm leading-snug text-plum-soft">{product.description}</p>
              <a
                href={getWhatsAppUrl(productTopic(product.name))}
                className="mt-4 flex min-h-12 items-center justify-between rounded-full bg-plum py-1.5 pl-5 pr-1.5 font-bold text-white"
              >
                {verb}
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-plum">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function RamosPop() {
  return (
    <section id="ramos" className="scroll-mt-20 bg-lemon py-14">
      <PopHead n="02" kicker="Ramos" title="Ramos de golosinas armados a mano">
        Golosinas, chocolates y peluches. Deslizá para ver todos y conocé los{' '}
        <Link href="/ramos-de-golosinas-catamarca" className={plainLink}>
          ramos de golosinas en Catamarca
        </Link>
        .
      </PopHead>
      <Rail items={ramos} verb="Quiero este" />
    </section>
  );
}

export function CajasPop() {
  return (
    <section id="cajas" className="scroll-mt-20 bg-peach py-14">
      <PopHead n="03" kicker="Cajas" title="Cajas con chocolates y tarjeta">
        Con moño y una tarjeta para tu mensaje.
      </PopHead>
      <Rail items={cajas} verb="Quiero esta" />
    </section>
  );
}

/* ── Cómo funciona ────────────────────────────────────────────── */

const pasos = [
  { t: 'Elegís el regalo', d: 'Mirá las opciones y escribinos por WhatsApp.' },
  { t: 'Nos decís para quién es', d: 'El nombre, la dirección, el motivo y el mensaje para la tarjeta.' },
  { t: 'Lo llevamos a su puerta', d: 'Y si estás lejos, te mandamos foto o video de la entrega.' },
];

export function HowPop() {
  return (
    <section className="bg-cream py-14">
      <PopHead n="04" kicker="Cómo funciona" title="Pedir es así de fácil" />
      <ol className="mx-auto mt-8 grid max-w-xl gap-3 px-4">
        {pasos.map((paso, idx) => (
          <li key={paso.t} className="flex items-start gap-4 rounded-3xl bg-white p-5">
            <span className="pop-display grid h-14 w-14 shrink-0 place-items-center rounded-full bg-bubble text-3xl text-plum">
              {idx + 1}
            </span>
            <div>
              <h3 className="pop-display text-2xl text-plum">{paso.t}</h3>
              <p className="mt-1 text-[15px] leading-snug text-plum-soft">{paso.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ── ¿Vivís lejos? ────────────────────────────────────────────── */

export function FarPop() {
  return (
    <section className="bg-bubble px-4 py-14 text-plum">
      <div className="mx-auto max-w-xl">
        <p className="pop-kicker">05 / A distancia</p>
        <h2 className="pop-display pop-lg mt-2 text-balance">¿Vivís lejos? Lo mandás igual</h2>
        <p className="mt-4 text-base leading-relaxed">
          Lo pedís desde cualquier provincia o país y te mandamos la foto de la entrega. Quien lo recibe tiene que estar en {siteConfig.city}.
        </p>
        <p className="pop-kicker mt-7">Nos compran desde</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {originLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="inline-flex min-h-11 items-center rounded-full bg-white/85 px-4 text-sm font-bold">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/enviar-regalo-a-catamarca" className="pop-btn mt-7 w-full bg-plum text-white">
          Enviar un regalo a Catamarca
          <ArrowIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ── Fotos reales ─────────────────────────────────────────────── */

export function PhotosPop() {
  return (
    <section id="clientes" className="scroll-mt-20 bg-cream py-14">
      <PopHead n="06" kicker="Entregas" title="Fotos reales de entregas">
        Ninguna está retocada: son personas de Catamarca que recibieron una sorpresa.
      </PopHead>
      <ul className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 px-4">
        {clientPhotos.map((photo, idx) => (
          <li
            key={photo.image}
            className={`relative aspect-square overflow-hidden rounded-3xl bg-peach ${idx % 3 === 0 ? 'rotate-[-1.5deg]' : idx % 3 === 1 ? 'rotate-[1.5deg]' : ''}`}
          >
            <Image src={photo.image} alt={photo.alt} fill sizes="(max-width: 640px) 50vw, 280px" className="object-cover" />
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ── Reseña real (texto textual de Google: no editar) ─────────── */

const review = {
  name: 'Brisa Magali Soria',
  text: 'Les compro desayunos desde la provincia de Santa Cruz, para que se los entreguen a mi papá y mamá que viven en Catamarca. Siempre puntual, todo fresco, abundante, con detalles delicados que hacen que además de rico se vea lindo, me responden los mensajes rápido y me mantienen al tanto de la entrega. Super confiables!!',
};

export function ReviewPop() {
  return (
    <section aria-label="Reseña de cliente" className="bg-lemon px-4 py-14 text-plum">
      <div className="mx-auto max-w-xl">
        <p className="pop-kicker">Lo que dicen en Google</p>
        <div className="mt-3 flex gap-1" aria-label={`${siteConfig.googleRating} estrellas`}>
          {[0, 1, 2, 3, 4].map((i) => (
            <StarIcon key={i} className="h-6 w-6 text-fuchsia" />
          ))}
        </div>
        <figure className="mt-5 rounded-[2rem] bg-white p-6">
          <blockquote className="text-lg leading-relaxed">“{review.text}”</blockquote>
          <figcaption className="pop-kicker mt-4 text-plum-soft">{review.name}</figcaption>
        </figure>
        {siteConfig.googleMapsUrl && (
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold underline decoration-2 underline-offset-4"
          >
            Ver las {siteConfig.googleReviews} opiniones en Google
            <ArrowIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </section>
  );
}
