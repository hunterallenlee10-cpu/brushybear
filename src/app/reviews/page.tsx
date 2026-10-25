import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { ReviewCarousel } from "@/components/proof/ReviewCarousel";
import { GoogleReviewButton } from "@/components/proof/ReviewsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { REVIEWS } from "@/data/reviews";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `${SITE.regionName} House Painter Reviews`,
  description:
    "Real reviews from Brushy Bear Painters customers on the Eastside. We're new, so this page grows one finished job at a time. Past customer? Leave a review.",
  path: PAGES.reviews.path,
  indexable: PAGES.reviews.indexable,
});

const HOW = [
  { title: "We ask every customer", body: "After the final walkthrough, every customer gets the same short note asking for an honest review." },
  { title: "We don't filter", body: "Good or bad, reviews go where you put them. We don't pick which customers to ask." },
  { title: "We don't pay for reviews", body: "No gift cards, discounts or contests in exchange for a review." },
];

/** Real reviews, or an honest empty state that asks past customers for one. */
export default function ReviewsPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Reviews", path: PAGES.reviews.path },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`Reviews of our ${SITE.regionName} house painting`}
        intro={[
          REVIEWS.length > 0
            ? "Real reviews from real customers, linked to where they were posted."
            : `${SITE.name} is new, so there are no reviews here yet. We won't fill this page with made-up quotes or borrowed star ratings.`,
        ]}
      />
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        {REVIEWS.length > 0 ? (
          <ReviewCarousel reviews={REVIEWS} />
        ) : (
          <div className="grid items-center gap-8 rounded-[1.75rem] border-2 border-dashed border-sage bg-cream-50 p-6 md:grid-cols-[1fr_11rem] md:p-10">
            <div>
              <h2 className="font-display text-display-md text-forest">Already worked with us? Tell people how it went.</h2>
              <p className="mt-3 max-w-2xl text-lg">A short Google review helps your neighbors more than anything we could write here.</p>
              <div className="mt-6">
                <GoogleReviewButton />
              </div>
            </div>
            <BearMascot pose="thumbs-up" sizes="176px" className="mx-auto h-auto w-40" />
          </div>
        )}

        <h2 className="mt-16 font-display text-display-md text-forest">How we handle reviews</h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {HOW.map((h) => (
            <li key={h.title} className="rounded-[1.5rem] bg-pale/60 p-6">
              <h3 className="text-xl font-extrabold text-forest">
                {h.title}
                <ConfirmBadge note="Hunter: confirm the review policy" />
              </h3>
              <p className="mt-2">{h.body}</p>
            </li>
          ))}
        </ul>
      </div>
      <CtaBlock source="reviews" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
