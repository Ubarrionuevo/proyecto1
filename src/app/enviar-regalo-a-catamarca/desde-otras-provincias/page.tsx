import type { Metadata } from 'next';
import OriginPage, { originMetadata } from '@/components/OriginPage';
import { origins } from '@/lib/origins';
import { provinceLinks } from '@/lib/site';

export const metadata: Metadata = originMetadata(origins.provincias);

export default function Page() {
  return (
    <OriginPage
      origin={origins.provincias}
      related={{ title: 'Elegí tu provincia', links: provinceLinks }}
    />
  );
}
