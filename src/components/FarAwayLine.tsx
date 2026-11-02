import Link from 'next/link';

/* Línea que lleva al que manda el regalo desde lejos a su página principal. */
export default function FarAwayLine({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm leading-relaxed text-ink-soft border-l-2 border-butter pl-4 ${className}`}>
      ¿Estás lejos?{' '}
      <Link href="/enviar-regalo-a-catamarca" className="link-underline font-bold text-ink">
        Lo mandás desde cualquier provincia o país
      </Link>{' '}
      y te enviamos foto de la entrega.
    </p>
  );
}
