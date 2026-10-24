/**
 * Real customer reviews only, added with the customer's permission. While
 * this list is empty, the reviews section and all review structured data
 * stay off. Never add made-up, paraphrased or "sample" reviews.
 */
export type Review = {
  author: string;
  /** City the job was in, e.g. "Kirkland". */
  city: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** ISO date of the review. */
  date: string;
  source: "Google" | "Yelp" | "Nextdoor" | "Facebook";
  url: string;
};

export const REVIEWS: Review[] = [];
