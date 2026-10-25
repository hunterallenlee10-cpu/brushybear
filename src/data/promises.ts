import type { Confirmable, Faq } from "@/data/types";

export type BrandPromise = Confirmable & {
  id: string;
  /** The promise as worded on the site since launch. Don't reword without Erik. */
  title: string;
  body: string;
  /** Short form for the trust strip and menus. */
  short: string;
  /** The big plain number on the promise card ("24 hrs", "$250"). */
  figure: string;
  /** Small words under the figure. */
  figureLabel: string;
  /** How it works, for /our-promise. */
  details: string[];
  /** The honest limits, for /our-promise. */
  fine?: string;
};

const ERIK = "Promise: confirm with Erik before launch";

/** What every customer gets. All need Erik's OK before launch. */
export const PROMISES: BrandPromise[] = [
  {
    id: "estimate-24h",
    title: "Written estimate in 24 hours",
    body: "After the walkthrough, your itemized quote arrives within a day. Add-ons are listed as options, so you pick the scope.",
    short: "Written quote in 24 hours",
    figure: "24 hrs",
    figureLabel: "to your written quote",
    details: [
      "The clock starts when we leave your driveway after the walkthrough. Within 24 hours you get a written quote by email or text.",
      "Every line is itemized: prep, repairs, coats and colors. Add-ons like trim or rot repair are listed as options, so you choose the scope.",
    ],
    fine: "Big or unusual jobs (a full repaint plus siding repair, for example) can take longer to price. If yours will, we tell you at the walkthrough and give you a date.",
    confirm: ERIK,
  },
  {
    id: "one-contact",
    title: "One point of contact",
    body: "One person runs your job from the first visit to the final walkthrough and answers your questions.",
    short: "One point of contact",
    figure: "1",
    figureLabel: "person to call, start to finish",
    details: [
      "The person who walks your house is the person you call during the job. You get their name and number on your quote.",
      "No call center and no handoff between a salesperson and a crew you've never met.",
    ],
    confirm: ERIK,
  },
  {
    id: "daily-photos",
    title: "A photo update every day",
    body: "At the end of each workday you get photos of what we finished and what's next.",
    short: "Photo update every day",
    figure: "Daily",
    figureLabel: "photos of the day's work",
    details: [
      "Every workday ends with a text or email: a few photos of what got done and a line on what's next.",
      "Useful when you're at work during the job, and a record of the prep that ends up under the paint.",
    ],
    confirm: ERIK,
  },
  {
    id: "daily-cleanup",
    title: "A clean house every evening",
    body: "We pack up, sweep and put things back every day, not just on the last one.",
    short: "Clean house every evening",
    figure: "Swept",
    figureLabel: "and put back every evening",
    details: [
      "Drop cloths folded, tools packed, paint chips swept up, furniture back where you can use it.",
      "Outside, we pick up scrapings and leave walkways clear so nobody tracks paint into the house.",
    ],
    fine: "On multi-day interiors we may leave a room taped and covered overnight when it's mid-coat. We'll tell you which rooms.",
    confirm: ERIK,
  },
  {
    id: "rain-day",
    title: "Rain-day promise",
    body: "If weather pushes your exterior back, you're first on the schedule when it clears. The delay never costs you anything.",
    short: "Rain-day promise",
    figure: "$0",
    figureLabel: "for weather delays",
    details: [
      "Exterior paint needs dry wood and the right temperature. When rain is coming, we stop instead of painting into it.",
      "Your job moves to the first dry day, ahead of jobs that haven't started. No extra charge for the delay.",
    ],
    confirm: ERIK,
  },
  {
    id: "start-date",
    title: "We start on time",
    body: "We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first.",
    short: "Start on time or $250 off",
    figure: "$250",
    figureLabel: "off if we start late",
    details: [
      "Your start date is written on your signed quote. If we don't show up to start that day, $250 comes off your final bill.",
      "No forms to fill out. It's already on the invoice.",
    ],
    fine: "Rain and unsafe weather don't count as late. Those days reschedule first under the rain-day promise.",
    confirm: `${ERIK} (amount and terms)`,
  },
];

/** Questions about the promises, for /our-promise (FAQPage schema). */
export const PROMISE_FAQS: Faq[] = [
  {
    id: "promise-in-writing",
    question: "Are these promises in my contract?",
    answer: [
      "Yes. The start date, the $250 start-date promise and the rain-day promise are written on your signed quote.",
      "The daily photo update and daily cleanup are how every job runs, and your point of contact will hold us to them.",
    ],
    confirm: ERIK,
  },
  {
    id: "promise-late-start",
    question: "What counts as starting late?",
    answer: [
      "Late means no crew at your house to start work on the date written on your quote.",
      "Weather delays don't count. If rain or unsafe conditions push an exterior back, you go to the front of the line for the next dry day.",
    ],
    confirm: ERIK,
  },
  {
    id: "promise-photos",
    question: "How do the daily photo updates arrive?",
    answer: [
      "By text or email, whichever you pick when you book, at the end of each workday.",
      "Each update has a few photos and a short note on what's next, so you always know where the job stands.",
    ],
    confirm: ERIK,
  },
];
