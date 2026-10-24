import { SITE_URL } from "@/config/env";
import { articlePath, cityPath, PAGES, servicePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { ARTICLES } from "@/data/articles";
import { cityList } from "@/data/cities";
import { cityPageList } from "@/data/city-pages";
import { ADD_ONS } from "@/data/services";
import { servicePageList } from "@/data/service-pages";
import { isSet } from "@/lib/placeholders";

/**
 * /llms.txt: a plain-text summary of the business for AI assistants, built
 * from the same data as the site (so it can't drift). Customer-facing facts
 * only. Prerendered at build time.
 */
export function GET() {
  const url = (p: string) => (p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`);
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.name} is a residential painting contractor serving ${cityList()}, ${SITE.stateName} (the ${SITE.regionName} of the Seattle area). It paints interiors, exteriors and kitchen cabinets, and stains decks and fences. Every job gets a custom written quote after an on-site walkthrough; there are no packages or posted prices.`,
    "",
    "## Key facts",
    `- Service area: ${cityList()}, ${SITE.state}. Service-area business (no storefront).`,
    "- Exterior painting season: roughly June to September (dry season). Interiors and cabinets all year.",
    "- Homes built before 1978: lead-safe (EPA RRP) work practices when disturbing old paint.",
    `- Add-ons with any job: ${ADD_ONS.join(", ").toLowerCase()}.`,
    ...(isSet(SITE.phone) ? [`- Phone: ${SITE.phone}`] : []),
    ...(isSet(SITE.email) ? [`- Email: ${SITE.email}`] : []),
    ...(isSet(SITE.lniNumber) ? [`- Washington L&I contractor registration: ${SITE.lniNumber}`] : []),
    "",
    "## Services",
    ...servicePageList().map(({ service, page }) => `- [${service.name}](${url(servicePath(service.slug))}): ${page.cardSummary}`),
    "",
    "## Cities",
    ...cityPageList().map(({ city, page }) => `- [Painters in ${city.name}, ${SITE.state}](${url(cityPath(city.slug))}): ${page.metaDescription}`),
    "",
    "## Guides",
    ...ARTICLES.map((a) => `- [${a.title}](${url(articlePath(a.slug))}): ${a.metaDescription}`),
    "",
    "## Other pages",
    `- [Free estimate](${url(PAGES.estimate.path)})`,
    `- [FAQ](${url(PAGES.faq.path)})`,
    `- [About](${url(PAGES.about.path)})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
