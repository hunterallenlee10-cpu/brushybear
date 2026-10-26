/**
 * Illustrated hero scene (inline SVG, no download): a freshly painted
 * craftsman house under evergreens. The rain and the warm light are separate
 * layers (see HeroMedia). Replaced by the Higgsfield video when it exists
 * (Phase 7).
 */

const C = {
  forest: "#1f4d3a",
  forestDeep: "#163829",
  forestSoft: "#2f6a50",
  cream: "#f4ede1",
  gold: "#e9a93b",
  charcoal: "#2b2b2b",
};

/** One layered evergreen: three stacked tiers. */
function Evergreen({ x, base, h, fill }: { x: number; base: number; h: number; fill: string }) {
  const w = h * 0.42;
  const tiers = [0, 0.3, 0.55].map((t, i) => {
    const top = base - h + h * t;
    const bottom = base - h * (0.38 - i * 0.16);
    const half = (w / 2) * (0.6 + i * 0.25);
    return `M${x} ${top} L${x + half} ${bottom} L${x - half} ${bottom} Z`;
  });
  return (
    <g fill={fill}>
      <rect x={x - h * 0.025} y={base - h * 0.08} width={h * 0.05} height={h * 0.1} fill={C.forestDeep} />
      {tiers.map((d) => (
        <path key={d} d={d} />
      ))}
    </g>
  );
}

// Deterministic "random" rows so server and client always match.
const BACK_ROW = Array.from({ length: 16 }, (_, i) => ({ x: 10 + i * 42 + ((i * 37) % 17), h: 90 + ((i * 53) % 50) }));
const RAIN = Array.from({ length: 70 }, (_, i) => ({ x: (i * 97) % 660 - 10, y: (i * 61) % 470, len: 14 + ((i * 7) % 12) }));

/**
 * Rain as one static drawing. HeroMedia slides two copies of it down as a
 * single layer, which the browser animates on the GPU (no per-frame
 * repainting of the scene).
 */
export function RainLayer() {
  return (
    <svg viewBox="0 0 640 520" preserveAspectRatio="none" className="block h-1/2 w-full" aria-hidden="true">
      <g stroke="#eef2f1" strokeWidth="2" strokeLinecap="round" opacity="0.6">
        {RAIN.map((r, i) => (
          <line key={i} x1={r.x} y1={r.y} x2={r.x - 5} y2={r.y + r.len} />
        ))}
      </g>
    </svg>
  );
}

export function HeroScene() {
  return (
    <svg viewBox="0 0 640 520" role="img" aria-label="Illustration: a freshly painted craftsman house under tall evergreens as the rain clears" className="block h-auto w-full">
      <defs>
        <linearGradient id="hs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a7b6ae" />
          <stop offset="0.55" stopColor="#d9d8c8" />
          <stop offset="1" stopColor="#efe2c6" />
        </linearGradient>
        <linearGradient id="hs-lawn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5b8a6d" />
          <stop offset="1" stopColor="#3f6b53" />
        </linearGradient>
      </defs>

      <rect width="640" height="520" fill="url(#hs-sky)" />

      {/* Cascade foothills */}
      <path d="M0 300 L70 248 L128 270 L214 196 L286 254 L352 214 L430 262 L512 200 L640 266 V380 H0Z" fill="#aebfb5" />
      <path d="M200 208 L214 196 L230 210 L220 214Z M498 212 L512 200 L528 213 L515 216Z" fill="#f4f1ea" />
      <path d="M0 330 C 90 300, 160 318, 240 300 S 420 292, 500 306 S 600 300, 640 296 V420 H0Z" fill="#7a9c89" />

      {/* Back row of evergreens */}
      {BACK_ROW.map((t) => (
        <Evergreen key={t.x} x={t.x} base={372} h={t.h} fill={C.forestSoft} />
      ))}

      {/* Lawn */}
      <path d="M0 420 C 140 400, 300 404, 640 414 V520 H0Z" fill="url(#hs-lawn)" />
      <path d="M306 440 C 300 470, 284 496, 262 520 H352 C 340 496, 330 470, 334 440Z" fill="#e6dac6" />

      {/* The house: fresh cream siding, forest trim, gold door */}
      <g stroke={C.charcoal} strokeWidth="3" strokeLinejoin="round">
        <rect x="196" y="326" width="244" height="116" fill={C.cream} />
        <g stroke="#ddd0b7" strokeWidth="1.5">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={i} x1="198" x2="438" y1={338 + i * 10.5} y2={338 + i * 10.5} />
          ))}
        </g>
        <path d="M178 334 L318 238 L458 334 Z" fill={C.charcoal} />
        <path d="M232 328 L318 270 L404 328 Z" fill={C.forest} />
        <g stroke={C.forestDeep} strokeWidth="2">
          {[262, 290, 318, 346, 374].map((x) => (
            <line key={x} x1={x} x2={x} y1={273 + Math.abs(318 - x) * 0.674} y2="326" />
          ))}
        </g>
        <path d="M176 392 L460 392 L448 376 L188 376 Z" fill={C.charcoal} />
        {/* Tapered craftsman columns on stone bases */}
        {[208, 412].map((x) => (
          <g key={x}>
            <path d={`M${x} 394 L${x + 18} 394 L${x + 22} 424 L${x - 4} 424 Z`} fill={C.forest} />
            <rect x={x - 8} y="424" width="34" height="20" fill="#8c8a80" />
          </g>
        ))}
        {/* Windows with warm light */}
        {[222, 366].map((x) => (
          <g key={x}>
            <rect x={x} y="342" width="48" height="30" fill="#f6d68f" stroke={C.forest} strokeWidth="4" />
            <line x1={x + 24} x2={x + 24} y1="342" y2="372" stroke={C.forest} strokeWidth="3" />
          </g>
        ))}
        <rect x="300" y="398" width="38" height="44" fill={C.gold} />
        <circle cx="331" cy="421" r="2.4" fill={C.charcoal} stroke="none" />
        <rect x="290" y="442" width="58" height="8" fill="#b9b2a2" />
      </g>

      {/* Foreground evergreens */}
      <Evergreen x={70} base={470} h={300} fill={C.forest} />
      <Evergreen x={128} base={480} h={220} fill={C.forestDeep} />
      <Evergreen x={566} base={476} h={320} fill={C.forest} />
      <Evergreen x={618} base={490} h={240} fill={C.forestDeep} />

    </svg>
  );
}
