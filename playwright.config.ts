import { defineConfig, devices } from "@playwright/test";

/**
 * End-to-end checks against a production build. Run `npm run build` first,
 * then `npm run test:e2e` (starts `next start` with the form in dry-run mode).
 */
const PORT = 3200;

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 45_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: `http://localhost:${PORT}` },
  webServer: {
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    reuseExistingServer: true,
    env: { LEADS_DRY_RUN: "true" },
  },
  projects: [
    { name: "mobile", use: { ...devices["iPhone 13"], browserName: "chromium", viewport: { width: 375, height: 812 } } },
    { name: "desktop", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } } },
  ],
});
