# Kold Krate: design system

The Stone Bathhouse. His tubs are shown the way a great bathhouse shows its pools: honed gray stone, still water and
nothing extra. It replaced the lumberyard world on 2026-10-17, after the owner called that version "AI slop", and the
new direction follows his brief: cooler, softer blue and grayscale tones with a luxury feel.

## Voice (the part he cared about most)

- First person, his voice: "I build every Kold Krate myself." Never a narrator talking about him ("his words", "his photo").
- Plain, short sentences that say real things. No benefit or health pitch: he said everyone already knows cold plunging
  is good for you.
- The page stands on his three reasons: they look better, there's more room inside, and he makes every one himself.
- Avoid the tells: em dashes, tidy triplets of adjectives, "crafted", "elevate", "experience", "ritual", "sanctuary",
  bolded-lead bullet lists, rhetorical questions.
- Only claims he has made. Inside size, his name and his photo are slots in `src/data/krate.ts` that render once filled.

## Color

One ink on stone. The redwood in his photos is the only warmth, apart from one hot field on the hot-and-cold pair.

| Token | Hex | Role |
|---|---|---|
| foam | #f4f6f7 | text on dark fields, primary button on dark |
| stone | #e7eaec | page ground (with a faint mineral speckle, `.stone`) |
| stone-2 | #d9dee2 | image placeholders |
| mist | #c4cfd6 | secondary text on dark fields, selection |
| water | #8ea4b1 | scrollbar, cold field base |
| slate | #56636c | secondary text, table labels, hairlines at 25–35% |
| slate-2 | #3b454c | dark bands (`.stone-dark`), primary buttons |
| ink | #1f2529 | headings, body text on stone |
| hot / hot-2 | #9e5a3d / #7a4029 | the hot pool only |

## Type

- **Display:** Tenor Sans 400, sentence case, tracking −0.012em, line-height 1.06, balanced (`.display`). The wordmark is the
  same face, uppercase and tracked 0.24em.
- **Text:** Albert Sans, 17–18.5px body at line-height 1.6–1.65. Table and field labels are 13px uppercase, tracked 0.14em.
- No eyebrow labels above headings.

## Composition

- Max width 1440, a 12-column grid at lg, gutters of 20/32/48px.
- Large untinted photos with generous stone margins, never filtered. Sections breathe at 96–144px.
- **Waterline:** a single hairline (`.waterline`) under the hero and above the photos; the hot-and-cold pair shares one at
  38% height.
- Corners are 2px on buttons and fields. No cards, no shadows on content.

## Components

- **Nav:** a stone bar that gains a hairline once the page scrolls. Holds the wordmark, three anchors, the phone number
  and Get a quote.
- **Hero:** 42/58 split, his lid-up photo on the right that surfaces once on load (`fill`, a clip-path rising like water).
  On mobile the photo comes first.
- **Reasons:** three rooms (wide photo plus text, text plus tall photo, then a slate band for "I make every one myself").
- **Pair:** two pools, cold (water to slate gradient) and hot (redwood gradient). Hover, focus or tap widens a side to
  1.7×; each side's link presets the quote form.
- **Specs:** a plain definition list with hairlines.
- **Gallery:** a 3-column wall that alternates wide and tall photos; tap opens a dialog with arrows and Escape.
- **Quote:** a slate band; Cold / Hot / A pair segmented choice; underlined fields. Sending opens a prefilled email.
- **PreviewMark:** a watermark until the site is paid for; set `NEXT_PUBLIC_LICENSED=true` to remove it.

## Motion

One authored moment, the hero photo filling on load, plus the pool widening. Expo ease-out throughout. Lenis smooth
scrolling. Everything is off under reduced motion.
