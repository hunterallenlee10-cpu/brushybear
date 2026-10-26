import { INDEXABLE } from "@/config/env";

/** A thin reminder on every non-public build. Gone once the site is indexable. */
export function PreviewBanner() {
  if (INDEXABLE) return null;
  return (
    <div className="bg-honey px-4 py-1 text-center text-xs font-semibold tracking-wide text-ink">
      Preview site: hidden from search engines. Striped items are placeholders.
    </div>
  );
}
