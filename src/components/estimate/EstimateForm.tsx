"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { SuccessScreen } from "@/components/estimate/SuccessScreen";
import { track } from "@/lib/analytics";
import {
  contactSchema,
  fieldErrors,
  HOME_AGE_OPTIONS,
  MAX_PHOTO_BYTES,
  MAX_PHOTOS,
  PHOTO_TYPES,
  SERVICE_OPTIONS,
  SMS_CONSENT_TEXT,
  TIMELINE_OPTIONS,
} from "@/lib/validation";

type Status = "idle" | "sending" | "sent" | "failed";

type Props = {
  /** Where the form sits, for analytics and the lead record. */
  source: string;
  /** A service slug to pre-tick (on service pages). */
  preselect?: string;
  /** Shown in the failure message. */
  fallbackPhone?: string;
};

const INPUT =
  "block min-h-12 w-full rounded-xl border-2 border-charcoal/25 bg-white px-4 py-3 text-base text-charcoal placeholder:text-charcoal-soft/70 focus:border-charcoal focus:outline-none aria-[invalid=true]:border-[#b3261e]";

/**
 * Two short steps: contact details (required), then details (all optional).
 * Errors appear inline under each field and focus jumps to the first one.
 */
export function EstimateForm({ source, preselect, fallbackPhone }: Props) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const root = useRef<HTMLDivElement>(null);
  const startedAt = useRef(0);
  const started = useRef(false);

  const pre = SERVICE_OPTIONS.find((o) => o.serviceSlug === preselect)?.value;
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState({ name: "", phone: "", email: "", location: "", company: "" });
  const [services, setServices] = useState<string[]>(pre ? [pre] : []);
  const [timeline, setTimeline] = useState<string>();
  const [homeAge, setHomeAge] = useState<string>();
  const [notes, setNotes] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoNote, setPhotoNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [firstName, setFirstName] = useState("");

  // Set on mount (never during render, so the page can be prerendered).
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const onFirstTouch = () => {
    if (started.current) return;
    started.current = true;
    track("estimate_start", { source });
  };

  const focusFirstError = (errs: Record<string, string>) => {
    const first = Object.keys(errs)[0];
    if (!first) return;
    requestAnimationFrame(() => root.current?.querySelector<HTMLElement>(`[data-field="${first}"]`)?.focus());
  };

  const toStep2 = (e: FormEvent) => {
    e.preventDefault();
    const res = contactSchema.safeParse({ ...values, services });
    if (!res.success) {
      const errs = fieldErrors(res.error);
      setErrors(errs);
      focusFirstError(errs);
      return;
    }
    setErrors({});
    setStep(2);
    track("estimate_step_2", { source });
    requestAnimationFrame(() => root.current?.querySelector<HTMLElement>("[data-step-heading]")?.focus());
  };

  const addPhotos = (list: FileList | null) => {
    if (!list) return;
    const picked = Array.from(list).filter((f) => PHOTO_TYPES.includes(f.type) || /\.(heic|heif)$/i.test(f.name));
    const tooBig = picked.filter((f) => f.size > MAX_PHOTO_BYTES);
    const ok = picked.filter((f) => f.size <= MAX_PHOTO_BYTES);
    const next = [...photos, ...ok].slice(0, MAX_PHOTOS);
    setPhotos(next);
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
    setStatus("sending");
    const { urls, failed } = await uploadPhotos();
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"]) {
      const v = params.get(key);
      if (v) utm[key] = v.slice(0, 200);
    }
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...values,
          services,
          timeline,
          homeAge,
          notes: notes || undefined,
          smsConsent,
          photoUrls: urls,
          photoUploadFailed: failed || undefined,
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
          const contactFields = ["name", "phone", "email", "location", "services"];
          if (Object.keys(data.fields).some((k) => contactFields.includes(k))) setStep(1);
          focusFirstError(data.fields);
          setStatus("idle");
          return;
        }
        throw new Error(String(res.status));
      }
      setFirstName(values.name.trim().split(/\s+/)[0]);
      setStatus("sent");
      track("estimate_submit", { source, services: services.join(","), photos: urls.length });
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

  if (status === "sent") {
    return (
      <div ref={root} className="rounded-[var(--radius-sticker)] border-2 border-charcoal bg-cream-50 p-6 text-charcoal shadow-[0_0_0_6px_#fff] md:p-8">
        <SuccessScreen firstName={firstName} />
      </div>
    );
  }

  return (
    <div ref={root} className="rounded-[var(--radius-sticker)] border-2 border-charcoal bg-cream-50 p-6 text-charcoal shadow-[0_0_0_6px_#fff] md:p-8">
      <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-forest">Step {step} of 2</p>
      <div className="mt-2 flex gap-2" aria-hidden="true">
        <span className="h-1.5 flex-1 rounded-full bg-gold" />
        <span className={`h-1.5 flex-1 rounded-full ${step === 2 ? "bg-gold" : "bg-cream-200"}`} />
      </div>

      {step === 1 ? (
        <form noValidate onSubmit={toStep2} onFocus={onFirstTouch} className="mt-5 space-y-5">
          <h3 data-step-heading tabIndex={-1} className="text-2xl font-extrabold text-forest focus:outline-none">
            How do we reach you?
          </h3>
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
          <Field label="Home address or ZIP code" htmlFor={id("location")} error={errors.location} errorId={id("location-error")}>
            <input id={id("location")} name="location" autoComplete="street-address" className={INPUT} value={values.location} onChange={set("location")} {...errorProps("location")} />
          </Field>
          <fieldset aria-describedby={errors.services ? id("services-error") : undefined}>
            <legend className="font-bold">What do you want painted?</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
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
          <button type="submit" className="flex min-h-13 w-full items-center justify-center rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal hover:bg-gold-deep">
            Continue
          </button>
          <p className="text-center text-sm text-charcoal-soft">Free, no obligation. Takes about a minute.</p>
        </form>
      ) : (
        <form noValidate onSubmit={submit} className="mt-5 space-y-6">
          <h3 data-step-heading tabIndex={-1} className="text-2xl font-extrabold text-forest focus:outline-none">
            A few details <span className="text-base font-semibold text-charcoal-soft">(all optional)</span>
          </h3>

          <div>
            <label htmlFor={id("photos")} className="font-bold">
              Photos of what you want painted
            </label>
            <p className="text-sm text-charcoal-soft">Up to {MAX_PHOTOS}. They help us prepare for the walkthrough.</p>
            <input
              id={id("photos")}
              type="file"
              multiple
              accept="image/*,.heic,.heif"
              onChange={(e) => {
                addPhotos(e.target.files);
                e.target.value = "";
              }}
              className="mt-2 block w-full text-sm file:mr-4 file:min-h-11 file:cursor-pointer file:rounded-full file:border-2 file:border-forest file:bg-white file:px-4 file:font-bold file:text-forest"
            />
            {photos.length > 0 && (
              <ul className="mt-3 space-y-2">
                {photos.map((f, i) => (
                  <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm">
                    <span className="truncate">{f.name}</span>
                    <button type="button" onClick={() => setPhotos((p) => p.filter((_, j) => j !== i))} className="min-h-11 shrink-0 px-2 font-bold text-forest underline">
                      Remove<span className="sr-only"> {f.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {photoNote && (
              <p className="mt-2 text-sm font-semibold text-charcoal" role="status">
                {photoNote}
              </p>
            )}
          </div>

          <fieldset>
            <legend className="font-bold">When would you like it done?</legend>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {TIMELINE_OPTIONS.map((o) => (
                <Chip key={o.value} type="radio" name="timeline" label={o.label} checked={timeline === o.value} onChange={() => setTimeline(o.value)} />
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-bold">About when was your home built?</legend>
            <p className="text-sm text-charcoal-soft">Homes built before 1978 get lead-safe prep.</p>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {HOME_AGE_OPTIONS.map((o) => (
                <Chip key={o.value} type="radio" name="homeAge" label={o.label} checked={homeAge === o.value} onChange={() => setHomeAge(o.value)} />
              ))}
            </div>
          </fieldset>

          <Field label="Anything else we should know?" htmlFor={id("notes")} error={errors.notes} errorId={id("notes-error")}>
            <textarea id={id("notes")} rows={3} maxLength={1000} className={`${INPUT} min-h-24`} value={notes} onChange={(e) => setNotes(e.target.value)} {...errorProps("notes")} />
          </Field>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-white p-4">
            <input type="checkbox" checked={smsConsent} onChange={(e) => setSmsConsent(e.target.checked)} className="mt-1 size-5 shrink-0 accent-forest" />
            <span className="text-sm">{SMS_CONSENT_TEXT}</span>
          </label>

          <div className="flex flex-col-reverse gap-3 sm:flex-row">
            <button type="button" onClick={() => setStep(1)} className="min-h-12 rounded-full border-2 border-forest px-6 font-extrabold text-forest">
              Back
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex min-h-13 flex-1 items-center justify-center rounded-full border-2 border-charcoal bg-gold px-6 py-3 text-lg font-extrabold text-charcoal hover:bg-gold-deep disabled:cursor-wait disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send my request"}
            </button>
          </div>
          <p aria-live="polite" className="text-sm font-semibold">
            {status === "failed" && (
              <span className="block rounded-xl bg-[#fde8e6] p-4 text-[#7a1b14]">
                Sorry, your request didn&apos;t go through. Please try again, or call or text us{fallbackPhone ? ` at ${fallbackPhone}` : ""}.
              </span>
            )}
          </p>
          <p className="text-xs text-charcoal-soft">
            We use your details only to reply about your estimate. See our <a href="/privacy" className="underline">privacy policy</a>.
          </p>
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
}: {
  type: "checkbox" | "radio";
  name: string;
  label: string;
  checked: boolean;
  onChange: (on: boolean) => void;
  dataField?: string;
}) {
  return (
    <label
      className={`flex min-h-11 cursor-pointer items-center rounded-full border-2 px-4 font-bold transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-charcoal ${
        checked ? "border-charcoal bg-forest text-cream" : "border-charcoal/25 bg-white text-charcoal hover:border-charcoal"
      }`}
    >
      <input type={type} name={name} checked={checked} onChange={(e) => onChange(e.target.checked)} className="sr-only" data-field={dataField} />
      {checked && type === "checkbox" && <span aria-hidden="true" className="mr-1.5">✓</span>}
      {label}
    </label>
  );
}
