import { INDEXABLE } from "@/config/env";

/** A thin reminder on every non-public build. Gone once the site is indexable. */
export function PreviewBanner() {
  if (INDEXABLE) return null;
  return (
    <div className="bg-charcoal px-4 py-1.5 text-center text-xs font-semibold tracking-wide text-cream">
      Preview site: hidden from search engines. Striped items are placeholders.
    </div>
  );
}
