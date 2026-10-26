import { expect, test } from "@playwright/test";

// Every URL in the sitemap, rewritten to the local server.
async function sitemapPaths(request: import("@playwright/test").APIRequestContext) {
  const xml = await (await request.get("/sitemap.xml")).text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

test("every sitemap page: 200, one h1, canonical, noindex before launch, valid JSON-LD", async ({ page, request }) => {
  test.skip(test.info().project.name !== "desktop", "runs once");
  const paths = await sitemapPaths(request);
  expect(paths.length).toBeGreaterThanOrEqual(40);
  for (const path of paths) {
    const res = await page.goto(path);
    expect(res?.status(), path).toBe(200);
    expect(await page.locator("h1").count(), `${path} h1 count`).toBe(1);
    await expect(page.locator('link[rel="canonical"]'), path).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]'), path).toHaveAttribute("content", /noindex/);
    for (const raw of await page.locator('script[type="application/ld+json"]').allTextContents()) {
      expect(() => JSON.parse(raw), `${path} JSON-LD`).not.toThrow();
    }
  }
});

test("unknown slugs return a real 404", async ({ request }) => {
  for (const path of ["/services/nope", "/painting-company/tacoma-wa", "/blog/nope", "/nope"]) {
    expect((await request.get(path)).status(), path).toBe(404);
  }
});

test("no sideways scrolling, and the right contact bar for the screen", async ({ page }) => {
  await page.goto("/");
  const { scroll, width } = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: window.innerWidth }));
  expect(scroll).toBeLessThanOrEqual(width);
  const bar = page.getByRole("navigation", { name: "Quick contact" });
  if (test.info().project.name === "mobile") await expect(bar).toBeVisible();
  else await expect(bar).toBeHidden();
});

test("robots.txt blocks everything before launch", async ({ request }) => {
  expect(await (await request.get("/robots.txt")).text()).toContain("Disallow: /");
});

test("old paths redirect to the new ones", async ({ request }) => {
  for (const [from, to] of [
    ["/faq", "/faqs"],
    ["/gallery", "/portfolio"],
    ["/articles", "/blog"],
    ["/painters/kirkland-wa", "/painting-company/kirkland-wa"],
    ["/services/deck-and-fence-staining", "/services/decks-and-fences-painting"],
    ["/hoa", "/services/hoa-painting"],
  ]) {
    const res = await request.get(from, { maxRedirects: 0 });
    expect(res.status(), from).toBe(308);
    expect(res.headers().location, from).toContain(to);
  }
});
