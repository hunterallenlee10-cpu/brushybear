import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PAGES } from "@/config/pages";
import { GALLERY, PROJECT_SLOTS } from "@/data/gallery";

/** Before/after sliders: real jobs first, labeled placeholders until then. */
export function ProjectsSection() {
  const real = GALLERY.slice(0, 2);
  const slots = PROJECT_SLOTS.slice(0, Math.max(0, 2 - real.length));
  return (
    <section aria-labelledby="projects-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <h2 id="projects-title" className="font-display text-display-lg text-forest">
            Before and after
          </h2>
          <p className="mt-3 max-w-xl text-lg">Drag the handle. Real Brushy Bear jobs only; the striped ones are waiting for our first photos.</p>
        </div>
        <ButtonLink href={PAGES.projects.path} variant="secondary">
          View past projects
        </ButtonLink>
      </div>
      <ul className="mt-10 grid gap-8 md:grid-cols-2">
        {real.map((item) => (
          <li key={item.id}>
            <BeforeAfterSlider item={item} />
          </li>
        ))}
        {slots.map((s) => (
          <li key={s.id}>
            <BeforeAfterSlider placeholder={{ label: s.label }} />
          </li>
        ))}
      </ul>
    </section>
  );
}
