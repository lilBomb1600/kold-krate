/**
 * Kold Krate. Facts come from his site (koldkrate.com), his Instagram bio (@koldkrate) and what he told Arman about
 * why people should buy his: they look nicer, they're more spacious, and they're handmade locally by a real person
 * who cares about making each one the best he can. The site speaks in his voice, first person.
 *
 * Not published yet, so not stated anywhere: prices, inside dimensions, gallons, temperatures, lead times, delivery
 * range. Fill the `maker` and `insideSize` slots below when he sends them; the page shows them as soon as they exist.
 */

export const krate = {
  name: "Kold Krate",
  place: "Santa Cruz, California",
  email: "info@koldkrate.com",
  phone: "(831) 244-0822",
  phoneHref: "tel:+18312440822",
  instagram: "https://www.instagram.com/koldkrate/",
  handle: "@koldkrate",
};

/** Waiting on him: his first name and a photo of him in the shop. */
export const maker: { name: string | null; photo: { src: string; w: number; h: number; alt: string } | null } = {
  name: null,
  photo: null,
};

/** Waiting on him: the inside measurements, e.g. "60 × 34 in., 28 in. deep". */
export const insideSize: string | null = null;

/** What goes into every one, from his site, in his words where he has them. */
export const specs: { label: string; value: string }[] = [
  { label: "Wood", value: "California redwood, sourced locally. Built to last for decades." },
  { label: "Insulation", value: "Over two inches of closed-cell spray foam behind the boards." },
  { label: "Lid", value: "Insulated. It holds the temperature and keeps the weather out." },
  { label: "Temperature", value: "WiFi control. Set it and schedule it from your phone." },
  { label: "Water", value: "Ozone sanitation keeps it clear with very little upkeep." },
  { label: "Equipment", value: "Tucked into a matching redwood box on the side." },
  { label: "Steps", value: "Matching redwood steps, if you want them." },
];

export type Plunge = "cold" | "hot" | "pair";

export const plungeNames: Record<Plunge, string> = { cold: "Cold plunge", hot: "Hot plunge", pair: "A hot and cold pair" };

/** His photos. */
export const photos = {
  lidUp: { src: "/photos/lid-up.jpg", w: 1824, h: 1368, alt: "A Kold Krate with the insulated lid lifted and clear water inside the redwood" },
  closed: { src: "/photos/closed.jpg", w: 1824, h: 1368, alt: "A Kold Krate closed under its lid, with the matching redwood equipment box beside it" },
  plunging: { src: "/photos/plunging.jpg", w: 1440, h: 1920, alt: "A woman sitting in a Kold Krate with her legs stretched out, seen from above" },
  lidDeck: { src: "/photos/lid-deck.jpg", w: 1440, h: 1920, alt: "The redwood deck and boards on the side of a Kold Krate" },
  front: { src: "/photos/front.jpg", w: 1368, h: 1824, alt: "A closed Kold Krate on a tiled patio" },
  open: { src: "/photos/open.jpg", w: 1368, h: 1824, alt: "A Kold Krate with the lid up, seen from the front" },
  plungingSide: { src: "/photos/plunging-side.jpg", w: 1824, h: 1368, alt: "A woman relaxing in a Kold Krate with the lid folded back" },
  steps: { src: "/photos/steps.jpg", w: 1008, h: 756, alt: "A Kold Krate with redwood steps and its equipment box beside a house" },
};

/** The photos not already shown higher up the page, laid out wide, tall, tall, wide. */
export const gallery = [photos.plungingSide, photos.front, photos.open, photos.steps];
