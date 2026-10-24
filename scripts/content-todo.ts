/**
 * Writes implementation/CONTENT_TODO.md from the site's data, so the list of
 * open items can't drift out of date. Run: npm run content-todo
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { SITE } from "@/config/site";
import { ASSETS_NEEDED, DECISIONS, type OpenItem } from "@/data/open-items";
import { FACTS } from "./launch-facts";
import { isSet } from "@/lib/placeholders";

const out: string[] = [];
const line = (s = "") => out.push(s);

const table = (items: OpenItem[]) => {
  line("| Topic | Question | Who | Blocks |");
  line("|---|---|---|---|");
  for (const i of items) line(`| ${i.topic} | ${i.question} | ${i.owner} | ${i.blocks ?? ""} |`);
};

line("# Content to-do for Erik and Hunter");
line();
line(`Generated from the site's data on ${SITE.lastUpdated} by \`npm run content-todo\`. Don't edit by hand: answer an item, update the data, then re-run the script.`);
line();
line("## 1. Business facts (placeholders)");
line();
line("Set these in `src/config/site.ts`. A launch build fails while any required one is missing.");
line();
line("| Fact | Status | Where it shows | Needed for launch |");
line("|---|---|---|---|");
for (const f of FACTS) {
  const status = isSet(f.value) ? `✅ ${f.value}` : `❌ \`[${f.key}]\``;
  line(`| ${f.label} | ${status} | ${f.shows} | ${f.requiredForLaunch ? "Yes" : "No"} |`);
}
line();
line("## 2. Decisions");
line();
table(DECISIONS);
line();
line("## 3. Photos, reviews and profiles");
line();
table(ASSETS_NEEDED);
line();
line("## 4. Content marked \"(confirm)\"");
line();
line("None yet. Service, city, FAQ and promise copy arrives in build Phases 2–6; every unverified fact in it is listed here automatically.");
line();

const file = join(__dirname, "../implementation/CONTENT_TODO.md");
writeFileSync(file, out.join("\n"));
console.log(`Wrote ${file}`);
