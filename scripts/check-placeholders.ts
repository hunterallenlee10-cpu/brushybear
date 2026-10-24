/**
 * Launch guard, run before every build (npm "prebuild").
 *
 * When SITE_INDEXABLE is "true", the build fails if a required business fact
 * is still a placeholder or the site URL is still the placeholder domain.
 * Otherwise (previews) it only prints what's missing.
 */
import { missingFacts } from "./launch-facts";

const indexable = process.env.SITE_INDEXABLE === "true" && process.env.VERCEL_ENV !== "preview";
const problems: string[] = [];

for (const f of missingFacts()) {
  if (f.requiredForLaunch) problems.push(`${f.label} is still [${f.key}] (shows in: ${f.shows})`);
}

const url = process.env.NEXT_PUBLIC_SITE_URL ?? "";
if (!url || url.includes(".example")) {
  problems.push("NEXT_PUBLIC_SITE_URL is not set to the real domain");
}

if (problems.length === 0) {
  console.log("Launch check: all required business facts are filled in.");
} else if (indexable) {
  console.error("\nLaunch check FAILED. SITE_INDEXABLE is true, but:\n");
  for (const p of problems) console.error(`  • ${p}`);
  console.error("\nFill these in (src/config/site.ts and Vercel env vars) or set SITE_INDEXABLE=false.\n");
  process.exit(1);
} else {
  console.log(`Launch check: preview build, ${problems.length} item(s) still to fill before launch (see implementation/CONTENT_TODO.md).`);
}
