# AI-generated assets

Every image or video made with Higgsfield goes in the log at the bottom: file name, Higgsfield job ID, model, the exact prompt, and where it's used.

**Rules**
- AI assets are for mood, illustration, the mascot and backgrounds only. Scene images on the site carry a small "Illustration" tag.
- Never in the gallery, the before/after slider, reviews, or anything captioned as our work.
- Never people presented as our owners, crew or customers. The prompts below ask for no people at all.
- No spending until the company name is locked, and only after Hunter approves the batch cost.
- If a job times out, check its status before resubmitting so nothing is paid for twice.

## Status

**Generated October 24, 2026 and live on the site.** Hunter approved the batch. This session spent **56.5 credits**, matching the quote line for line (13 images + 2 videos). The balance went 510.98 → 404.48 over the same window, but the other ~50 credits were other Higgsfield activity on the account (Kling 4.0, Nano Banana Pro and GPT Image jobs between 03:22 and 03:49 UTC) that didn't come from this build.

Two departures from the plan:
- The hero still on the site is the **video loop's first frame**, not image #1. That keeps the still and the video pixel-aligned when the video fades in. Image #1 was still used as the video's end frame and for the share image.
- The social-sharing image is built in code from image #1 plus the real logo and the waving bear (no AI text).

| # | Asset | Model and settings | Credits | Goes on |
|---|---|---|---|---|
| 1 | Hero still, sunny | GPT Image 2.5, 16:9, high, 2K | 2.75 | Video end frame, share image |
| 2 | Hero still, rainy | GPT Image 2.5 edit of #1, 16:9, high, 2K | 2.75 | Video start frame |
| 3 | Hero intro video, 6 s | Kling 3.0 pro, start #2, end #1, no sound | 10.5 | Plays once on the homepage: the rain stops |
| 4 | Hero loop, 4 s | Kling 3.0 pro, start and end #1, no sound | 7.0 | Loops after the intro; its first frame is the hero still |
| 5–9 | Bear poses ×5 | GPT Image 2.5, the real bear as reference, 1:1, transparent, high, 2K | 13.75 | Hero, form success, About, gallery, estimate page, promises, 404 |
| 10–14 | Scenes ×5 | GPT Image 2.5, 3:2, high, 2K | 13.75 | Service cards and page heroes; the "problem" section |
| 15–16 | Brushstroke overlays ×2 | GPT Image 2.5, 16:9, transparent, high, 2K | 5.5 | Gold: the headline paint swipe. Green: behind the 404 bear |
| 17 | Paper texture | GPT Image 2.5, 1:1, medium, 1K | 0.5 | Page background tile, recentered on the brand cream (12 KB) |
| | **Total** | | **56.5** | |

## Prompts

