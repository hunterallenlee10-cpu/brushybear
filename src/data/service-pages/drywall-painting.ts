import type { ServicePage } from "@/data/types";

const page: ServicePage = {
  slug: "drywall-painting",
  title: "Drywall Painting, Eastside & Seattle",
  metaDescription:
    "Drywall repair and painting on the Eastside and in Seattle: holes, cracks and nail pops patched, texture matched, new drywall primed, then painted wall to wall.",
  h1: "Drywall painting and repair on the Eastside and in Seattle",
  eyebrow: "Patching, texture matching and new drywall · Eastside & Seattle, WA",
  intro: [
    "We repair damaged drywall and paint it so the fix disappears: holes, cracks, nail pops, dents, old anchor holes and water stains get patched, sanded, textured to match and primed before the wall is painted. We also prime and paint new drywall after a remodel or addition, which needs a different approach than repainting an old wall.",
    "Patches show through paint when the texture is off or the primer is skipped, and touch-ups rarely blend on an older wall, so we usually paint the whole wall corner to corner. Drywall work is year-round across the Eastside and greater Seattle area, and you can start with a [free estimate](/estimate).",
  ],
  cardSummary:
    "Holes, cracks, nail pops and water stains patched and texture-matched, and new drywall primed and painted, so repairs don't show through.",
  included: [
    "A walkthrough with a work light to find dents, cracks and nail pops you might not see in normal light",
    "Furniture moved or covered, and floors and nearby surfaces protected",
    "Holes, dents and nail pops patched and filled",
    "Cracks and loose tape seams cut out, retaped and mudded",
    "Patches sanded smooth with dust control",
    "Texture matched to the surrounding wall, such as orange peel or knockdown",
    "Primer on every patch, and on all new drywall",
    "Finish coats on the full wall or ceiling so repairs blend in",
    "Daily cleanup and a final walkthrough with touch-ups",
  ],
  sections: [
    {
      heading: "Drywall damage we repair before painting",
      id: "repairs",
      body: [
        {
          type: "p",
          text: "Most homes collect drywall damage slowly, and it all gets fixed before paint goes on. Common repairs include:",
        },
        {
          type: "ul",
          items: [
            "**Nail and screw pops**, where a fastener pushes out a small bump or ring in the wall.",
            "**Anchor and picture holes** left from shelves, TVs and curtain rods.",
            "**Doorknob holes** and dents from furniture, vacuums and moving day.",
            "**Cracks** at the corners of doors and windows, and along ceiling seams.",
            "**Lifting or bubbled tape** at seams and inside corners.",
            "**Water stains** on ceilings and walls, once the leak itself has been fixed.",
          ],
        },
        {
          type: "p",
          text: "Small holes get filled with patching compound. Larger holes get a patch or a new piece of drywall cut in, taped and mudded in several thin coats.",
          confirm: "Erik: confirm the largest drywall repair we handle in-house (for example, cutting in a new section) versus referring to a drywall contractor",
        },
        {
          type: "callout",
          title: "Fix the leak first",
          text: "A water stain will come back through new paint if the wall is still getting wet. Have the plumbing or roof leak repaired, let the area dry out, and we'll seal the stain with a stain-blocking primer before painting.",
        },
      ],
    },
    {
      heading: "Matching texture so patches don't show",
      id: "texture",
      body: [
        {
          type: "p",
          text: "The most common reason a patch shows after painting is texture, not color. A smooth patch on a textured wall catches light differently, even under fresh paint.",
        },
        {
          type: "ul",
          items: [
            "**Orange peel.** A fine, bumpy spray texture, common in newer Eastside homes. We match it with spray texture adjusted to the wall.",
            "**Knockdown.** A splattered texture flattened with a knife. It's matched by spraying and knocking it down at the right moment.",
            "**Smooth walls.** Harder than they look, because every ridge shows. Smooth patches get extra thin coats and careful sanding.",
            "**Hand textures.** Skip trowel and other hand-applied textures are matched by hand, and we test on a scrap board first.",
          ],
          confirm: "Erik: confirm which textures we match in-house and the tools we use (spray rig, aerosol texture, hand tools)",
        },
        {
          type: "p",
          text: "Every patch then gets primer. Bare joint compound soaks up paint differently than the painted wall around it, which leaves a dull spot called flashing if it isn't primed.",
        },
      ],
    },
    {
      heading: "Why we paint the whole wall",
      id: "whole-wall",
      body: [
        {
          type: "p",
          text: "Spot touch-ups almost never blend on a wall that's been painted for a few years. The old paint has faded and collected dirt, and the sheen of a fresh dab looks different from every angle.",
        },
        {
          type: "p",
          text: "So after patching, we paint the full wall or ceiling from corner to corner. If several walls in a room have repairs, painting the whole room is often worth it, and that's where [interior painting](/services/interior-painting) comes in.",
        },
      ],
    },
    {
      heading: "Priming and painting new drywall",
      id: "new-drywall",
      body: [
        {
          type: "p",
          text: "New drywall from a remodel, basement finish or addition needs a primer before any finish paint. The paper face and the mudded seams absorb paint at different rates, and without primer the seams and screw spots show through as dull stripes.",
        },
        {
          type: "ol",
          items: [
            "**Check the finish.** We look over the drywall in raking light and point out any seams or screw spots that need more mud before paint makes them obvious.",
            "**Clean off the dust.** Sanding dust on new walls keeps primer from bonding, so walls get dusted or wiped down first.",
            "**Prime.** A drywall primer seals the paper and mud evenly.",
            "**Paint.** Two finish coats on walls and ceilings, with trim and doors painted as part of the same job if you want them done.",
          ],
        },
        {
          type: "p",
          text: "We're happy to coordinate with your contractor or drywall installer on timing, so we start once the mud is fully dry.",
          confirm: "Hunter/Erik: confirm we take on painting for new construction and remodels, and whether we hang drywall ourselves or only finish and paint",
        },
      ],
    },
  ],
  costFactors: [
    {
      factor: "Number and size of repairs",
      detail: "A few nail pops and picture holes are quick. Large holes, long cracks or sections that need new drywall take much more time.",
    },
    {
      factor: "Texture",
      detail: "Smooth walls and hand-applied textures take more care to blend than orange peel or knockdown.",
    },
    {
      factor: "Drying time and return visits",
      detail: "Joint compound goes on in thin coats that each need to dry, so bigger repairs can mean more than one visit before painting.",
    },
    {
      factor: "Water damage",
      detail: "Stains need a stain-blocking primer, and soft or crumbling drywall has to be cut out and replaced.",
    },
    {
      factor: "Area painted",
      detail: "A single wall, a full room or a whole house of new drywall each change the amount of primer, paint and labor.",
    },
    {
      factor: "Ceiling height and access",
      detail: "Ceiling repairs, stairwells and tall walls need ladders or scaffolding and take longer to patch and sand.",
    },
  ],
  addOns: [
    {
      name: "Color consultation",
      why: "If the room is getting repainted anyway, it's a good time to choose a new color.",
    },
    {
      name: "Trim and millwork",
      why: "Baseboards and casings often get scuffed in the same spots as the walls and look best painted at the same time.",
    },
  ],
  faqs: [
    {
      id: "drywall-painting-touch-up",
      question: "Can you just patch the hole and touch up the paint?",
      answer: [
        "Usually not, because touch-ups rarely blend on an older wall. Faded paint and differences in sheen make a fresh spot stand out, so we patch, prime and paint the full wall corner to corner for a repair you can't see.",
      ],
    },
    {
      id: "drywall-painting-texture",
      question: "Can you match my wall texture?",
      answer: [
        "Yes, we match common textures like orange peel and knockdown, and we work smooth walls with extra thin coats and careful sanding. We test the texture on a scrap board or a hidden spot when the match is tricky.",
      ],
      confirm: "Erik: confirm the textures we can match",
    },
    {
      id: "drywall-painting-visits",
      question: "How long does drywall repair take before you can paint?",
      answer: [
        "Small repairs can often be patched and painted the same day or the next. Bigger repairs need several thin coats of joint compound that each dry before sanding, so they may take two or three visits before the wall is ready for paint.",
      ],
      confirm: "Erik: confirm the typical number of visits for small versus large drywall repairs",
    },
    {
      id: "drywall-painting-water-stain",
      question: "Can you paint over a water stain on my ceiling?",
      answer: [
        "Yes, once the leak is fixed and the area is completely dry. Regular paint won't cover a water stain, so we seal it with a stain-blocking primer first, then paint the full ceiling so the repair doesn't show. If the drywall is soft or sagging, that section needs to be replaced.",
      ],
    },
    {
      id: "drywall-painting-new-drywall",
      question: "Do you paint new drywall after a remodel?",
      answer: [
        "Yes, we prime and paint new drywall from remodels, basements and additions. We check the drywall finish before priming and point out any spots that need more mud, because paint makes seams and screw heads more visible, not less.",
      ],
      confirm: "Hunter/Erik: confirm we take on new-drywall paint jobs for remodels and additions",
    },
    {
      id: "drywall-painting-popcorn",
      question: "Do you remove popcorn ceilings?",
      answer: [
        "Not before it's tested: popcorn ceilings in older homes can contain asbestos, so a lab test always comes before anyone scrapes. Ask about it during your estimate and we'll tell you what's involved for your ceiling.",
      ],
      confirm: "Erik: confirm whether we offer popcorn ceiling removal and how we handle asbestos testing",
    },
  ],
  updatedAt: "2026-10-26",
};

export default page;
