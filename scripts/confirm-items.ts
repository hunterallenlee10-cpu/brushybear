import { ABOUT } from "@/data/about";
import { ARTICLES } from "@/data/articles";
import { CITY_PAGES } from "@/data/city-pages";
import { FAQS } from "@/data/faq";
import { DIFFERENCE, WHY_US } from "@/data/home";
import { PROCESS } from "@/data/process";
import { PROMISES } from "@/data/promises";
import { SERVICE_PAGES } from "@/data/service-pages";

export type ConfirmItem = { page: string; where: string; note: string };

/**
 * Every `confirm` note anywhere in the site's copy, with the page it's on
 * and a readable label for the item (heading, question, name...).
 */
export function confirmItems(): ConfirmItem[] {
  const out: ConfirmItem[] = [];

  const walk = (page: string, node: unknown, label: string) => {
    if (Array.isArray(node)) {
      node.forEach((n) => walk(page, n, label));
      return;
    }
    if (!node || typeof node !== "object") return;
    const o = node as Record<string, unknown>;
    const here =
      (o.heading as string) ?? (o.question as string) ?? (o.title as string) ?? (o.name as string) ?? (o.text as string)?.slice(0, 70) ?? label;
    if (typeof o.confirm === "string" && o.confirm) out.push({ page, where: here, note: o.confirm });
    for (const [k, v] of Object.entries(o)) if (k !== "confirm") walk(page, v, here);
  };

  walk("Homepage: promises", PROMISES, "");
  walk("Homepage: how it works", PROCESS, "");
  walk("Homepage: what makes us different", DIFFERENCE, "");
  walk("Homepage: why Brushy Bear", WHY_US, "");
  walk("FAQ", FAQS, "");
  walk("About", ABOUT, "");
  for (const p of Object.values(SERVICE_PAGES)) walk(`Service: ${p.slug}`, p, "");
  for (const p of Object.values(CITY_PAGES)) walk(`City: ${p.slug}`, p, "");
  for (const a of ARTICLES) walk(`Article: ${a.slug}`, a, "");
  return out;
}
