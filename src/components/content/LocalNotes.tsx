import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { BrushIcon, PinIcon, RainIcon, ShieldIcon, StarIcon } from "@/components/ui/Icons";
import { CITY_NOTES, type LocalNote } from "@/data/city-notes";

const ICONS: Record<LocalNote["topic"], typeof RainIcon> = {
  Rain: RainIcon,
  Sun: StarIcon,
  Shade: PinIcon,
  Moss: BrushIcon,
  Siding: BrushIcon,
  HOAs: ShieldIcon,
};

/** Rain, shade, moss, siding and HOAs for one city, at a glance. */
export function LocalNotes({ slug, cityName }: { slug: string; cityName: string }) {
  const notes = CITY_NOTES[slug];
  if (!notes) return null;
  return (
    <section aria-labelledby="local-notes-title" className="mx-auto max-w-7xl px-4 pb-14 md:px-8">
      <div className="rounded-[1.75rem] bg-forest p-6 text-cream md:p-10 on-dark">
        <h2 id="local-notes-title" className="font-display text-display-md">
          Painting in {cityName}: what we plan around
        </h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {notes.map((n) => {
            const Icon = ICONS[n.topic];
            return (
              <li key={n.topic}>
                <p className="flex items-center gap-2 font-extrabold text-gold">
                  <Icon className="size-5" /> {n.topic}
                </p>
                <p className="mt-2 text-[0.98rem] text-cream/90">
                  {n.text}
                  <ConfirmBadge note={n.confirm} />
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
