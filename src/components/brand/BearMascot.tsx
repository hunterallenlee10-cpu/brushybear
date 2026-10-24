import Image, { type StaticImageData } from "next/image";
import bearBrush from "@/assets/brand/bear-brush.png";
import bearRollerShoulder from "@/assets/brand/bear-roller-shoulder.png";
import bearLadder from "@/assets/brand/bear-ladder.png";
import bearRollerUp from "@/assets/brand/bear-roller-up.png";
import bearSleeping from "@/assets/brand/bear-sleeping.png";
import bearThumbsUp from "@/assets/brand/bear-thumbs-up.png";
import bearUmbrella from "@/assets/brand/bear-umbrella.png";
import bearWave from "@/assets/brand/bear-wave.png";

/**
 * The gold bear. brush / roller-up / roller-shoulder are cut from the logo
 * files; wave, thumbs-up, ladder, umbrella and sleeping were made with
 * Higgsfield using the logo bear as the reference (see AI_ASSETS.md).
 */
const POSES = {
  brush: bearBrush,
  "roller-up": bearRollerUp,
  "roller-shoulder": bearRollerShoulder,
  wave: bearWave,
  "thumbs-up": bearThumbsUp,
  ladder: bearLadder,
  umbrella: bearUmbrella,
  sleeping: bearSleeping,
} satisfies Record<string, StaticImageData>;

export type BearPose = keyof typeof POSES;
export const BEAR_POSES = Object.keys(POSES) as BearPose[];

type Props = {
  pose?: BearPose;
  /** Decorative by default; pass alt text only when the bear carries meaning. */
  alt?: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

export function BearMascot({ pose = "brush", alt = "", sizes, className, preload }: Props) {
  return <Image src={POSES[pose]} alt={alt} sizes={sizes} className={className} preload={preload} />;
}
