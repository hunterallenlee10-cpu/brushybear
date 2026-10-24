import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { uploadsEnabled } from "@/config/server-env";
import { MAX_PHOTO_BYTES, PHOTO_TYPES } from "@/lib/validation";

/**
 * Hands the browser a short-lived token so estimate photos upload straight
 * to Vercel Blob (they never pass through this server, which caps request
 * size). Only image types, 10 MB each, random file names, and only for
 * requests coming from this site.
 */
export async function POST(request: Request) {
  if (!uploadsEnabled()) return Response.json({ error: "uploads_off" }, { status: 503 });

  const body = (await request.json()) as HandleUploadBody;

  if (body.type === "blob.generate-client-token") {
    const origin = request.headers.get("origin");
    const host = request.headers.get("host");
    if (!origin || !host || new URL(origin).host !== host) {
      return Response.json({ error: "forbidden" }, { status: 403 });
    }
  }

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        if (!pathname.startsWith("estimates/")) throw new Error("Unexpected upload path");
        return {
          allowedContentTypes: PHOTO_TYPES,
          maximumSizeInBytes: MAX_PHOTO_BYTES,
          addRandomSuffix: true,
          validUntil: Date.now() + 10 * 60 * 1000,
        };
      },
      onUploadCompleted: async () => {
        // Nothing to store: the photo links travel with the lead to n8n.
      },
    });
    return Response.json(result);
  } catch (err) {
    console.error("[upload]", err);
    return Response.json({ error: "upload_refused" }, { status: 400 });
  }
}
