/**
 * Shared content types. All customer-facing copy lives in typed data files
 * under src/data/, never inside components.
 *
 * Inline formatting inside any copy string (rendered by <RichText>):
 *   [link text](/services/interior-painting)   internal links only
 *   **bold text**
 */

/**
 * Anything not verified with Erik/Hunter carries a `confirm` note saying
 * exactly what to check. Previews show a striped badge; CONTENT_TODO.md
 * lists every note; a public (indexable) build fails while any remain.
 */
export type Confirmable = {
  confirm?: string;
};

export type Faq = Confirmable & {
  id: string;
  question: string;
  /** Paragraphs. The first sentence answers the question directly. */
  answer: string[];
};

export type Block = Confirmable &
  (
    | { type: "p"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | { type: "ol"; items: string[] }
    | { type: "callout"; title?: string; text: string }
  );

/** An H2 section of a page. */
export type Section = Confirmable & {
  heading: string;
  /** Optional anchor id (lowercase-hyphenated). */
  id?: string;
  body: Block[];
};

export type ServicePage = {
  slug: string;
  /** Title tag part before " | Brushy Bear Painters". Keep total 50–60 chars. */
  title: string;
  /** 150–160 characters. */
  metaDescription: string;
  /** Exactly one H1; contains the page's primary phrase. */
  h1: string;
  /** Short line above the H1. */
  eyebrow: string;
  /** 1–2 paragraphs, answer-first. */
  intro: string[];
  /** 1–2 sentences for the homepage/services hub card. */
  cardSummary: string;
  /** What every job of this type includes. */
  included: string[];
  /** Relevant add-ons (from ADD_ONS in services.ts), with a one-line why. */
  addOns: { name: string; why: string }[];
  /** What changes the price (no dollar amounts, ever). */
  costFactors: { factor: string; detail: string }[];
  sections: Section[];
  faqs: Faq[];
  updatedAt: string;
};

export type CityPage = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string[];
  /** H2 sections: homes, climate, neighborhoods, HOA/permits, services... */
  sections: Section[];
  neighborhoods: (Confirmable & { name: string; note?: string })[];
  faqs: Faq[];
  /** Slugs of nearby Phase 1 cities to link to. */
  nearby: string[];
  updatedAt: string;
};

export type Article = {
  slug: string;
  title: string;
  /** Title tag part (may be shorter than the H1 title). */
  seoTitle: string;
  metaDescription: string;
  /** One-paragraph answer shown first (answer-first for AI search). */
  summary: string;
  publishedAt: string;
  updatedAt: string;
  sections: Section[];
  /** Service slugs this article relates to. */
  relatedServices: string[];
  faqs?: Faq[];
};