**Shared style line**, added to every photoreal prompt (#1, #2, #10–14):
> Cinematic and photoreal, Pacific Northwest. Soft overcast light breaking into warm golden sun. Color grade: deep evergreen greens, warm cream, golden-yellow highlights, charcoal shadows. 35mm lens, natural detail. No people, no text, no logos, no brand names.

1. **Hero still, sunny:** A craftsman-style bungalow on the Eastside of the Seattle area with freshly painted cream lap siding, deep forest-green trim and a golden-yellow front door, tapered porch columns on stone bases, among tall Douglas firs and western red cedars. The rain has just stopped: the lawn and path glisten, low clouds are breaking, and warm late-afternoon sun lights the fresh paint from the right. Wide establishing shot, house slightly left of center, calm sky above the roofline. + style line
2. **Hero still, rainy (edit, #1 as reference):** The exact same scene, camera, framing and house as the reference image, but in soft, steady Pacific Northwest rain: overcast gray-green sky, fine visible rain streaks, wet reflective surfaces, cooler light. Keep every architectural detail and color of the house identical. + style line
3. **Hero intro video:** Locked-off camera, no camera movement. Soft rain falls on the craftsman house, then gradually stops; the clouds part and warm golden sunlight sweeps across the freshly painted siding; evergreens sway gently; water droplets glisten. Natural, calm, realistic motion. No people.
4. **Hero loop:** Locked-off camera. Sunny after-rain scene; evergreen branches sway gently; light glints on the wet grass; clouds drift slowly. Seamless loop, with the first and last frame identical. No people.
5–9. **Bear poses:** The real bear cut-out (`bear-brush`) is uploaded as the reference. Prompt: Using the reference image's exact character (the golden-yellow cartoon bear mascot with a green-and-cream painter's cap with a brush icon, dark green overalls with gold buttons, black boots, thick charcoal outlines and a white die-cut sticker border), draw the same bear **[pose]**. Keep the identical art style, proportions, colors, line weight and sticker border. Transparent background, no text.
   - waving hello with one paw, big friendly smile (`bear-wave`)
   - giving a thumbs-up, paint roller in the other paw (`bear-thumbs-up`, form success)
   - standing on a short wooden stepladder, painting with a brush (`bear-ladder`, About)
   - holding a forest-green umbrella in light rain, cheerful (`bear-umbrella`, rain-day promise)
   - curled up asleep on a drop cloth with a paintbrush beside it, small sleep bubbles (`bear-sleeping`, 404)
10. **Interior scene:** A bright living room in a 1960s Eastside rambler with warm cream walls, crisp white trim and a deep forest-green accent wall, a wide window onto evergreens, soft overcast daylight, neatly folded drop cloths in one corner. + style line
11. **Exterior scene:** A two-story cedar-sided house on a wooded Eastside lot, cedar siding freshly stained and trim painted cream, wet driveway after rain, sun breaking through tall firs. + style line
12. **Cabinet scene:** A bright Eastside kitchen with smooth forest-green painted lower cabinets and warm cream uppers, brass pulls, quartz counters, morning light from a window onto evergreens, everything clean and finished. + style line
13. **Deck scene:** A cedar deck and fence freshly stained a warm natural tone at golden hour, Pacific Northwest backyard with ferns and tall evergreens, wood grain glowing in low sun. + style line
14. **Rainy street (problem section):** A quiet rainy Eastside residential street at dusk, mid-century houses with some peeling, weathered paint and moss on north-facing trim, tall evergreens, wet pavement reflections. + style line
15–16. **Brushstrokes:** One wide horizontal paint brushstroke in deep forest green (#1F4D3A) [and a second in golden yellow (#E9A93B)], thick paint with visible bristle texture and dry-brush edges, on a transparent background, no text.
17. **Paper texture:** A seamless, tileable warm cream paper texture (#F4EDE1) with subtle fibers and fine grain, very low contrast, flat even lighting, no shadows, no text.

## How they were processed

1. Originals downloaded to `assets-src/higgsfield/` (git-ignored).
2. Hero: `scripts/optimize-media.sh hero` → `public/media/hero/intro|loop.mp4|webm` (WebM pair 0.8 MB, MP4 pair 0.9 MB; a browser loads one format) and `src/assets/hero/still.jpg`. Wired in `src/config/hero.ts`. The video loads only after the page has loaded, and never for reduced motion, data saver or 2G/3G.
3. Scenes → `src/assets/media/scene-*.jpg` (2000 px max). Bears → `src/assets/brand/bear-*.png` (trimmed, 1100 px max). The gold brushstroke had a faint white halo, which was removed; a 480 px WebP copy drives the headline swipe.
4. Every scene and the hero carry a small **"Illustration"** tag on the page.

## Generation log

All jobs ran October 24, 2026 on Higgsfield (no project folder). Prompts are the numbered ones above.

| File(s) on the site | Higgsfield job ID | Model | Prompt # |
|---|---|---|---|
| (video end frame), `public/og-image.jpg` | 6812b2db-f5f9-4ec9-9dd1-7cd6c10240bf | GPT Image 2.5 | 1 |
| (video start frame) | 2899508f-bbcc-4c3e-a29a-eb4f0c64a0d2 | GPT Image 2.5 (edit of #1) | 2 |
| `public/media/hero/intro.mp4`, `intro.webm` | 383460f9-03e1-456a-8101-b3ef4ed665ed | Kling 3.0 pro | 3 |
| `public/media/hero/loop.mp4`, `loop.webm`, `src/assets/hero/still.jpg` | 7c9ddb81-390f-4e84-a5a4-daea5653d96e | Kling 3.0 pro | 4 |
| `src/assets/brand/bear-wave.png` | 51234b0c-0112-4d11-ad63-905692526312 | GPT Image 2.5 (reference: bear-brush) | 5 |
| `src/assets/brand/bear-thumbs-up.png` | 2a6f5375-ccd8-429c-9a97-873e01074a2c | GPT Image 2.5 (reference: bear-brush) | 6 |
| `src/assets/brand/bear-ladder.png` | db5a94b5-a3d7-4ceb-9c9f-c5f1d24d4164 | GPT Image 2.5 (reference: bear-brush) | 7 |
| `src/assets/brand/bear-umbrella.png` | 4b9c9d40-8d78-4e08-a7b3-f854141b8a72 | GPT Image 2.5 (reference: bear-brush) | 8 |
| `src/assets/brand/bear-sleeping.png` | 4613a7d1-a6f4-44dc-848f-e1e080f944bc | GPT Image 2.5 (reference: bear-brush) | 9 |
| `src/assets/media/scene-interior.jpg` | 98be4a7e-f0a6-43ff-a7db-a874262e4da0 | GPT Image 2.5 | 10 |
| `src/assets/media/scene-exterior.jpg` | ca925d89-76ac-4b0d-bb2c-ad65d637be3d | GPT Image 2.5 | 11 |
| `src/assets/media/scene-cabinets.jpg` | c06caef7-7bee-4a23-b61e-47f84de58733 | GPT Image 2.5 | 12 |
| `src/assets/media/scene-deck.jpg` | 27c42b4d-cac9-4b96-8b25-58ba3767fb99 | GPT Image 2.5 | 13 |
| `src/assets/media/scene-rainy-street.jpg` | 43fc5b33-c600-4025-94ea-d395872645e0 | GPT Image 2.5 | 14 |
| `src/assets/media/brush-green.png` | 04230d9f-58ad-4cba-ae33-fca83747e81a | GPT Image 2.5 | 15 |
| `src/assets/media/brush-gold.png`, `public/media/brush-gold-swipe.webp` | c2b1522b-818b-494e-91ed-18f9e4c32313 | GPT Image 2.5 | 16 |
| `public/media/paper.webp` | b1c447e2-c46a-4053-a5ed-c1c04fc83562 | GPT Image 2.5 | 17 |

The bear reference upload (Higgsfield media 5d131ac1-2bfa-4add-9d90-aca0fc8da95c) is the `bear-brush` cut-out from the logo file.

## Brand files that are not AI-generated by us

These come from the Brushy Bear Painters Drive folder and were only cut out and cropped (artwork pixels unchanged) by `scripts/brand/process-logo.py`:

| File | Source in Drive | What was done |
|---|---|---|
| `public/brand/logo-full.png` | Keep-this-exact-logo-same-golden-yellow.png | Cut out; white sticker border rebuilt at its measured 37 px width; gray drop shadow removed |
| `src/assets/brand/logo-wordmark.png` | same | Lettering only, sticker border rebuilt around it |
| `src/assets/brand/bear-brush.png` | same | Bear only, sticker border rebuilt around it |
| `src/assets/brand/bear-roller-up.png` | Keep-this-exact-logo-same-golden-yellow (1).png | Bear only |
| `src/assets/brand/bear-roller-shoulder.png` | Keep-this-exact-logo-same-golden-yellow (2).png | Bear only |
| `src/app/icon.png`, `apple-icon.png`, `favicon.ico` | same as logo-full | Bear head on a forest-green tile (`scripts/brand/make-icons.py`) |
| `public/og-image.png` | logo files | Interim share image (`scripts/brand/make-og.py`) |

The hand-drawn hero scene (`HeroScene`) and service illustrations (`ServiceArt`) are coded SVG, kept as the fallback if `HERO_ASSETS` is set to null or a scene is removed.

## Scroll hero (upgrade/panda-style, October 25, 2026)

Four beats of one house with a locked-off camera, for the painting scroll on the home page. Model `gpt_image_2_5` (2k, high), 2.75 credits each, 22 credits total. Beat 1 was made first; every other frame used it as the reference image so the house never changes. No people, text, signs or house numbers. Shown on the site labeled "Illustration".

| File (`public/hero/keyframes/`) | Beat | Job ID | References |
|---|---|---|---|
| `beat1-rain-worn-16x9.jpg` | Rain-worn | 043ba68f-bcf5-436e-bb26-0a0e045aa378 | none |
| `beat2-prepped-right-16x9.jpg` | Prepped right | f6197553-c416-4a32-9826-203d7d530bd8 | beat 1 |
| `beat3-first-stroke-16x9.jpg` | The first stroke | 037a5560-8295-45b5-976d-f81210a38961 | beat 1 |
| `beat4-painted-to-last-16x9.jpg` | Painted to last | bb1c2f6e-c70a-46ca-9197-afc7e50542c0 | beat 1 |
| `beat1-rain-worn-9x16.jpg` | Rain-worn (phone) | ca4d17ef-a446-4053-8554-d8526d2c067a | beat 1 |
| `beat2-prepped-right-9x16.jpg` | Prepped right (phone) | 3041b1a4-af6f-49b7-925f-2667d508df17 | phone beat 1 + beat 2 |
| `beat3-first-stroke-9x16.jpg` | The first stroke (phone) | f52e8b21-e8e5-46dc-b3d1-cfd11a2fd3a9 | phone beat 1 + beat 3 |
| `beat4-painted-to-last-9x16.jpg` | Painted to last (phone) | 4f057b51-33c6-4132-90ae-a0285eaeaff4 | phone beat 1 + beat 4 |

Originals are 2688x1520 / 1520x2688 PNGs (re-downloadable by job ID); the committed copies are 1920 / 1080 wide JPEGs.
