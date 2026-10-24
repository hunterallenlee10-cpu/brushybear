import type { Article } from "@/data/types";
import bestTime from "./best-time-to-paint-house-exterior-eastside";
import cabinets from "./cabinet-painting-vs-refacing-eastside";
import rainMoss from "./rain-moss-exterior-paint-pacific-northwest";

/** Launch articles, newest first. */
export const ARTICLES: Article[] = [bestTime, rainMoss, cabinets];

export const getArticle = (slug: string): Article | undefined => ARTICLES.find((a) => a.slug === slug);
