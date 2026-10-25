import "server-only";

/**
 * Secrets and server-only switches. Importing this from a client component
 * fails the build, so these can never reach the browser. Read at request
 * time inside API routes.
 */
export function leadSettings() {
  return {
    // LEAD_WEBHOOK_* is the new name; N8N_WEBHOOK_* still works so the
    // current Vercel settings keep sending leads.
    webhookUrl: process.env.LEAD_WEBHOOK_URL || process.env.N8N_WEBHOOK_URL || "",
    webhookSecret: process.env.LEAD_WEBHOOK_SECRET || process.env.N8N_WEBHOOK_SECRET || "",
    dryRun: process.env.LEADS_DRY_RUN === "true",
  };
}

export function uploadsEnabled(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}
