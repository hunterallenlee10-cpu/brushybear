import type { Confirmable } from "@/data/types";

export type Step = Confirmable & { title: string; body: string };

/** How a job works, in EA Pro Painters' four steps. */
export const PROCESS: Step[] = [
  {
    title: "Request a free estimate",
    body: "Tell us what you want painted, online or by phone. We set up a walkthrough, measure, check for repairs and send a written, itemized quote within 24 hours.",
    confirm: "Promise: confirm with Erik before launch",
  },
  {
    title: "Color selection",
    body: "We help you pick colors and sheens that suit the room or the house, with samples on the wall before anything is final.",
    confirm: "Erik: confirm we bring or paint color samples for every job",
  },
  {
    title: "Project starting",
    body: "We start on the date we set. Prep comes first, then paint, with a photo update and a cleaned-up house at the end of every day.",
    confirm: "Promise: confirm with Erik before launch",
  },
  {
    title: "Quality inspection & warranty",
    body: "We walk the finished job with you, fix touch-ups on the spot, and hand you your written warranty.",
    confirm: "Erik: confirm the warranty terms (length shows from WARRANTY_YEARS in site.ts)",
  },
];
