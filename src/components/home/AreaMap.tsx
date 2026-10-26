import { publishedCities } from "@/data/cities";

/**
 * A simple drawn map of the service area (not to survey accuracy): Puget
 * Sound, Lake Washington and Lake Sammamish as rough shapes, and a dot per
 * city from its real latitude and longitude. No map tiles, no requests.
 */
const COORDS: Record<string, [lat: number, lon: number]> = {
  "bellevue-wa": [47.6101, -122.2015],
  "bothell-wa": [47.7601, -122.2054],
  "clyde-hill-wa": [47.6318, -122.2179],
  "edmonds-wa": [47.8107, -122.3774],
  "everett-wa": [47.979, -122.2021],
  "issaquah-wa": [47.5301, -122.0326],
  "juanita-wa": [47.7065, -122.219],
  "kenmore-wa": [47.7573, -122.244],
  "kirkland-wa": [47.6769, -122.206],
  "lynnwood-wa": [47.8209, -122.3151],
  "medina-wa": [47.6209, -122.2276],
  "mercer-island-wa": [47.5707, -122.2221],
  "mill-creek-wa": [47.8601, -122.2043],
  "monroe-wa": [47.8554, -121.971],
  "newcastle-wa": [47.539, -122.1557],
  "redmond-wa": [47.674, -122.1215],
  "renton-wa": [47.4829, -122.2171],
  "sammamish-wa": [47.6163, -122.0356],
  "seattle-wa": [47.6062, -122.3321],
  "shoreline-wa": [47.7557, -122.3415],
  "snohomish-wa": [47.9129, -122.0982],
  "snoqualmie-wa": [47.5287, -121.8254],
  "woodinville-wa": [47.7543, -122.1635],
};

/** Cities that get a text label (the rest are dots with a tooltip, to keep it readable). */
const LABELS: Record<string, "l" | "r" | "b"> = {
  "seattle-wa": "l",
  "bellevue-wa": "r",
  "kirkland-wa": "l",
  "redmond-wa": "r",
  "sammamish-wa": "r",
  "issaquah-wa": "r",
  "renton-wa": "r",
  "bothell-wa": "r",
  "everett-wa": "r",
  "edmonds-wa": "b",
  "lynnwood-wa": "r",
  "monroe-wa": "l",
  "snohomish-wa": "r",
  "snoqualmie-wa": "b",
  "shoreline-wa": "l",
};

const N = 48.03;
const S = 47.44;
const W = -122.47;
const E = -121.76;
const K = Math.cos((47.73 * Math.PI) / 180);
const WIDTH = 520;
const HEIGHT = Math.round((WIDTH * (N - S)) / ((E - W) * K));
const x = (lon: number) => ((lon - W) / (E - W)) * WIDTH;
const y = (lat: number) => ((N - lat) / (N - S)) * HEIGHT;
const path = (pts: [number, number][], close = true) =>
  pts.map(([lat, lon], i) => `${i ? "L" : "M"}${x(lon).toFixed(1)},${y(lat).toFixed(1)}`).join(" ") + (close ? " Z" : "");

const SOUND: [number, number][] = [
  [N, W], [N, -122.215], [47.98, -122.225], [47.92, -122.27], [47.87, -122.33], [47.82, -122.39], [47.78, -122.385],
  [47.7, -122.4], [47.65, -122.41], [47.6, -122.345], [47.55, -122.395], [47.5, -122.37], [S, -122.36], [S, W],
];
const LAKE_WA: [number, number][] = [
  [47.757, -122.275], [47.72, -122.28], [47.68, -122.27], [47.64, -122.28], [47.6, -122.28], [47.56, -122.27],
  [47.52, -122.25], [47.5, -122.215], [47.505, -122.2], [47.55, -122.19], [47.59, -122.21], [47.62, -122.236],
  [47.66, -122.215], [47.7, -122.225], [47.74, -122.25],
];
const MERCER: [number, number][] = [
  [47.6, -122.245], [47.585, -122.235], [47.555, -122.225], [47.54, -122.235], [47.555, -122.25], [47.585, -122.25],
];
const LAKE_SAMM: [number, number][] = [
  [47.655, -122.11], [47.62, -122.085], [47.58, -122.07], [47.555, -122.06], [47.56, -122.08], [47.6, -122.1], [47.64, -122.115],
];

export function AreaMap() {
  const cities = publishedCities();
  return (
    <figure className="overflow-hidden rounded-[var(--radius-card)] bg-pine-deep shadow-card">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby="area-map-title" className="block h-auto w-full">
        <title id="area-map-title">Map of the 23 cities Brushy Bear Painters serves, from Everett to Renton and Seattle to Snoqualmie</title>
        <rect width={WIDTH} height={HEIGHT} fill="#123f2e" />
        <path d={path(SOUND)} fill="#0c2a20" />
        <path d={path(LAKE_WA)} fill="#0c2a20" />
        <path d={path(MERCER)} fill="#123f2e" />
        <path d={path(LAKE_SAMM)} fill="#0c2a20" />
        {cities.map((c) => {
          const at = COORDS[c.slug];
          if (!at) return null;
          const cx = x(at[1]);
          const cy = y(at[0]);
          const side = LABELS[c.slug];
          return (
            <g key={c.slug}>
              <title>{c.name}</title>
              <circle cx={cx} cy={cy} r={side ? 7 : 5} fill="#f4ad1f" stroke="#0c1a14" strokeWidth={2} />
              {side && (
                <text
                  x={side === "r" ? cx + 11 : side === "l" ? cx - 11 : cx}
                  y={side === "b" ? cy + 24 : cy + 4.5}
                  textAnchor={side === "r" ? "start" : side === "l" ? "end" : "middle"}
                  fill="#ffffff"
                  fontSize="14"
                  fontWeight="700"
                  paintOrder="stroke"
                  stroke="#123f2e"
                  strokeWidth={4}
                >
                  {c.name}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption className="px-4 py-2 text-right text-xs font-semibold text-white/80">Simplified map, not to scale</figcaption>
    </figure>
  );
}
