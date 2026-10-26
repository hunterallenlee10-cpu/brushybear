/** Small inline icons (no icon font, no extra requests). Decorative. */
type P = { className?: string };

export const PhoneIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
  </svg>
);

export const TextIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1.2-4.4A8 8 0 1 1 21 12Z" />
    <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
  </svg>
);

export const BrushIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M14.5 3.5 20.5 9.5 12 18H6v-6l8.5-8.5Z" />
    <path d="M6 18c0 1.7-1.3 3-3 3 .3-1.2 0-2 0-3" />
  </svg>
);

export const MenuIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const S = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const CaretIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth={2.4} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth={2.4} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth={2.6} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);

export const ClipboardIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4V3h6v1M9 11h6M9 15h4" />
  </svg>
);

export const PaletteIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.7-.9 1.4-1.9-.4-1.2.5-2.1 1.7-2.1H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10Z" />
    <circle cx="7.5" cy="11" r="1" />
    <circle cx="10.5" cy="7" r="1" />
    <circle cx="15" cy="7.5" r="1" />
  </svg>
);

export const RollerIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <rect x="3" y="3" width="15" height="6" rx="1.5" />
    <path d="M18 6h2v5h-8v3M12 14v7" />
  </svg>
);

export const ShieldIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ClockIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CameraIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

export const BroomIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M19 3 12 10M8.5 10.5l5 5M4 21c1-4 2.5-7 4.5-10.5l5 5C10 17.5 7.5 19.5 4 21Z" />
  </svg>
);

export const PersonIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c1-4 4-6 8-6s7 2 8 6" />
  </svg>
);

export const PinIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const CalendarIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 10h16M9 3v4M15 3v4" />
  </svg>
);

export const RainIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M7 15a4 4 0 0 1-.5-8A5.5 5.5 0 0 1 17 7.5a3.8 3.8 0 0 1 .5 7.5H7Z" />
    <path d="M8 18l-1 2.5M12 18l-1 2.5M16 18l-1 2.5" />
  </svg>
);

export const MailIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const ChevronLeftIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth={2.6} className={className}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const ChevronRightIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" {...S} strokeWidth={2.6} className={className}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const BoltIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />
  </svg>
);

export const BuildingIcon = ({ className = "size-6" }: P) => (
  <svg viewBox="0 0 24 24" {...S} className={className}>
    <path d="M4 21V5l8-2v18M12 8h8v13M8 8h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01M2 21h20" />
  </svg>
);
