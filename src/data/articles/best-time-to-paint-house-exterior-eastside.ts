import type { Article } from "@/data/types";

/*
 * Climate figures below are Sea-Tac Airport 1991–2020 normals (NOAA), as
 * tabulated on the Climate of Seattle page:
 *   Jul 0.60 in / 4.7 days with measurable precipitation (>= 0.01 in)
 *   Aug 0.97 in / 4.9 days, Sep 1.61 in / 8.3 days, Oct 3.91 in / 14.3 days
 *   Nov 6.31 in / 18.4 days (wettest), Apr 3.18 in / 15.0 days, May 1.88 in / 11.3 days
 *   Mean daily minimum: May 48.7, Jun 53.0, Jul 56.8, Aug 57.2, Sep 53.6, Oct 47.0, Nov 40.9 (°F)
 *   Oct–Mar total 29.65 in of 39.34 in annual (about 75%).
 */

const article: Article = {
  slug: "best-time-to-paint-house-exterior-eastside",
  title: "When is the best time to paint a house exterior on the Eastside?",
  seoTitle: "Best Time to Paint a House Exterior",
  metaDescription:
    "The best time to paint a house exterior on the Eastside is June to September. What paint needs, the risky shoulder weeks, and why to book in February to May.",
  summary:
    "The best time to paint a house exterior on the Eastside is June through September, when rain is least frequent, nights stay mild and siding has time to dry out. July and August are the most reliable months. Late May and early October can work for smaller jobs with a good forecast, but cooler nights, heavy morning dew and more rain days make them riskier. Book your walkthrough between February and May to get a summer date.",
  publishedAt: "2026-10-24",
  updatedAt: "2026-10-24",
  sections: [
    {
      heading: "June through September is the dry window",
      id: "dry-window",
      body: [
        {
          type: "p",
          // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (NOAA 1991–2020 normals, Sea-Tac)
          text: "June through September is the Eastside's dry window, and July and August are the safest bets. At Sea-Tac Airport, the region's standard weather station, July averages about 0.6 inches of rain over fewer than five days with measurable rain, and August about 1 inch. October climbs to nearly 4 inches over about 14 days, and November is the wettest month of the year.",
        },
        {
          type: "p",
          // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (Oct–Mar 29.65 in of 39.34 in annual)
          text: "Roughly three quarters of the year's rain falls between October and March, and wood siding soaks up moisture the whole time. It needs a stretch of dry weather to give that back, then dry, mild days after the paint goes on.",
        },
        {
          type: "p",
          // source: https://en.wikipedia.org/wiki/Issaquah,_Washington and https://www.plantmaps.com/en/clim/c/us/washington/issaquah/climate-data
          // (both list Issaquah annual precipitation above Sea-Tac's 39.34 in; their exact figures differ, so no number is used)
          text: "Those are airport numbers. Towns closer to the Cascade foothills, like Issaquah, generally get more rain than Sea-Tac, so spring and fall margins are thinner there.",
        },
      ],
    },
    {
      heading: "What exterior paint actually needs",
      id: "what-paint-needs",
      body: [
        {
          type: "p",
          text: "Exterior paint needs a dry surface, temperatures above the label minimum, a surface warmer than the dew point, and enough rain-free time to dry.",
        },
        {
          type: "ul",
          items: [
            "**A dry surface.** A common target for wood siding is below about 15 percent moisture on a moisture meter, but the primer or paint label has the final say.",
            "**Air and surface temperature above the minimum.** Most exterior acrylics list a minimum between 35°F and 50°F, depending on the product. It applies to the siding, not just the air, and has to hold until the paint dries, usually through the overnight low.",
            "**A surface warmer than the dew point.** A common rule is at least 5°F above the dew point. Colder than that, moisture condenses on the siding and paint won't bond well.",
            "**Rain-free time.** Many acrylics resist light rain within a few hours in warm, dry weather; cool or humid conditions can stretch that to a day or more.",
            "**Time to cure.** Paint feels dry long before it's cured. Acrylics keep hardening for days to weeks, so an early soaking is harder on a fresh coat.",
          ],
        },
        {
          type: "callout",
          title: "Check the label",
          text: "These are typical ranges. The can and the product's technical data sheet list the real minimum temperature, dew point guidance, dry time and recoat time. When they differ from a rule of thumb, follow the label.",
        },
        {
          type: "h3",
          text: "Why morning dew and overnight lows matter",
        },
        {
          type: "p",
          text: "Dew is the most common reason a dry summer day still goes wrong. On clear nights siding cools below the dew point and gets wet with no rain at all, and shaded north walls can stay damp until late morning. Paint applied late in the afternoon may not dry before evening dew, which can leave a streaky, soapy-looking residue (surfactant leaching) that has to be washed off.",
        },
        {
          type: "p",
          // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (mean daily minimum, Sea-Tac 1991–2020)
          text: "At Sea-Tac, the average overnight low is about 53°F in June, 57°F in July and August, and 54°F in September. It drops to about 47°F in October and 41°F in November, near or below many paints' minimums. So crews start on walls the sun has dried and stop early enough for paint to set before evening.",
        },
      ],
    },
    {
      heading: "Late May and early October: workable, with more risk",
      id: "shoulder-weeks",
      body: [
        {
          type: "p",
          // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (May 11.3 days, Oct 14.3 days with measurable precipitation)
          text: "Late May and early October can work for exterior painting, but they carry more weather risk. Sea-Tac averages about 11 days with measurable rain in May and about 14 in October. The risks:",
        },
        {
          type: "ul",
          items: [
            "Shorter dry, warm stretches each day, so the same job takes more calendar days.",
            "Morning dew that lingers on shaded sides.",
            "Overnight lows near the label minimum, which slow drying and curing.",
            "More chance of rain right after a coat goes on.",
          ],
        },
        {
          type: "p",
          text: "Shoulder weeks suit smaller jobs: a front door, a sunny south wall, trim touch-ups. A full repaint with heavy prep fits July and August better. If you paint in a shoulder week, leave room for weather days and choose a product rated for lower temperatures.",
        },
      ],
    },
    {
      heading: "Book in February through May",
      id: "when-to-book",
      body: [
        {
          type: "p",
          text: "For a summer exterior date, book your walkthrough between February and May. Summer is the only reliable exterior window here, so painters' summer calendars tend to fill in spring, and booking early gives you more choice of start dates.",
        },
        {
          type: "p",
          text: "It also leaves time for colors and HOA approval. Repainting a house usually doesn't need a city permit, but HOAs often require approval for exterior color changes, and that review can take a few weeks.",
          confirm: "Verify the permit wording for Bellevue, Kirkland, Redmond, Sammamish and Issaquah, and whether 'a few weeks' is a fair typical HOA review time.",
        },
        {
          type: "p",
          text: "We do walkthroughs year-round and send a written quote within 24 hours of the walkthrough, so you can [request an estimate](/estimate) in winter and have your [exterior painting](/services/exterior-painting) date settled before spring.",
          confirm: "Promise: confirm with Erik (24-hour written quote; walkthroughs offered year-round)",
        },
      ],
    },
    {
      heading: "How prep fits the calendar",
      id: "prep",
      body: [
        {
          type: "p",
          text: "Prep takes calendar time too, and it has to fit inside the same dry window as the painting.",
        },
        {
          type: "ol",
          items: [
            "**Kill growth and wash.** Moss and mildew need a cleaner that kills them, not just a rinse. See [how rain and moss affect exterior paint](/articles/rain-moss-exterior-paint-pacific-northwest).",
            "**Let the house dry.** Washed wood siding typically needs at least a day or two of dry weather, and shaded walls and cedar often longer. A moisture meter beats a guess.",
            "**Scrape and sand.** Loose paint comes off and edges get sanded smooth.",
            "**Repair rot.** Soft wood at sills, fascia and board ends gets replaced. Rot often turns up during scraping, so a good schedule leaves slack for it.",
            "**Caulk and prime.** Each has its own wait time before paint, listed on the label.",
            "**Paint.** Usually two coats, with recoat times adjusted for the day's temperature.",
          ],
        },
        {
          type: "p",
          text: "On homes built before 1978, work that disturbs old paint follows lead-safe work practices (EPA RRP), which adds setup and cleanup time.",
        },
        {
          type: "callout",
          title: "When it rains mid-job",
          text: "Rain-day promise: if weather delays your job, we reschedule you first and never charge for the delay.",
          confirm: "Promise: confirm with Erik",
        },
      ],
    },
    {
      heading: "If your house needs work in winter",
      id: "winter",
      body: [
        {
          type: "p",
          text: "Use the wet months for interiors, cabinets, planning and covered repairs, and save exterior paint for summer.",
        },
        {
          type: "ul",
          items: [
            "**Interiors.** Walls, ceilings and trim don't depend on the weather. See [interior painting](/services/interior-painting).",
            "**Cabinets.** A good winter project. See [cabinet painting](/services/cabinet-painting).",
            "**Colors.** Put large samples on more than one side of the house and look at them on gray and sunny days. Soft Northwest light changes how colors read.",
            "**Quotes and HOA approval.** Finish these so nothing waits when the weather turns.",
            "**Wood repair under cover.** Rotted boards on covered porches, under deep eaves, or under a tent in a dry spell can be replaced before damage spreads. Prime or protect repairs right away, then paint in summer.",
          ],
        },
      ],
    },
    {
      heading: "The Eastside exterior calendar, month by month",
      id: "month-by-month",
      body: [
        {
          type: "p",
          text: "Here's how a typical year lays out for exterior work; any given year can run wetter or drier.",
        },
        {
          type: "ul",
          // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (April 15.0 days with measurable precipitation, Sea-Tac)
          items: [
            "**January:** Interiors and cabinets. Gather exterior estimates.",
            "**February:** Book summer walkthroughs. Test colors outside.",
            "**March:** Settle colors and submit HOA requests.",
            "**April:** Summer dates fill. Still wet, about 15 rain days on average.",
            "**May:** Drying but showery. Late May can work for small jobs.",
            "**June:** Exterior season starts. Early June can still bring showers.",
            "**July:** The driest, most reliable month for full repaints.",
            "**August:** Nearly as dry. Crews follow the shade so hot sun doesn't dry paint too fast.",
            "**September:** Still good, with longer morning dew. Finish full repaints by month's end.",
            "**Early October:** Shoulder weeks for small jobs if the forecast holds.",
            "**November:** The wettest month. Back to interiors and cabinets.",
            "**December:** Interiors, cabinets and planning for next summer.",
          ],
        },
      ],
    },
  ],
  relatedServices: ["exterior-painting"],
  faqs: [
    {
      id: "best-time-october",
      question: "Can you paint a house exterior in October?",
      answer: [
        // source: https://en.wikipedia.org/wiki/Climate_of_Seattle (Oct 3.91 in, mean daily minimum 47.0°F)
        "Sometimes, in early October, if the forecast is dry and overnight lows stay above the label minimum. But October averages nearly 4 inches of rain at Sea-Tac and lows around 47°F, so most full repaints should wrap up by the end of September.",
      ],
    },
    {
      id: "best-time-rain",
      question: "How long does exterior paint need before it rains?",
      answer: [
        "Many acrylic exterior paints need at least a few hours of dry weather, and longer when it's cool or humid; the label gives the time for that product. Light rain on paint that's dry to the touch usually does no harm, but a downpour on wet paint can streak it or wash it off.",
      ],
    },
    {
      id: "best-time-booking",
      question: "How early should I book exterior painting on the Eastside?",
      answer: [
        "Book between February and May for a summer start. Summer calendars tend to fill in spring, and booking early leaves time for color choices and HOA approval.",
      ],
    },
    {
      id: "best-time-winter",
      question: "Can exterior painting be done in winter in the Seattle area?",
      answer: [
        "A full exterior repaint isn't a good idea in winter here, because surfaces rarely stay dry and overnight lows often fall below label minimums. Covered wood repairs, small primed spots in a dry spell, interiors and cabinets all work well instead.",
      ],
    },
  ],
};

export default article;
