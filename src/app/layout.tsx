import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders, Permanent_Marker } from "next/font/google";
import { siteUrl } from "@/data/site";
import "./globals.css";

const stamp = Big_Shoulders({ subsets: ["latin"], variable: "--font-bigshoulders", axes: ["opsz"] });
const text = Archivo({ subsets: ["latin"], variable: "--font-archivo", axes: ["wdth"] });
const crayon = Permanent_Marker({ subsets: ["latin"], weight: "400", variable: "--font-marker" });

const description =
  "Premium handcrafted cold plunges made from California redwood, built start to finish in Santa Cruz, CA. Cold, hot, or both. Request a quote.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kold Krate · Handcrafted redwood cold plunges · Santa Cruz, CA",
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Kold Krate", title: "Kold Krate · Handcrafted redwood cold plunges", description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Kold Krate · Handcrafted redwood cold plunges", description },
};

export const viewport: Viewport = {
  themeColor: "#161210",
};

const CONTRACT = `
THESIS: Each tub presented like the best board in the lumberyard: stamped, tallied, crayon-marked and signed by the one man who built it. Refuses the plunge-brand default (dark lifestyle video, icy blue, spec-card grid) and his template's grey wash over the wood.
OWN-WORLD: redwood heartwood fields, grading-ink black, one cold lumber-crayon blue, crayon yellow tally marks; mill grade stamps in heavy condensed caps, kraft tally tags with staples and punched holes, end-grain rings. His photos untinted.
STORY: Visitors see the tub, learn what is built into it and that one maker builds each, choose cold, hot or both, and request a quote or call.
FIRST VIEWPORT: his open tub on film full-bleed; a giant mill stamp KOLD KRATE (his words around it) slams in upper left; H1 below; stapled kraft "Get a quote" tag and phone beside it.
FORM: assigned direction (5th of 7 on the grounded list: lumberyard grading), seed 2aa9d476.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kold Krate",
  url: siteUrl,
  email: "info@koldkrate.com",
  telephone: "+1-831-244-0822",
  description: "Handcrafted cold and hot plunges made from California redwood in Santa Cruz, CA.",
  address: { "@type": "PostalAddress", addressLocality: "Santa Cruz", addressRegion: "CA", addressCountry: "US" },
  sameAs: ["https://www.instagram.com/koldkrate/"],
  image: `${siteUrl}/photos/lid-up.jpg`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${stamp.variable} ${text.variable} ${crayon.variable} antialiased`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--${CONTRACT}-->` }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
