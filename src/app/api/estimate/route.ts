import { SITE } from "@/config/site";
import { leadSettings } from "@/config/server-env";
import { fieldErrors, leadSchema, SMS_CONSENT_TEXT } from "@/lib/validation";

const MAX_BODY_BYTES = 20_000;
const MIN_FILL_MS = 3_000;

/**
 * Receives an estimate request, checks it, and forwards it to the Brushy
 * Bear n8n webhook (speed-to-lead + CRM). With LEADS_DRY_RUN=true it only
 * logs a masked copy. Bots that fill the hidden field, or forms submitted
 * faster than a person could, get a quiet "ok" and nothing is sent.
 */
export async function POST(request: Request) {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return Response.json({ ok: false, error: "too_large" }, { status: 413 });

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "bad_json" }, { status: 400 });
  }

  // Spam traps: a hidden field people never see, and a minimum fill time.
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  if (body.company || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    return Response.json({ ok: true });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ ok: false, error: "invalid", fields: fieldErrors(parsed.error) }, { status: 400 });
  }

  const data = parsed.data;
  const lead = {
    ...data,
    business: SITE.name,
    receivedAt: new Date().toISOString(),
    smsConsentText: data.smsConsent ? SMS_CONSENT_TEXT : null,
    userAgent: request.headers.get("user-agent")?.slice(0, 300) ?? null,
  };

  const { webhookUrl, webhookSecret, dryRun } = leadSettings();

  if (dryRun) {
    console.log("[lead:dry-run]", JSON.stringify({ ...lead, phone: mask(lead.phone), email: mask(lead.email), location: "(hidden)" }));
    return Response.json({ ok: true, dryRun: true });
  }

  if (!webhookUrl) {
    console.error("[lead] N8N_WEBHOOK_URL is not set; lead not sent", { source: lead.source });
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  for (const [attempt, wait] of [0, 400, 1200].entries()) {
    if (wait) await new Promise((r) => setTimeout(r, wait));
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json", "x-brushybear-secret": webhookSecret },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5_000),
      });
      if (res.ok) return Response.json({ ok: true });
      console.error(`[lead] webhook answered ${res.status} (attempt ${attempt + 1})`);
    } catch (err) {
      console.error(`[lead] webhook failed (attempt ${attempt + 1})`, err);
    }
  }
  return Response.json({ ok: false, error: "send_failed" }, { status: 502 });
}

function mask(v: string): string {
  return v.length <= 4 ? "****" : `${"*".repeat(v.length - 4)}${v.slice(-4)}`;
}
