import { BrushIcon } from "@/components/ui/Icons";

type Ratio = "16/9" | "4/3" | "1/1" | "3/4" | "3/2";

/**
 * A clearly labeled stand-in for a real photo, in the right aspect ratio so
 * the layout never shifts when the real image arrives. Never replaced with
 * stock or AI images presented as our work.
 */
export function PlaceholderImage({ label, ratio = "4/3", className = "" }: { label: string; ratio?: Ratio; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`relative flex items-center justify-center overflow-hidden rounded-[var(--radius-sticker)] border-2 border-dashed border-cream-200 bg-[repeating-linear-gradient(-45deg,var(--color-cream-50)_0_14px,var(--color-cream)_14px_28px)] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-charcoal-soft">
        <BrushIcon className="size-7" />
        <span className="text-xs font-extrabold uppercase tracking-[0.12em]">{label}</span>
      </div>
    </div>
  );
}
