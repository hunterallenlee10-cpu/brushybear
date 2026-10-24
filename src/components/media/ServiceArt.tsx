/**
 * Flat brand illustrations for each service (inline SVG, no download).
 * Used until the Higgsfield scene images exist; never presented as a photo
 * of our work.
 */
const F = "#1f4d3a";
const FD = "#163829";
const FS = "#2f6a50";
const CR = "#f4ede1";
const G = "#e9a93b";
const K = "#2b2b2b";

function Interior() {
  return (
    <>
      <rect width="300" height="200" fill={FS} />
      <rect x="0" y="0" width="300" height="150" fill={CR} />
      <path d="M0 0h168v150H0Z" fill="#e6dac6" />
      <path d="M120 0h60v150h-60Z" fill={G} opacity="0.9" />
      <rect x="0" y="150" width="300" height="50" fill="#b98c5a" />
      <g stroke="#a47a4b" strokeWidth="2">
        {[170, 182, 194].map((y) => (
          <line key={y} x1="0" x2="300" y1={y} y2={y} />
        ))}
      </g>
      <rect x="0" y="146" width="300" height="8" fill={CR} stroke={K} strokeWidth="2" />
      {/* Roller on a pole */}
      <g stroke={K} strokeWidth="3" strokeLinejoin="round">
        <rect x="196" y="40" width="54" height="22" rx="10" fill={G} />
        <path d="M223 62v14l-30 30" fill="none" />
        <line x1="193" y1="106" x2="150" y2="190" strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* Paint tray */}
      <path d="M210 168l56-6 14 16-60 8Z" fill="#cfd5d0" stroke={K} strokeWidth="3" strokeLinejoin="round" />
      <path d="M222 170l40-4 8 9-42 5Z" fill={G} />
    </>
  );
}

function Exterior() {
  return (
    <>
      <rect width="300" height="200" fill="#d9d8c8" />
      <circle cx="250" cy="34" r="60" fill={G} opacity="0.35" />
      <path d="M0 150c60-14 120-10 300-4v54H0Z" fill="#5b8a6d" />
      {[24, 52, 270].map((x, i) => (
        <path key={x} d={`M${x} ${40 + i * 6}l20 52h-40Z M${x} ${70 + i * 6}l26 60h-52Z`} fill={i === 1 ? FD : F} />
      ))}
      <g stroke={K} strokeWidth="3" strokeLinejoin="round">
        <rect x="88" y="96" width="132" height="64" fill={CR} />
        <path d="M78 100l76-50 76 50Z" fill={K} />
        <path d="M110 98l44-29 44 29Z" fill={F} />
        <rect x="104" y="112" width="28" height="20" fill="#f6d68f" stroke={F} strokeWidth="3" />
        <rect x="176" y="112" width="28" height="20" fill="#f6d68f" stroke={F} strokeWidth="3" />
        <rect x="143" y="122" width="22" height="38" fill={G} />
      </g>
      {/* Ladder */}
      <g stroke={K} strokeWidth="3" strokeLinecap="round">
        <line x1="236" y1="190" x2="214" y2="86" />
        <line x1="254" y1="190" x2="232" y2="86" />
        {[100, 120, 140, 160, 180].map((y) => (
          <line key={y} x1={233 - (190 - y) * 0.2} x2={251 - (190 - y) * 0.2} y1={y} y2={y} />
        ))}
      </g>
    </>
  );
}

function Cabinets() {
  const door = (x: number, y: number, w: number, h: number, painted: boolean) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={w} height={h} rx="3" fill={painted ? F : "#c99a62"} stroke={K} strokeWidth="3" />
      <rect x={x + 7} y={y + 7} width={w - 14} height={h - 14} rx="2" fill="none" stroke={painted ? FD : "#a87b47"} strokeWidth="3" />
      <rect x={x + w - 14} y={y + h / 2 - 8} width="4" height="16" rx="2" fill={G} />
    </g>
  );
  return (
    <>
      <rect width="300" height="200" fill={CR} />
      <rect x="0" y="0" width="300" height="72" fill="#e6dac6" />
      {[18, 84, 150].map((x, i) => door(x, 10, 60, 56, i < 2))}
      <rect x="0" y="106" width="300" height="12" fill="#ddd2bd" stroke={K} strokeWidth="3" />
      {[18, 84, 150, 216].map((x, i) => door(x, 122, 60, 64, i !== 2))}
      {/* Paint brush mid-stroke on the unpainted door */}
      <g stroke={K} strokeWidth="3" strokeLinejoin="round">
        <rect x="226" y="30" width="22" height="30" rx="2" transform="rotate(30 237 45)" fill={G} />
        <rect x="236" y="56" width="10" height="44" rx="4" transform="rotate(30 241 78)" fill="#8a5a33" />
      </g>
      <path d="M152 72c4 10 2 16-2 22" stroke={F} strokeWidth="6" strokeLinecap="round" fill="none" />
    </>
  );
}

function Deck() {
  return (
    <>
      <rect width="300" height="200" fill="#d9d8c8" />
      <circle cx="60" cy="30" r="70" fill={G} opacity="0.35" />
      {/* Fence */}
      {Array.from({ length: 13 }, (_, i) => (
        <path key={i} d={`M${i * 24 + 2} 120V52l10-10 10 10v68Z`} fill={i < 7 ? "#8a5a33" : "#c99a62"} stroke={K} strokeWidth="2.5" strokeLinejoin="round" />
      ))}
      <rect x="0" y="66" width="300" height="8" fill="#6f4a2b" />
      <rect x="0" y="100" width="300" height="8" fill="#6f4a2b" />
      {/* Deck boards in perspective */}
      <path d="M0 128h300v72H0Z" fill="#9b6b3e" />
      <g stroke="#6f4a2b" strokeWidth="2.5">
        {[140, 154, 170, 188].map((y) => (
          <line key={y} x1="0" x2="300" y1={y} y2={y} />
        ))}
      </g>
      <path d="M0 128h150v72H0Z" fill="#7a4f2c" opacity="0.55" />
      {/* Stain can */}
      <g stroke={K} strokeWidth="3" strokeLinejoin="round">
        <rect x="214" y="136" width="44" height="46" rx="4" fill={F} />
        <ellipse cx="236" cy="136" rx="22" ry="6" fill={G} />
        <rect x="222" y="150" width="28" height="16" fill={CR} stroke="none" />
      </g>
    </>
  );
}

const ART: Record<string, () => React.JSX.Element> = {
  "interior-painting": Interior,
  "exterior-painting": Exterior,
  "cabinet-painting": Cabinets,
  "deck-and-fence-staining": Deck,
};

export const hasServiceArt = (slug: string) => slug in ART;

export function ServiceArt({ slug, ratio = "3/2" }: { slug: string; ratio?: string }) {
  const Art = ART[slug];
  if (!Art) return null;
  return (
    <div className="sticker [--sticker-pad:0.375rem]">
      <div className="sticker-inner overflow-hidden" style={{ aspectRatio: ratio }}>
        <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="block h-full w-full" aria-hidden="true">
          <Art />
        </svg>
      </div>
    </div>
  );
}
