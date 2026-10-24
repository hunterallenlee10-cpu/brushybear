import Image, { type StaticImageData } from "next/image";
import bearBrush from "@/assets/brand/bear-brush.png";
import bearRollerShoulder from "@/assets/brand/bear-roller-shoulder.png";
import bearRollerUp from "@/assets/brand/bear-roller-up.png";

/**
 * The gold bear from the master logo files. More poses (waving, thumbs up,
 * ladder, umbrella, sleeping) arrive with the Higgsfield batch in Phase 7.
 */
const POSES = {
  brush: bearBrush,
  "roller-up": bearRollerUp,
  "roller-shoulder": bearRollerShoulder,
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
