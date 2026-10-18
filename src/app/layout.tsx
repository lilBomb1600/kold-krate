import type { Metadata, Viewport } from "next";
import { Albert_Sans, Tenor_Sans } from "next/font/google";
import { siteUrl } from "@/data/site";
import { PreviewMark } from "@/components/PreviewMark";
import "./globals.css";

const display = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--font-tenor" });
const text = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });

const description =
  "Redwood cold plunges built by hand in Santa Cruz. Roomier than the steel and plastic tubs online, and a lot better looking. Hot plunges too.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kold Krate · Redwood cold plunges, built by hand in Santa Cruz",
  description,
  alternates: { canonical: "/" },
  // keep it out of search results while it is under construction
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "Kold Krate", title: "Kold Krate · Redwood cold plunges, built by hand in Santa Cruz", description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Kold Krate · Redwood cold plunges, built by hand in Santa Cruz", description },
};

export const viewport: Viewport = {
  themeColor: "#e7eaec",
};

/* Design contract (kept in the source only; the prospect can read anything shipped in the page):
THESIS: His tubs shown the way a great bathhouse shows its pools: honed gray stone, still water, nothing extra. Refuses the
plunge-brand default (dark lifestyle video, icy neon blue, spec-card grid, health claims) and the lumberyard costume he rejected.
OWN-WORLD: cool stone grays, mist and water blue-gray, slate; one ink; the redwood in his photos is the only warmth, plus one
hot field on the pair. Tenor Sans display, Albert Sans text, hairline waterlines, large untinted photos with generous stone margins.
STORY: Visitors see a beautiful tub, learn why his beats the rest (looks better, more room, built by him), see hot and cold side
by side, and ask for a quote in his own words.
FIRST VIEWPORT: lid-up tub photo filling the right 58%, surfacing like water on load; headline, his two-sentence promise, Get a
quote and phone at left on stone; the waterline under it all.
FORM: The Stone Bathhouse, my top grounded candidate (picked for him), seed 9513e5dd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every
shipping raster carrying its provenance
*/

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kold Krate",
  url: siteUrl,
  email: "info@koldkrate.com",
  telephone: "+1-831-244-0822",
  description: "Cold and hot plunges built by hand from California redwood in Santa Cruz, CA.",
  address: { "@type": "PostalAddress", addressLocality: "Santa Cruz", addressRegion: "CA", addressCountry: "US" },
  sameAs: ["https://www.instagram.com/koldkrate/"],
  image: `${siteUrl}/photos/lid-up.jpg`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
        <PreviewMark />
      </body>
    </html>
  );
}
