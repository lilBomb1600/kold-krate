"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/data/krate";

/** More of his photos on the stone. Click one to see it large; arrows and Escape work in the viewer. */
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
  // a gallery wall: wide and tall photos trading places row by row
  const span = ["aspect-[4/3] sm:col-span-2 sm:aspect-auto", "aspect-[3/4] sm:aspect-auto", "aspect-[3/4] sm:aspect-auto", "aspect-[4/3] sm:col-span-2 sm:aspect-auto"];

  return (
    <section id="photos" className="stone scroll-mt-16">
      <div className="waterline" />
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <h2 className="display text-[clamp(30px,3.6vw,52px)] text-ink">More photos</h2>
        <ul className="mt-12 grid gap-4 sm:auto-rows-[clamp(260px,30vw,470px)] sm:grid-cols-3 lg:gap-6">
          {gallery.map((g, i) => (
            <li key={g.src} className={span[i]}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden bg-stone-2"
                aria-label={`View larger: ${g.alt}`}
              >
                <Image
                  src={g.src}
                  alt={g.alt}
                  width={g.w}
                  height={g.h}
                  sizes="(min-width: 640px) 60vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                />
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
        className="m-auto max-h-[94vh] max-w-[min(1200px,94vw)] bg-transparent p-0 backdrop:bg-ink/88 backdrop:backdrop-blur-sm"
      >
        {open !== null && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[84vh] w-auto object-contain" />
            <figcaption className="mt-3 flex items-center justify-between gap-4 text-[15px] text-mist">
              <span>{gallery[open].alt}</span>
              <span className="flex shrink-0 gap-1">
                <button type="button" onClick={() => step(-1)} className="rounded-full p-2 text-foam hover:bg-foam/10" aria-label="Previous photo">
                  <ChevronLeft size={22} />
                </button>
                <button type="button" onClick={() => step(1)} className="rounded-full p-2 text-foam hover:bg-foam/10" aria-label="Next photo">
                  <ChevronRight size={22} />
                </button>
                <button type="button" onClick={() => setOpen(null)} className="rounded-full p-2 text-foam hover:bg-foam/10" aria-label="Close">
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
