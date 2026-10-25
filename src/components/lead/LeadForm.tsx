"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import bearThumbsUp from "@/assets/brand/bear-thumbs-up.png";
import { BookingEmbed } from "@/components/lead/BookingEmbed";
import { CameraIcon, CheckIcon, CloseIcon, PhoneIcon } from "@/components/ui/Icons";
import { track } from "@/lib/analytics";
import {
  checkStep1,
  checkStep2,
  CONTACT_OPTIONS,
  HOME_AGE_OPTIONS,
  MAX_PHOTO_BYTES,
  MAX_PHOTOS,
  PHOTO_TYPES,
  SERVICE_OPTIONS,
  SMS_CONSENT_TEXT,
  TIMELINE_OPTIONS,
} from "@/lib/lead-rules";
import { clearPrefill, PREFILL_EVENT, readPrefill, type Prefill } from "@/lib/prefill";
import { SERVICE_ZIPS } from "@/data/service-zips";

type Status = "idle" | "sending" | "sent" | "failed";

export type LeadFormProps = {
  /** Where the form sits, for analytics and the lead record. */
  source: string;
  /** A service slug to pre-tick (on service pages). */
  preselect?: string;
  /** Business phone, if set, for the error message and the call link. */
  phone?: string;
  phoneHref?: string;
  /** True on preview builds: shows placeholder hints. */
  preview: boolean;
  /** Card heading (h2 when the card is a page's main form, h3 inside a section). */
  title?: string;
  headingLevel?: "h2" | "h3";
  /** City names for the ZIP hint, keyed by slug. */
  cityNames: Record<string, string>;
};

const INPUT =
  "block min-h-12 w-full rounded-xl border-2 border-charcoal/30 bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal-soft focus:border-forest focus:outline-none aria-[invalid=true]:border-[#b3261e]";

const PRIMARY =
  "flex min-h-13 w-full items-center justify-center gap-2 rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal transition-[transform,background-color] duration-200 ease-paint hover:bg-gold-deep active:scale-[0.98] disabled:cursor-wait disabled:opacity-70";

/**
 * The 2-step estimate form.
 * Step 1: service + ZIP (two taps and five digits).
 * Step 2: name, phone, email, address, how to reach you, optional photos.
 * Then a thank-you screen with the walkthrough booking slot.
 * Errors show under each field and focus jumps to the first one.
 */
