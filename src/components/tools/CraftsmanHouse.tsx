import type { Palette } from "@/data/palettes";

/**
 * A two-story Eastside craftsman drawn in SVG, in three paint layers:
 * body (lap siding), trim (fascia, corner boards, casings, columns) and
 * the front door. Colors fade between palettes with a CSS transition.
 */
const COLUMNS = [252, 330, 470, 548];

export function CraftsmanHouse({ palette, className = "" }: { palette: Palette; className?: string }) {
  const { body, trim, door } = palette;
  const t = { transition: "fill 450ms cubic-bezier(0.22,1,0.36,1), stroke 450ms cubic-bezier(0.22,1,0.36,1)" };
  const sidingLines = Array.from({ length: 22 }, (_, i) => 206 + i * 11);
  const glass = "#5b7282";

  return (
    <svg
      viewBox="0 0 800 500"
      className={className}
      role="img"
      aria-label={`Drawing of a two-story craftsman house with ${palette.words.body} siding, ${palette.words.trim} trim and a ${palette.words.door} front door`}
    >
      <defs>
        <linearGradient id="cp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfdcd6" />
          <stop offset="1" stopColor="#f1ece2" />
        </linearGradient>
        <linearGradient id="cp-shade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0.55" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.16" />
        </linearGradient>
        <clipPath id="cp-body">
          <polygon points="232,214 400,108 568,214 568,440 232,440" />
        </clipPath>
      </defs>

      {/* Sky and firs */}
      <rect width="800" height="500" fill="url(#cp-sky)" />
      <g fill="#2a4535">
        <polygon points="70,440 120,90 170,440" />
        <polygon points="630,440 700,60 770,440" />
        <polygon points="560,440 610,150 660,440" fill="#33533f" />
        <polygon points="140,440 185,170 230,440" fill="#33533f" />
        <polygon points="0,440 40,180 80,440" fill="#24392d" />
        <polygon points="740,440 790,190 840,440" fill="#24392d" />
      </g>

      {/* Lawn and path */}
      <rect y="438" width="800" height="62" fill="#6b8459" />
      <polygon points="372,500 428,500 418,462 382,462" fill="#a7a092" />

      {/* Body: lap siding */}
      <g clipPath="url(#cp-body)">
        <rect x="232" y="100" width="336" height="340" fill={body} style={t} />
        {sidingLines.map((y) => (
          <line key={y} x1="232" x2="568" y1={y} y2={y} stroke="#000" strokeOpacity="0.14" strokeWidth="1.6" />
        ))}
        <rect x="232" y="100" width="336" height="340" fill="url(#cp-shade)" />
      </g>

      {/* Main roof with deep eaves */}
      <polygon points="186,220 400,80 614,220 592,222 400,106 208,222" fill="#3b3e40" />
      {/* Rake fascia and knee braces */}
      <polyline points="210,222 400,107 590,222" fill="none" stroke={trim} strokeWidth="7" strokeLinejoin="round" style={t} />
      <polygon points="232,222 256,222 232,246" fill={trim} style={t} />
      <polygon points="568,222 544,222 568,246" fill={trim} style={t} />

      {/* Attic window */}
      <rect x="378" y="152" width="44" height="32" fill={glass} stroke={trim} strokeWidth="6" style={t} />
      <line x1="400" y1="152" x2="400" y2="184" stroke={trim} strokeWidth="3" style={t} />

      {/* Corner boards and frieze */}
      <rect x="232" y="214" width="11" height="226" fill={trim} style={t} />
      <rect x="557" y="214" width="11" height="226" fill={trim} style={t} />
      <rect x="232" y="312" width="336" height="9" fill={trim} style={t} />

      {/* Upper windows (three, with craftsman upper lites) */}
      {[272, 365, 458].map((x) => (
        <g key={x}>
          <rect x={x} y="236" width="70" height="62" fill={glass} stroke={trim} strokeWidth="7" style={t} />
          <line x1={x} y1="256" x2={x + 70} y2="256" stroke={trim} strokeWidth="3" style={t} />
          <line x1={x + 23} y1="236" x2={x + 23} y2="256" stroke={trim} strokeWidth="2.5" style={t} />
          <line x1={x + 47} y1="236" x2={x + 47} y2="256" stroke={trim} strokeWidth="2.5" style={t} />
          <polygon points={`${x + 6},${292} ${x + 22},${262} ${x + 30},${262} ${x + 14},${292}`} fill="#fff" fillOpacity="0.16" />
        </g>
      ))}

      {/* Lower windows */}
      {[266, 488].map((x) => (
        <g key={x}>
          <rect x={x} y="362" width="46" height="48" fill={glass} stroke={trim} strokeWidth="6" style={t} />
          <line x1={x} y1="378" x2={x + 46} y2="378" stroke={trim} strokeWidth="2.5" style={t} />
        </g>
      ))}

      {/* Front door with three lites */}
      <rect x="371" y="356" width="58" height="84" fill={door} stroke={trim} strokeWidth="6" style={t} />
      {[379, 394, 409].map((x) => (
        <rect key={x} x={x} y="364" width="12" height="16" fill={glass} />
      ))}
      <rect x="380" y="392" width="40" height="38" fill="none" stroke="#000" strokeOpacity="0.22" strokeWidth="2" />
      <circle cx="420" cy="402" r="2.8" fill="#d9a53a" />

      {/* Porch roof */}
      <polygon points="206,346 594,346 580,326 220,326" fill="#3b3e40" />
      <line x1="206" y1="347" x2="594" y2="347" stroke={trim} strokeWidth="7" style={t} />

      {/* Tapered columns on stone piers, and railing */}
      <g>
        <line x1="252" y1="414" x2="330" y2="414" stroke={trim} strokeWidth="5" style={t} />
        <line x1="470" y1="414" x2="548" y2="414" stroke={trim} strokeWidth="5" style={t} />
        {[264, 276, 288, 300, 312, 482, 494, 506, 518, 530].map((x) => (
          <line key={x} x1={x} y1="414" x2={x} y2="436" stroke={trim} strokeWidth="3" style={t} />
        ))}
        {COLUMNS.map((x) => (
          <g key={x}>
            <polygon points={`${x - 10},398 ${x + 10},398 ${x + 6},350 ${x - 6},350`} fill={trim} style={t} />
            <rect x={x - 14} y="398" width="28" height="42" fill="#8b857a" />
            <path d={`M${x - 14} 412 h28 M${x - 14} 426 h28 M${x} 398 v14 M${x - 7} 412 v14 M${x + 7} 426 v14`} stroke="#6d685e" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      {/* Porch floor and steps */}
      <rect x="226" y="436" width="348" height="6" fill="#5c5852" />
      <rect x="364" y="442" width="72" height="9" fill="#9b9488" />
      <rect x="356" y="451" width="88" height="11" fill="#8d877b" />

      {/* Shrubs */}
      <g fill="#3d5c44">
        <ellipse cx="226" cy="440" rx="34" ry="18" />
        <ellipse cx="574" cy="440" rx="34" ry="18" />
        <ellipse cx="318" cy="444" rx="22" ry="11" fill="#4a6b50" />
        <ellipse cx="482" cy="444" rx="22" ry="11" fill="#4a6b50" />
      </g>
    </svg>
  );
}
