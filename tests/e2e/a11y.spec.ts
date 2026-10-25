import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const PAGES = [
  "/",
  "/services",
  "/services/exterior-painting",
  "/service-areas/kirkland-wa",
  "/estimate",
  "/faq",
  "/about",
  "/projects",
  "/service-areas",
  "/our-promise",
  "/reviews",
  "/refer",
  "/realtors-property-managers",
  "/contact",
  "/articles/best-time-to-paint-house-exterior-eastside",
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

test("mega menu works from the keyboard", async ({ page }) => {
  test.skip(test.info().project.name !== "desktop", "desktop menu");
  await page.goto("/");
  const services = page.getByRole("button", { name: "Services" });
  await services.focus();
  await page.keyboard.press("ArrowDown");
  await expect(services).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: /Interior Painting/ }).first()).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(page.getByRole("link", { name: /Exterior Painting/ }).first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(services).toHaveAttribute("aria-expanded", "false");
  await expect(services).toBeFocused();
});
