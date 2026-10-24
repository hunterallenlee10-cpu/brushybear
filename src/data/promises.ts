import type { Confirmable } from "@/data/types";

export type BrandPromise = Confirmable & {
  id: string;
  title: string;
  body: string;
};

const ERIK = "Promise: confirm with Erik before launch";

/** What every customer gets. Shown as sticker badges. All need Erik's OK. */
export const PROMISES: BrandPromise[] = [
  {
    id: "estimate-24h",
    title: "Written estimate in 24 hours",
    body: "After the walkthrough, your itemized quote arrives within a day. Add-ons are listed as options, so you pick the scope.",
    confirm: ERIK,
  },
  {
    id: "one-contact",
    title: "One point of contact",
    body: "One person runs your job from the first visit to the final walkthrough and answers your questions.",
    confirm: ERIK,
  },
  {
    id: "daily-photos",
    title: "A photo update every day",
    body: "At the end of each workday you get photos of what we finished and what's next.",
    confirm: ERIK,
  },
  {
    id: "daily-cleanup",
    title: "A clean house every evening",
    body: "We pack up, sweep and put things back every day, not just on the last one.",
    confirm: ERIK,
  },
  {
    id: "rain-day",
    title: "Rain-day promise",
    body: "If weather pushes your exterior back, you're first on the schedule when it clears. The delay never costs you anything.",
    confirm: ERIK,
  },
  {
    id: "start-date",
    title: "We start on time",
    body: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first.",
    confirm: `${ERIK} (amount and terms)`,
  },
];
