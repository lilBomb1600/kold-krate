import { ChoiceProvider } from "@/components/Choice";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Pair } from "@/components/Pair";
import { Quote } from "@/components/Quote";
import { Reasons } from "@/components/Reasons";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Specs } from "@/components/Specs";
import { krate, meta } from "@/data/krate";
import { pageMetadata, privatePageMetadata } from "@/lib/seo/metadata";

/** While the redesign is being finished, the live link shows a holding page. Set to false to show the site. */
const UNDER_CONSTRUCTION = true;

// SEO kit: the holding page stays noindex even if NEXT_PUBLIC_LICENSED gets set before the relaunch.
export const metadata = {
  ...pageMetadata({ title: meta.title, description: meta.description, path: "/" }),
  ...(UNDER_CONSTRUCTION ? privatePageMetadata : {}),
};

export default function Home() {
  return UNDER_CONSTRUCTION ? <UnderConstruction /> : <Site />;
}

function UnderConstruction() {
  return (
    <main className="stone flex min-h-svh flex-col justify-between px-6 py-10 sm:px-12 sm:py-14">
      <p className="font-display text-[15px] tracking-[0.24em] text-ink uppercase">Kold Krate</p>
      <div>
        <h1 className="display text-[clamp(36px,5vw,64px)] text-ink">Under construction</h1>
        <p className="mt-5 max-w-[40ch] text-[18px] leading-[1.6] text-slate">This page is being worked on. Check back soon.</p>
      </div>
      <p className="tnum text-[15px] text-slate">
        <a href={krate.phoneHref} className="hover:text-ink hover:underline">
          {krate.phone}
        </a>
        <span className="mx-3" aria-hidden>
          ·
        </span>
        <a href={`mailto:${krate.email}`} className="hover:text-ink hover:underline">
          {krate.email}
        </a>
      </p>
    </main>
  );
}

function Site() {
  return (
    <ChoiceProvider>
      <SmoothScroll />
      <Nav />
      <main>
        <Hero />
        <Reasons />
        <Pair />
        <Specs />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </ChoiceProvider>
  );
}
