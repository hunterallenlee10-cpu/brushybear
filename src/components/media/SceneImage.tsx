import Image, { type StaticImageData } from "next/image";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { hasServiceArt, ServiceArt } from "@/components/media/ServiceArt";
import sceneCabinets from "@/assets/media/scene-cabinets.jpg";
import sceneCommercial from "@/assets/media/scene-commercial.jpg";
import sceneCustom from "@/assets/media/scene-custom.jpg";
import sceneDrywall from "@/assets/media/scene-drywall.jpg";
import sceneHoa from "@/assets/media/scene-hoa.jpg";
import sceneMillwork from "@/assets/media/scene-millwork.jpg";
import sceneDeck from "@/assets/media/scene-deck.jpg";
import sceneExterior from "@/assets/media/scene-exterior.jpg";
import sceneInterior from "@/assets/media/scene-interior.jpg";
import sceneRainyStreet from "@/assets/media/scene-rainy-street.jpg";

/**
 * Mood images for services and sections (Higgsfield, Phase 7). These are
 * illustrations of the kind of work, never captioned as our jobs. Until a
 * scene exists, a drawn brand illustration (or a labeled placeholder) holds
 * its space.
 */
export const SCENES: Record<string, { src: StaticImageData; alt: string } | undefined> = {
  "interior-painting": {
    src: sceneInterior,
    alt: "Illustration: a bright mid-century living room with cream walls, white trim and a deep green accent wall",
  },
  "exterior-painting": {
    src: sceneExterior,
    alt: "Illustration: a two-story cedar-sided house among tall firs, sun breaking through after rain",
  },
  "cabinet-painting": {
    src: sceneCabinets,
    alt: "Illustration: a kitchen with forest-green painted lower cabinets, cream uppers and brass pulls",
  },
  "decks-and-fences-painting": {
    src: sceneDeck,
    alt: "Illustration: a freshly stained cedar deck and fence at golden hour, surrounded by evergreens",
  },
  "commercial-painting": {
    src: sceneCommercial,
    alt: "Illustration: a two-story office and storefront building painted pine green and white, wet street after rain",
  },
  "custom-painting": {
    src: sceneCustom,
    alt: "Illustration: a home office with a two-tone green and white wall and a sage limewash alcove",
  },
  "millwork-painting": {
    src: sceneMillwork,
    alt: "Illustration: a craftsman entry with white wainscoting, crown molding and a painted stair railing",
  },
  "drywall-painting": {
    src: sceneDrywall,
    alt: "Illustration: a living room wall with patched drywall seams, primer spots, a ladder and a roller tray",
  },
  "hoa-painting": {
    src: sceneHoa,
    alt: "Illustration: a row of townhomes repainted in slate blue and warm gray with white trim",
  },
  "rainy-street": {
    src: sceneRainyStreet,
    alt: "Illustration: a rainy Eastside street at dusk, with weathered paint and moss on the houses",
  },
};

const LABELS: Record<string, string> = {
  "interior-painting": "Interior scene coming",
  "exterior-painting": "Exterior scene coming",
  "cabinet-painting": "Kitchen scene coming",
  "decks-and-fences-painting": "Deck scene coming",
};

type Ratio = "16/9" | "4/3" | "3/2" | "1/1";

export function SceneImage({ scene, ratio = "3/2", sizes = "(min-width: 1024px) 600px, 100vw", preload }: { scene: string; ratio?: Ratio; sizes?: string; preload?: boolean }) {
  const img = SCENES[scene];
  if (!img) {
    if (hasServiceArt(scene)) return <ServiceArt slug={scene} ratio={ratio} />;
    return <PlaceholderImage label={LABELS[scene] ?? "Image coming"} ratio={ratio} />;
  }
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)]" style={{ aspectRatio: ratio }}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" preload={preload} />
      {/* Honesty: AI scenes are labeled, so nobody mistakes them for our jobs. */}
      <span className="absolute right-2 bottom-2 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs font-semibold text-white">Illustration</span>
    </div>
  );
}
