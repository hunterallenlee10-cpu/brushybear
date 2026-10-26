import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/services",
  "/services/exterior-painting",
  "/painting-company/kirkland-wa",
  "/estimate",
  "/instant-estimate",
  "/areas-we-serve",
  "/recommended-companies",
  "/faqs",
  "/about",
  "/portfolio",
  "/blog/best-time-to-paint-house-exterior-eastside",
  "/privacy",
  "/does-not-exist",
];

for (const path of PAGES) {
  test(`no serious accessibility issues: ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    const serious = results.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(", ")}`)).toEqual([]);
  });
}
