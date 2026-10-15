import { Phone } from "lucide-react";
import { MillStamp } from "./MillStamp";
import { QuoteTagLink } from "./TagButton";
import { krate } from "@/data/krate";

/**
 * The first viewport: his tub on film, the mill stamp landing over it, the line in plain words, and the quote tag.
 * Portrait phones get his portrait photo instead of the landscape film, so the tub stays whole and sharp.
 */
export function Hero() {
  return (
    <section id="top" aria-label="Kold Krate" className="relative h-[100svh] min-h-[660px] overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover tall:hidden"
        src="/film/hero.mp4"
        poster="/film/hero.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/open.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 hidden h-full w-full object-cover object-[50%_60%] tall:block motion-safe:animate-[hero-drift_18s_ease-out_both]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgb(22_18_16/.88)_0%,rgb(22_18_16/.62)_34%,rgb(22_18_16/0)_64%)] tall:bg-[linear-gradient(180deg,rgb(22_18_16/.78)_0%,rgb(22_18_16/.35)_24%,rgb(22_18_16/.08)_40%,rgb(22_18_16/.2)_55%,rgb(22_18_16/.92)_100%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgb(22_18_16/.7),transparent)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1360px] flex-col justify-center px-5 pb-10 pt-24 sm:px-8 tall:justify-between tall:pt-24">
        <div className="[--rot-from:-10deg] [--rot:-4deg] motion-safe:animate-[stamp-slam_.75s_var(--ease-out-expo)_.35s_both] origin-[30%_50%]" style={{ transform: "rotate(-4deg)" }}>
          <MillStamp className="text-[clamp(44px,8.2vw,124px)]" />
        </div>

        <div className="mt-10 max-w-[620px] motion-safe:animate-[rise_.9s_var(--ease-out-expo)_1.05s_both] tall:mt-0">
          <h1 className="text-[clamp(28px,3.1vw,44px)] font-bold leading-[1.08] tracking-[-0.015em] text-sap [font-stretch:88%] [text-wrap:balance]">
            Handcrafted{" "}
            <span className="relative inline-block">
              cold
              <svg viewBox="0 0 120 18" preserveAspectRatio="none" className="absolute -bottom-[0.18em] left-[-4%] h-[0.38em] w-[108%] overflow-visible" aria-hidden>
                <path
                  d="M3 11 C 25 5, 52 15, 78 8 S 110 9, 117 6"
                  fill="none"
                  stroke="var(--color-cold)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="url(#crayon-tex)"
                  className="[--len:140] [stroke-dasharray:140] motion-safe:animate-[crayon-draw_.7s_var(--ease-out-quart)_1.5s_both]"
                />
              </svg>
            </span>{" "}
            plunges, built by hand from California redwood.
          </h1>
          <p className="mt-5 max-w-[46ch] text-[16.5px] leading-relaxed text-sap/88 sm:text-[18px]">
            Made start to finish in Santa Cruz by one builder. Cold, hot, or both, and every one its own piece.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <QuoteTagLink />
            <a href={krate.phoneHref} className="inline-flex items-center gap-2.5 text-[17px] font-semibold text-sap hover:underline">
              <Phone size={18} aria-hidden /> {krate.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
