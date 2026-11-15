/**
 * ADAPT ME: the only kit file you edit per project.
 *
 * Kold Krate: every fact comes from src/data/krate.ts (his site koldkrate.com and his Instagram bio). He builds
 * redwood plunges (a maker, not a spa), so the type is plain LocalBusiness, not DaySpa. No prices, sizes, specs,
 * reviews or delivery range are published, so none are here. ON HOLD: page.tsx shows "Under construction".
 */
import { krate, meta, photos } from "@/data/krate";
import { siteUrl } from "@/data/site";
import type { BusinessFacts, Locale, OgImage, PageEntry, ServiceFact } from "./types";

/**
 * Origin used when NEXT_PUBLIC_SITE_URL isn't set: the *.vercel.app URL while it's a preview.
 * On launch set NEXT_PUBLIC_SITE_URL=https://www.client.com in Vercel (or the shell for a static export) instead of editing this.
 */
export const FALLBACK_URL: string = siteUrl;

export const LOCALES: Locale[] = ["en"];
export const DEFAULT_LOCALE: Locale = "en";

/** src/app/opengraph-image.jpg (Next file convention, 1200x630), served at /opengraph-image.jpg. */
export const OG_IMAGE: OgImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: meta.ogAlt,
};

export const facts: BusinessFacts = {
  name: krate.name,
  // A local maker: no closer true schema.org subtype (not a DaySpa).
  type: "LocalBusiness",
  description: meta.about,
  telephone: krate.phoneHref.replace(/^tel:/, ""),
  email: krate.email,
  // krate.place is "Santa Cruz, California"; no street is published.
  address: { locality: krate.place.split(",")[0].trim(), region: "CA" },
  image: [photos.lidUp.src],
  sameAs: [krate.instagram],
};

/** No service list is published (he sells the plunges he builds). */
export const services: ServiceFact[] = [];

/** Every indexable URL (the sitemap stays empty anyway until NEXT_PUBLIC_LICENSED=true). */
export const pages: PageEntry[] = [{ path: "/" }];
