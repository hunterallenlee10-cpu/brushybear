import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Share images (1200x630), one per page type: the page's headline over the
 * forest brand panel, with the real wordmark and the bear. Fonts are the
 * site's own (OFL), read from src/assets/fonts at build time.
 */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = "image/png";

const asset = (p: string) => readFile(join(process.cwd(), "src/assets", p));
const dataUrl = async (p: string, type: string) => `data:${type};base64,${(await asset(p)).toString("base64")}`;

export async function renderOg({ title, kicker }: { title: string; kicker: string }) {
  const [lilita, manrope, logo, bear, still] = await Promise.all([
    asset("fonts/LilitaOne-Regular.ttf"),
    asset("fonts/Manrope-Bold.ttf"),
    dataUrl("brand/logo-wordmark.png", "image/png"),
    dataUrl("brand/bear-wave.png", "image/png"),
    dataUrl("hero/still.jpg", "image/jpeg"),
  ]);
  const size = title.length > 60 ? 54 : title.length > 40 ? 62 : 72;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#163829", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={still} alt="" width={1117} height={630} style={{ position: "absolute", right: -260, top: 0, width: 1117, height: 630 }} />
        <div style={{ position: "absolute", left: 0, top: 0, width: 1200, height: 630, display: "flex", backgroundImage: "linear-gradient(90deg, #163829 0%, #163829 50%, rgba(22,56,41,0.6) 68%, rgba(22,56,41,0) 92%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "48px 60px", width: 700 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={258} height={80} style={{ width: 258, height: 80 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Manrope", fontSize: 26, color: "#e9a93b" }}>{kicker}</div>
            <div style={{ fontFamily: "Lilita", fontSize: size, lineHeight: 1.02, color: "#f4ede1", marginTop: 14 }}>{title}</div>
          </div>
          <div style={{ fontFamily: "Manrope", fontSize: 22, color: "#cbdcd1" }}>Bellevue, Kirkland, Redmond, Sammamish, Issaquah</div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bear} alt="" width={238} height={240} style={{ position: "absolute", right: 40, bottom: 24, width: 238, height: 240 }} />
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Lilita", data: lilita, style: "normal", weight: 400 },
        { name: "Manrope", data: manrope, style: "normal", weight: 700 },
      ],
    },
  );
}
