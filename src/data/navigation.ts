import { cityPath, PAGES, servicePath } from "@/config/pages";
import { publishedCities } from "@/data/cities";
import { publishedServices } from "@/data/services";

export type NavItem = { label: string; href: string };

/** A top-level menu entry: a plain link, or a dropdown of links. */
export type MenuEntry = NavItem & { children?: NavItem[]; wide?: boolean };

/** Main menu, same shape as EA Pro Painters': Home, About, Services, Areas We Serve, Portfolio, Blog. */
export function mainNav(): MenuEntry[] {
  return [
    { label: "Home", href: "/" },
    {
      label: "About",
      href: PAGES.about.path,
      children: [
        { label: "About Us", href: PAGES.about.path },
        { label: "FAQs", href: PAGES.faq.path },
        { label: "Recommended Companies", href: PAGES.recommended.path },
      ],
    },
    {
      label: "Services",
      href: PAGES.services.path,
      children: [
        { label: "All Services", href: PAGES.services.path },
        ...publishedServices().map((s) => ({ label: s.name, href: servicePath(s.slug) })),
      ],
    },
    {
      label: "Areas We Serve",
      href: PAGES.areas.path,
      wide: true,
      children: publishedCities().map((c) => ({ label: c.name, href: cityPath(c.slug) })),
    },
    { label: PAGES.gallery.label, href: PAGES.gallery.path },
    { label: PAGES.articles.label, href: PAGES.articles.path },
  ];
}

/** Footer "Company" links (EA's footer order). */
export function companyNav(): NavItem[] {
  return [
    { label: "Portfolio", href: PAGES.gallery.path },
    { label: "FAQs", href: PAGES.faq.path },
    { label: "About", href: PAGES.about.path },
    { label: "Home Owner Associations", href: servicePath("hoa-painting") },
    { label: "Recommended Companies", href: PAGES.recommended.path },
    { label: "Instant Estimate", href: PAGES.instantEstimate.path },
    { label: "Blog", href: PAGES.articles.path },
  ];
}
