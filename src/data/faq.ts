import { SITE } from "@/config/site";
import { isSet } from "@/lib/placeholders";
import type { Faq } from "@/data/types";

const ERIK = "Erik: confirm before launch";

const warrantyAnswer = (): string[] =>
  isSet(SITE.warrantyYears)
    ? [
        `Yes. Every job comes with a written ${SITE.warrantyYears}-year workmanship warranty. If paint we applied peels, blisters or flakes because of how we did the work, we come back and fix it.`,
        "The warranty terms are written on your quote, so you know exactly what's covered before you sign.",
      ]
    : [
        "Yes. Every job comes with a written workmanship warranty, and the length and terms are written on your quote before you sign.",
        "If paint we applied fails because of how we did the work, we come back and fix it.",
      ];

/**
 * The 10 main questions. `featured` ones (6) show on the homepage. The first
 * sentence of every answer answers the question directly.
 */
export const FAQS: (Faq & { featured?: boolean })[] = [
  {
    id: "estimate",
    featured: true,
    question: "How do your estimates work, and how fast will I get a price?",
    answer: [
      "Estimates are free, and you get a written, itemized quote within 24 hours of our walkthrough.",
      "Ask for one [online](/estimate), by phone or by text. We'll visit, measure, photograph the areas to be painted, check for repairs and talk through colors. Optional add-ons like trim or rot repair are listed separately, so you choose the final scope.",
    ],
    confirm: `${ERIK}: 24-hour quote promise`,
  },
  {
    id: "how-long",
    featured: true,
    question: "How long does an interior or exterior paint job take?",
    answer: [
      "Most interior jobs take one to five working days, and most house exteriors take about one to two weeks including prep.",
      "A single bedroom is often done in a day. A full interior, a large two-story exterior, or a house that needs a lot of repair takes longer. Your quote includes a start date and an expected finish, and we send a photo update every day so you always know where things stand.",
    ],
    confirm: `${ERIK}: typical job lengths`,
  },
  {
    id: "best-time-exterior",
    featured: true,
    question: "When is the best time of year to paint a house exterior in the Seattle area?",
    answer: [
      "June through September is the best time to paint an exterior on the Eastside, because that's when siding stays dry and temperatures stay above what paint needs to cure.",
      "Late May and early October can work in a dry stretch, but cool nights and morning dew raise the risk. Summer dates fill up early, so most homeowners book in late winter or spring. Interiors and cabinets can be painted any time of year. More detail: [the best time to paint a house exterior on the Eastside](/articles/best-time-to-paint-house-exterior-eastside).",
    ],
  },
  {
    id: "rain",
    featured: true,
    question: "Do you paint in the rain?",
    answer: [
      "No. We don't paint exteriors in the rain or on wet siding, because paint applied to a damp surface doesn't bond and can peel or blister.",
      "If rain is on the way, we reschedule, and weather delays never cost you anything. Rescheduled jobs go first in line when it dries out. Interior work keeps going in any weather.",
    ],
    confirm: `${ERIK}: rain-day promise`,
  },
  {
    id: "prep-repairs",
    featured: true,
    question: "Is prep and repair work included in the price?",
    answer: [
      "Yes, prep is part of every quote: washing, scraping, sanding, caulking, spot-priming and protecting floors, furniture and plants.",
      "Bigger repairs, like replacing rotted trim or patching large drywall damage, are listed as separate line items so you can see exactly what they cost before you decide.",
    ],
  },
  {
    id: "lead-safe",
    featured: true,
    question: "My home was built before 1978. Is it safe to paint?",
    answer: [
      "Yes. When a home built before 1978 may have lead paint, we follow the EPA's lead-safe work practices (the RRP rule) any time we disturb old paint.",
      "That means containing the work area with plastic, using sanding and scraping methods that keep dust down, cleaning with HEPA vacuums and wet wiping, and checking the area before we leave. We'll explain the setup at the walkthrough.",
    ],
    confirm: "Confirm EPA RRP firm certification and a certified renovator are in place before launch",
  },
  {
    id: "homeowner-prep",
    question: "What do I need to do before you start?",
    answer: [
      "Not much: put away small, fragile and valuable items, and we handle the rest.",
      "We move and cover furniture, protect floors and landscaping, and put everything back when we're done. For exteriors, please give us access to an outdoor faucet and an outlet, and move cars away from the house. If you have pets, let us know so we can plan around them.",
    ],
    confirm: `${ERIK}: homeowner prep list`,
  },
  {
    id: "paint-brands",
    question: "What kind of paint do you use?",
    answer: [
      "We use professional-grade paint and primers chosen for the surface, like 100% acrylic paint for siding and durable enamel for cabinets and trim.",
      "If you have a brand or color line you love, tell us at the walkthrough and we'll quote it.",
    ],
    confirm: "Erik: which paint lines and brands do we use? (Add them here once confirmed.)",
  },
  {
    id: "warranty",
    question: "Do you guarantee your work?",
    answer: warrantyAnswer(),
    confirm: isSet(SITE.warrantyYears) ? undefined : "Warranty: confirm terms; the length appears here once set in site.ts",
  },
  {
    id: "payment",
    question: "How do payment and deposits work?",
    answer: [
      "You pay a deposit when you sign, which covers materials and holds your start date, and the balance is due at the final walkthrough.",
      "Larger jobs may have one progress payment along the way. Every payment step is written on your quote, and we take card and bank (ACH) payments.",
    ],
    confirm: `${ERIK}: deposit amount and payment methods`,
  },
];

export const featuredFaqs = () => FAQS.filter((f) => f.featured);
