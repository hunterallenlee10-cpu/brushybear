import { describe, expect, it } from "vitest";
import { isLivePath } from "@/config/pages";
import { ABOUT } from "@/data/about";
import { ARTICLES } from "@/data/articles";
import { CITY_PAGES } from "@/data/city-pages";
import { FAQS } from "@/data/faq";
import * as HOME from "@/data/home";
import { PROCESS } from "@/data/process";
import { PROMISES } from "@/data/promises";
import { SERVICE_PAGES } from "@/data/service-pages";
import { linksIn, plainText } from "@/lib/text";

/** All strings inside a value (deep), skipping confirm notes and ids. */
function strings(v: unknown, skip = new Set(["confirm", "id", "slug", "updatedAt", "publishedAt", "relatedServices", "nearby"])): string[] {
  if (typeof v === "string") return [v];
  if (Array.isArray(v)) return v.flatMap((x) => strings(x, skip));
  if (v && typeof v === "object") return Object.entries(v).flatMap(([k, x]) => (skip.has(k) ? [] : strings(x, skip)));
  return [];
}
const words = (v: unknown) => strings(v).map(plainText).join(" ").split(/\s+/).filter(Boolean).length;

const ALL_COPY = {
  promises: PROMISES,
  process: PROCESS,
  faq: FAQS,
  about: ABOUT,
  home: HOME,
  ...Object.fromEntries(Object.entries(SERVICE_PAGES).map(([k, v]) => [`service:${k}`, v])),
  ...Object.fromEntries(Object.entries(CITY_PAGES).map(([k, v]) => [`city:${k}`, v])),
  ...Object.fromEntries(ARTICLES.map((a) => [`article:${a.slug}`, a])),
};

const BANNED = [
  "premier", "unparalleled", "elevate", "transform your space", "top-notch", "best-in-class", "state-of-the-art",
  "cutting-edge", "world-class", "seamless", "unmatched", "second to none", "look no further", "nestled", "boasts", "—",
  "we pride ourselves", "licensed, bonded", "eapro", "ea pro",
];

describe("copy rules", () => {
  for (const [name, copy] of Object.entries(ALL_COPY)) {
    it(`${name}: internal links all point at real pages`, () => {
      const broken = strings(copy).flatMap(linksIn).filter((href) => !isLivePath(href));
      expect(broken).toEqual([]);
    });

    it(`${name}: no banned words or competitor names`, () => {
      const text = strings(copy).join(" ").toLowerCase();
      expect(BANNED.filter((w) => text.includes(w))).toEqual([]);
    });

    it(`${name}: no prices (the start-date promise is the only dollar figure)`, () => {
      const dollars = strings(copy).filter((s) => /\$\s?\d/.test(s) && !s.includes("take $250 off"));
      expect(dollars).toEqual([]);
    });
  }
});

describe("page copy size", () => {
  for (const [slug, page] of Object.entries(CITY_PAGES)) {
    it(`city ${slug} has at least 600 words`, () => {
      expect(words(page)).toBeGreaterThanOrEqual(600);
    });
  }
  for (const a of ARTICLES) {
    it(`article ${a.slug} is 1,000–1,500 words`, () => {
      const n = words({ ...a, title: "", seoTitle: "", metaDescription: "" });
      expect(n).toBeGreaterThanOrEqual(1000);
      expect(n).toBeLessThanOrEqual(1500);
    });
  }
});

describe("SEO fields", () => {
  const SUFFIX = " | Brushy Bear Painters".length;
  const pages = [...Object.values(SERVICE_PAGES), ...Object.values(CITY_PAGES)].map((p) => ({ id: p.slug, title: p.title, desc: p.metaDescription }));
  pages.push(...ARTICLES.map((a) => ({ id: a.slug, title: a.seoTitle, desc: a.metaDescription })));

  for (const p of pages) {
    it(`${p.id}: title 50–60 chars with brand, description 150–160`, () => {
      expect(p.title.length + SUFFIX).toBeGreaterThanOrEqual(50);
      expect(p.title.length + SUFFIX).toBeLessThanOrEqual(60);
      expect(p.desc.length).toBeGreaterThanOrEqual(150);
      expect(p.desc.length).toBeLessThanOrEqual(160);
    });
  }

  it("titles and descriptions are all unique", () => {
    expect(new Set(pages.map((p) => p.title)).size).toBe(pages.length);
    expect(new Set(pages.map((p) => p.desc)).size).toBe(pages.length);
  });

  it("FAQ ids are unique across the site", () => {
    const ids = [
      ...FAQS,
      ...Object.values(SERVICE_PAGES).flatMap((p) => p.faqs),
      ...Object.values(CITY_PAGES).flatMap((p) => p.faqs),
      ...ARTICLES.flatMap((a) => a.faqs ?? []),
    ].map((f) => f.id);
    expect(ids.length - new Set(ids).size).toBe(0);
  });
});

describe("city pages are not near-duplicates", () => {
  // Share of 6-word phrases two pages have in common.
  const shingles = (v: unknown) => {
    const w = strings(v).map(plainText).join(" ").toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
    return new Set(w.slice(0, -5).map((_, i) => w.slice(i, i + 6).join(" ")));
  };
  const entries = Object.entries(CITY_PAGES).map(([k, v]) => [k, shingles(v)] as const);
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      const [a, sa] = entries[i];
      const [b, sb] = entries[j];
      it(`${a} vs ${b} share under 10% of phrases`, () => {
        const shared = [...sa].filter((x) => sb.has(x)).length;
        expect(shared / Math.min(sa.size, sb.size)).toBeLessThan(0.1);
      });
    }
  }
});
