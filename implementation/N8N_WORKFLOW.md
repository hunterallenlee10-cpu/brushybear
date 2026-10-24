# n8n speed-to-lead workflow

**Workflow:** "Brushy Bear - Website Lead Speed-to-Lead" (id `7QDAzkygYyxbaDsQ`), https://hunterallenlee.app.n8n.cloud/workflow/7QDAzkygYyxbaDsQ
**Status:** built and tested, **not published**. All sends are off.
**Webhook (production):** `https://hunterallenlee.app.n8n.cloud/webhook/brushybear-estimate` (POST)
**Lead log:** n8n data table `brushybear_leads`

Completely separate from EA Pro: its own webhook, table and secret. It has no credentials attached yet. Never attach EA Pro's Gmail, Twilio or Vapi to it. (n8n auto-attaches the most recent Gmail credential to any new Gmail node, which is why email goes through **Send Email (SMTP)** nodes.)

## What happens to a lead

1. **Secret check.** The site sends `x-brushybear-secret`. The workflow keeps only its SHA-256 hash. Wrong or missing = **401**, nothing is logged.
2. **Instant 200** back to the site, so its 5-second timeout is never hit.
3. **Prepare lead.** It does the following:
   - turns the phone into +1 format;
   - writes "exterior and cabinet painting" style phrases;
   - escapes everything the lead typed before it goes into an email;
   - flags homes built before 1978 (lead-safe prep) and failed photo uploads.
4. **Log** every lead to `brushybear_leads`. Each row holds the timestamp, all fields, photo links, source/page/referrer, UTM and gclid, and the consent wording. It also has `status`, `job_value`, `closed_at` and `owner_notes` columns for close-rate tracking.
5. **If `sendsEnabled` is on**, everything below runs at once:
   - **Text the lead (Twilio).** Only if they ticked consent and `smsEnabled` is on: "Hi {first name}, it's Brushy Bear Painters. Got your request for {services}. When's a good time for a quick call to set up your walkthrough? Reply STOP to opt out."
   - **Email the lead** a short confirmation, and ask for photos if their upload failed.
   - **Alert Erik and Hunter** with every field, tap-to-call/text links and photo links. The subject line is flagged `[Pre-1978]` / `[Ask for photos]`.
   - **Optional AI call (Vapi).** Only if `followUpCallEnabled` is on, they consented and it's business hours (Mon–Sat 8–6 Pacific). It runs 2 minutes after the lead arrives.

**STOP:** Twilio blocks texts to anyone who replied STOP. Its default opt-out handling for US numbers is on, so leave it on. The workflow only ever sends the one first text.

## To go live

1. In n8n, create **new Brushy Bear-only** credentials and attach them:
   - **SMTP** on "Email the Lead" and "Alert Erik and Hunter", e.g. the Brushy Bear Google Workspace mailbox with an app password;
   - **Twilio** on "Text the Lead";
   - **Vapi**, if used, on "Start Follow-Up Call": a templated header `Authorization: Bearer {{api_key}}`.
2. In **Brushy Bear Settings**, replace every `PASTE_` value:
   - Erik's email;
   - the Brushy Bear email (used as the From and Reply-To);
   - the Twilio number;
   - the Vapi assistant and phone-number IDs.
   Also check the business hours.
3. Turn on `sendsEnabled`. Turn on `smsEnabled` only after Twilio **A2P 10DLC** registration is approved, and `followUpCallEnabled` only if you want the AI call.
4. **Publish** the workflow in n8n.
5. In Vercel → Production, set `LEADS_DRY_RUN` to `false` and redeploy. `N8N_WEBHOOK_URL` and `N8N_WEBHOOK_SECRET` are already set (Production only).
6. Send a test lead from a phone with a photo. Check that the text arrives within a minute, the photo link opens and the row appears in `brushybear_leads`.

**Rotating the secret:** make a new random value and put it in Vercel `N8N_WEBHOOK_SECRET`. Put its SHA-256 hex (`printf '%s' "$SECRET" | sha256sum`) in Settings → `webhookSecretSha256`, then redeploy.

## Tested (October 24, 2026)

- Good secret: the row was logged, the phone was normalized, the pre-1978 and ask-for-photos flags were set, the HTML in the notes was escaped, and the safety switch stopped all sends.
- Wrong secret: 401, nothing logged.
- One test row is left in `brushybear_leads` (name "test lead (delete me)", `is_test = true`). Delete it in n8n.
