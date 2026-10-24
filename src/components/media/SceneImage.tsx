import Image, { type StaticImageData } from "next/image";
import { PlaceholderImage } from "@/components/media/PlaceholderImage";
import { hasServiceArt, ServiceArt } from "@/components/media/ServiceArt";
import sceneCabinets from "@/assets/media/scene-cabinets.jpg";
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
  "deck-and-fence-staining": {
    src: sceneDeck,
    alt: "Illustration: a freshly stained cedar deck and fence at golden hour, surrounded by evergreens",
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
  "deck-and-fence-staining": "Deck scene coming",
};

type Ratio = "16/9" | "4/3" | "3/2" | "1/1";

export function SceneImage({ scene, ratio = "3/2", sizes = "(min-width: 1024px) 600px, 100vw", preload }: { scene: string; ratio?: Ratio; sizes?: string; preload?: boolean }) {
  const img = SCENES[scene];
  if (!img) {
    if (hasServiceArt(scene)) return <ServiceArt slug={scene} ratio={ratio} />;
    return <PlaceholderImage label={LABELS[scene] ?? "Image coming"} ratio={ratio} />;
  }
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-sticker)]" style={{ aspectRatio: ratio }}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} className="object-cover" preload={preload} />
      {/* Honesty: AI scenes are labeled, so nobody mistakes them for our jobs. */}
      <span className="absolute right-2 bottom-2 rounded-full bg-charcoal/75 px-2.5 py-0.5 text-xs font-bold text-cream">Illustration</span>
    </div>
  );
}
