import type { Metadata } from 'next';
import OriginPage, { originMetadata } from '@/components/OriginPage';
import { origins } from '@/lib/origins';

export const metadata: Metadata = originMetadata(origins.italia);

export default function Page() {
  return <OriginPage origin={origins.italia} />;
}
