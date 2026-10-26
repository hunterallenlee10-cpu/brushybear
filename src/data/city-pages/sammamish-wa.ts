import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";

const page: CityPage = {
  slug: "sammamish-wa",
  title: "House Painters in Sammamish, WA",
  metaDescription:
    "Painters in Sammamish, WA for plateau homes: interior and exterior painting, moss and mildew prep, help with HOA color approval and a written quote every job.",
  h1: "House painters in Sammamish, WA, for plateau homes and HOA neighborhoods",
  eyebrow: "Serving the Sammamish Plateau",
  intro: [
    "Brushy Bear Painters paints Sammamish homes inside and out, planned around what makes the plateau different: big two-story houses, evergreens that shade the siding most of the year, and HOAs that want to see your colors first.",
    "Every job starts with a walkthrough and a custom written quote. No packages, no price tiers. Exteriors are scheduled in the dry months, roughly June through September; interiors and cabinets run all year.",
  ],
  sections: [
    {
      heading: "Sammamish homes and what they need from paint",
      id: "homes",
      body: [
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5361115 (ACS 2020-2024 5-year, table B25034: 1980-89 25.9%, 1990-99 27.8%, 2000-09 20.7%)
        // source: https://en.wikipedia.org/wiki/Sammamish,_Washington (incorporated August 31, 1999)
        // source: https://en.wikipedia.org/wiki/Klahanie,_Washington (established 1985)
        {
          type: "p",
          text: "About three in four Sammamish homes were built between 1980 and 2009, according to Census Bureau estimates. That's the era of the plateau subdivisions, from Klahanie, which dates to the mid-1980s, to neighborhoods finished after the city incorporated in 1999. Most of these houses are now on their second or third exterior paint job.",
        },
        {
          type: "p",
          text: "Homes that age share predictable problems: original caulk at windows and trim joints has hardened and pulled away, south and west walls have faded and chalked, and trim at corners and garage doors has taken in water. We cut out failed caulk instead of painting over it, and check trim for soft wood at the walkthrough.",
        },
        {
          type: "p",
          text: "Size matters too. Many Sammamish houses are large two-stories with tall entry walls, gables and two-story great rooms. Outside, that means planning ladders and staging around landscaping and sloped side yards. Inside, it means stairwell walls and vaulted ceilings that need safe staging on finished floors.",
        },
        {
          type: "p",
          text: "Siding on the plateau is mostly cedar (lap, shingle or board-and-batten) or fiber cement on many of the newer homes. Bare cedar gets a stain-blocking primer so tannins don't bleed through light colors. Fiber cement holds paint well but fails first at its seams and nail lines, so those get sealed before the finish coats.",
        },
        // source: https://censusreporter.org/data/table/?table=B25034&geo_ids=16000US5361115 (ACS 2020-2024 5-year: about 13% built before 1980)
        {
          type: "p",
          text: "Roughly one in eight Sammamish homes was built before 1980. If your house was built before 1978, any work that disturbs the old paint follows lead-safe work practices under the EPA's RRP rule: containment, dust control and careful cleanup.",
        },
      ],
    },
    {
      heading: "Rain, shade and moss on the plateau",
      id: "climate",
      body: [
        // source: https://aqua.kingcounty.gov/dnrp/library/dnrp-directors-office/climate/1111-kc-precipitation-map.pdf (King County average annual precipitation map: most of Sammamish between the 40- and 50-inch lines; Bellevue, Kirkland and Redmond under 40)
        {
          type: "p",
          text: "Sammamish gets more rain than the cities along Lake Washington. On King County's precipitation map, most of the plateau sits between the 40- and 50-inch lines, while Bellevue, Kirkland and Redmond fall under 40. Add the tall Douglas firs and cedars on most lots, and siding here stays damp longer than the calendar suggests.",
        },
        {
          type: "ul",
          items: [
            "**North walls** can go most of the year without direct sun, so mildew starts there first.",
            "**Siding, gutters and trim under heavy canopy** collect needles and grow moss and algae.",
            "**Decks and fences** sit in leaf litter, hold water and turn gray within a season or two.",
            "**Homes above Lake Sammamish** catch morning moisture off the water, which slows drying on the lake-facing side.",
          ],
        },
        {
          type: "p",
          text: "Prep on a Sammamish exterior starts with washing and a mildew treatment, then enough drying time before primer goes on. We save shaded walls for the warmest, driest stretch of the job.",
        },
        {
          type: "p",
          text: "Exterior painting runs in the dry season, roughly June through September. Paint needs dry surfaces and temperatures above the label minimum, usually 35 to 50°F. On the plateau, cool fall nights and heavy morning dew tend to close that window sooner than homeowners expect, so it pays to book early.",
        },
        {
          type: "p",
          text: "If rain interrupts your exterior job, the lost days are rescheduled first and never charged.",
          confirm: PROMISE,
        },
      ],
    },
    {
      heading: "HOAs and exterior color approval in Sammamish",
      id: "hoa",
      body: [
        {
          type: "p",
          text: "Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and a large share of Sammamish homes are in an HOA.",
          confirm: "Confirm with the City of Sammamish (sammamish.us) that repainting a house needs no permit, and that most Sammamish subdivisions have HOAs.",
        },
        {
          type: "p",
          text: "Larger communities such as Klahanie, Trossachs and the Sahalee-area associations run exterior changes through architectural review. Some keep an approved color palette; others ask you to submit body, trim and door colors before work starts. Approval can take a few weeks, and repainting in your current colors may need only a notice.",
          confirm: "Confirm the Klahanie, Trossachs and Sahalee-area HOA rules: architectural review for exterior colors, approved palettes, typical approval time, and whether same-color repaints need approval.",
        },
        {
          type: "h3",
          text: "How we help with HOA approval",
        },
        {
          type: "ul",
          items: [
            "We ask for your HOA's color rules or approved palette at the walkthrough.",
            "We help you choose body, trim and accent colors that fit those rules (color consultation is an add-on with any job).",
            "We give you the color names and paint details your HOA form asks for.",
            "We set your start date after approval comes through, so nothing gets painted twice.",
          ],
        },
      ],
    },
    {
      heading: "Painting services for Sammamish homes",
      id: "services",
      body: [
        {
          type: "p",
          text: "Our [exterior painting](/services/exterior-painting) on Sammamish homes is built around the problems above: washing off moss and mildew, replacing failed caulk, priming bare cedar, repairing rotted trim, and planning safe access for tall walls and steep side yards.",
        },
        {
          type: "p",
          text: "Inside, the common requests come with a 1990s floor plan: two-story entry walls, flat builder paint that won't wipe clean, and oak trim or cabinets homeowners want brighter. [Interior painting](/services/interior-painting) covers walls, ceilings, trim and doors, and cabinets can be painted without a remodel.",
        },
        {
          type: "p",
          text: "Cedar decks and fences under evergreens gray and mildew fast. [Deck and fence staining](/services/decks-and-fences-painting) with a solid or semi-transparent stain, after a full cleaning, keeps the wood sealed through the wet months.",
        },
        {
          type: "p",
          text: "To get started, book a [free estimate](/estimate). We walk the house with you, and you get a written quote within 24 hours of the walkthrough.",
          confirm: PROMISE,
        },
        {
          type: "p",
          text: "While we work, you have one point of contact, a photo update every day, and a clean house every evening.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    // source: https://en.wikipedia.org/wiki/Klahanie,_Washington (established 1985; Yellow Lake)
    { name: "Klahanie", note: "Planned community from 1985, around Yellow Lake.", confirm: SERVE },
    { name: "Trossachs", note: "Large two-story homes on the southeast plateau.", confirm: SERVE },
    // source: https://en.wikipedia.org/wiki/Sammamish,_Washington (Pine Lake and Beaver Lake are the city's two largest lakes)
    { name: "Pine Lake", note: "Wooded lots around one of the city's two largest lakes.", confirm: SERVE },
    { name: "Beaver Lake", note: "Lakeside and tree-lined streets on the east side.", confirm: SERVE },
    { name: "Sahalee", note: "Homes around the golf course in north Sammamish.", confirm: SERVE },
    // source: https://en.wikipedia.org/wiki/Sammamish,_Washington (Inglewood platted 1889)
    { name: "Inglewood", note: "North end of the plateau, first platted in 1889.", confirm: SERVE },
    { name: "East Lake Sammamish", note: "Hillside homes facing the lake and its morning moisture.", confirm: SERVE },
    { name: "Sammamish Town Center", note: "Newer homes and townhomes near the city center.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "sammamish-hoa-approval",
      question: "Do I need HOA approval to paint my house in Sammamish?",
      answer: [
        "Often, yes. Most Sammamish subdivisions have an HOA, and many require approval before you change exterior colors.",
        "Check your CC&Rs or ask your HOA's architectural committee before you settle on colors. Some associations also want a notice when you repaint in the same colors. We can help you pull together the color names and paint details the application asks for.",
      ],
      confirm: "Confirm typical Sammamish HOA approval rules (Klahanie, Trossachs, Sahalee), including same-color repaints.",
    },
    {
      id: "sammamish-exterior-season",
      question: "When should I schedule exterior painting in Sammamish?",
      answer: [
        "Plan for June through September, and book in winter or spring if you can.",
        "The plateau's heavy shade and cool nights mean siding takes longer to dry than in sunnier parts of the Eastside, so the dry season is the reliable window. If your HOA has to approve colors, start that process early so approval is in hand before your start date.",
      ],
    },
    {
      id: "sammamish-tall-walls",
      question: "Can you paint a tall two-story house in Sammamish?",
      answer: [
        "Yes. Tall entry walls, gables and two-story great rooms are common on the plateau, and we plan ladders and staging for them at the walkthrough.",
        "Access affects how long a job takes, so it is spelled out in your written quote.",
      ],
      confirm: "Erik: confirm we have the ladders and staging for tall two-story exteriors and interior stairwells.",
    },
    {
      id: "sammamish-moss-mildew",
      question: "Do moss and mildew have to be removed before painting?",
      answer: [
        "Yes. Paint over moss or mildew peels early, so both come off first.",
        "Under tall evergreens, we wash the siding, treat mildew and let shaded walls dry fully before priming. On soft cedar, pressure washing stays gentle enough to clean the wood without gouging it.",
      ],
    },
  ],
  nearby: ["issaquah-wa", "redmond-wa", "bellevue-wa"],
  updatedAt: "2026-10-24",
};

export default page;
