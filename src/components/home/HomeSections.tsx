import Image from "next/image";
import Link from "next/link";
import type { ComponentType } from "react";
import bearRoller from "@/assets/brand/bear-roller-shoulder.png";
import { ArticleCard } from "@/components/home/ArticleCard";
import { AreaMap } from "@/components/home/AreaMap";
import { QuoteCard } from "@/components/estimate/QuoteCard";
import { SceneImage } from "@/components/media/SceneImage";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import {
  BoltIcon,
  BroomIcon,
  BuildingIcon,
  CalendarIcon,
  CameraIcon,
  ClipboardIcon,
  PaletteIcon,
  PersonIcon,
  PinIcon,
  RollerIcon,
  ShieldIcon,
} from "@/components/ui/Icons";
import { Pill } from "@/components/ui/Pill";
import { Title } from "@/components/ui/Title";
import { cityPath, PAGES, servicePath } from "@/config/pages";
import { SITE } from "@/config/site";
import { ARTICLES } from "@/data/articles";
import { publishedCities } from "@/data/cities";
import { ABOUT_BAND, DIFFERENCE, DREAM_HOME_CTA, GET_STARTED, LOCAL_SERVICES, SERVICE_AREA, WHY_US } from "@/data/home";
import { PROCESS } from "@/data/process";
import { servicePageList } from "@/data/service-pages";
import { isSet } from "@/lib/placeholders";

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  clipboard: ClipboardIcon,
  camera: CameraIcon,
  broom: BroomIcon,
  pin: PinIcon,
  shield: ShieldIcon,
  person: PersonIcon,
  calendar: CalendarIcon,
  palette: PaletteIcon,
  roller: RollerIcon,
  bolt: BoltIcon,
  building: BuildingIcon,
};

const WRAP = "mx-auto max-w-7xl px-4 md:px-8";

