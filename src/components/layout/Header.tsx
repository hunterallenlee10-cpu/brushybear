import Image from "next/image";
import Link from "next/link";
import { BearMascot } from "@/components/brand/BearMascot";
import { Wordmark } from "@/components/brand/Logo";
import { MegaMenu, type MegaEntry } from "@/components/layout/MegaMenu";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SCENES } from "@/components/media/SceneImage";
import { ServiceAreaMap } from "@/components/sections/ServiceAreaMap";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ArrowIcon } from "@/components/ui/Icons";
import { estimateHref } from "@/config/pages";
import { mainNav, type MenuGroup } from "@/data/navigation";
import { PROMISES } from "@/data/promises";

const QUOTE_PROMISE = PROMISES.find((p) => p.id === "estimate-24h")!;

const ALL_LINK = "inline-flex min-h-11 items-center gap-2 font-extrabold text-forest underline decoration-gold decoration-[3px] underline-offset-[6px] hover:decoration-forest";

function ServicesPanel({ group }: { group: MenuGroup }) {
  return (
    <div className="grid grid-cols-[repeat(4,minmax(0,1fr))_15rem] gap-6">
      {group.links.map((l) => {
        const scene = l.scene ? SCENES[l.scene] : undefined;
        return (
          <Link key={l.href} href={l.href} className="group rounded-2xl p-2 -m-2 hover:bg-pale/50">
            <span className="relative block aspect-[3/2] overflow-hidden rounded-xl bg-pale">
              {scene && <Image src={scene.src} alt="" fill sizes="220px" className="object-cover transition-transform duration-500 ease-paint group-hover:scale-[1.04]" />}
            </span>
            <span className="mt-3 block font-extrabold text-forest">{l.label}</span>
            {l.note && <span className="mt-1 block text-sm leading-snug text-charcoal-soft">{l.note}</span>}
          </Link>
        );
      })}
      <div className="flex flex-col justify-between rounded-2xl bg-forest p-5 text-cream">
        <p className="font-display text-2xl leading-tight">{QUOTE_PROMISE.title}.</p>
        <p className="mt-2 text-sm text-cream/90">{QUOTE_PROMISE.body}</p>
        <Link href={group.href} className="mt-4 inline-flex min-h-11 items-center gap-2 font-extrabold text-gold">
          {group.allLabel} <ArrowIcon className="size-4" />
        </Link>
      </div>
    </div>
  );
}

function ListPanel({ group, aside }: { group: MenuGroup; aside: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-10">
      <div>
        <ul className="grid grid-cols-3 gap-x-6 gap-y-2">
          {group.links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="block rounded-xl px-3 py-3 -mx-3 hover:bg-pale/50">
                <span className="block font-extrabold text-forest">{l.label}</span>
                {l.note && <span className="mt-0.5 block text-sm text-charcoal-soft">{l.note}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={group.href} className={`${ALL_LINK} mt-4`}>
          {group.allLabel} <ArrowIcon className="size-4" />
        </Link>
      </div>
      {aside}
    </div>
  );
}

/**
 * Utility bar, then the sticky header: logo, mega menu, estimate button.
 * Phones get the menu button and the bottom action bar instead.
 */
export function Header() {
  const nav = mainNav();
  const megaEntries: MegaEntry[] = nav.map((entry) => {
    if (entry.kind === "link") return { label: entry.label, href: entry.href };
    const panel =
      entry.label === "Services" ? (
        <ServicesPanel group={entry} />
      ) : entry.label === "Service Areas" ? (
        <ListPanel
          group={entry}
          aside={
            <div className="w-40">
              <ServiceAreaMap />
            </div>
          }
        />
      ) : (
        <ListPanel group={entry} aside={<BearMascot pose="thumbs-up" sizes="144px" className="h-auto w-36" />} />
      );
    return { label: entry.label, href: entry.href, panel };
  });

  return (
    <>
      <UtilityBar />
      <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-8">
          <Link href="/" className="shrink-0 rounded-lg">
            <Wordmark className="h-10 w-auto md:h-12" />
          </Link>

          <MegaMenu entries={megaEntries} />

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ButtonLink href={estimateHref()} event="estimate_cta" location="header" className="min-h-11 px-5">
                Get a Free Estimate
              </ButtonLink>
            </div>
            <MobileMenu entries={nav} estimateHref={estimateHref()} />
          </div>
        </div>
      </header>
    </>
  );
}
