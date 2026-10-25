import { BearMascot } from "@/components/brand/BearMascot";
import { ReviewCarousel } from "@/components/proof/ReviewCarousel";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlaceholderMark } from "@/components/ui/Fill";
import { GoogleIcon } from "@/components/ui/Icons";
import { PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { REVIEWS } from "@/data/reviews";
import { isSet } from "@/lib/placeholders";

/** "Leave us a Google review" button, or a striped placeholder until the link exists. */
export function GoogleReviewButton() {
  if (!isSet(SITE.googleReviewUrl)) {
    return (
      <span className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-dashed border-forest px-6 font-extrabold text-forest">
        <GoogleIcon /> Leave a Google review <PlaceholderMark value={SITE.googleReviewUrl} />
      </span>
    );
  }
  return (
    <ButtonLink href={SITE.googleReviewUrl} event="review_click" location="reviews">
      <GoogleIcon /> Leave a Google review
    </ButtonLink>
  );
}

/**
 * Reviews on the home page. Real ones show in the carousel. While there are
 * none, an honest note instead of a fake testimonial block.
 */
export function ReviewsSection() {
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <h2 id="reviews-title" className="font-display text-display-lg text-forest">
        {REVIEWS.length > 0 ? "What our customers say" : "No reviews yet. Here's why."}
      </h2>
      {REVIEWS.length > 0 ? (
        <div className="mt-10">
          <ReviewCarousel reviews={REVIEWS} />
          <div className="mt-6 flex flex-wrap gap-4">
            <ButtonLink href={PAGES.reviews.path} variant="secondary">
              All reviews
            </ButtonLink>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid items-center gap-8 rounded-[1.75rem] border-2 border-dashed border-sage bg-cream-50 p-6 md:grid-cols-[1fr_10rem] md:p-10">
          <div>
            <p className="max-w-2xl text-lg">
              {SITE.name} is new, and we won&apos;t post made-up quotes or borrowed star ratings. Our first customers&apos; real
              reviews will show up here as jobs finish. Until then, the promises above are what we&apos;ll be judged on.
            </p>
            <p className="mt-4 font-semibold">Already worked with us?</p>
            <div className="mt-3">
              <GoogleReviewButton />
            </div>
          </div>
          <BearMascot pose="thumbs-up" sizes="160px" className="mx-auto hidden h-auto w-36 md:block" />
        </div>
      )}
    </section>
  );
}
