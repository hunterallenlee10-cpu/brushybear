import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/media/GalleryGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { GALLERY } from "@/data/gallery";
import { publishedServices } from "@/data/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Painting Project Gallery",
  description:
    "Before and after photos of real Brushy Bear Painters jobs in Bellevue, Kirkland, Redmond, Sammamish and Issaquah. Filter by service and city to find yours.",
  path: PAGES.gallery.path,
  indexable: PAGES.gallery.indexable,
});

/** Real jobs only. Until there are some, a friendly empty state. */
export default function GalleryPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: PAGES.gallery.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        eyebrow="Our work"
        title="Before and after: real jobs only"
        intro={[`Every photo here is a real ${SITE.name} job. No stock photos, no borrowed work.`]}
      />
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        {GALLERY.length > 0 ? (
          <GalleryGrid
            items={GALLERY}
            services={publishedServices().map((s) => ({ value: s.slug, label: s.name }))}
            cities={publishedCities().map((c) => ({ value: c.slug, label: c.name }))}
          />
        ) : (
          <div className="grid items-center gap-8 rounded-[var(--radius-sticker)] bg-cream-50 p-8 md:grid-cols-[12rem_1fr] md:p-12">
            <BearMascot pose="roller-shoulder" sizes="192px" className="mx-auto h-auto w-40 md:w-48" />
            <div>
              <h2 className="font-display text-display-md text-forest">First projects coming this winter.</h2>
              <p className="mt-3 max-w-xl text-lg">
                We&apos;re a new company, so this page fills up as we finish jobs. We&apos;d rather show you nothing than
                show you someone else&apos;s work.
              </p>
            </div>
          </div>
        )}
      </div>
      <CtaBlock source="gallery" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
