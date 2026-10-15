import { features, krate } from "@/data/krate";
import { CrayonCheck } from "./Crayon";

/**
 * What's built in: his tub with each feature pinned to the part it lives in (leader lines in lumber crayon), and
 * the full list on a stapled tally tag. Positions are percentages of the 4:3 photo.
 */
const PINS = [
  { n: 1, label: "Insulated lid", line: "Holds the cold in, keeps the weather out.", pin: [38, 15], at: [5, 3] },
  { n: 2, label: "More volume", line: "“The most spacious cold plunge on the market.”", pin: [61, 37], at: [64, 5] },
  { n: 3, label: "2\"+ spray foam", line: "Closed-cell, behind every board.", pin: [87, 58], at: [66, 82] },
  { n: 4, label: "California redwood", line: "Locally sourced, built to last decades.", pin: [46, 74], at: [6, 84] },
  { n: 5, label: "Equipment box", line: "In matching redwood, beside the tub.", pin: [15, 53], at: [2, 60] },
] as const;

export function BuiltIn() {
  return (
    <section id="krate" className="relative bg-ink px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1360px]">
        <div className="max-w-[760px]">
          <h2 className="stamp-type text-[clamp(48px,7vw,104px)] text-sap">What&apos;s built in</h2>
          <p className="mt-5 max-w-[56ch] text-[18px] leading-relaxed text-sap/80">
            {krate.promise.replace("!", ".")} Here is where each of those claims lives on the tub.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          {/* the pinned photo */}
          <figure className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-ink-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/photos/lid-up.jpg" alt="A Kold Krate with its insulated lid lifted" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <svg viewBox="0 0 100 75" preserveAspectRatio="none" className="absolute inset-0 hidden h-full w-full md:block" aria-hidden>
                {PINS.map((p) => (
                  <line
                    key={p.n}
                    x1={p.pin[0]}
                    y1={p.pin[1] * 0.75}
                    x2={p.at[0] + 1.5}
                    y2={p.at[1] * 0.75 + 2}
                    stroke="var(--color-crayon)"
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    strokeDasharray="1.4 1"
                    vectorEffect="non-scaling-stroke"
                    style={{ strokeWidth: 2.5 }}
                  />
                ))}
              </svg>
              {PINS.map((p) => (
                <span
                  key={p.n}
                  className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crayon font-bold text-ink shadow-[0_4px_10px_rgb(0_0_0/.45)] ring-4 ring-ink/30"
                  style={{ left: `${p.pin[0]}%`, top: `${p.pin[1]}%` }}
                  aria-hidden
                >
                  <span className="crayon text-[17px] leading-none">{p.n}</span>
                </span>
              ))}
              {PINS.map((p) => (
                <span
                  key={`l${p.n}`}
                  className="tag-wrap absolute hidden w-[30%] md:block"
                  style={{ left: `${p.at[0]}%`, top: `${p.at[1]}%` }}
                >
                  <span className="block bg-kraft px-3.5 py-2.5 text-kraft-ink [clip-path:polygon(0_0,100%_0,100%_100%,8px_100%,0_calc(100%-8px))]">
                    <span className="stamp-type block text-[19px] leading-none">
                      <span className="crayon mr-1.5 text-[15px] text-redwood">{p.n}</span>
                      {p.label}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-snug">{p.line}</span>
                  </span>
                </span>
              ))}
            </div>
            {/* phones: the same pins as a numbered list */}
            <ol className="mt-6 grid gap-3 md:hidden">
              {PINS.map((p) => (
                <li key={p.n} className="flex gap-3">
                  <span className="crayon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crayon text-[15px] text-ink">{p.n}</span>
                  <span className="text-[15.5px] leading-snug text-sap/85">
                    <b className="font-bold text-sap">{p.label}.</b> {p.line}
                  </span>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 text-[13px] text-sap/55">His photo, untouched. Pins show where each feature lives.</figcaption>
          </figure>

          {/* the tally tag */}
          <div className="tag-wrap relative mx-auto w-full max-w-[460px] rotate-[1.5deg] lg:mt-6">
            <div className="tag tag-ring px-7 pb-8 pt-16 sm:px-9">
              <span className="staple left-[60%] top-[24px] rotate-[-5deg]" aria-hidden />
              <div className="flex items-baseline justify-between border-b-2 border-kraft-ink/70 pb-2">
                <span className="stamp-type text-[34px] leading-none">Tally</span>
                <span className="crayon text-[18px] text-redwood">Kold Krate</span>
              </div>
              <dl className="mt-2">
                {features.map((f) => (
                  <div key={f.key} className="grid grid-cols-[26px_1fr] gap-x-3 border-b border-dashed border-kraft-ink/30 py-3">
                    <CrayonCheck className="mt-0.5 h-[22px] w-[22px] text-cold" />
                    <div>
                      <dt className="stamp-type text-[21px] leading-none">{f.label}</dt>
                      <dd className="mt-1 text-[14px] leading-snug text-kraft-ink/85">{f.line}</dd>
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-[26px_1fr] gap-x-3 pt-3">
                  <CrayonCheck className="mt-0.5 h-[22px] w-[22px] text-cold" />
                  <div>
                    <dt className="stamp-type text-[21px] leading-none">Built by hand</dt>
                    <dd className="mt-1 text-[14px] leading-snug text-kraft-ink/85">Start to finish, in Santa Cruz, CA.</dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
