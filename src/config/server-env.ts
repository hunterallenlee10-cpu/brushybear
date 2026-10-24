import "server-only";

/**
 * Secrets and server-only switches. Importing this from a client component
 * fails the build, so these can never reach the browser. Read at request
 * time inside API routes.
 */
export function leadSettings() {
  return {
    webhookUrl: process.env.N8N_WEBHOOK_URL || "",
    webhookSecret: process.env.N8N_WEBHOOK_SECRET || "",
    dryRun: process.env.LEADS_DRY_RUN === "true",
  };
}

export function uploadsEnabled(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}
