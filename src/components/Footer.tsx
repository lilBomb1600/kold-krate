import { MillStamp } from "./MillStamp";
import { krate } from "@/data/krate";

export function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div style={{ transform: "rotate(-3deg)" }} className="origin-left">
            <MillStamp className="text-[clamp(44px,6vw,84px)]" />
          </div>
          <div className="grid gap-8 text-[15.5px] text-sap/80 sm:grid-cols-2 md:gap-16">
            <div className="space-y-2">
              <a href={krate.phoneHref} className="block font-bold text-sap hover:underline">
                {krate.phone}
              </a>
              <a href={`mailto:${krate.email}`} className="block hover:underline">
                {krate.email}
              </a>
              <a href={krate.instagram} target="_blank" rel="noopener noreferrer" className="block hover:underline">
                {krate.handle}
              </a>
            </div>
            <nav aria-label="Footer" className="space-y-2">
              <a href="#krate" className="block hover:underline">The Krate</a>
              <a href="#temp" className="block hover:underline">Cold or hot</a>
              <a href="#maker" className="block hover:underline">Built by hand</a>
              <a href="#quote" className="block hover:underline">Request a quote</a>
            </nav>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-sap/10 pt-6 text-[13px] text-sap/50 md:flex-row md:justify-between">
          <p>© 2026 Kold Krate. Handcrafted in Santa Cruz, California.</p>
          <p>Photos by Kold Krate; the opening film was animated from his photo with AI. A concept site by Arman Digital, not affiliated with Kold Krate.</p>
        </div>
      </div>
    </footer>
  );
}
