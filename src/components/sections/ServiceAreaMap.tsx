import { cityPath, isLivePath } from "@/config/pages";
import { publishedCities } from "@/data/cities";

/**
 * A simple drawn map of the service area (not an embedded map: no scripts,
 * no tracking, no layout shift). Lakes and pins are placed from real
 * coordinates, simplified. Pins link to city pages once they exist.
 */
const PINS: Record<string, { x: number; y: number; label: "above" | "below" | "right" }> = {
  "kirkland-wa": { x: 150, y: 197, label: "above" },
  "redmond-wa": { x: 268, y: 212, label: "above" },
  "bellevue-wa": { x: 160, y: 340, label: "right" },
  "sammamish-wa": { x: 384, y: 327, label: "below" },
  "issaquah-wa": { x: 388, y: 499, label: "below" },
};

const labelPos = (p: { x: number; y: number; label: "above" | "below" | "right" }) =>
  p.label === "right"
    ? { x: p.x + 24, y: p.y + 7, anchor: "start" as const }
    : { x: p.x, y: p.label === "above" ? p.y - 24 : p.y + 40, anchor: "middle" as const };

export function ServiceAreaMap() {
  const cities = publishedCities().filter((c) => PINS[c.slug]);
  return (
    <svg viewBox="0 0 480 620" className="h-auto w-full" role="group" aria-label="Map of Bellevue, Kirkland, Redmond, Sammamish and Issaquah, east of Lake Washington">
      <rect x="4" y="4" width="472" height="612" rx="28" fill="var(--color-cream-50)" stroke="var(--color-charcoal)" strokeWidth="3" />
      {/* Lake Washington with Mercer Island */}
      <path d="M92 30 C 110 60, 118 120, 120 180 C 122 230, 112 260, 118 300 C 124 340, 130 380, 124 430 C 118 480, 112 530, 100 590 C 88 560, 78 520, 74 470 C 70 420, 66 380, 70 330 C 74 280, 80 230, 78 180 C 76 120, 80 60, 92 30Z" fill="#cbdcd1" stroke="#9fbcab" strokeWidth="2" />
      <ellipse cx="97" cy="440" rx="11" ry="42" fill="var(--color-cream-50)" stroke="#9fbcab" strokeWidth="2" />
      {/* Lake Sammamish */}
      <path d="M300 262 C 318 268, 332 300, 334 340 C 336 380, 330 420, 318 446 C 306 440, 298 410, 296 370 C 294 330, 292 290, 300 262Z" fill="#cbdcd1" stroke="#9fbcab" strokeWidth="2" />
      <g fontFamily="var(--font-manrope)" fontSize="13" fontWeight="700" fill="#5d7a69" letterSpacing="0.06em">
        <text x="40" y="150" transform="rotate(-90 40 150)">LAKE WASHINGTON</text>
        <text x="320" y="436" transform="rotate(-90 320 436)" fontSize="11">LAKE SAMMAMISH</text>
      </g>
      {/* I-405 and I-90 */}
      <g fill="none" stroke="var(--color-charcoal-soft)" strokeWidth="2.5" strokeDasharray="7 7" strokeLinecap="round">
        <path d="M168 30 C 176 120, 170 240, 182 330 S 190 470, 176 600" />
        <path d="M60 452 C 160 446, 240 436, 300 446 S 420 474, 470 470" />
      </g>
      <g fontFamily="var(--font-manrope)" fontSize="12" fontWeight="800" fill="var(--color-charcoal-soft)">
        <text x="186" y="80">I-405</text>
        <text x="200" y="434">I-90</text>
      </g>
      {/* City pins */}
      {cities.map((c) => {
        const p = PINS[c.slug];
        const href = cityPath(c.slug);
        const live = isLivePath(href);
        const lp = labelPos(p);
        const label = (
          <g>
            <circle cx={p.x} cy={p.y} r="15" fill="#fff" stroke="var(--color-charcoal)" strokeWidth="2.5" />
            <circle cx={p.x} cy={p.y} r="8" fill="var(--color-gold)" stroke="var(--color-charcoal)" strokeWidth="2" />
            <text
              x={lp.x}
              y={lp.y}
              textAnchor={lp.anchor}
              fontFamily="var(--font-lilita)"
              fontSize="23"
              fill="var(--color-forest)"
              stroke="var(--color-cream-50)"
              strokeWidth="6"
              paintOrder="stroke"
            >
              {c.name}
            </text>
          </g>
        );
        return live ? (
          <a key={c.slug} href={href} aria-label={`Painters in ${c.name}`}>
            {label}
          </a>
        ) : (
          <g key={c.slug}>{label}</g>
        );
      })}
    </svg>
  );
}
