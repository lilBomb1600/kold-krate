/** Marks drawn in lumber crayon: a waxy check and end-grain rings. Stroked, so they take the crayon texture. */

export function CrayonCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3.5 13.5 C 6 15, 8 17.5, 9.5 20 C 12 13, 15.5 8, 21 3.5" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" filter="url(#crayon-tex)" />
    </svg>
  );
}

/** The end of a redwood log: uneven growth rings around an off-center pith, with a check crack. */
export function EndGrain({ className }: { className?: string }) {
  const rings = Array.from({ length: 17 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden>
      <g fill="none" stroke="currentColor" strokeLinecap="round" filter="url(#crayon-tex)">
        {rings.map((i) => {
          const r = 14 + i * 11 + (i % 3) * 2.5;
          const wob = 1 + (i % 4) * 0.012;
          return (
            <ellipse
              key={i}
              cx={196 + i * 0.6}
              cy={206 - i * 0.4}
              rx={r * wob}
              ry={r * (0.94 + (i % 5) * 0.01)}
              strokeWidth={i % 4 === 0 ? 2.6 : 1.5}
              opacity={0.55 + (i % 3) * 0.15}
              transform={`rotate(${(i * 7) % 20 - 10} 196 206)`}
            />
          );
        })}
        <path d="M196 206 L 232 150 L 246 118" strokeWidth="2" opacity=".7" />
      </g>
    </svg>
  );
}
