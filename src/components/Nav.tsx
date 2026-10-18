"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { krate } from "@/data/krate";

const links = [
  { href: "#why", label: "Why mine" },
  { href: "#pair", label: "Hot & cold" },
  { href: "#photos", label: "Photos" },
];

/** A quiet stone bar; a hairline appears under it once the page moves. */
export function Nav() {
  const [moved, setMoved] = useState(false);
  useEffect(() => {
    const on = () => setMoved(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 bg-stone/92 backdrop-blur-md transition-shadow duration-500",
        moved && "shadow-[0_1px_0_rgb(86_99_108/.18)]"
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-[15px] tracking-[0.24em] text-ink uppercase" aria-label="Kold Krate, back to top">
          Kold Krate
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[14.5px] text-slate transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href={krate.phoneHref} className="tnum hidden text-[14.5px] text-slate transition-colors hover:text-ink lg:inline">
            {krate.phone}
          </a>
          <a
            href="#quote"
            className="rounded-[2px] bg-slate-2 px-4 py-2.5 text-[14px] font-medium text-foam transition-colors duration-300 hover:bg-ink"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
