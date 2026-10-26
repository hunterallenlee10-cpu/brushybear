import type { Metadata } from "next";
import Image from "next/image";
import brushGreen from "@/assets/media/brush-green.png";
import { BearMascot } from "@/components/brand/BearMascot";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { estimateHref, PAGES } from "@/config/pages";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${SITE.name}` },
  robots: { index: false, follow: true },
};

/** Light bear humor is allowed here (and only in microcopy like this). */
export default function NotFound() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1.2fr] md:px-8 md:py-24">
      <div className="relative isolate mx-auto w-56 md:w-full md:max-w-xs">
        <Image src={brushGreen} alt="" sizes="360px" className="absolute top-1/2 left-1/2 -z-10 w-[125%] max-w-none -translate-x-1/2 -translate-y-1/3 -rotate-6 opacity-90" />
        <BearMascot pose="sleeping" sizes="(min-width: 768px) 320px, 224px" className="h-auto w-full" />
      </div>
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-pine">Error 404</p>
        <h1 className="mt-3 text-display-lg text-ink">This page wandered off into the woods.</h1>
        <p className="mt-4 max-w-md text-lg">
          The link may be old, or the page moved. Let&apos;s get you somewhere useful.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href={estimateHref()} event="estimate_cta" location="404">
            Get a Free Estimate
          </ButtonLink>
          <ButtonLink href={PAGES.services.live ? PAGES.services.path : "/"} variant="secondary">
            {PAGES.services.live ? "See our services" : "Back to home"}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
