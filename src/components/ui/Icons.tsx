import type { Icon as PhosphorIcon } from "@phosphor-icons/react/dist/lib/types";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { Broom } from "@phosphor-icons/react/dist/ssr/Broom";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr/CalendarCheck";
import { Camera } from "@phosphor-icons/react/dist/ssr/Camera";
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown";
import { ChatCircleDots } from "@phosphor-icons/react/dist/ssr/ChatCircleDots";
import { Check } from "@phosphor-icons/react/dist/ssr/Check";
import { ClockCountdown } from "@phosphor-icons/react/dist/ssr/ClockCountdown";
import { CloudRain } from "@phosphor-icons/react/dist/ssr/CloudRain";
import { Envelope } from "@phosphor-icons/react/dist/ssr/Envelope";
import { HandWaving } from "@phosphor-icons/react/dist/ssr/HandWaving";
import { List } from "@phosphor-icons/react/dist/ssr/List";
import { MapPin } from "@phosphor-icons/react/dist/ssr/MapPin";
import { PaintBrush } from "@phosphor-icons/react/dist/ssr/PaintBrush";
import { PaintRoller } from "@phosphor-icons/react/dist/ssr/PaintRoller";
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone";
import { ShieldCheck } from "@phosphor-icons/react/dist/ssr/ShieldCheck";
import { Star } from "@phosphor-icons/react/dist/ssr/Star";
import { UploadSimple } from "@phosphor-icons/react/dist/ssr/UploadSimple";
import { UserCircle } from "@phosphor-icons/react/dist/ssr/UserCircle";
import { X } from "@phosphor-icons/react/dist/ssr/X";

/**
 * One icon family (Phosphor, bold weight) for the whole site. Imported icon
 * by icon so only what's used ships. Decorative: always aria-hidden.
 */
type P = { className?: string };

const make = (Icon: PhosphorIcon, fallback = "size-5") => {
  const Wrapped = ({ className = fallback }: P) => <Icon weight="bold" className={className} aria-hidden="true" focusable="false" />;
  Wrapped.displayName = Icon.displayName;
  return Wrapped;
};

export const PhoneIcon = make(Phone);
export const TextIcon = make(ChatCircleDots);
export const MailIcon = make(Envelope);
export const BrushIcon = make(PaintBrush);
export const RollerIcon = make(PaintRoller);
export const MenuIcon = make(List, "size-6");
export const CloseIcon = make(X, "size-6");
export const CaretIcon = make(CaretDown, "size-4");
export const ArrowIcon = make(ArrowRight);
export const CheckIcon = make(Check);
export const CameraIcon = make(Camera);
export const ClockIcon = make(ClockCountdown);
export const RainIcon = make(CloudRain);
export const BroomIcon = make(Broom);
export const CalendarIcon = make(CalendarCheck);
export const ShieldIcon = make(ShieldCheck);
export const StarIcon = make(Star);
export const UploadIcon = make(UploadSimple);
export const PersonIcon = make(UserCircle);
export const PinIcon = make(MapPin);
export const WaveIcon = make(HandWaving);
