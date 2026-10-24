/**
 * Open questions for Hunter and Erik. scripts/content-todo.ts turns these
 * (plus every placeholder and "(confirm)" flag in the data) into
 * implementation/CONTENT_TODO.md. Remove an item once it's answered.
 */
export type Owner = "Erik" | "Hunter" | "Both";

export type OpenItem = {
  topic: string;
  question: string;
  owner: Owner;
  /** Why it matters / what it blocks. */
  blocks?: string;
};

export const DECISIONS: OpenItem[] = [
  {
    topic: "Lane versus EA Pro",
    question: "Which lane does Brushy Bear take (area, price point, services or overflow)? Do the 5 Phase 1 cities stay as listed?",
    owner: "Both",
    blocks: "City-page copy (build Phase 5) and whether \"Eastside\" stays the main regional search term.",
  },
  {
    topic: "Company name",
    question: "Lock the final name after the Secretary of State, L&I, USPTO, domain and social-handle checks.",
    owner: "Both",
    blocks: "All Higgsfield spending (build Phase 7), the domain and the Google Business Profile.",
  },
  {
    topic: "About page",
    question: "Should the About page mention that Erik also owns another painting company? (The site never presents the two as competitors.)",
    owner: "Both",
    blocks: "About page copy (build Phase 4).",
  },
  {
    topic: "Article author",
    question: "Will Erik put his full name on the articles as the author? If not, they're credited to the company.",
    owner: "Erik",
    blocks: "Article bylines and Article structured data (build Phase 6).",
  },
  {
    topic: "Erik's experience",
    question: "How many years has Erik painted on the Eastside? (Shown on About only once confirmed.)",
    owner: "Erik",
  },
  {
    topic: "Quote promise",
    question: "Confirm the promise wording: \"Written estimate within 24 hours of the walkthrough.\"",
    owner: "Erik",
  },
  {
    topic: "Start-date promise",
    question: "Confirm: \"We start on the scheduled date or take $250 off. Rain delays don't count, and those reschedule first.\"",
    owner: "Erik",
  },
  {
    topic: "Warranty",
    question: "How many years is the workmanship warranty, and what does it cover? (Hidden until set.)",
    owner: "Both",
  },
  {
    topic: "n8n workflow",
    question: "Connect Brushy Bear-only email, Twilio and (optional) Vapi accounts to the speed-to-lead workflow, fill its Settings, then publish it (see N8N_WORKFLOW.md).",
    owner: "Hunter",
    blocks: "Live form submissions (the form runs in test mode until then).",
  },
];

export const ASSETS_NEEDED: OpenItem[] = [
  {
    topic: "Job photos",
    question: "Real before/after photos from finished jobs, named by service and city. 6+ jobs turns the gallery on in search.",
    owner: "Erik",
  },
  {
    topic: "Team photos",
    question: "Real photos of Erik and Hunter (and the crew lead) for the About page. No AI people, ever.",
    owner: "Both",
  },
  {
    topic: "Reviews",
    question: "Real Google reviews, with permission to show them. The reviews section turns on automatically once added.",
    owner: "Both",
  },
  {
    topic: "Social profiles",
    question: "Facebook, Instagram, Nextdoor and other profile URLs once created (added to structured data).",
    owner: "Hunter",
  },
];
