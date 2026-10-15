import clsx from "clsx";

/**
 * The primary action, drawn as a lumberyard shipping tag: kraft stock, a chamfered head with a punched hole and a
 * loop of string, the words stamped on. It swings a little when you reach for it.
 */
export function TagShape({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={clsx("tag-wrap relative inline-flex origin-[18px_50%] transition-transform duration-300 ease-[var(--ease-out-quart)] group-hover:-rotate-3", className)}>
      <svg viewBox="0 0 60 40" className="pointer-events-none absolute -left-[38px] top-1/2 h-[40px] w-[60px] -translate-y-1/2 overflow-visible" aria-hidden>
        <path d="M42 20 C 30 6, 12 8, 4 18 S 14 36, 26 30" fill="none" stroke="#efe6d6" strokeWidth="1.6" strokeLinecap="round" opacity=".85" />
      </svg>
      <span
        className="tag inline-flex items-center gap-3 py-3.5 pl-10 pr-6 [clip-path:polygon(16px_0,100%_0,100%_100%,16px_100%,0_50%)] [mask:radial-gradient(circle_6px_at_22px_50%,transparent_96%,#000_100%)] [-webkit-mask:radial-gradient(circle_6px_at_22px_50%,transparent_96%,#000_100%)]"
      >
        {children}
      </span>
    </span>
  );
}

export function QuoteTagLink({ label = "Get a quote", className }: { label?: string; className?: string }) {
  return (
    <a href="#quote" className={clsx("group inline-flex pl-[38px]", className)}>
      <TagShape>
        <span className="stamp-type text-[26px] tracking-[0.03em] text-kraft-ink">{label}</span>
        <svg viewBox="0 0 34 14" className="w-[30px] text-kraft-ink transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
          <path d="M1 7 H 29 M 22 1 L 31 7 L 22 13" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </TagShape>
    </a>
  );
}
