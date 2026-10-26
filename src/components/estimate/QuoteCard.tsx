"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import bearThumbsUp from "@/assets/brand/bear-thumbs-up.png";
import { CheckIcon } from "@/components/ui/Icons";
import { track } from "@/lib/analytics";
import { contactSchema, fieldErrors, SERVICE_OPTIONS, SMS_CONSENT_TEXT } from "@/lib/validation";

type Status = "idle" | "sending" | "sent" | "failed";

type Props = {
  /** Where the card sits, for analytics and the lead record. */
  source: string;
  /** A service slug to preselect (on service pages). */
  preselect?: string;
  title?: string;
  subtitle?: string;
  /** Adds a "Tell us about the project" box (the estimate page). */
  withNotes?: boolean;
  /** Shown in the failure message. */
  fallbackPhone?: string;
  /** Heading level for the card title. */
  as?: "h2" | "h3";
};

const INPUT =
  "block min-h-12 w-full rounded-full border border-transparent bg-mist px-5 py-3 text-base text-ink placeholder:text-ink-soft/80 transition-colors focus:border-pine focus:bg-white focus:outline-none aria-[invalid=true]:border-[#b3261e] aria-[invalid=true]:bg-[#fff5f4]";

/**
 * Panda-style estimate card: one short form in a white rounded card.
 * Posts to /api/estimate (same checks and spam traps as before). Errors show
 * under each field and focus moves to the first one.
 */
