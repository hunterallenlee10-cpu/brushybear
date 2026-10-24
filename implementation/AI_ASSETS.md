# AI-generated assets

Every image or video made with Higgsfield goes in the log at the bottom: file name, Higgsfield job ID, model, the exact prompt, and where it's used.

**Rules**
- AI assets are for mood, illustration, the mascot and backgrounds only. Scene images on the site carry a small "Illustration" tag.
- Never in the gallery, the before/after slider, reviews, or anything captioned as our work.
- Never people presented as our owners, crew or customers. The prompts below ask for no people at all.
- No spending until the company name is locked, and only after Hunter approves the batch cost.
- If a job times out, check its status before resubmitting so nothing is paid for twice.

## Status

**Ready to generate, waiting on approval.** Nothing has been generated or spent. The site already has the code to display every asset (`src/config/hero.ts`, `HeroVideo`, `SceneImage`, `BearMascot`), so each one drops in without layout changes.

- Balance checked October 24, 2026: **510.98 credits** (Plus plan).
- **Quoted batch: about 57 credits.** Allow about 80 credits with a few re-rolls.
- Quotes came from Higgsfield's cost preflight (`get_cost`). Models were checked with `models_explore` the same day.

| # | Asset | Model and settings | Credits | Goes on |
|---|---|---|---|---|
| 1 | Hero still, sunny | GPT Image 2.5, 16:9, high, 2K | 2.75 | Hero main image, poster, reduced-motion view |
| 2 | Hero still, rainy | GPT Image 2.5 edit of #1, 16:9, high, 2K | 2.75 | Start frame for the video |
| 3 | Hero intro video, 6 s | Kling 3.0 pro, start #2, end #1, no sound | 10.5 | Plays once: the rain stops |
| 4 | Hero loop, 4 s | Kling 3.0 pro, start and end #1, no sound | 7.0 | Loops after the intro |
| 5–9 | Bear poses ×5 | GPT Image 2.5, the real bear as reference, 1:1, transparent, high, 2K | 13.75 | 404, form success, empty states, About, social |
| 10–14 | Scenes ×5 | GPT Image 2.5, 3:2, high, 2K | 13.75 | 4 service cards and page heroes, plus the "problem" section |
| 15–16 | Brushstroke overlays ×2 | GPT Image 2.5, 16:9, transparent, high, 2K | 5.5 | Section dividers and the headline swipe texture |
| 17 | Paper texture | GPT Image 2.5, 1:1, medium, 1K | 0.5 | Page background tile |
| — | Social-sharing image | Built in code from #1 and the real logo, no AI text | 0 | Every page's link preview |
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

## After generating

1. Download the originals to `assets-src/` (git-ignored).
2. Hero: `scripts/optimize-media.sh hero <intro.mp4> <loop.mp4> <still.png>` keeps both videos under 2.5 MB total. Then fill in `src/config/hero.ts`.
3. Images: `scripts/optimize-media.sh image <in.png> <name>`. Then add each scene to `SCENES` in `src/components/media/SceneImage.tsx` and each bear pose to `POSES` in `BearMascot.tsx`.
4. Rebuild the social-sharing image from #1 and the real logo (`scripts/brand/make-og.py`).
5. Re-run Lighthouse (mobile 95+), then log every asset below.

## Generation log

| File | Higgsfield job ID | Model | Prompt (#) | Used on | Date |
|---|---|---|---|---|---|
| _none yet_ | | | | | |

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

The hero scene and service illustrations are hand-coded SVG in brand colors, not AI images.
