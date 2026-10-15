"use client";

import clsx from "clsx";
import { useRef } from "react";
import { plunges, type Plunge } from "@/data/krate";
import { useChoice } from "./Choice";
import { glideTo } from "./SmoothScroll";

const STOPS: { id: Plunge; label: string; level: number }[] = [
  { id: "hot", label: "Hot", level: 0.86 },
  { id: "both", label: "Both", level: 0.52 },
  { id: "cold", label: "Cold", level: 0.18 },
];

/**
 * Cold, hot, or both, set on a lumber-crayon thermometer drawn on a kraft strip. Drag the column, click a mark,
 * or use the arrow keys; the choice rides down into the quote tag. No temperatures are printed because he has not
 * published any.
 */
export function ColdHot() {
  const { plunge, setPlunge } = useChoice();
  const track = useRef<HTMLDivElement>(null);
  const level = STOPS.find((s) => s.id === plunge)!.level;
  const hot = plunge === "hot";
  const both = plunge === "both";

  const fromPointer = (clientY: number) => {
    const r = track.current!.getBoundingClientRect();
    const v = 1 - (clientY - r.top) / r.height;
    const nearest = STOPS.reduce((a, s) => (Math.abs(s.level - v) < Math.abs(a.level - v) ? s : a));
    setPlunge(nearest.id);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const i = STOPS.findIndex((s) => s.id === plunge);
    if (e.key === "ArrowUp" || e.key === "ArrowRight") {
      e.preventDefault();
      setPlunge(STOPS[Math.max(0, i - 1)].id);
    }
    if (e.key === "ArrowDown" || e.key === "ArrowLeft") {
      e.preventDefault();
      setPlunge(STOPS[Math.min(STOPS.length - 1, i + 1)].id);
    }
  };

  const fill = hot ? "var(--color-crayon)" : both ? "url(#both-fill)" : "var(--color-cold)";

  return (
    <section id="temp" className="grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1360px] items-center gap-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-20">
        <div>
          <h2 className="stamp-type text-[clamp(48px,7vw,104px)] text-sap">
            Cold, hot,
            <br />
            or both
          </h2>
          <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-sap/88">
            Every Krate is custom built, cold or hot. Set the thermometer to what you&apos;re after and it goes straight onto your quote.
          </p>
        </div>

        {/* the thermometer */}
        <div className="flex items-stretch justify-center gap-6">
          <div
            ref={track}
            className="tag-wrap relative h-[440px] w-[120px] cursor-ns-resize touch-none"
            onPointerDown={(e) => {
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              fromPointer(e.clientY);
            }}
            onPointerMove={(e) => e.buttons === 1 && fromPointer(e.clientY)}
            aria-hidden
          >
            <div className="tag absolute inset-0 [clip-path:polygon(0_14px,14px_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] [mask:none] [-webkit-mask:none]" />
            <svg viewBox="0 0 120 440" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="both-fill" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="var(--color-cold)" />
                  <stop offset="1" stopColor="var(--color-crayon)" />
                </linearGradient>
              </defs>
              {/* ticks */}
              {Array.from({ length: 15 }, (_, i) => (
                <line key={i} x1={i % 2 ? 84 : 78} x2={94} y1={52 + i * 22} y2={52 + i * 22} stroke="var(--color-kraft-ink)" strokeWidth="2" strokeLinecap="round" opacity=".55" />
              ))}
              {/* glass */}
              <rect x="44" y="34" width="26" height="330" rx="13" fill="rgb(255 255 255 / .35)" stroke="var(--color-kraft-ink)" strokeWidth="3" filter="url(#crayon-tex)" />
              <circle cx="57" cy="388" r="30" fill={fill} stroke="var(--color-kraft-ink)" strokeWidth="3" filter="url(#crayon-tex)" style={{ transition: "fill .4s" }} />
              {/* column */}
              <rect
                x="50"
                width="14"
                rx="7"
                fill={fill}
                y={34}
                height={344}
                filter="url(#crayon-tex)"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "50% 100%",
                  transform: `scaleY(${(330 * level + 14) / 344})`,
                  transition: "transform .55s var(--ease-out-expo), fill .4s",
                }}
              />
            </svg>
          </div>
          <div role="radiogroup" aria-label="Plunge type" className="relative h-[440px] w-[96px]" onKeyDown={onKey}>
            {STOPS.map((s) => (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={plunge === s.id}
                tabIndex={plunge === s.id ? 0 : -1}
                onClick={() => setPlunge(s.id)}
                className={clsx(
                  "stamp-type absolute left-0 -translate-y-1/2 px-1 text-left text-[34px] tracking-[0.02em] transition-[color,transform] duration-300",
                  plunge === s.id ? "translate-x-1 text-sap" : "text-sap/45 hover:text-sap/80"
                )}
                style={{ top: `${(364 - 330 * s.level) / 4.4}%` }}
              >
                {s.label}
                {plunge === s.id && (
                  <svg viewBox="0 0 60 12" className="absolute -bottom-1 left-0 h-[10px] w-full overflow-visible" aria-hidden>
                    <path d="M2 7 C 18 3, 36 10, 58 5" fill="none" stroke={s.id === "cold" ? "var(--color-cold)" : "var(--color-crayon)"} strokeWidth="4" strokeLinecap="round" filter="url(#crayon-tex)" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        <div aria-live="polite">
          <h3 className="stamp-type text-[clamp(40px,5vw,72px)] text-sap">{plunges[plunge].title}</h3>
          <p className="mt-4 max-w-[40ch] text-[17px] leading-relaxed text-sap/88">{plunges[plunge].body}</p>
          <button type="button" onClick={() => glideTo("quote")} className="group mt-8 inline-flex items-center gap-3 text-[17px] font-bold text-sap">
            <span className="border-b-2 border-crayon pb-0.5 transition-colors group-hover:border-sap">Put it on my quote</span>
            <svg viewBox="0 0 34 14" className="w-[28px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
              <path d="M1 7 H 29 M 22 1 L 31 7 L 22 13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