export function QuoteCard({
  source,
  preselect,
  title = "Free Painting Estimate",
  subtitle = "Written, itemized quote within 24 hours of your walkthrough.",
  withNotes = false,
  fallbackPhone,
  as: H = "h2",
}: Props) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const root = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);

  const pre = SERVICE_OPTIONS.find((o) => o.serviceSlug === preselect)?.value ?? "";
  const [v, setV] = useState({ first: "", last: "", email: "", phone: "", location: "", service: pre, notes: "", company: "" });
  const [smsConsent, setSmsConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onFirstTouch = () => {
    if (started.current) return;
    started.current = true;
    track("estimate_start", { source });
  };

  const set = (name: keyof typeof v) => (e: { target: { value: string } }) => setV((s) => ({ ...s, [name]: e.target.value }));

  const focusFirstError = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (first) requestAnimationFrame(() => root.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus());
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const name = `${v.first.trim()} ${v.last.trim()}`.trim();
    const services = v.service ? [v.service] : [];
    const res = contactSchema.safeParse({ name, phone: v.phone, email: v.email, location: v.location, services });
    if (!res.success) {
      const errs = fieldErrors(res.error);
      // The name rule covers both name boxes; point it at the first one.
      if (errs.name) {
        errs.first = errs.name;
        delete errs.name;
      }
      const ordered = Object.fromEntries(
        ["first", "email", "phone", "location", "services"].filter((k) => errs[k]).map((k) => [k, errs[k]]),
      );
      setErrors(ordered);
      focusFirstError(ordered);
      return;
    }
    setErrors({});
    setStatus("sending");
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]) {
      const p = params.get(key);
      if (p) utm[key] = p.slice(0, 200);
    }
    try {
      const r = await fetch("/api/estimate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          phone: v.phone,
          email: v.email,
          location: v.location,
          services,
          notes: v.notes.trim() || undefined,
          smsConsent,
          photoUrls: [],
          company: v.company,
          source,
          page: window.location.pathname,
          referrer: document.referrer.slice(0, 500) || undefined,
          utm: Object.keys(utm).length ? utm : undefined,
          startedAt: startedAt.current,
        }),
      });
      if (!r.ok) {
        const data = await r.json().catch(() => ({}));
        if (data?.fields) {
          setErrors(data.fields);
          focusFirstError(data.fields);
          setStatus("idle");
          return;
        }
        throw new Error(String(r.status));
      }
      setStatus("sent");
      track("estimate_submit", { source, services: services.join(",") });
      requestAnimationFrame(() => root.current?.querySelector<HTMLElement>("[data-success-heading]")?.focus());
    } catch {
      setStatus("failed");
      track("estimate_error", { source });
    }
  };

  const err = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
    "data-field": name,
  });

  const CARD = "rounded-[1.75rem] bg-white p-6 text-ink shadow-[0_24px_60px_-24px_rgb(12_26_20/0.45)] ring-1 ring-ink/5 md:p-8";

  if (status === "sent") {
    const first = v.first.trim();
    return (
      <div ref={root} className={CARD} data-lead-form>
        <div className="text-center">
          <Image src={bearThumbsUp} alt="" sizes="112px" className="mx-auto h-auto w-28" />
          <H data-success-heading tabIndex={-1} className="mt-4 text-2xl text-pine focus:outline-none">
            Got it{first ? `, ${first}` : ""}! Your request is in good paws.
          </H>
          <p className="mt-2 text-ink-soft">Here&apos;s what happens next:</p>
        </div>
        <ol className="mt-5 space-y-3">
          {[
            "We reach out to set up a walkthrough at a time that works for you.",
            "We visit, measure and talk colors.",
            "Your written, itemized quote arrives within 24 hours of the walkthrough.",
          ].map((t, i) => (
            <li key={t} className="flex gap-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-pine text-sm font-bold text-white">{i + 1}</span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div ref={root} className={CARD} data-lead-form>
      <div className="text-center">
        <H className="text-[1.65rem] leading-tight text-pine">{title}</H>
        <p className="mt-1.5 text-ink-soft">{subtitle}</p>
        <ul className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm font-semibold text-ink">
          {["Free", "No obligation", "Itemized"].map((t) => (
            <li key={t} className="inline-flex items-center gap-1">
              <CheckIcon className="size-4 text-pine-bright" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      <form noValidate onSubmit={submit} onFocus={onFirstTouch} className="mt-6 space-y-3">
        {/* Hidden from people; bots fill it in. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor={id("company")}>Company</label>
          <input id={id("company")} name="company" tabIndex={-1} autoComplete="off" value={v.company} onChange={set("company")} />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="First name" htmlFor={id("first")} error={errors.first} errorId={id("first-error")}>
            <input id={id("first")} name="given-name" autoComplete="given-name" placeholder="First name" className={INPUT} value={v.first} onChange={set("first")} {...err("first")} />
          </Field>
          <Field label="Last name" htmlFor={id("last")}>
            <input id={id("last")} name="family-name" autoComplete="family-name" placeholder="Last name" className={INPUT} value={v.last} onChange={set("last")} />
          </Field>
          <Field label="Email" htmlFor={id("email")} error={errors.email} errorId={id("email-error")}>
            <input id={id("email")} name="email" type="email" inputMode="email" autoComplete="email" placeholder="Email address" className={INPUT} value={v.email} onChange={set("email")} {...err("email")} />
          </Field>
          <Field label="Phone" htmlFor={id("phone")} error={errors.phone} errorId={id("phone-error")}>
            <input id={id("phone")} name="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" className={INPUT} value={v.phone} onChange={set("phone")} {...err("phone")} />
          </Field>
        </div>
        <Field label="Address" htmlFor={id("location")} error={errors.location} errorId={id("location-error")}>
          <input id={id("location")} name="street-address" autoComplete="street-address" placeholder="Address or ZIP code" className={INPUT} value={v.location} onChange={set("location")} {...err("location")} />
        </Field>
        <Field label="Project type" htmlFor={id("service")} error={errors.services} errorId={id("services-error")} visibleLabel>
          <select id={id("service")} name="service" className={`${INPUT} appearance-none bg-[length:1.1rem] bg-[right_1.1rem_center] bg-no-repeat pr-11`} style={{ backgroundImage: SELECT_CARET }} value={v.service} onChange={set("service")} {...err("services")}>
            <option value="">Select a project</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        {withNotes && (
          <Field label="Tell us about the project (optional)" htmlFor={id("notes")} visibleLabel>
            <textarea id={id("notes")} name="notes" rows={3} maxLength={1000} className={`${INPUT} rounded-2xl`} value={v.notes} onChange={set("notes")} />
          </Field>
        )}

        <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-xs leading-relaxed text-ink-soft">
          <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-pine" />
          <span>{SMS_CONSENT_TEXT}</span>
        </label>

        {status === "failed" && (
          <p role="alert" className="rounded-2xl bg-[#fdecea] px-4 py-3 text-sm font-semibold text-[#8c1d18]">
            That didn&apos;t go through. Please try again{fallbackPhone ? `, or call us at ${fallbackPhone}` : ""}.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="flex min-h-13 w-full items-center justify-center rounded-full bg-honey px-6 text-lg font-bold text-ink transition-colors hover:bg-honey-deep disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Get a Free Estimate"}
        </button>
        <p className="text-center text-xs text-ink-soft">We never sell or share your information.</p>
      </form>
    </div>
  );
}

const SELECT_CARET =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230c1a14' stroke-width='2.4' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

function Field({
  label,
  htmlFor,
  error,
  errorId,
  visibleLabel = false,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  errorId?: string;
  visibleLabel?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className={visibleLabel ? "mb-1.5 block px-1 text-sm font-bold text-ink" : "sr-only"}>
        {label}
      </label>
      {children}
      {error && (
        <p id={errorId} className="mt-1 px-2 text-sm font-semibold text-[#b3261e]">
          {error}
        </p>
      )}
    </div>
  );
}
