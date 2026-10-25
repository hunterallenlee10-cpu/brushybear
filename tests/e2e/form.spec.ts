import { expect, test } from "@playwright/test";

test.describe("lead form", () => {
  test("step 1 shows inline errors and focuses the first one", async ({ page }) => {
    await page.goto("/estimate");
    const form = page.locator("[data-lead-form]").first();
    await form.getByRole("button", { name: "Continue" }).click();
    await expect(form.getByText("Pick at least one.")).toBeVisible();
    await expect(form.getByText("Please enter a 5-digit ZIP code.")).toBeVisible();
    await expect(form.getByRole("checkbox", { name: "Interior" })).toBeFocused();
  });

  test("ZIP hint says whether we serve the area", async ({ page }) => {
    await page.goto("/estimate");
    const form = page.locator("[data-lead-form]").first();
    await form.getByLabel("ZIP code").fill("98033");
    await expect(form.getByText("Kirkland is in our area.")).toBeVisible();
    await form.getByLabel("ZIP code").fill("98101");
    await expect(form.getByText(/Outside our usual area/)).toBeVisible();
  });

  test("sends a request in two steps to /api/lead (dry run) and shows the booking slot", async ({ page }) => {
    await page.goto("/estimate");
    const form = page.locator("[data-lead-form]").first();
    await form.getByText("Exterior", { exact: true }).click();
    await form.getByLabel("ZIP code").fill("98033");
    await form.getByRole("button", { name: "Continue" }).click();

    await form.getByLabel("Your name").fill("Dana Whitcomb");
    await form.getByLabel("Mobile phone").fill("425-555-0142");
    await form.getByRole("textbox", { name: "Email" }).fill("dana@example.com");
    await form.getByLabel(/Street address/).fill("12 Market St");
    await form.getByText("Call", { exact: true }).click();
    await page.waitForTimeout(3_200); // past the bot fill-time trap, so the real path runs

    const response = page.waitForResponse("**/api/lead");
    await form.getByRole("button", { name: "Send my request" }).click();
    expect(await (await response).json()).toEqual({ ok: true, dryRun: true });
    await expect(page.getByRole("heading", { name: /Got it, Dana/ })).toBeVisible();
    await expect(page.getByText("Book your walkthrough")).toBeVisible();
  });

  test("step 2 errors stay inline", async ({ page }) => {
    await page.goto("/estimate");
    const form = page.locator("[data-lead-form]").first();
    await form.getByText("Interior", { exact: true }).click();
    await form.getByLabel("ZIP code").fill("98004");
    await form.getByRole("button", { name: "Continue" }).click();
    await form.getByRole("button", { name: "Send my request" }).click();
    await expect(form.getByText("Please enter your name.")).toBeVisible();
    await expect(form.getByLabel("Your name")).toBeFocused();
  });

  test("service pages pre-select their service", async ({ page }) => {
    await page.goto("/services/cabinet-painting");
    await expect(page.locator("#estimate").getByRole("checkbox", { name: "Cabinets" })).toBeChecked();
  });

  test("color preview hands its palette to the form", async ({ page }) => {
    await page.goto("/estimate");
    await page.locator("#colors").getByText("Harbor Navy").click();
    await page.getByRole("button", { name: "Use this palette in my estimate" }).click();
    const form = page.locator("[data-lead-form]").first();
    await expect(form.getByRole("checkbox", { name: "Exterior" })).toBeChecked();
    await form.getByLabel("ZIP code").fill("98052");
    await form.getByRole("button", { name: "Continue" }).click();
    await expect(form.getByText("Palette: Harbor Navy")).toBeVisible();
  });

  test("estimator hands its ballpark to the form", async ({ page }) => {
    await page.goto("/estimate");
    await page.locator("#ballpark").getByRole("button", { name: /Get a Free Estimate/ }).click();
    const form = page.locator("[data-lead-form]").first();
    await form.getByLabel("ZIP code").fill("98052");
    await form.getByRole("button", { name: "Continue" }).click();
    await expect(form.getByText(/Ballpark: Whole-house exterior/)).toBeVisible();
  });
});
