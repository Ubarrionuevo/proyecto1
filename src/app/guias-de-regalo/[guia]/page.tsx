import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GuidePage, { guideMetadata } from '@/components/GuidePage';
import { guideBySlug, guides } from '@/lib/guias';

/* Guías de regalo, generadas en el build desde guias.ts. */

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ guia: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ guia: string }>;
}): Promise<Metadata> {
  const guide = guideBySlug((await params).guia);
  return guide ? guideMetadata(guide) : {};
}

export default async function Page({ params }: { params: Promise<{ guia: string }> }) {
  const guide = guideBySlug((await params).guia);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
