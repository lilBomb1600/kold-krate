import Image from "next/image";
import { krate, photos } from "@/data/krate";

/** His open tub fills the right side and surfaces like water on load; his promise sits on the stone beside it. */
export function Hero() {
  const p = photos.lidUp;
  return (
    <section id="top" className="stone relative pt-16">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[42fr_58fr]">
        <div className="relative order-2 flex flex-col justify-end px-5 pt-10 pb-14 sm:px-8 lg:order-1 lg:px-12 lg:pt-16 lg:pb-20">
          <h1 className="display max-w-[13ch] text-[clamp(40px,5vw,74px)] text-ink">Redwood cold plunges, built by hand in Santa Cruz.</h1>
          <p className="mt-7 max-w-[38ch] text-[18.5px] leading-[1.6] text-slate">
            I build every Kold Krate myself. They&apos;re roomier than the steel and plastic tubs you&apos;ll find online, and they look a
            whole lot better in your yard.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#quote"
              className="rounded-[2px] bg-slate-2 px-7 py-4 text-[16px] font-medium text-foam transition-colors duration-300 hover:bg-ink"
            >
              Get a quote
            </a>
            <a href={krate.phoneHref} className="tnum text-[16px] text-ink underline decoration-slate/40 hover:decoration-ink">
              or call {krate.phone}
            </a>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:order-2 lg:aspect-auto">
          <Image
            src={p.src}
            alt={p.alt}
            width={p.w}
            height={p.h}
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="absolute inset-0 h-full w-full object-cover object-[62%_50%] motion-safe:animate-[fill_1.8s_var(--ease-out-expo)_both]"
          />
        </div>
      </div>
      <div className="waterline" />
    </section>
  );
}
