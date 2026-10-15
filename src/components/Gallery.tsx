"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/krate";

/**
 * His photos, each labeled by what it shows on a kraft tag, stacked like boards in the yard. Click one to see it
 * large; arrows and Escape work in the viewer.
 */
export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (dir: number) => setOpen((i) => (i === null ? null : (i + dir + gallery.length) % gallery.length));

  return (
    <section id="gallery" className="bg-ink px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="stamp-type text-[clamp(48px,7vw,104px)] text-sap">No two alike</h2>
          <p className="max-w-[42ch] text-[17px] leading-relaxed text-sap/78">
            Made from locally sourced redwood, each plunge is its own piece. These are his builds, as he photographed them.
          </p>
        </div>

        <ul className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((g, i) => (
            <li key={g.src} className="mb-5 break-inside-avoid">
              <button type="button" onClick={() => setOpen(i)} className="group relative block w-full text-left" aria-label={`View larger: ${g.alt}`}>
                <span className="block overflow-hidden rounded-[2px] bg-ink-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.035]"
                  />
                </span>
                <span className="tag-wrap absolute left-4 top-4 origin-[50%_0] transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:rotate-[4deg]" style={{ rotate: `${(i % 3) - 1.5}deg` }}>
                  <span className="stamp-type block bg-kraft px-3.5 pb-1.5 pt-2 text-[19px] tracking-[0.04em] text-kraft-ink [clip-path:polygon(9px_0,calc(100%-9px)_0,100%_9px,100%_100%,0_100%,0_9px)]">
                    {g.tag}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === dialog.current && setOpen(null)}
        className="m-auto max-h-[92vh] max-w-[min(1200px,94vw)] bg-transparent p-0 backdrop:bg-ink/92 backdrop:backdrop-blur-sm"
      >
        {open !== null && (
          <figure className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[82vh] w-auto rounded-[2px] object-contain" />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[15px] text-sap/85">
              <span>
                <b className="stamp-type mr-2 text-[20px] text-sap">{gallery[open].tag}</b>
                {gallery[open].alt}
              </span>
              <span className="flex gap-2">
                <button type="button" onClick={() => step(-1)} className="rounded-full p-2 text-sap hover:bg-sap/10" aria-label="Previous photo">
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={() => step(1)} className="rounded-full p-2 text-sap hover:bg-sap/10" aria-label="Next photo">
                  <ChevronRight size={22} />
                </button>
                <button type="button" onClick={() => setOpen(null)} className="rounded-full p-2 text-sap hover:bg-sap/10" aria-label="Close">
                  <X size={22} />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