export function LeadForm({ source, preselect, phone, phoneHref, preview, title = "Get your free estimate", headingLevel = "h2", cityNames }: LeadFormProps) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const root = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);
  const Heading = headingLevel;

  const pre = SERVICE_OPTIONS.find((o) => o.serviceSlug === preselect)?.value;
  const [step, setStep] = useState<1 | 2>(1);
  const [services, setServices] = useState<string[]>(pre ? [pre] : []);
  const [zip, setZip] = useState("");
  const [values, setValues] = useState({ name: "", phone: "", email: "", address: "", company: "" });
  const [contactMethod, setContactMethod] = useState<string>("text");
  const [smsConsent, setSmsConsent] = useState(false);
  const [timeline, setTimeline] = useState<string>();
  const [homeAge, setHomeAge] = useState<string>();
  const [notes, setNotes] = useState("");
  const [extras, setExtras] = useState<Pick<Prefill, "palette" | "ballpark">>({});
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoNote, setPhotoNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  // Set on mount (never during render, so the page can be prerendered).
  useEffect(() => {
    startedAt.current = Date.now();
    const apply = (p: Prefill) => {
      if (p.services?.length) setServices((s) => Array.from(new Set([...s, ...p.services!])));
      setExtras((e) => ({ ...e, ...(p.palette && { palette: p.palette }), ...(p.ballpark && { ballpark: p.ballpark }) }));
    };
    apply(readPrefill());
    const onPrefill = (e: Event) => apply((e as CustomEvent<Prefill>).detail);
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const onFirstTouch = () => {
    if (started.current) return;
    started.current = true;
    // In the scroll hero, keep the card's drawer open once someone starts.
    root.current?.closest("#quote-hero")?.setAttribute("data-open", "");
    track("estimate_start", { source });
  };

  const focusFirstError = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => root.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus());
  };

  const zipCity = /^\d{5}$/.test(zip) ? SERVICE_ZIPS[zip] : undefined;

  const toStep2 = (e: FormEvent) => {
    e.preventDefault();
    const errs = checkStep1({ services, zip });
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);
    setStep(2);
    track("estimate_step_2", { source });
    requestAnimationFrame(() => root.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus());
  };

  const addPhotos = (list: FileList | null) => {
    if (!list) return;
    const picked = Array.from(list).filter((f) => PHOTO_TYPES.includes(f.type) || /\.(heic|heif)$/i.test(f.name));
    const tooBig = picked.filter((f) => f.size > MAX_PHOTO_BYTES);
    const ok = picked.filter((f) => f.size <= MAX_PHOTO_BYTES);
    setPhotos([...photos, ...ok].slice(0, MAX_PHOTOS));
    setPhotoNote(
      tooBig.length
        ? `${tooBig.length} photo${tooBig.length > 1 ? "s were" : " was"} over 10 MB and skipped.`
        : picked.length < list.length
          ? "Only photos can be added."
          : photos.length + ok.length > MAX_PHOTOS
            ? `Up to ${MAX_PHOTOS} photos.`
            : "",
    );
  };

  const uploadPhotos = async (): Promise<{ urls: string[]; failed: boolean }> => {
    if (photos.length === 0) return { urls: [], failed: false };
    try {
      const { upload } = await import("@vercel/blob/client");
      const results = await Promise.all(
        photos.map((f) =>
          upload(`estimates/${f.name.replace(/[^\w.-]+/g, "-").slice(-80)}`, f, {
            access: "public",
            handleUploadUrl: "/api/upload",
            contentType: f.type || undefined,
          }),
        ),
      );
      return { urls: results.map((r) => r.url), failed: false };
    } catch {
      return { urls: [], failed: true };
    }
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = checkStep2({ ...values, contactMethod });
    setErrors(errs);
    if (Object.keys(errs).length) return focusFirstError(errs);

    setStatus("sending");
    const { urls, failed } = await uploadPhotos();
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]) {
      const v = params.get(key);
      if (v) utm[key] = v.slice(0, 200);
    }
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          services,
          zip,
          name: values.name,
          phone: values.phone,
          email: values.email,
          address: values.address,
          company: values.company,
          contactMethod,
          smsConsent,
          photoUrls: urls,
          photoUploadFailed: failed || undefined,
          timeline,
          homeAge,
          notes: notes || undefined,
          palette: extras.palette,
          ballpark: extras.ballpark,
          source,
          page: window.location.pathname,
          referrer: document.referrer.slice(0, 500) || undefined,
          utm: Object.keys(utm).length ? utm : undefined,
          startedAt: startedAt.current,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.fields) {
          setErrors(data.fields);
          if (Object.keys(data.fields).some((k) => k === "services" || k === "zip")) setStep(1);
          focusFirstError(data.fields);
          setStatus("idle");
          return;
        }
        throw new Error(String(res.status));
      }
      setFirstName(values.name.trim().split(/\s+/)[0]);
      setStatus("sent");
      track("estimate_submit", { source, services: services.join(","), photos: urls.length, contact: contactMethod });
      requestAnimationFrame(() => root.current?.querySelector<HTMLElement>("[data-success-heading]")?.focus());
    } catch {
      setStatus("failed");
      track("estimate_error", { source });
    }
  };

  const set = (name: keyof typeof values) => (e: { target: { value: string } }) => setValues((v) => ({ ...v, [name]: e.target.value }));
  const errorProps = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? id(`${name}-error`) : undefined,
    "data-field": name,
  });

  const shell = "rounded-[var(--radius-sticker)] border-2 border-charcoal bg-cream-50 p-5 text-charcoal shadow-[0_0_0_6px_#fff,0_30px_50px_-30px_rgb(22_56_41/0.7)] sm:p-7";

  if (status === "sent") {
    const contactLine =
      contactMethod === "email"
        ? "We'll email you during business hours to pick a walkthrough time."
        : contactMethod === "call"
          ? "We'll call you during business hours to pick a walkthrough time."
          : "We'll text you during business hours to pick a walkthrough time.";
    return (
      <div ref={root} className={shell} data-lead-form>
        <div className="grid items-start gap-4 sm:grid-cols-[1fr_6rem]">
          <div>
            <h3 data-success-heading tabIndex={-1} className="font-display text-display-md text-forest focus:outline-none">
              Got it{firstName ? `, ${firstName}` : ""}. Your request is in.
            </h3>
            <ol className="mt-4 space-y-2.5">
              {["We reach out to set up a walkthrough.", "We visit, measure and talk colors.", "Your written, itemized quote arrives within 24 hours of the walkthrough."].map((t, i) => (
                <li key={t} className="flex gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-extrabold text-cream">{i + 1}</span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <Image src={bearThumbsUp} alt="" sizes="96px" className="mx-auto hidden h-auto w-24 sm:block" />
        </div>
        <BookingEmbed preview={preview} contactLine={contactLine} />
      </div>
    );
  }

  return (
    <div ref={root} className={shell} data-lead-form>
      <div className="flex items-baseline justify-between gap-4">
        <Heading className="font-display text-[1.75rem] leading-tight text-forest">{title}</Heading>
        <p className="shrink-0 text-sm font-bold text-charcoal-soft">Step {step} of 2</p>
      </div>
      <div className="mt-3 flex gap-2" aria-hidden="true">
        <span className="h-1.5 flex-1 rounded-full bg-gold" />
        <span className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${step === 2 ? "bg-gold" : "bg-cream-200"}`} />
      </div>

      {step === 1 ? (
        <form noValidate onSubmit={toStep2} onFocus={onFirstTouch} className="mt-5 space-y-5">
          <fieldset aria-describedby={errors.services ? id("services-error") : undefined}>
            <legend data-step-heading tabIndex={-1} className="font-extrabold focus:outline-none">
              What are we painting?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((o, i) => (
                <Chip
                  key={o.value}
                  type="checkbox"
                  name="services"
                  label={o.label}
                  checked={services.includes(o.value)}
                  onChange={(on) => setServices((s) => (on ? [...s, o.value] : s.filter((v) => v !== o.value)))}
                  dataField={i === 0 ? "services" : undefined}
                />
              ))}
            </div>
            {errors.services && <ErrorText id={id("services-error")}>{errors.services}</ErrorText>}
          </fieldset>

          <Field label="ZIP code" htmlFor={id("zip")} error={errors.zip} errorId={id("zip-error")}>
            <input
              id={id("zip")}
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              className={`${INPUT} max-w-40 tabular-nums`}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
              {...errorProps("zip")}
              aria-describedby={[errors.zip ? id("zip-error") : "", id("zip-hint")].filter(Boolean).join(" ")}
            />
            <p id={id("zip-hint")} aria-live="polite" className="mt-1.5 min-h-5 text-sm font-semibold">
              {zip.length === 5 &&
                (zipCity ? (
                  <span className="inline-flex items-center gap-1 text-forest">
                    <CheckIcon className="size-4" /> {cityNames[zipCity]} is in our area.
                  </span>
                ) : (
                  <span className="text-charcoal">Outside our usual area. Send it anyway and we&apos;ll tell you straight if we can help.</span>
                ))}
            </p>
          </Field>

          <button type="submit" className={PRIMARY}>
            Continue
          </button>
          <p className="text-center text-sm text-charcoal-soft">Free and no obligation. About a minute.</p>
        </form>
      ) : (
        <form noValidate onSubmit={submit} className="mt-5 space-y-5">
          <p data-step-heading tabIndex={-1} className="font-extrabold focus:outline-none">
            Where should we send your quote?
          </p>
          {/* Hidden from people; bots fill it in. */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor={id("company")}>Company</label>
            <input id={id("company")} name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={set("company")} />
          </div>
          <Field label="Your name" htmlFor={id("name")} error={errors.name} errorId={id("name-error")}>
            <input id={id("name")} name="name" autoComplete="name" className={INPUT} value={values.name} onChange={set("name")} {...errorProps("name")} />
          </Field>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Mobile phone" htmlFor={id("phone")} error={errors.phone} errorId={id("phone-error")}>
              <input id={id("phone")} name="phone" type="tel" inputMode="tel" autoComplete="tel" className={INPUT} value={values.phone} onChange={set("phone")} {...errorProps("phone")} />
            </Field>
            <Field label="Email" htmlFor={id("email")} error={errors.email} errorId={id("email-error")}>
              <input id={id("email")} name="email" type="email" inputMode="email" autoComplete="email" className={INPUT} value={values.email} onChange={set("email")} {...errorProps("email")} />
            </Field>
          </div>
          <Field label={`Street address (ZIP ${zip})`} htmlFor={id("address")} error={errors.address} errorId={id("address-error")}>
            <input id={id("address")} name="address" autoComplete="street-address" className={INPUT} value={values.address} onChange={set("address")} {...errorProps("address")} />
          </Field>

          <fieldset aria-describedby={errors.contactMethod ? id("contactMethod-error") : undefined}>
            <legend className="font-bold">Best way to reach you</legend>
            <div className="mt-2.5 grid grid-cols-3 gap-2">
              {CONTACT_OPTIONS.map((o, i) => (
                <Chip
                  key={o.value}
                  type="radio"
                  name="contactMethod"
                  label={o.label}
                  checked={contactMethod === o.value}
                  onChange={() => setContactMethod(o.value)}
                  dataField={i === 0 ? "contactMethod" : undefined}
                  block
                />
              ))}
            </div>
            {errors.contactMethod && <ErrorText id={id("contactMethod-error")}>{errors.contactMethod}</ErrorText>}
          </fieldset>

          <div>
            <p className="font-bold">
              Photos <span className="font-semibold text-charcoal-soft">(optional)</span>
            </p>
            <label
              htmlFor={id("photos")}
              className="mt-2 flex min-h-14 cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-sage bg-white px-4 py-3 font-bold text-forest hover:border-forest has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal"
            >
              <CameraIcon className="size-6 shrink-0" />
              <span>
                Add photos of what needs paint
                <span className="block text-sm font-semibold text-charcoal-soft">Up to {MAX_PHOTOS}. Helps us prep for the walkthrough.</span>
              </span>
              <input
                id={id("photos")}
                type="file"
                multiple
                accept="image/*,.heic,.heif"
                className="sr-only"
                onChange={(e) => {
                  addPhotos(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>
            {photos.length > 0 && (
              <ul className="mt-2 space-y-1.5">
                {photos.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 text-sm">
                    <span className="truncate">{f.name}</span>
                    <button type="button" onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))} className="min-h-11 shrink-0 px-2 font-bold text-forest underline">
                      Remove<span className="sr-only"> {f.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {photoNote && (
              <p className="mt-2 text-sm font-semibold" role="status">
                {photoNote}
              </p>
            )}
          </div>

          {(extras.palette || extras.ballpark) && (
            <ul className="flex flex-wrap gap-2" aria-label="Added from the tools on this site">
              {(["palette", "ballpark"] as const).map((k) =>
                extras[k] ? (
                  <li key={k} className="flex items-center gap-1 rounded-full bg-pale py-1 pr-1 pl-3 text-sm font-bold text-forest">
                    {k === "palette" ? "Palette" : "Ballpark"}: {extras[k]}
                    <button
                      type="button"
                      onClick={() => {
                        setExtras((e) => ({ ...e, [k]: undefined }));
                        clearPrefill(k);
                      }}
                      className="flex size-9 items-center justify-center rounded-full hover:bg-mist"
                    >
                      <CloseIcon className="size-4" />
                      <span className="sr-only">Remove {k}</span>
                    </button>
                  </li>
                ) : null,
              )}
            </ul>
          )}

          <details className="group rounded-xl bg-white px-4 py-1">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-bold text-forest">
              More details <span className="font-semibold text-charcoal-soft">(optional)</span>
            </summary>
            <div className="space-y-5 pt-2 pb-4">
              <fieldset>
                <legend className="font-bold">When would you like it done?</legend>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {TIMELINE_OPTIONS.map((o) => (
                    <Chip key={o.value} type="radio" name="timeline" label={o.label} checked={timeline === o.value} onChange={() => setTimeline(o.value)} />
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend className="font-bold">About when was your home built?</legend>
                <p className="text-sm text-charcoal-soft">Homes built before 1978 get lead-safe prep.</p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {HOME_AGE_OPTIONS.map((o) => (
                    <Chip key={o.value} type="radio" name="homeAge" label={o.label} checked={homeAge === o.value} onChange={() => setHomeAge(o.value)} />
                  ))}
                </div>
              </fieldset>
              <Field label="Anything else we should know?" htmlFor={id("notes")} error={errors.notes} errorId={id("notes-error")}>
                <textarea id={id("notes")} rows={3} maxLength={1000} className={`${INPUT} min-h-24`} value={notes} onChange={(e) => setNotes(e.target.value)} {...errorProps("notes")} />
              </Field>
            </div>
          </details>

          <div>
            <label className="flex cursor-pointer items-start gap-3">
              <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-0.5 size-5 shrink-0 accent-forest" />
              <span className="text-xs leading-relaxed text-charcoal">
                {SMS_CONSENT_TEXT} See our{" "}
                <a href="/privacy" className="font-bold underline">
                  privacy policy
                </a>
                .
              </span>
            </label>
            {contactMethod === "text" && !smsConsent && (
              <p className="mt-2 text-sm font-semibold text-forest">You picked text. Check the box above so we&apos;re allowed to text you.</p>
            )}
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className="min-h-12 rounded-full border-2 border-forest px-6 font-extrabold text-forest hover:bg-pale">
              Back
            </button>
            <button type="submit" disabled={status === "sending"} className={`${PRIMARY} sm:flex-1`}>
              {status === "sending" ? (photos.length ? "Uploading photos..." : "Sending...") : "Send my request"}
            </button>
          </div>

          <div aria-live="assertive">
            {status === "failed" && (
              <div role="alert" className="rounded-xl border-2 border-[#b3261e] bg-[#fdecea] p-4 text-[#7a1b14]">
                <p className="font-extrabold">That didn&apos;t go through.</p>
                <p className="mt-1 text-sm">
                  Your details are still here. Press &quot;Send my request&quot; to try again
                  {phone && phoneHref ? (
                    <>
                      , or{" "}
                      <a href={phoneHref} className="inline-flex items-center gap-1 font-extrabold underline">
                        <PhoneIcon className="size-4" /> call {phone}
                      </a>
                    </>
                  ) : null}
                  .
                </p>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

function Field({ label, htmlFor, error, errorId, children }: { label: string; htmlFor: string; error?: string; errorId: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-bold">
        {label}
      </label>
      {children}
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ id, children }: { id: string; children: ReactNode }) {
  return (
    <p id={id} className="mt-1.5 text-sm font-bold text-[#b3261e]">
      {children}
    </p>
  );
}

function Chip({
  type,
  name,
  label,
  checked,
  onChange,
  dataField,
  block,
}: {
  type: "checkbox" | "radio";
  name: string;
  label: string;
  checked: boolean;
  onChange: (on: boolean) => void;
  dataField?: string;
  block?: boolean;
}) {
  return (
    <label
      className={`flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full border-2 px-4 font-bold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal ${block ? "justify-center" : ""} ${
        checked ? "border-forest bg-forest text-cream" : "border-charcoal/25 bg-white text-charcoal hover:border-forest"
      }`}
    >
      <input type={type} name={name} checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" data-field={dataField} />
      {checked && type === "checkbox" && <CheckIcon className="size-4" />}
      {label}
    </label>
  );
}
