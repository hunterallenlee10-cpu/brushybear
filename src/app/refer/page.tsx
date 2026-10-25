import { BearMascot } from "@/components/brand/BearMascot";
import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { CopyLink } from "@/components/ui/CopyLink";
import { Fill } from "@/components/ui/Fill";
import { GiftIcon } from "@/components/ui/Icons";
import { estimateHref, PAGES } from "@/config/pages";
import { SITE } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Refer a Neighbor, Get a Thank-You",
  description:
    "Know an Eastside neighbor who needs a painter? Send them to Brushy Bear Painters. When their job is finished, we send you a thank-you reward. Here's how.",
  path: PAGES.refer.path,
});

const TERMS = "Hunter and Erik: confirm the reward, when it's paid and these terms";

/** Refer & Earn: how it works, with the reward amount as a placeholder. */
export default function ReferPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Refer & Earn", path: PAGES.refer.path },
  ];
  const steps = [
    { title: "Tell a neighbor", body: "Send them our link, or just our name. Works for any service and any of our five cities." },
    { title: "They ask for an estimate", body: "In the form's notes, they write your name so we know who sent them." },
    {
      title: "Their job finishes, you get a thank-you",
      body: (
        <>
          Once their job is done and paid, we send you <Fill value={SITE.referralReward} />.
        </>
      ),
    },
  ];
  return (
    <>
      <PageHeader
        crumbs={crumbs}
        title={`Refer a neighbor for ${SITE.regionName} house painting`}
        intro={["The best jobs come from neighbors who already know how we work. If you send someone our way, we say thanks properly."]}
        aside={
          <div className="mx-auto hidden w-56 lg:block">
            <BearMascot pose="wave" sizes="224px" className="h-auto w-full" />
          </div>
        }
      />
      <section aria-label="How referrals work" className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[1.5rem] border-2 border-cream-200 bg-cream-50 p-6">
              <span className="flex size-11 items-center justify-center rounded-full border-2 border-charcoal bg-gold font-display text-xl text-charcoal">{i + 1}</span>
              <h2 className="mt-4 text-xl font-extrabold text-forest">{s.title}</h2>
              <p className="mt-2">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <CopyLink path={estimateHref()} label="Copy our estimate link" />
        </div>
        <div className="mt-10 max-w-3xl rounded-[1.5rem] bg-pale/60 p-6">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-forest">
            <GiftIcon /> The fine print
            <ConfirmBadge note={TERMS} />
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>One thank-you per new customer, paid after their job is finished and paid.</li>
            <li>They need to be a new customer and live in our service area.</li>
            <li>No limit on how many neighbors you send.</li>
          </ul>
        </div>
      </section>
      <CtaBlock source="refer" title="Ready for your own estimate?" />
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
