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
  ["ink", "white", 4.5],
  ["ink", "mist", 4.5],
  ["ink-soft", "white", 4.5],
  ["ink-soft", "mist", 4.5],
  ["pine", "white", 4.5],
  ["pine", "mist", 4.5],
  ["pine-bright", "white", 4.5],
  ["pine-bright", "mist", 4.5],
  ["white", "pine", 4.5],
  ["white", "pine-deep", 4.5],
  ["white", "ink", 4.5],
  ["ink", "honey", 4.5],
  ["ink", "honey-deep", 4.5],
  ["honey", "ink", 4.5],
  ["honey", "pine-deep", 4.5],
  ["honey-text", "white", 4.5],
  // Honey on pine is for large headings only (3:1 for large text).
  ["honey", "pine", 3],
  // Focus rings and outlines (non-text, 3:1).
  ["ink", "white", 3],
  ["honey", "pine", 3],
];

describe("brand color contrast", () => {
  for (const [fg, bg, min] of PAIRS) {
    it(`${fg} on ${bg} is at least ${min}:1`, () => {
      expect(contrastRatio(token(fg), token(bg))).toBeGreaterThanOrEqual(min);
    });
  }

  it("never uses white text on honey (fails AA)", () => {
    expect(contrastRatio(token("white"), token("honey"))).toBeLessThan(4.5);
  });
});
