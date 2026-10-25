import type { Confirmable } from "@/data/types";

/**
 * How a typical job runs, start to finish, for the timeline on each service
 * page. Durations match the service page copy and carry the same confirm
 * notes until Erik checks them.
 */
export type TimelineStep = { when: string; title: string; detail: string };
export type ServiceTimeline = Confirmable & { total: string; steps: TimelineStep[] };

export const SERVICE_TIMELINES: Record<string, ServiceTimeline> = {
  "interior-painting": {
    total: "1-2 days for a room, a week or more for a whole house",
    confirm: "Erik: confirm typical interior durations",
    steps: [
      { when: "Before day one", title: "Walkthrough and quote", detail: "We measure, check the walls and list the working days on your quote." },
      { when: "Morning, day one", title: "Protect", detail: "Furniture moved and covered, floors and fixtures masked." },
      { when: "Day one", title: "Prep", detail: "Fill holes, sand patches, caulk trim gaps, spot-prime repairs." },
      { when: "Day one to two", title: "Two coats", detail: "Ceilings, then walls, then trim and doors, room by room." },
      { when: "Every evening", title: "Clean up and photos", detail: "Swept, furniture back where you need it, photos of the day sent." },
      { when: "Last day", title: "Final walkthrough", detail: "We walk it with you and fix touch-ups on the spot." },
    ],
  },
  "exterior-painting": {
    total: "About 1-2 weeks of working days, June to September",
    confirm: "Erik: confirm typical exterior job length (about 1-2 weeks of working days)",
    steps: [
      { when: "Before day one", title: "Walkthrough, quote, HOA", detail: "Written quote in 24 hours; HOA color approval sorted before we book." },
      { when: "Day one", title: "Wash", detail: "Soft wash or pressure wash, mildew treatment, then drying time." },
      { when: "Days two to four", title: "Scrape, repair, prime", detail: "Loose paint off, soft wood replaced, caulk joints, prime bare wood." },
      { when: "Days four to eight", title: "Two coats", detail: "Body first, then trim and doors, dry sides first, shaded walls last." },
      { when: "Rain days", title: "We stop, you don't pay", detail: "Weather days reschedule first and never cost you anything." },
      { when: "Last day", title: "Final walkthrough", detail: "Touch-ups fixed, yard picked up, paint left labeled for you." },
    ],
  },
  "cabinet-painting": {
    total: "Several days to about a week",
    confirm: "Erik: confirm typical cabinet job length (several days to about a week)",
    steps: [
      { when: "Before day one", title: "Pick color and finish", detail: "Samples on a real door; you clear the cabinets and counters." },
      { when: "Day one", title: "Mask and remove", detail: "Kitchen masked off; doors and drawer fronts labeled and taken to spray." },
      { when: "Days one to two", title: "Degrease and sand", detail: "Kitchen grease off, surfaces scuffed so primer bites." },
      { when: "Days two to four", title: "Prime and spray", detail: "Bonding primer, then a hard enamel sprayed on doors, brushed on boxes." },
      { when: "Days four to six", title: "Rehang and adjust", detail: "Doors back on, hinges adjusted, hardware reinstalled." },
      { when: "Last day", title: "Walkthrough and care tips", detail: "Go easy on the finish for a few weeks while it hardens." },
    ],
  },
  "deck-and-fence-staining": {
    total: "2-4 days over a dry stretch",
    confirm: "Erik: confirm the typical deck staining timeline (2-4 days)",
    steps: [
      { when: "Before day one", title: "Pick a stain", detail: "Solid, semi-transparent or clear, based on the wood's condition." },
      { when: "Day one", title: "Clean and brighten", detail: "Old stain, mildew and grayed fibers off; wood brightener evens the color." },
      { when: "Day two", title: "Dry out", detail: "At least a day for the wood to dry; we check it before staining." },
      { when: "Day three", title: "Stain", detail: "One or two coats, rails and stairs included." },
      { when: "Rain days", title: "We wait", detail: "Stain needs dry wood; weather days reschedule first, no charge." },
      { when: "Last day", title: "Walkthrough", detail: "When to walk on it, when to put furniture back." },
    ],
  },
};
