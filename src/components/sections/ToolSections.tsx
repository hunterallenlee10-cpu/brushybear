import type { ProjectType } from "@/config/pricing";
import { ColorPreview } from "@/components/tools/ColorPreview";
import { PriceEstimator } from "@/components/tools/PriceEstimator";
import { LazyMount } from "@/components/ui/LazyMount";

/** Ballpark price tool with its heading. */
export function EstimatorSection({ initialType, title = "What will it cost? Get a ballpark in 20 seconds." }: { initialType?: ProjectType; title?: string }) {
  return (
    <section id="ballpark" aria-labelledby="ballpark-title" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <h2 id="ballpark-title" className="max-w-3xl font-display text-display-lg text-forest text-balance">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-lg">
        Most painters won&apos;t say a number until they visit. Here&apos;s a range from what similar Eastside jobs run, so you know what to expect before we come out.
      </p>
      <div className="mt-10">
        <LazyMount minHeight="38rem">
          <PriceEstimator initialType={initialType} />
        </LazyMount>
      </div>
    </section>
  );
}

/** Exterior color preview with its heading, on a pale band. */
export function ColorPreviewSection() {
  return (
    <section id="colors" aria-labelledby="colors-title" className="bg-pale/55">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <h2 id="colors-title" className="max-w-3xl font-display text-display-lg text-forest text-balance">
          Try colors on a Northwest craftsman
        </h2>
        <p className="mt-4 max-w-2xl text-lg">
          Eight palettes that look right under gray skies and tall firs. Pick one and it rides along with your estimate request.
        </p>
        <div className="mt-10">
          <LazyMount minHeight="34rem">
            <ColorPreview />
          </LazyMount>
        </div>
      </div>
    </section>
  );
}
