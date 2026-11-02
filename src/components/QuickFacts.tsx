import { siteConfig } from '@/lib/site';

/* Datos rápidos en texto plano: cada fila responde una pregunta concreta y se
   arma desde siteConfig, para que los resúmenes de IA la levanten sin ambigüedad. */
const facts = [
  { t: 'Zona de entrega', d: `Solo en ${siteConfig.city}, ${siteConfig.region}.` },
  { t: 'Horario', d: `${siteConfig.hours}, hora de Argentina.` },
  { t: 'Precios', d: 'Consultalos por WhatsApp.' },
  { t: 'Cómo pedir', d: `Por WhatsApp al ${siteConfig.phoneDisplay}.` },
  {
    t: 'Desde el exterior',
    d: 'Sí, se puede pedir. Pagás con transferencia desde cuenta argentina o con Prex.',
  },
  { t: 'Confirmación', d: 'Te mandamos foto o video de la entrega.' },
  {
    t: 'Calificación en Google',
    d: `${siteConfig.googleRating} con ${siteConfig.googleReviews} opiniones.`,
  },
];

export default function QuickFacts() {
  return (
    <section aria-label="Datos rápidos" className="border-t border-rule py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <span className="label">Lo esencial</span>
        <h2 className="display-md mt-3 text-ink">Datos rápidos</h2>
        <dl className="mt-6 border-t border-rule">
          {facts.map((fact) => (
            <div key={fact.t} className="grid sm:grid-cols-12 gap-x-6 gap-y-1 py-4 border-b border-rule">
              <dt className="sm:col-span-4 text-sm font-bold text-ink">{fact.t}</dt>
              <dd className="sm:col-span-8 text-sm leading-relaxed text-ink-soft">{fact.d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