/** EA's "Local Painting Services" text in Panda's "About Our Team" layout, then three feature cards. */
export function LocalServices() {
  return (
    <section aria-labelledby="local-title" className="py-16 md:py-24">
      <div className={WRAP}>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <h2 id="local-title" className="text-display-lg">
              {LOCAL_SERVICES.title} <span className="block text-pine">{LOCAL_SERVICES.accent}</span>
            </h2>
            {LOCAL_SERVICES.body.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 text-lg text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-7 flex flex-wrap gap-3">
              <Pill href={PAGES.services.path} variant="pine" arrow>
                Our Services
              </Pill>
              <Pill href={PAGES.estimate.path} variant="honey">
                Free Estimate
              </Pill>
            </div>
          </div>
          <div className="relative">
            <SceneImage scene="interior-painting" ratio="4/3" sizes="(min-width: 1024px) 500px, 100vw" />
          </div>
        </div>

        <h3 className="mt-20 text-center text-display-md">{DIFFERENCE.title}</h3>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {DIFFERENCE.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title} className="rounded-[var(--radius-card)] bg-white p-7 shadow-card ring-1 ring-ink/5">
                <span className="flex size-14 items-center justify-center rounded-full bg-pine text-white">
                  <Icon className="size-7" />
                </span>
                <h4 className="mt-5 text-xl font-extrabold text-pine">
                  {item.title}
                  <ConfirmBadge note={item.confirm} />
                </h4>
                <p className="mt-2 text-ink-soft">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/** Panda's "Our Services": photo cards with a big title over the image and a pill link. */
export function ServiceCards({ heading = true }: { heading?: boolean }) {
  const list = servicePageList();
  return (
    <section aria-labelledby={heading ? "services-title" : undefined} className="py-16 md:py-24">
      <div className={WRAP}>
        {heading && (
          <Title
            id="services-title"
            eyebrow="Our services"
            title="Eastside & Seattle"
            accent="Interior and Exterior Painting"
            intro={<p>Nine services, one crew standard: careful prep, clean job sites and a walkthrough before we call it done.</p>}
          />
        )}
        <ul className={`${heading ? "mt-12" : ""} grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3`}>
          {list.map(({ service, page }) => (
            <li key={service.slug} className="flex flex-col">
              <Link href={servicePath(service.slug)} className="group relative block overflow-hidden rounded-[var(--radius-card)]">
                <div className="transition-transform duration-500 ease-paint group-hover:scale-[1.03]">
                  <SceneImage scene={service.slug} ratio="4/3" sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" />
                </div>
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(12_26_20/0.75)_100%)]" />
                <span aria-hidden="true" className="absolute bottom-4 left-5 text-[1.9rem] leading-none font-extrabold tracking-tight text-white drop-shadow">
                  {service.shortName}
                </span>
              </Link>
              <h3 className="mt-4 text-xl font-extrabold">
                <Link href={servicePath(service.slug)} className="hover:text-pine">
                  {service.name}
                </Link>
              </h3>
              <p className="mt-2 flex-1 text-ink-soft">{page.cardSummary}</p>
              <div className="mt-4">
                <Pill href={servicePath(service.slug)} variant="honey" size="sm">
                  Read More<span className="sr-only"> about {service.name}</span>
                </Pill>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Panda's green "Looking For a Remodeler?" band: before/after tiles. Placeholders until real job photos exist. */
export function WorkBand() {
  return (
    <section aria-labelledby="work-title" className="on-dark bg-pine py-16 text-white md:py-24">
      <div className={WRAP}>
        <Title
          id="work-title"
          dark
          title="Looking For Painters?"
          intro={<p>Before and after photos from our jobs go here as each one wraps up.</p>}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {["Exterior repaint", "Kitchen cabinets", "Living room", "Deck and fence", "Trim and millwork", "HOA townhomes"].map((label) => (
            <li key={label} className="relative overflow-hidden rounded-[var(--radius-card)] bg-pine-deep" style={{ aspectRatio: "4/3" }}>
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="bg-[repeating-linear-gradient(-45deg,rgb(255_255_255/0.06)_0_10px,transparent_10px_20px)]" />
                <div className="bg-[repeating-linear-gradient(-45deg,rgb(244_173_31/0.14)_0_10px,transparent_10px_20px)]" />
              </div>
              <span aria-hidden="true" className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/70" />
              <span aria-hidden="true" className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg font-bold text-ink">
                ↔
              </span>
              <span className="absolute top-3 left-3 rounded-full bg-ink/70 px-2.5 py-0.5 text-xs font-bold">Before</span>
              <span className="absolute top-3 right-3 rounded-full bg-honey px-2.5 py-0.5 text-xs font-bold text-ink">After</span>
              <span className="absolute inset-x-3 bottom-3 rounded-xl bg-ink/70 px-3 py-2 text-center text-sm font-semibold">
                {label}: photo coming
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Pill href={PAGES.gallery.path} variant="honey">
            View Our Portfolio
          </Pill>
        </div>
      </div>
    </section>
  );
}

/** EA's "How do we make it work?": four numbered steps on a line. */
export function ProcessSteps() {
  const icons = [ClipboardIcon, PaletteIcon, RollerIcon, ShieldIcon];
  return (
    <section aria-labelledby="process-title" className="bg-mist py-16 md:py-24">
      <div className={WRAP}>
        <Title id="process-title" title="How do we make it work?" intro={<p>Starting your painting project with us is easy. Our four-step process is simple to follow.</p>} />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-line md:block" />
          {PROCESS.map((step, i) => {
            const Icon = icons[i];
            return (
              <li key={step.title} className="relative text-center">
                <span className="relative mx-auto flex size-14 items-center justify-center rounded-full bg-pine text-lg font-extrabold text-white ring-8 ring-mist">
                  {i + 1}
                </span>
                <Icon className="mx-auto mt-5 size-8 text-pine-bright" />
                <h3 className="mt-3 text-lg font-extrabold">
                  {step.title}
                  <ConfirmBadge note={step.confirm} />
                </h3>
                <p className="mx-auto mt-2 max-w-64 text-ink-soft">{step.body}</p>
              </li>
            );
          })}
        </ol>
        <div className="mt-12 text-center">
          <Pill href={PAGES.estimate.path} variant="honey" size="lg">
            Get A Free Estimate
          </Pill>
        </div>
      </div>
    </section>
  );
}

/** Panda's orange map band, in honey: map on the left, cities and two buttons on the right. */
export function AreaBand() {
  const cities = publishedCities();
  return (
    <section aria-labelledby="area-title" className="bg-honey text-ink">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-4 pt-12 md:px-8 lg:py-16">
          <AreaMap />
        </div>
        <div className="px-4 py-12 md:px-8 lg:py-20">
          <h2 id="area-title" className="text-display-lg">
            {SERVICE_AREA.title}
          </h2>
          <p className="mt-4 text-lg">{SERVICE_AREA.intro}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c.slug)} className="inline-flex min-h-9 items-center rounded-full bg-white/55 px-3.5 text-sm font-bold hover:bg-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Pill href={PAGES.estimate.path} variant="ink">
              Free Estimate
            </Pill>
            <Pill href={PAGES.areas.path} variant="white">
              View All Cities
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}

/** EA's "Why EA Pro Painters?" with its icon strip, and the "Create your dream home" call to action. */
export function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="py-16 md:py-24">
      <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]`}>
        <div>
          <p className="text-sm font-bold tracking-[0.16em] text-pine-bright uppercase">Why</p>
          <h2 id="why-title" className="mt-1 text-[clamp(2.5rem,1.6rem+3.5vw,4rem)] leading-none">
            {SITE.shortName.toUpperCase()}
            <span className="block text-pine">PAINTERS?</span>
          </h2>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">{WHY_US.intro}</p>
        </div>
        <div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {WHY_US.items.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <li key={item.label} className="flex flex-col items-center gap-2 rounded-2xl border border-line bg-white px-3 py-5 text-center">
                  <Icon className="size-8 text-pine" />
                  <span className="text-sm font-bold">
                    {item.label}
                    <ConfirmBadge note={item.confirm} />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={`${WRAP} mt-16`}>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-white md:px-12">
          <Image src={bearRoller} alt="" sizes="160px" className="absolute -bottom-2 left-6 hidden h-auto w-36 md:block lg:w-40" />
          <h2 className="text-display-lg">
            {DREAM_HOME_CTA.title}
            <span className="block text-honey">{DREAM_HOME_CTA.subtitle}</span>
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Pill href={PAGES.estimate.path} variant="honey" size="lg">
              Get A Free Estimate
            </Pill>
            <Pill href={PAGES.instantEstimate.path} variant="outline-white" size="lg">
              Instant Estimate
            </Pill>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Panda's "Limited Time Offers" row, used for honest ways to get started (no invented deals). */
export function GetStarted() {
  const cards = [
    {
      icon: BoltIcon,
      title: "Instant Estimate",
      body: "Answer a few questions and see a ballpark price range in under two minutes.",
      href: PAGES.instantEstimate.path,
      cta: "Get My Range",
    },
    {
      icon: ClipboardIcon,
      title: "Free Written Estimate",
      body: "We visit, measure and send an itemized quote within 24 hours of the walkthrough.",
      href: PAGES.estimate.path,
      cta: "Book a Walkthrough",
    },
    {
      icon: BuildingIcon,
      title: "HOA & Commercial",
      body: "Board approvals, phased schedules and work planned around your tenants or business hours.",
      href: servicePath("hoa-painting"),
      cta: "See HOA Painting",
    },
  ];
  return (
    <section aria-labelledby="start-title" className="bg-mist py-16 md:py-24">
      <div className={WRAP}>
        <Title id="start-title" eyebrow={GET_STARTED.eyebrow} title={GET_STARTED.title} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, ...c }) => (
            <li key={c.title} className="flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-card ring-1 ring-ink/5">
              <div className="flex items-center gap-4 bg-pine px-6 py-5 text-white">
                <span className="flex size-12 items-center justify-center rounded-full bg-honey text-ink">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-xl font-extrabold">{c.title}</h3>
              </div>
              <p className="flex-1 px-6 pt-5 text-ink-soft">{c.body}</p>
              <div className="px-6 pt-5 pb-6">
                <Pill href={c.href} variant="honey" size="sm" arrow>
                  {c.cta}
                </Pill>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** EA's "Updates from us!": the latest blog posts. */
export function Updates() {
  return (
    <section aria-labelledby="updates-title" className="py-16 md:py-24">
      <div className={WRAP}>
        <Title
          id="updates-title"
          title="Updates from us!"
          intro={<p>Painting tips for Northwest homes: when to paint, how rain and moss affect paint, and what to ask before you hire.</p>}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <li key={a.slug}>
              <ArticleCard article={a} index={i} />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Pill href={PAGES.articles.path} variant="outline">
            Read the Blog
          </Pill>
        </div>
      </div>
    </section>
  );
}

/** Panda's closing green "About Our Team" band with the estimate card. */
export function AboutBand({ source = "home-about" }: { source?: string }) {
  return (
    <section id="estimate" aria-labelledby="about-band-title" className="on-dark bg-pine py-16 text-white md:py-24">
      <div className={`${WRAP} grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]`}>
        <div>
          <h2 id="about-band-title" className="text-display-lg">
            {ABOUT_BAND.title}
          </h2>
          {ABOUT_BAND.body.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 text-lg text-white/90">
              {p}
            </p>
          ))}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Pill href={PAGES.about.path} variant="ink">
              Learn More About Us
            </Pill>
            {isSet(SITE.phone) && (
              <a href={`tel:${SITE.phone}`} className="font-bold underline decoration-honey decoration-2 underline-offset-4">
                Or call {SITE.phone}
              </a>
            )}
          </div>
        </div>
        <div className="mx-auto w-full max-w-lg lg:ml-auto">
          <QuoteCard source={source} title="Schedule a Free Estimate" />
        </div>
      </div>
    </section>
  );
}
