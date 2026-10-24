import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { RichText } from "@/components/ui/RichText";
import type { Block, Section } from "@/data/types";

export const sectionId = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function BlockView({ block }: { block: Block }) {
  const badge = <ConfirmBadge note={block.confirm} />;
  switch (block.type) {
    case "p":
      return (
        <p>
          <RichText text={block.text} />
          {badge}
        </p>
      );
    case "h3":
      return (
        <h3 className="pt-2 text-xl font-extrabold text-forest md:text-2xl">
          {block.text}
          {badge}
        </h3>
      );
    case "ul":
    case "ol": {
      const List = block.type;
      return (
        <List className={`space-y-2 pl-6 ${block.type === "ul" ? "list-disc marker:text-gold" : "list-decimal marker:font-extrabold marker:text-forest"}`}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1">
              <RichText text={item} />
              {i === 0 && badge}
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="rounded-[var(--radius-sticker)] border-l-[6px] border-gold bg-cream-50 px-5 py-4">
          {block.title && <p className="font-extrabold text-forest">{block.title}</p>}
          <p className={block.title ? "mt-1" : ""}>
            <RichText text={block.text} />
            {badge}
          </p>
        </aside>
      );
  }
}

/**
 * Renders H2 sections from the data files. Each section's first sentence
 * states its point (answer-first), per the copy guide.
 */
export function ContentSections({ sections, className = "" }: { sections: Section[]; className?: string }) {
  return (
    <div className={`space-y-14 ${className}`}>
      {sections.map((s) => (
        <section key={s.heading} aria-labelledby={s.id ?? sectionId(s.heading)}>
          <h2 id={s.id ?? sectionId(s.heading)} className="font-display text-display-md text-forest">
            {s.heading}
            <ConfirmBadge note={s.confirm} />
          </h2>
          <div className="mt-5 space-y-4 text-[1.0625rem] md:text-lg">
            {s.body.map((b, i) => (
              <BlockView key={i} block={b} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
