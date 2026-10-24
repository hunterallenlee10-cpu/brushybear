import Link from "next/link";

export type Crumb = { name: string; path: string };

/** Visible breadcrumbs. Pair with breadcrumbSchema() using the same list. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm font-semibold text-charcoal-soft">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-forest">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="underline-offset-4 hover:text-forest hover:underline">
                    {c.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
