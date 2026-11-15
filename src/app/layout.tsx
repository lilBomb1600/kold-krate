import type { Metadata, Viewport } from "next";
import { Albert_Sans, Tenor_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { PreviewMark } from "@/components/PreviewMark";
import { meta } from "@/data/krate";
import { siteJsonLd } from "@/lib/seo/jsonld";
import { rootMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const display = Tenor_Sans({ subsets: ["latin"], weight: "400", variable: "--font-tenor" });
const text = Albert_Sans({ subsets: ["latin"], variable: "--font-albert" });

// SEO kit (LAUNCH-STANDARD.md): noindex while NEXT_PUBLIC_LICENSED is unset; page.tsx also keeps the holding page noindex.
export const metadata: Metadata = rootMetadata({ title: meta.title, description: meta.description });

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} antialiased`}>
      <body>
        <JsonLd data={siteJsonLd()} />
        {children}
        <PreviewMark />
      </body>
    </html>
  );
}
