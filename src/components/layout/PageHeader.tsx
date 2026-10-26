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

/** Top of every inner page: a dark band like the home hero, with breadcrumbs, eyebrow, the one H1 and intro. */
export function PageHeader({ crumbs, eyebrow, title, intro, aside, children }: Props) {
  return (
    <header className="on-dark relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgb(29_90_67/0.55),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pt-7 pb-12 md:px-8 md:pt-10 md:pb-16">
        <Breadcrumbs items={crumbs} />
        <div className={`mt-8 grid items-center gap-10 ${aside ? "lg:grid-cols-[1.25fr_1fr] lg:gap-16" : ""}`}>
          <div className="max-w-3xl">
            {eyebrow && <p className="text-sm font-bold tracking-[0.14em] text-honey uppercase">{eyebrow}</p>}
            <h1 className="mt-3 text-display-lg text-balance text-white">{title}</h1>
            {intro?.map((p, i) => (
              <p key={i} className={`${i === 0 ? "mt-6 text-lg md:text-xl" : "mt-4 text-lg"} text-white/85 [&_a]:text-honey`}>
                <RichText text={p} />
              </p>
            ))}
            {children}
          </div>
          {aside}
        </div>
      </div>
    </header>
  );
}
