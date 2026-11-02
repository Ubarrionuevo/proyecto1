import type { Metadata } from 'next';
import OriginPage, { originMetadata } from '@/components/OriginPage';
import { origins } from '@/lib/origins';

export const metadata: Metadata = originMetadata(origins.peru);

export default function Page() {
  return <OriginPage origin={origins.peru} />;
}
