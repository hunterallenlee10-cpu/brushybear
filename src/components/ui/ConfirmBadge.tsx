import { INDEXABLE } from "@/config/env";

/**
 * A small striped "Confirm" tag on previews, next to copy that still needs
 * Erik's or Hunter's OK. Hover (or long-press) shows what to check. Never
 * rendered on a public build (the launch check blocks one anyway).
 */
export function ConfirmBadge({ note }: { note?: string }) {
  if (!note || INDEXABLE) return null;
  return (
    <span
      className="placeholder-mark ml-1.5 inline-block align-middle text-[0.7rem] leading-5"
      title={note}
      aria-label={`Needs confirming: ${note}`}
    >
      confirm
    </span>
  );
}
