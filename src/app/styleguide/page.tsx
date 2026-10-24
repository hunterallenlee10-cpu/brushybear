import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import wordmark from "@/assets/brand/logo-wordmark.png";
import { BEAR_POSES, BearMascot } from "@/components/brand/BearMascot";
import { Sticker } from "@/components/brand/Sticker";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Fill } from "@/components/ui/Fill";
import { INDEXABLE } from "@/config/env";
import { SITE } from "@/config/site";
import { contrastRatio } from "@/lib/contrast";

export const metadata: Metadata = {
  title: { absolute: `Style guide | ${SITE.name}` },
  robots: { index: false, follow: false },
};

const COLORS = [
  { name: "forest", hex: "#1f4d3a", use: "Headings, footer, dark sections" },
  { name: "forest-deep", hex: "#163829", use: "Footer base, hover on dark" },
  { name: "forest-soft", hex: "#2f6a50", use: "Decorative lines on dark only" },
  { name: "cream", hex: "#f4ede1", use: "Page background" },
  { name: "cream-50", hex: "#faf6ef", use: "Cards and alternate sections" },
  { name: "cream-200", hex: "#e6dac6", use: "Dividers and borders" },
  { name: "gold", hex: "#e9a93b", use: "Buttons, highlights, brushstrokes" },
  { name: "gold-deep", hex: "#d99628", use: "Button hover" },
  { name: "charcoal", hex: "#2b2b2b", use: "Body text, outlines" },
  { name: "charcoal-soft", hex: "#55514b", use: "Secondary text on light" },
];

const PAIRS: [string, string, string, string][] = [
  ["Charcoal on cream", "#2b2b2b", "#f4ede1", "Body text"],
  ["Forest on cream", "#1f4d3a", "#f4ede1", "Headings"],
  ["Cream on forest", "#f4ede1", "#1f4d3a", "Footer, dark sections"],
  ["Charcoal on gold", "#2b2b2b", "#e9a93b", "Gold buttons"],
  ["Gold on forest", "#e9a93b", "#1f4d3a", "Accents on dark (passes AA)"],
  ["Soft charcoal on cream", "#55514b", "#f4ede1", "Secondary text"],
  ["White on gold", "#ffffff", "#e9a93b", "Never"],
  ["Gold on cream", "#e9a93b", "#f4ede1", "Never for text"],
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-cream-200 py-12">
      <h2 className="font-display text-display-md text-forest">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

/** Design review page. Returns 404 once the site is public (SITE_INDEXABLE on). */
export default function StyleguidePage() {
  if (INDEXABLE) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-forest">Preview only</p>
      <h1 className="mt-2 font-display text-display-lg text-forest">Brushy Bear style guide</h1>
      <p className="mt-3 mb-10 max-w-2xl text-charcoal-soft">
        Colors, type, buttons, stickers and brand files. Hidden from search, and removed once the site goes public.
      </p>

      <Section title="Logo">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-2xl bg-cream-50 p-10">
            <Image src="/brand/logo-full.png" alt="Brushy Bear Painters full logo" width={1058} height={1200} sizes="280px" className="h-auto w-56" />
          </div>
          <div className="on-dark flex items-center justify-center rounded-2xl bg-forest p-10">
            <Image src="/brand/logo-full.png" alt="Brushy Bear Painters full logo on green" width={1058} height={1200} sizes="280px" className="h-auto w-56" />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-cream-50 p-8">
            <Image src={wordmark} alt="Wordmark" sizes="320px" className="h-auto w-80" />
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-forest p-8">
            <Image src={wordmark} alt="Wordmark on green" sizes="320px" className="h-auto w-80" />
          </div>
        </div>
        <p className="mt-4 text-sm text-charcoal-soft">
          Cut from the master logo file. The artwork is untouched; the white sticker border is rebuilt at its
          original width so it shows on any background.
        </p>
      </Section>

      <Section title="Bear poses">
        <ul className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {BEAR_POSES.map((pose) => (
            <li key={pose} className="rounded-2xl bg-cream-50 p-6 text-center">
              <BearMascot pose={pose} sizes="240px" className="mx-auto h-56 w-auto" />
              <p className="mt-3 font-bold">{pose}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Colors">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {COLORS.map((c) => (
            <li key={c.name}>
              <div className="h-20 rounded-xl border border-cream-200" style={{ background: c.hex }} />
              <p className="mt-2 font-bold">{c.name}</p>
              <p className="font-mono text-sm">{c.hex}</p>
              <p className="text-sm text-charcoal-soft">{c.use}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Contrast (WCAG AA: 4.5 text, 3 large text)">
        <ul className="grid gap-3 md:grid-cols-2">
          {PAIRS.map(([label, fg, bg, use]) => {
            const ratio = contrastRatio(fg, bg);
            return (
              <li key={label} className="flex items-center justify-between rounded-xl px-5 py-4 font-bold" style={{ color: fg, background: bg }}>
                <span>
                  {label} <span className="font-medium">· {use}</span>
                </span>
                <span>
                  {ratio.toFixed(2)} {ratio >= 4.5 ? "✓" : "✗"}
                </span>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section title="Type">
        <p className="font-display text-display-xl text-forest">Display XL · Lilita One</p>
        <p className="mt-4 font-display text-display-lg text-forest">Display L for section titles</p>
        <p className="mt-4 font-display text-display-md text-forest">Display M, never below 28 px</p>
        <p className="mt-6 text-xl font-extrabold">Manrope ExtraBold, for small headings and labels</p>
        <p className="mt-3 max-w-2xl">
          Manrope Regular for body text at 17–18 px with a 1.6 line height. Short sentences. Lead with what the
          homeowner gets: a clean job, done on time, that holds up in Northwest rain.
        </p>
        <p className="mt-3 max-w-2xl text-charcoal-soft">Soft charcoal for secondary text and notes.</p>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-6">
          <ButtonLink href="/styleguide">Get a Free Estimate</ButtonLink>
          <ButtonLink href="/styleguide" variant="secondary">
            See our services
          </ButtonLink>
        </div>
        <div className="on-dark mt-6 flex flex-wrap items-center gap-6 rounded-2xl bg-forest p-8">
          <ButtonLink href="/styleguide">Get a Free Estimate</ButtonLink>
          <ButtonLink href="/styleguide" variant="secondary-on-dark">
            Call us
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-charcoal-soft">Tab through these to see the focus ring (charcoal on light, gold on dark).</p>
      </Section>

      <Section title="Stickers">
        <ul className="grid gap-8 md:grid-cols-3">
          {[
            ["Written estimate in 24 hours", -2],
            ["A photo update every day", 1.5],
            ["Clean house every evening", -1],
          ].map(([text, tilt]) => (
            <Sticker key={text} as="li" tilt={tilt as number} innerClassName="bg-cream-50 px-6 py-8 text-center">
              <p className="font-display text-display-md text-forest">{text}</p>
            </Sticker>
          ))}
        </ul>
        <p className="mt-6 text-sm text-charcoal-soft">Example copy only; the real promises arrive in Phase 2 (confirm with Erik).</p>
      </Section>

      <Section title="Placeholders">
        <p>
          Phone: <Fill value={SITE.phone} /> · Email: <Fill value={SITE.email} /> · L&amp;I: <Fill value={SITE.lniNumber} /> · Warranty:{" "}
          <Fill value={SITE.warrantyYears} /> years
        </p>
        <p className="mt-3 text-sm text-charcoal-soft">
          Striped badges show facts we don&apos;t have yet. A launch build fails if any would appear on a public page.
        </p>
      </Section>
    </div>
  );
}
