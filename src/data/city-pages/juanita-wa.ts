import type { CityPage } from "@/data/types";

const SERVE = "Hunter/Erik: confirm we serve this area";
const PROMISE = "Promise: confirm with Erik";
const HOA_PERMIT =
  "Confirm with the City of Kirkland that a straight exterior repaint in Juanita needs no building permit, and confirm how common HOA color approval and HOA-managed exteriors are in Juanita subdivisions, townhomes and condos.";

const page: CityPage = {
  slug: "juanita-wa",
  title: "House Painters in Juanita, Kirkland",
  metaDescription:
    "Painters in Juanita, the north Kirkland neighborhood by Juanita Bay. Prep for 1960s homes, shaded creek lots and condos, plus a written quote for every job.",
  h1: "Juanita painters for north Kirkland homes, condos and wooded creek lots",
  eyebrow: "Serving Juanita in Kirkland, WA",
  intro: [
    "Juanita isn't its own city. It's a neighborhood in north Kirkland, wrapped around Juanita Bay at the north end of Lake Washington, and Brushy Bear Painters paints homes, townhomes and condos there inside and out. We're a new company, so we don't have Juanita jobs to show you yet. We do have a set process: a walkthrough, a written quote that names every surface, and a final walkthrough before we leave.",
    // source: https://kirklandwa.gov/files/sharedassets/public/v/6/planning-amp-building/neighborhood-plan-updates/juanita-neighborhood-plan/final12f_juanita-neighborhoodplan.pdf (Juanita neighborhood bounded by NE 145th St on the north, I-405 and Totem Lake on the east, lower slope of Finn Hill on the west; area from NE 132nd to NE 145th annexed 2011 and merged with South Juanita)
    "Kirkland's Juanita neighborhood runs from the bay north to NE 145th Street, between the lower slope of Finn Hill and I-405. The northern part, from NE 132nd Street up, joined Kirkland in 2011 and was merged with what had been South Juanita. If your mail says Kirkland and you live near Juanita Village or Juanita Beach Park, this page is for you.",
  ],
  sections: [
    {
      heading: "Juanita homes: 1960s subdivisions, condos and infill",
      id: "juanita-homes",
      confirm: SERVE,
      body: [
        // source: https://en.wikipedia.org/wiki/Juanita,_Washington (most of Juanita joined Kirkland in July 1967; in the 1960s farms and large homesteads gave way to subdivisions and shopping centers)
        {
          type: "p",
          text: "Juanita turned from farms into suburbs in the 1960s, and much of it joined Kirkland in 1967. A lot of the single-family streets date from that era and the decades after: ramblers, split-levels and 1970s and 1980s two-stories with wood or plywood siding and a deck out back.",
        },
        {
          type: "p",
          text: "These houses usually need the same kind of work: scraping and sanding failed paint on trim, replacing soft wood at the bottom of plywood panels and corner boards, recaulking open joints and priming bare wood. Homes built before 1978 get lead-safe prep under EPA RRP work practices whenever the job disturbs old paint.",
        },
        { type: "h3", text: "Condos and townhomes near the neighborhood centers" },
        // source: https://kirklandwa.gov/files/sharedassets/public/v/6/planning-amp-building/neighborhood-plan-updates/juanita-neighborhood-plan/final12f_juanita-neighborhoodplan.pdf (mostly low-density residential, with higher-intensity housing around the Juanita Neighborhood Center on 100th Ave NE and the North Juanita Neighborhood Center north of NE 132nd St)
        {
          type: "p",
          text: "Juanita is mostly single-family, but condos, apartments and townhomes cluster around the Juanita Business District on 100th Avenue NE and the North Juanita center off Juanita-Woodinville Way. In most of those buildings the association handles the exterior, and owners call us for interiors: walls, ceilings, trim and kitchen cabinets.",
        },
        { type: "h3", text: "Juanita's historic houses" },
        // source: https://kirklandwa.gov/files/sharedassets/public/v/6/planning-amp-building/neighborhood-plan-updates/juanita-neighborhood-plan/final12f_juanita-neighborhoodplan.pdf (Langdon House and Homestead 1888, Ostberg Barn 1905, Dorr Forbes House 1906, Shumway Mansion 1909, Johnson Residence 1928 in South Juanita; Malm House 1929 in North Juanita)
        {
          type: "p",
          text: "The neighborhood plan lists a handful of historic buildings, including the Langdon House (1888), the Dorr Forbes House (1906) and the Shumway Mansion (1909). Most Juanita homes are far newer, but if you own an older house here, plan for hand prep, careful wood repair and lead-safe practices.",
        },
      ],
    },
    {
      heading: "Juanita weather: bay mornings, creek ravines and Finn Hill shade",
      id: "juanita-climate",
      body: [
        // source: https://kirklandwa.gov/files/sharedassets/public/v/6/planning-amp-building/neighborhood-plan-updates/juanita-neighborhood-plan/final12f_juanita-neighborhoodplan.pdf (Juanita Bay and its wetlands, Juanita Creek and Forbes Creek; wooded slopes and ravines; landslide-prone areas on the southeast slope of Finn Hill, the South Juanita Slope and along Forbes Creek Drive)
        {
          type: "p",
          text: "Juanita has more water and woods than most of Kirkland. Juanita Bay and its wetlands sit at the south end, Juanita Creek and Forbes Creek run through it, and the slopes along Forbes Creek Drive and the southeast side of Finn Hill are thick with trees. That shapes how exterior paint behaves.",
        },
        {
          type: "ul",
          items: [
            "Homes near the bay and the creeks see damp mornings, and siding can stay wet well after the rain stops.",
            "Lots on wooded slopes stay shaded, so moss and mildew grow on north walls, low siding and decks.",
            "Needles and leaves fill gutters, which overflow onto fascia and trim and start rot there.",
            "Steep driveways and downhill walls on hillside lots may need extra ladder planning.",
          ],
        },
        {
          type: "p",
          text: "Exterior painting belongs in the dry season, roughly June through September. On shaded Juanita lots we wash, treat mildew and wait for the siding to dry before priming, because paint over damp wood peels.",
        },
      ],
    },
    {
      heading: "HOAs, condo associations and Kirkland permits",
      id: "juanita-hoa",
      confirm: HOA_PERMIT,
      body: [
        {
          type: "p",
          text: "Juanita follows City of Kirkland rules. Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and many condo and townhome associations paint the exterior themselves.",
        },
        // source: https://www.kirklandwa.gov/Government/City-Managers-Office/KAN (Kirkland neighborhood associations are independent community groups)
        {
          type: "p",
          text: "Kirkland's neighborhood associations are community groups, not HOAs, so they don't set paint colors. If you live in a subdivision with covenants, check them before choosing colors and send us the approved palette. We'll schedule the exterior once approval is back.",
        },
      ],
    },
    {
      heading: "What we paint in Juanita",
      id: "juanita-services",
      body: [
        {
          type: "p",
          text: "For 1960s through 1980s houses, [exterior painting](/services/exterior-painting) covers the repairs that make paint last, and [deck and fence staining](/services/decks-and-fences-painting) brings back gray, mossy decks on shaded lots. Inside, [interior painting](/services/interior-painting) and [cabinet painting](/services/cabinet-painting) are the most common requests from condo and townhome owners.",
        },
        {
          type: "p",
          text: "Juanita is part of Kirkland, so you can also read our [Kirkland painting page](/painting-company/kirkland-wa) for more on the city as a whole. When you're ready, book a walkthrough for a [written estimate](/estimate).",
        },
        {
          type: "callout",
          title: "Every day on site",
          text: "One point of contact, a photo update every day and a clean work area every evening.",
          confirm: PROMISE,
        },
      ],
    },
  ],
  neighborhoods: [
    { name: "South Juanita", note: "Older part of the neighborhood near the bay and Juanita Beach Park.", confirm: SERVE },
    { name: "North Juanita", note: "Joined Kirkland in 2011; single-family streets up to NE 145th.", confirm: SERVE },
    { name: "Juanita Village", note: "Condos and apartments around the 100th Ave NE business district.", confirm: SERVE },
    { name: "Juanita Bay", note: "Homes near the bay and wetlands; damp mornings.", confirm: SERVE },
    { name: "Forbes Creek", note: "Wooded slopes along Forbes Creek Drive; shade and moss.", confirm: SERVE },
    { name: "Edith Moulton Park area", note: "North Juanita streets near the wooded park.", confirm: SERVE },
    { name: "Finn Hill (east slope)", note: "Juanita's western edge climbs onto Finn Hill; heavy tree cover.", confirm: SERVE },
    { name: "Totem Lake", note: "Neighboring area on Juanita's east side along I-405.", confirm: SERVE },
  ],
  faqs: [
    {
      id: "juanita-wa-city",
      question: "Is Juanita its own city?",
      answer: [
        "No, Juanita is a neighborhood in the City of Kirkland, at the north end of Lake Washington.",
        "City rules, permits and services are Kirkland's. Most of Juanita joined Kirkland in 1967, and the northern part joined in 2011.",
      ],
    },
    {
      id: "juanita-wa-condo",
      question: "Can you paint the inside of my Juanita condo?",
      answer: [
        "Yes, we paint condo and townhome interiors, including walls, ceilings, trim and cabinets.",
        "Many associations have rules about work hours, parking and moving materials through common areas. Send them to us before we schedule so the crew follows them from day one.",
      ],
    },
    {
      id: "juanita-wa-moss",
      question: "My Juanita house sits under big trees. Will new paint last?",
      answer: [
        "It can, as long as the moss and mildew come off and the siding is dry before painting.",
        "We wash, treat mildew, clear debris and replace soft wood first. Trimming branches that touch the house also helps the paint dry and last.",
      ],
    },
  ],
  nearby: ["kirkland-wa", "kenmore-wa", "bothell-wa"],
  updatedAt: "2026-10-26",
};

export default page;
