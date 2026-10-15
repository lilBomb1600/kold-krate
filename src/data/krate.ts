/**
 * Kold Krate, from his own site (koldkrate.com, checked October 2026) and his Instagram bio (@koldkrate).
 * Every claim here is his. No prices, dimensions, temperatures, lead times or delivery range are published, so
 * none appear on the site.
 */

export const krate = {
  name: "Kold Krate",
  place: "Santa Cruz, California",
  email: "info@koldkrate.com",
  phone: "(831) 244-0822",
  phoneHref: "tel:+18312440822",
  instagram: "https://www.instagram.com/koldkrate/",
  handle: "@koldkrate",
  // his tagline and promise, verbatim from his site
  tagline: "Premium Handcrafted Cold Plunges Made From Beautiful California Redwood",
  promise:
    "Handmade from start to finish in Santa Cruz, CA, it's the most spacious, most insulated, and most beautiful cold plunge on the market!",
  maker: "Every Kold Krate is personally built by me right here in Santa Cruz, CA.",
};

/** The six things his site lists, each tied to the part of the tub it lives in. */
export const features = [
  { key: "redwood", label: "California redwood", line: "Locally sourced, rock-solid construction that will last for decades." },
  { key: "foam", label: "2\"+ closed-cell spray foam", line: "Over two inches behind the boards keeps the temperature stable and cuts energy costs." },
  { key: "lid", label: "Insulated lid", line: "Holds the cold in and protects the tub from the elements." },
  { key: "volume", label: "More volume", line: "His words: the most spacious cold plunge on the market." },
  { key: "wifi", label: "Smart WiFi control", line: "Schedule and set the plunge temperature from anywhere." },
  { key: "ozone", label: "Ozone sanitation", line: "Keeps the water clear and fresh with minimal maintenance." },
] as const;

export type Plunge = "cold" | "hot" | "both";

export const plunges: Record<Plunge, { title: string; body: string }> = {
  cold: {
    title: "A cold plunge",
    body: "The one he's known for. Insulated walls and an insulated lid hold the cold, and WiFi control lets you set it from your phone.",
  },
  both: {
    title: "Cold and hot",
    body: "Want both at home? Put it on the quote and talk it through with him; every Krate is custom built.",
  },
  hot: {
    title: "A hot plunge",
    body: "His Instagram says it plainly: custom built cold and hot plunges. Ask about a hot build in the same redwood.",
  },
};

/** His photos, labeled for what each one shows. */
export const gallery = [
  { src: "/photos/lid-up.jpg", w: 1824, h: 1368, tag: "Lid up", alt: "A Kold Krate with its insulated lid lifted, clear water inside a redwood frame" },
  { src: "/photos/plunging.jpg", w: 1440, h: 1920, tag: "In use", alt: "A woman sitting in a Kold Krate cold plunge, seen from above" },
  { src: "/photos/closed.jpg", w: 1824, h: 1368, tag: "Closed up", alt: "A Kold Krate closed under its insulated lid, with a matching redwood equipment box" },
  { src: "/photos/front.jpg", w: 1368, h: 1824, tag: "Front", alt: "Front view of a closed Kold Krate on a tiled patio" },
  { src: "/photos/plunging-side.jpg", w: 1824, h: 1368, tag: "Lid back", alt: "A woman relaxing in a Kold Krate with the lid folded back" },
  { src: "/photos/open.jpg", w: 1368, h: 1824, tag: "Open", alt: "A Kold Krate with the lid open, seen from the front" },
  { src: "/photos/lid-deck.jpg", w: 1440, h: 1920, tag: "Detail", alt: "Redwood construction detail on a closed Kold Krate" },
  { src: "/photos/steps.jpg", w: 1008, h: 756, tag: "With steps", alt: "A Kold Krate with built-in redwood steps beside a house" },
];
