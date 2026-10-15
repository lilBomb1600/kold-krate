import clsx from "clsx";

/**
 * The SVG filters every stamp shares: "ink" roughens the edges and drops speckles out of the fill, the way a
 * rubber grade stamp leaves an uneven impression on rough-sawn redwood. Render once per page.
 */
export function InkDefs() {
  return (
    <svg width="0" height="0" aria-hidden className="absolute">
      <defs>
        <filter id="ink" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" result="rough" />
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="3" result="blotch" />
          <feColorMatrix in="blotch" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 1.9" result="mask" />
          <feComposite in="rough" in2="mask" operator="in" />
        </filter>
        <filter id="crayon-tex" x="-5%" y="-20%" width="110%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="11" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2" result="d" />
          <feTurbulence type="turbulence" baseFrequency="0.6" numOctaves="1" seed="5" result="g" />
          <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.6 1.5" result="gm" />
          <feComposite in="d" in2="gm" operator="in" />
        </filter>
      </defs>
    </svg>
  );
}

/**
 * A lumber-mill grade stamp, set in his own words: a double-ruled box, the name in heavy condensed caps, a mill
 * mark on the left, and his place and material along the rules. Sized by font-size (em).
 */
export function MillStamp({
  className,
  tone = "sap",
  name = "Kold Krate",
  top = "Handcrafted · Santa Cruz, CA",
  bottom = "Premium California Redwood",
  compact = false,
}: {
  className?: string;
  tone?: "sap" | "ink" | "cold";
  name?: string;
  top?: string;
  bottom?: string;
  /** just the boxed name, for small sizes where the rules would be unreadable */
  compact?: boolean;
}) {
  const color = tone === "sap" ? "var(--color-sap)" : tone === "ink" ? "var(--color-ink)" : "var(--color-cold)";
  if (compact) {
    return (
      <span className={clsx("inline-block select-none border-[0.09em] border-current p-[0.06em]", className)} style={{ color }} aria-label={name}>
        <span className="stamp-type block border-[0.035em] border-current px-[0.16em] pb-[0.04em] pt-[0.08em] whitespace-nowrap">{name}</span>
      </span>
    );
  }
  return (
    <div className={clsx("inline-block select-none", className)} style={{ color, filter: "url(#ink)" }} role="img" aria-label={`${name}, ${top}, ${bottom}`}>
      <div className="relative border-[0.085em] border-current p-[0.07em]">
        <div className="flex items-stretch border-[0.03em] border-current">
          {/* the mill mark: a redwood log end in a box, where a mill prints its number */}
          <div className="flex w-[1.05em] shrink-0 items-center justify-center border-r-[0.03em] border-current">
            <svg viewBox="0 0 40 40" className="w-[0.72em]" aria-hidden>
              <g fill="none" stroke="currentColor" strokeWidth="2.6">
                <ellipse cx="20" cy="20" rx="17" ry="16" />
                <ellipse cx="19" cy="21" rx="11.5" ry="10.5" />
                <ellipse cx="18.5" cy="21.5" rx="6.5" ry="6" />
              </g>
              <circle cx="18" cy="22" r="2.4" fill="currentColor" />
            </svg>
          </div>
          <div className="min-w-0 flex-1 px-[0.12em] py-[0.07em] text-center">
            <div className="stamp-type border-b-[0.03em] border-current pb-[0.06em] text-[0.18em] tracking-[0.16em]">{top}</div>
            <div className="stamp-type py-[0.04em] text-[1em] leading-[0.92] tracking-[0.015em] whitespace-nowrap">{name}</div>
            <div className="stamp-type border-t-[0.03em] border-current pt-[0.07em] text-[0.18em] tracking-[0.12em]">{bottom}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
