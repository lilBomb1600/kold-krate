"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { MillStamp } from "./MillStamp";
import { krate } from "@/data/krate";

const links = [
  { href: "#krate", label: "The Krate" },
  { href: "#temp", label: "Cold or hot" },
  { href: "#maker", label: "Built by hand" },
  { href: "#gallery", label: "Gallery" },
];

/** Clear over the film; settles onto grading-ink black once the page moves. */
export function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > window.innerHeight * 0.75);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ease-[var(--ease-out-quart)]",
        solid ? "bg-ink/94 shadow-[0_1px_0_rgb(246_230_204/.08)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[64px] max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          aria-label="Kold Krate, back to top"
          tabIndex={solid ? undefined : -1}
          className={clsx("text-[21px] transition-opacity duration-500", solid ? "opacity-100" : "pointer-events-none opacity-0")}
        >
          <MillStamp compact />
        </a>
        <nav aria-label="Sections" className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-[3px] px-3.5 py-2 text-[14.5px] font-semibold text-sap/85 transition-colors hover:bg-sap/10 hover:text-sap">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={krate.phoneHref} className="hidden items-center gap-2 px-3 py-2 text-[14.5px] font-semibold text-sap/90 hover:text-sap sm:inline-flex">
            <Phone size={16} aria-hidden /> {krate.phone}
          </a>
          <a
            href="#quote"
            className="stamp-type inline-flex items-center bg-crayon px-4 pb-[7px] pt-[9px] text-[19px] tracking-[0.04em] text-ink transition-transform [clip-path:polygon(10px_0,100%_0,100%_100%,10px_100%,0_50%)] hover:-translate-y-0.5"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
