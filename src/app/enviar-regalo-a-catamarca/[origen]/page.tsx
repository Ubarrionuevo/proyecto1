import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import OriginPage, { originMetadata, type RelatedLinks } from '@/components/OriginPage';
import { localityOrigins, provinceOrigins } from '@/lib/origins-argentina';
import { localityLinks, provinceLinks } from '@/lib/site';

/* Provincias y localidades de Catamarca, generadas en el build desde
   origins-argentina.ts. Las páginas de exterior y "otras provincias" tienen su
   carpeta propia y Next las prioriza sobre esta ruta. */

export const dynamicParams = false;

const slugOf = (path: string) => path.split('/').pop()!;

function find(slug: string) {
  const province = provinceOrigins.find((o) => slugOf(o.path) === slug);
  if (province) return { origin: province, kind: 'provincia' as const };
  const locality = localityOrigins.find((o) => slugOf(o.path) === slug);
  if (locality) return { origin: locality, kind: 'localidad' as const };
  return null;
}

export function generateStaticParams() {
  return [...provinceOrigins, ...localityOrigins].map((o) => ({ origen: slugOf(o.path) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ origen: string }>;
}): Promise<Metadata> {
  const found = find((await params).origen);
  return found ? originMetadata(found.origin) : {};
}

export default async function Page({ params }: { params: Promise<{ origen: string }> }) {
  const found = find((await params).origen);
  if (!found) notFound();

  const { origin, kind } = found;
  const related: RelatedLinks =
    kind === 'provincia'
      ? {
          title: 'También se pide desde',
          links: [
            ...provinceLinks.filter((l) => l.href !== origin.path),
            { href: '/enviar-regalo-a-catamarca/desde-otras-provincias', label: 'Desde otras provincias' },
          ],
        }
      : {
          title: 'Desde otras localidades de Catamarca',
          links: localityLinks.filter((l) => l.href !== origin.path),
        };

  return <OriginPage origin={origin} related={related} />;
}
