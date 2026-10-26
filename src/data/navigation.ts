import { PAGES } from "@/config/pages";

export type NavItem = { label: string; href: string };

/** Homepage sections that menu links can jump to (built in Phase 2). */
export const HOME_SECTIONS_LIVE = {
  serviceArea: true,
};

/** Main menu, in order. Only items whose page exists in this build show up. */
export function mainNav(): NavItem[] {
  const items: (NavItem & { live: boolean })[] = [
    { label: "Services", href: PAGES.services.path, live: PAGES.services.live },
    { label: "Service area", href: "/#service-area", live: HOME_SECTIONS_LIVE.serviceArea },
    { label: "About", href: PAGES.about.path, live: PAGES.about.live },
    { label: "Gallery", href: PAGES.gallery.path, live: PAGES.gallery.live },
    { label: "FAQ", href: PAGES.faq.path, live: PAGES.faq.live },
    { label: "Articles", href: PAGES.articles.path, live: PAGES.articles.live },
  ];
  return items.filter((i) => i.live).map(({ label, href }) => ({ label, href }));
}

/** Footer "Company" links. */
export function companyNav(): NavItem[] {
  return [PAGES.estimate, PAGES.about, PAGES.gallery, PAGES.faq, PAGES.articles, PAGES.privacy]
    .filter((p) => p.live)
    .map((p) => ({ label: p.label, href: p.path }));
}
