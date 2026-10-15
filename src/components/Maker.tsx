import { EndGrain } from "./Crayon";
import { MillStamp } from "./MillStamp";
import { krate } from "@/data/krate";

/** The maker: his own sentence at full size, over the end of a redwood log, with two of his photos stapled up. */
export function Maker() {
  return (
    <section id="maker" className="grain-heart relative overflow-hidden px-5 py-24 sm:px-8 lg:py-36">
      <EndGrain className="pointer-events-none absolute -right-[14%] top-1/2 w-[min(900px,110vw)] -translate-y-1/2 text-sap/[.13] lg:-right-[6%]" />
      <div className="relative mx-auto grid max-w-[1360px] gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <blockquote>
            <p className="stamp-type text-[clamp(44px,6.2vw,92px)] normal-case leading-[0.92] text-sap">
              &ldquo;{krate.maker}&rdquo;
            </p>
          </blockquote>
          <p className="crayon mt-5 text-[22px] text-crayon">the builder, Kold Krate</p>
          <div className="mt-10 max-w-[56ch] space-y-4 text-[17.5px] leading-relaxed text-sap/86">
            <p>As a family company, they take pride in building the finest cold plunge experience possible: premium California redwood, professional-grade insulation, and careful construction meant to give years of reliable service.</p>
            <p>When you buy a Kold Krate you&apos;re getting a handcrafted piece, not a unit off a line.</p>
          </div>
          <div className="mt-10 [--rot:-6deg]" style={{ transform: "rotate(-6deg)" }}>
            <MillStamp tone="cold" name="Family owned" top="Kold Krate · Santa Cruz" bottom="& operated" className="text-[clamp(44px,5.4vw,76px)]" />
          </div>
        </div>

        <div className="relative mx-auto h-[560px] w-full max-w-[520px] sm:h-[620px]">
          <Print src="/photos/steps.jpg" alt="A Kold Krate with built-in redwood steps beside a house" label="With steps" className="left-0 top-0 w-[72%] rotate-[-4deg]" aspect="aspect-[4/3]" />
          <Print src="/photos/lid-deck.jpg" alt="Redwood construction detail on a closed Kold Krate" label="The detail" className="bottom-0 right-0 w-[58%] rotate-[3.5deg]" aspect="aspect-[3/4]" />
        </div>
      </div>
    </section>
  );
}

function Print({ src, alt, label, className, aspect }: { src: string; alt: string; label: string; className: string; aspect: string }) {
  return (
    <figure className={`absolute ${className}`}>
      <div className="bg-[#f4ecdd] p-2.5 pb-10 shadow-[0_24px_40px_-12px_rgb(0_0_0/.6),0_2px_4px_rgb(0_0_0/.3)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={`${aspect} w-full object-cover`} loading="lazy" />
        <figcaption className="crayon absolute bottom-2.5 left-4 text-[19px] text-kraft-ink">{label}</figcaption>
      </div>
      <span className="staple left-1/2 top-[-3px] -translate-x-1/2 rotate-[2deg]" aria-hidden />
    </figure>
  );
}
