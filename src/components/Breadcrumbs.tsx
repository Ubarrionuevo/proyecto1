import Link from 'next/link';

/* Breadcrumbs visibles: ayudan a navegar y alimentan el BreadcrumbList. */
export default function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav aria-label="Migas de pan" className="max-w-6xl mx-auto px-5 sm:px-8 pt-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-2">
              {i > 0 && (
                <span aria-hidden className="text-rule">
                  /
                </span>
              )}
              {last || !item.path ? (
                <span aria-current={last ? 'page' : undefined} className="text-ink-soft">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="link-underline font-semibold text-ink">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
