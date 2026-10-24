import { expect, test } from "@playwright/test";

test.describe("estimate form", () => {
  test("shows inline errors and focuses the first one", async ({ page }) => {
    await page.goto("/estimate");
    await page.getByRole("button", { name: "Continue" }).click();
    await expect(page.getByText("Please enter your name.")).toBeVisible();
    await expect(page.getByText("Pick at least one.")).toBeVisible();
    await expect(page.getByLabel("Your name")).toBeFocused();
    await expect(page.getByLabel("Your name")).toHaveAttribute("aria-invalid", "true");
  });

  test("sends a request in two steps (dry run)", async ({ page }) => {
    await page.goto("/estimate");
    await page.getByLabel("Your name").fill("Jane Doe");
    await page.getByLabel("Mobile phone").fill("425-555-0142");
    await page.getByLabel("Email").fill("jane@example.com");
    await page.getByLabel("Home address or ZIP code").fill("98033");
    await page.getByText("Exterior", { exact: true }).click();
    await page.getByRole("button", { name: "Continue" }).click();

    await expect(page.getByRole("heading", { name: /A few details/ })).toBeVisible();
    await page.getByText("1978 or later").click();
    await page.getByLabel(/Yes, text me about my estimate/).check();
    await page.waitForTimeout(3_200); // past the bot fill-time trap, so the real path runs

    const response = page.waitForResponse("**/api/estimate");
    await page.getByRole("button", { name: "Send my request" }).click();
    const body = await (await response).json();
    expect(body).toEqual({ ok: true, dryRun: true });
    await expect(page.getByRole("heading", { name: /Got it, Jane!/ })).toBeVisible();
  });

  test("service pages pre-select their service", async ({ page }) => {
    await page.goto("/services/cabinet-painting");
    const form = page.locator("#estimate");
    await expect(form.getByRole("checkbox", { name: "Cabinets" })).toBeChecked();
  });
});
