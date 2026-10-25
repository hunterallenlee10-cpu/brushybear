import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { SERVICE_TIMELINES } from "@/data/service-timelines";

/** How a typical job runs, step by step, with the usual total time. */
export function ServiceTimeline({ slug, serviceName }: { slug: string; serviceName: string }) {
  const t = SERVICE_TIMELINES[slug];
  if (!t) return null;
  return (
    <section aria-labelledby="timeline-title" className="bg-pale/50">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <h2 id="timeline-title" className="font-display text-display-md text-forest">
          How a {serviceName.toLowerCase()} job runs
        </h2>
        <p className="mt-3 text-lg">
          <strong className="font-extrabold text-forest">Typical length:</strong> {t.total}.
          <ConfirmBadge note={t.confirm} />
        </p>
        <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {t.steps.map((s, i) => (
            <li key={s.title} className="relative pl-14">
              <span className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full border-2 border-charcoal bg-gold font-display text-xl text-charcoal">
                {i + 1}
              </span>
              <p className="text-sm font-extrabold text-charcoal-soft">{s.when}</p>
              <h3 className="mt-0.5 text-xl font-extrabold text-forest">{s.title}</h3>
              <p className="mt-1.5">{s.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
