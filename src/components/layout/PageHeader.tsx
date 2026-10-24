import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/layout/Breadcrumbs";
import { RichText } from "@/components/ui/RichText";

type Props = {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro?: string[];
  aside?: ReactNode;
  children?: ReactNode;
};

/** Top of every inner page: breadcrumbs, eyebrow, the one H1, intro. */
export function PageHeader({ crumbs, eyebrow, title, intro, aside, children }: Props) {
  return (
    <header className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:px-8 md:pt-12 md:pb-16">
      <Breadcrumbs items={crumbs} />
      <div className={`mt-8 grid items-center gap-10 ${aside ? "lg:grid-cols-[1.3fr_1fr] lg:gap-16" : ""}`}>
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest">{eyebrow}</p>}
          <h1 className="mt-3 font-display text-display-lg text-forest text-balance">{title}</h1>
          {intro?.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-6 text-lg md:text-xl" : "mt-4 text-lg"}`}>
              <RichText text={p} />
            </p>
          ))}
          {children}
        </div>
        {aside}
      </div>
    </header>
  );
}
