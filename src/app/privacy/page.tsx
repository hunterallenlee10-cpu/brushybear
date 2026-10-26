import { PageHeader } from "@/components/layout/PageHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConfirmBadge } from "@/components/ui/ConfirmBadge";
import { Fill } from "@/components/ui/Fill";
import { PAGES } from "@/config/pages";
import { formatDate, SITE } from "@/config/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Brushy Bear Painters collects, uses and protects the details you send with an estimate request, including photos, text messages and analytics.",
  path: PAGES.privacy.path,
});

const EFFECTIVE = "2026-10-24";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-display-md text-ink">{children}</h2>;
}

export default function PrivacyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: PAGES.privacy.path },
  ];
  return (
    <>
      <PageHeader crumbs={crumbs} eyebrow="Privacy" title="Privacy policy">
        <p className="mt-6 text-sm font-semibold text-ink-soft">
          Effective {formatDate(EFFECTIVE)}
          <ConfirmBadge note="Hunter: have the business attorney review this policy before launch" />
        </p>
      </PageHeader>
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <div className="max-w-3xl space-y-4 text-lg">
          <p>
            {SITE.name} (&ldquo;we&rdquo;) is a residential painting company in {SITE.stateName}. This policy explains what we
            collect when you use this website, why, and the choices you have. We don&apos;t sell your personal information.
          </p>

          <H2>What we collect</H2>
          <ul className="list-disc space-y-2 pl-6 marker:text-gold">
            <li>
              <strong>What you send us:</strong> your name, phone number, email, home address or ZIP code, what you want
              painted, and any timeline, notes or home-age answer you choose to add.
            </li>
            <li>
              <strong>Photos you upload</strong> with an estimate request.
            </li>
            <li>
              <strong>Basic visit data:</strong> pages viewed, the site that sent you, campaign tags in the link (like
              utm_source), and device type. We use privacy-friendly analytics that don&apos;t use cookies to track you across
              other websites.
            </li>
          </ul>

          <H2>How we use it</H2>
          <p>
            To reply to your request, schedule a walkthrough, prepare and follow up on your quote, do the work, and improve
            this website. If you ticked the texting box, we also text you about your estimate and job.
          </p>

          <H2>Text messages</H2>
          <p>
            We only text you about your estimate and project, and only if you agreed. Message frequency varies. Message and
            data rates may apply. Reply <strong>STOP</strong> to opt out at any time, or <strong>HELP</strong> for help.
            Agreeing to texts is never required to get an estimate. We never share your mobile number or texting consent
            with third parties or affiliates for their marketing.
          </p>

          <H2>Who we share it with</H2>
          <p>
            Only the service providers that help us run the business, and only for that purpose: website hosting and file
            storage (Vercel), the tools that route your request to us and send texts and emails, our scheduling and
            invoicing software, and our accountant when needed for payment records. We may also share information if the
            law requires it.
          </p>

          <H2>Photos</H2>
          <p>
            Photos you upload are stored with Vercel Blob at a long, random web address that isn&apos;t listed or linked
            anywhere. We use them to prepare for your walkthrough. Ask us and we&apos;ll delete them.
          </p>

          <H2>How long we keep it</H2>
          <p>
            We keep estimate requests and job records as long as needed to serve you, stand behind our work, and
            meet tax and business record rules. Ask us to delete your information and we will, unless we&apos;re required
            to keep it.
          </p>

          <H2>Your choices</H2>
          <p>
            You can ask what we have about you, ask us to correct it, or ask us to delete it. Email{" "}
            <Fill value={SITE.email} /> or call <Fill value={SITE.phone} />.
          </p>

          <H2>Children</H2>
          <p>This website is for adults hiring a painter. We don&apos;t knowingly collect information from children under 13.</p>

          <H2>Changes</H2>
          <p>If we change this policy, we&apos;ll update the date at the top of this page.</p>
        </div>
      </div>
      <JsonLd items={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
