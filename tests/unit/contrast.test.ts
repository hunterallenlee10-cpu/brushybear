import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contrastRatio } from "@/lib/contrast";

// Read the real tokens from globals.css so the test follows any color change.
const css = readFileSync(join(__dirname, "../../src/app/globals.css"), "utf8");
const token = (name: string): string => {
  const m = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{6})`));
  if (!m) throw new Error(`token --color-${name} not found`);
  return m[1];
};

// Every text/background pair the design uses. 4.5 = normal text, 3 = large
// text and UI parts (WCAG 2.2 AA).
const PAIRS: [fg: string, bg: string, min: number][] = [
  ["charcoal", "cream", 4.5],
  ["charcoal", "cream-50", 4.5],
  ["charcoal", "white", 4.5],
  ["charcoal-soft", "cream", 4.5],
  ["charcoal-soft", "cream-50", 4.5],
  ["forest", "cream", 4.5],
  ["forest", "cream-50", 4.5],
  ["cream", "forest", 4.5],
  ["cream", "forest-deep", 4.5],
  ["charcoal", "gold", 4.5],
  ["charcoal", "gold-deep", 4.5],
  ["gold", "forest", 4.5],
  ["gold", "forest-deep", 4.5],
  ["forest", "pale", 4.5],
  ["forest", "mist", 4.5],
  ["charcoal", "pale", 4.5],
  ["charcoal", "mist", 4.5],
  ["white", "sage", 4.5],
  ["cream-50", "forest-soft", 4.5],
  // Sage text only at large sizes (3:1).
  ["sage", "cream", 3],
  // Focus rings and outlines (non-text, 3:1).
  ["charcoal", "cream", 3],
  ["gold", "forest", 3],
];

describe("brand color contrast", () => {
  for (const [fg, bg, min] of PAIRS) {
    it(`${fg} on ${bg} is at least ${min}:1`, () => {
      expect(contrastRatio(token(fg), token(bg))).toBeGreaterThanOrEqual(min);
    });
  }

  it("never uses white text on gold (fails AA)", () => {
    expect(contrastRatio(token("white"), token("gold"))).toBeLessThan(4.5);
  });
});
