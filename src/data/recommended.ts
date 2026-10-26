/**
 * Companies we recommend for work outside painting. Real companies only,
 * added by Hunter or Erik with their permission. Until then each trade shows
 * a placeholder on previews, and the page stays out of search.
 */
export const RECOMMENDED = [
  { trade: "Roofing", placeholder: "RECOMMENDED_ROOFER", why: "For leaks, moss damage and roof replacements we find while painting." },
  { trade: "Gutters", placeholder: "RECOMMENDED_GUTTERS", why: "Overflowing gutters are a top cause of peeling paint and rot on fascia." },
  { trade: "Siding and carpentry", placeholder: "RECOMMENDED_CARPENTER", why: "For siding replacement and larger rot repair beyond what we fix in-house." },
  { trade: "Pressure washing", placeholder: "RECOMMENDED_WASHING", why: "For driveways, patios and roofs between paint jobs." },
  { trade: "Windows and doors", placeholder: "RECOMMENDED_WINDOWS", why: "For failed window seals and door replacements." },
  { trade: "Flooring", placeholder: "RECOMMENDED_FLOORING", why: "For refinishing or new floors before or after an interior repaint." },
] as const;
