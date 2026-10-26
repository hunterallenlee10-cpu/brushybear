import { expect, test } from "@playwright/test";

test.describe("estimate card", () => {
  test("shows inline errors and focuses the first one", async ({ page }) => {
    await page.goto("/estimate");
    const card = page.locator("[data-lead-form]").first();
    await card.getByRole("button", { name: "Get a Free Estimate" }).click();
    await expect(card.getByText("Please enter your name.")).toBeVisible();
    await expect(card.getByText("Please choose a project type.")).toBeVisible();
    await expect(card.getByLabel("First name")).toBeFocused();
    await expect(card.getByLabel("First name")).toHaveAttribute("aria-invalid", "true");
  });

  test("sends a request (dry run) and shows what happens next", async ({ page }) => {
    await page.goto("/estimate");
    const card = page.locator("[data-lead-form]").first();
    await card.getByLabel("First name").fill("Jane");
    await card.getByLabel("Last name").fill("Doe");
    await card.getByLabel("Email").fill("jane@example.com");
    await card.getByLabel("Phone").fill("425-555-0142");
    await card.getByLabel("Address").fill("98033");
    await card.getByLabel("Project type").selectOption({ label: "Exterior Painting" });
    await card.getByLabel(/Yes, text me about my estimate/).check();
    await page.waitForTimeout(3_200); // past the bot fill-time trap, so the real path runs

    const response = page.waitForResponse("**/api/estimate");
    await card.getByRole("button", { name: "Get a Free Estimate" }).click();
    expect(await (await response).json()).toEqual({ ok: true, dryRun: true });
    await expect(page.getByRole("heading", { name: /Got it, Jane!/ })).toBeVisible();
  });

  test("service pages preselect their service", async ({ page }) => {
    await page.goto("/services/cabinet-painting");
    const card = page.locator("#estimate [data-lead-form]");
    await expect(card.getByLabel("Project type")).toHaveValue("cabinets");
  });

  test("the home hero has the estimate card", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("#quote [data-lead-form]").getByLabel("First name")).toBeAttached();
  });
});

test("instant estimate shows a range that follows the inputs", async ({ page }) => {
  await page.goto("/instant-estimate");
  const range = page.getByText(/^\$[\d,]+ to \$[\d,]+$/);
  const before = await range.textContent();
  await page.getByText("Kitchen cabinets", { exact: true }).click();
  await expect(range).not.toHaveText(before ?? "");
});
