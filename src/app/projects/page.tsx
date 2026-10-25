import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { BeforeAfterSlider } from "@/components/media/BeforeAfterSlider";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { GALLERY, PROJECT_SLOTS } from "@/data/gallery";
import { publishedServices } from "@/data/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${SITE.regionName} Painting Projects`,
  description:
    "Before and after photos of real Brushy Bear Painters jobs in Bellevue, Kirkland, Redmond, Sammamish and Issaquah. Drag the slider to compare each job.",
  path: PAGES.projects.path,
  indexable: PAGES.projects.indexable,
});

/** Real jobs only, as before/after sliders. Labeled placeholders until they exist. */
export default function ProjectsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: PAGES.projects.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`${SITE.regionName} house painting projects, before and after`}
        intro={[`Every photo here will be a real ${SITE.name} job. No stock photos, no borrowed work, no AI.`]}
      />
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        {GALLERY.length > 0 ? (
          <GalleryGrid
            items={GALLERY}
            services={publishedServices().map((s) => ({ value: s.slug, label: s.name }))}
            cities={publishedCities().map((c) => ({ value: c.slug, label: c.name }))}
          />
        ) : (
          <>
            <div className="grid items-center gap-6 rounded-[1.75rem] bg-cream-50 p-6 md:grid-cols-[9rem_1fr] md:p-8">
              <BearMascot pose="ladder" sizes="144px" className="mx-auto h-auto w-28 md:w-36" />
              <div>
                <h2 className="font-display text-display-md text-forest">Our first projects are on the way.</h2>
                <p className="mt-2 max-w-2xl text-lg">
                  We&apos;re a new company, so this page fills up as jobs finish. The striped sliders below show where real before and after
                  photos will go. We&apos;d rather show you a placeholder than someone else&apos;s work.
                </p>
              </div>
            </div>
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {PROJECT_SLOTS.map((s) => (
                <li key={s.id}>
                  <BeforeAfterSlider placeholder={{ label: s.label }} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <CtaBlock source="projects" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
