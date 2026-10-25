import { CalendarIcon } from "@/components/ui/Icons";

/**
 * "Book your walkthrough" slot on the thank-you screen. With
 * NEXT_PUBLIC_BOOKING_URL set (Cal.com, Calendly, Google booking page...),
 * it embeds that page. Until then it says plainly that we'll reach out.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

export function BookingEmbed({ preview, contactLine }: { preview: boolean; contactLine: string }) {
  if (BOOKING_URL) {
    return (
      <div className="mt-6">
        <h4 className="flex items-center gap-2 text-lg font-extrabold text-forest">
          <CalendarIcon /> Book your walkthrough now
        </h4>
        <iframe
          src={BOOKING_URL}
          title="Book your walkthrough"
          loading="lazy"
          className="mt-3 h-[38rem] w-full rounded-xl border-2 border-cream-200 bg-white"
        />
      </div>
    );
  }
  return (
    <div className="mt-6 rounded-xl border-2 border-dashed border-sage bg-[repeating-linear-gradient(-45deg,var(--color-cream-50)_0_12px,var(--color-pale)_12px_13px)] p-5">
      <p className="flex items-center gap-2 font-extrabold text-forest">
        <CalendarIcon /> Book your walkthrough
      </p>
      <p className="mt-1.5 text-[0.95rem]">{contactLine}</p>
      {preview && (
        <p className="mt-2 text-sm">
          <span className="placeholder-mark">[BOOKING_URL]</span> Set NEXT_PUBLIC_BOOKING_URL to show a live calendar here.
        </p>
      )}
    </div>
  );
}
