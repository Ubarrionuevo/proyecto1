import Image from 'next/image';
import { clientPhotos } from '@/lib/products';

/* Fotos reales de una categoría, en una fila de cuatro para las landings. */
export default function DeliveredPhotos({
  title,
  photos,
}: {
  title: string;
  photos: typeof clientPhotos;
}) {
  return (
    <section className="border-t border-rule bg-paper-deep py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <h2 className="display-md text-ink text-balance">{title}</h2>
        <ul className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {photos.map((photo) => (
            <li
              key={photo.image}
              className="relative aspect-square overflow-hidden border border-rule bg-paper-deep"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 280px"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
