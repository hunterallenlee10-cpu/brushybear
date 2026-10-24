import type { Confirmable } from "@/data/types";

export type Step = Confirmable & { title: string; body: string };

/** How a job works, in 4 steps. */
export const PROCESS: Step[] = [
  {
    title: "Ask for an estimate",
    body: "Tell us what you want painted, online, by phone or by text. We'll set up a walkthrough at a time that works for you.",
  },
  {
    title: "Walkthrough and written quote",
    body: "We visit, measure, check for repairs and talk colors. Your written, itemized quote arrives within 24 hours.",
    confirm: "Promise: confirm with Erik before launch",
  },
  {
    title: "We paint",
    body: "Prep comes first, then paint. You get a photo update and a cleaned-up house at the end of every day.",
    confirm: "Promise: confirm with Erik before launch",
  },
  {
    title: "Final walkthrough",
    body: "We walk the finished job with you and fix any touch-ups on the spot, before we call it done.",
  },
];
