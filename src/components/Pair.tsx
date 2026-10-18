"use client";

import clsx from "clsx";
import { useState } from "react";
import type { Plunge } from "@/data/krate";
import { useChoice } from "./Choice";

const sides = [
  { key: "cold" as const, word: "Cold", line: "The one I'm known for.", ask: "Ask about a cold plunge", field: "bg-[linear-gradient(160deg,#9db1bd,#6f8794)]" },
  { key: "hot" as const, word: "Hot", line: "Same redwood, same build, kept hot.", ask: "Ask about a hot plunge", field: "bg-[linear-gradient(160deg,#a8633f,#7a4029)]" },
];

/**
 * Hot and cold as two pools side by side, joined by one waterline. Hover, focus or tap a side and it widens, the way
 * you go back and forth between them; each side's link carries its choice into the quote form.
 */
export function Pair() {
  const { setPlunge } = useChoice();
  const [active, setActive] = useState<Plunge | null>(null);

  return (
    <section id="pair" className="stone scroll-mt-16">
      <div className="mx-auto max-w-[1440px] px-5 pt-24 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <h2 className="display text-[clamp(30px,3.6vw,52px)] text-ink lg:col-span-6">Hot and cold, side by side.</h2>
          <p className="max-w-[42ch] text-[17.5px] leading-[1.65] text-slate lg:col-span-5 lg:col-start-8">
            I build hot plunges too, in the same redwood. Set one next to your cold plunge and go back and forth.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1440px] px-5 sm:px-8 lg:px-12" onMouseLeave={() => setActive(null)}>
        <div className="relative flex flex-col gap-1 sm:h-[min(72vh,640px)] sm:flex-row">
          {sides.map((s) => (
            <div
              key={s.key}
              onMouseEnter={() => setActive(s.key)}
              onFocus={() => setActive(s.key)}
              onClick={() => setActive(s.key)}
              className={clsx(
                "relative flex min-h-[46vh] flex-col justify-between overflow-hidden p-7 text-foam transition-[flex-grow] duration-700 ease-[var(--ease-out-expo)] sm:min-h-0 sm:p-10 lg:p-14",
                s.field,
                active === null ? "sm:flex-1" : active === s.key ? "sm:grow-[1.7] sm:basis-0" : "sm:grow sm:basis-0"
              )}
            >
              <span className="display text-[clamp(72px,10vw,160px)] leading-none">{s.word}</span>
              <div>
                <p className="max-w-[30ch] text-[18px] leading-[1.5] text-foam/90">{s.line}</p>
                <a
                  href="#quote"
                  onClick={() => setPlunge(s.key)}
                  className="mt-5 inline-block text-[15.5px] text-foam underline decoration-foam/50 underline-offset-4 hover:decoration-foam"
                >
                  {s.ask}
                </a>
              </div>
            </div>
          ))}
          {/* the waterline both pools share */}
          <div className="pointer-events-none absolute inset-x-0 top-[38%] hidden h-px bg-foam/35 sm:block" aria-hidden />
        </div>
        <p className="mt-6 text-[16px] text-slate">
          Want both?{" "}
          <a href="#quote" onClick={() => setPlunge("pair")} className="text-ink underline decoration-slate/40 hover:decoration-ink">
            Ask me about building them as a pair.
          </a>
        </p>
      </div>
    </section>
  );
}
