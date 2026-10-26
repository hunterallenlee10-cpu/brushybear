import type { Confirmable } from "@/data/types";

/**
 * About page copy. Only facts from the business plan; anything not yet
 * confirmed carries a note. No team photos until real ones exist (never AI).
 */
export const ABOUT = {
  title: "About Brushy Bear Painters",
  eyebrow: "Who we are",
  h1: "Two owners, one simple idea: paint it right and treat the house like ours.",
  intro: [
    "Brushy Bear Painters is a new painting company for homes, HOA communities and businesses across the Eastside and greater Seattle, from Bellevue and Kirkland to Bothell, Renton and Everett. We started it because hiring a painter shouldn't mean chasing people for updates or cleaning up after them.",
  ],
  owners: [
    {
      name: "Erik",
      role: "Field operations and estimates",
      bio: "Erik has painted Eastside homes for years. He walks every job before it's quoted, sets the prep plan, and makes sure each crew follows the same written steps, from protecting floors to the final touch-ups.",
      confirm: "Erik: confirm bio wording, years of experience and last name (photo coming)",
      photoLabel: "Photo of Erik coming",
    },
    {
      name: "Hunter Lee",
      role: "Marketing and customer experience",
      bio: "Hunter makes sure you're never left wondering what's happening. He runs the estimate requests, scheduling and daily updates, so a quick question gets a quick answer.",
      confirm: "Hunter: confirm bio wording (photo coming)",
      photoLabel: "Photo of Hunter coming",
    },
  ] satisfies (Confirmable & { name: string; role: string; bio: string; photoLabel: string })[],
  how: {
    heading: "How we work",
    points: [
      { title: "Local crews", body: "We work around Lake Washington and north to Everett, and we plan routes so crews spend their day painting, not driving." },
      { title: "The same steps on every job", body: "Protect, prep, paint, clean up, inspect. Written down, so quality doesn't depend on who's on site." },
      { title: "Prep before paint", body: "Washing, scraping, repairs and primer are most of what makes paint last in Northwest weather." },
      { title: "You always know what's next", body: "One point of contact and a photo update at the end of every workday.", confirm: "Promise: confirm with Erik before launch" },
    ] satisfies (Confirmable & { title: string; body: string })[],
  },
};
