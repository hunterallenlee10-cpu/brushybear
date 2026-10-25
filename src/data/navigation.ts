import { cityPath, PAGES, servicePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { publishedCities } from "@/data/cities";
import { publishedServices } from "@/data/services";

export type NavItem = { label: string; href: string };

export type MenuLink = NavItem & {
  /** One short line under the label in the mega menu. */
  note?: string;
  /** Scene key for a small image (service links only). */
  scene?: string;
};

export type MenuGroup = {
  label: string;
  /** Where the group's "see all" link goes. */
  href: string;
  allLabel: string;
  links: MenuLink[];
};

export type MainNavEntry = ({ kind: "group" } & MenuGroup) | ({ kind: "link" } & NavItem);

/** One line per service, shown in the mega menu. */
const SERVICE_NOTES: Record<string, string> = {
  "interior-painting": "Walls, ceilings, trim and doors. Furniture covered, rooms cleaned daily.",
  "exterior-painting": "Washed, scraped, primed and two coats that stand up to the rain.",
  "cabinet-painting": "Sprayed doors, a hard enamel finish, kitchen back in days.",
  "deck-and-fence-staining": "Cleaned, brightened and stained before the wet season.",
};

const ABOUT_NOTES: Record<string, string> = {
  [PAGES.ourPromise.path]: "Six promises, in writing.",
  [PAGES.reviews.path]: "What our customers say.",
  [PAGES.faq.path]: "Straight answers before you call.",
  [PAGES.refer.path]: "Send a neighbor, get a thank-you.",
  [PAGES.about.path]: "Who we are and how we work.",
  [PAGES.realtors.path]: "Pre-listing and turnover painting.",
};

/** Desktop mega menu and mobile menu, in order. Only built pages appear. */
export function mainNav(): MainNavEntry[] {
  const about: MenuLink[] = [PAGES.ourPromise, PAGES.reviews, PAGES.faq, PAGES.refer, PAGES.about, PAGES.realtors]
    .filter((p) => p.live)
    .map((p) => ({ label: p.label, href: p.path, note: ABOUT_NOTES[p.path] }));

  const entries: (MainNavEntry | null)[] = [
    {
      kind: "group",
      label: "Services",
      href: PAGES.services.path,
      allLabel: "All services",
      links: publishedServices().map((s) => ({
        label: s.name,
        href: servicePath(s.slug),
        note: SERVICE_NOTES[s.slug],
        scene: s.slug,
      })),
    },
    { kind: "group", label: "About", href: PAGES.about.path, allLabel: "About us", links: about },
    {
      kind: "group",
      label: "Service Areas",
      href: PAGES.serviceAreas.path,
      allLabel: "Map of our area",
      links: publishedCities().map((c) => ({ label: `${c.name}, ${SITE.state}`, href: cityPath(c.slug) })),
    },
    PAGES.projects.live ? { kind: "link", label: "Projects", href: PAGES.projects.path } : null,
    PAGES.articles.live ? { kind: "link", label: "Articles", href: PAGES.articles.path } : null,
  ];
  return entries.filter((e): e is MainNavEntry => e !== null);
}

/** Footer "Company" links. */
export function companyNav(): NavItem[] {
  return [
    PAGES.estimate,
    PAGES.ourPromise,
    PAGES.about,
    PAGES.projects,
    PAGES.reviews,
    PAGES.refer,
    PAGES.realtors,
    PAGES.faq,
    PAGES.articles,
    PAGES.contact,
    PAGES.privacy,
  ]
    .filter((p) => p.live)
    .map((p) => ({ label: p.label, href: p.path }));
}
