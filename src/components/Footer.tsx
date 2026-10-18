import { krate } from "@/data/krate";

export function Footer() {
  return (
    <footer className="stone">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
        <div>
          <p className="font-display text-[15px] tracking-[0.24em] text-ink uppercase">Kold Krate</p>
          <p className="mt-3 text-[15px] text-slate">Built by hand in Santa Cruz, California.</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
          <li>
            <a href={krate.phoneHref} className="tnum text-ink hover:underline">
              {krate.phone}
            </a>
          </li>
          <li>
            <a href={`mailto:${krate.email}`} className="text-ink hover:underline">
              {krate.email}
            </a>
          </li>
          <li>
            <a href={krate.instagram} target="_blank" rel="noopener noreferrer" className="text-ink hover:underline">
              Instagram {krate.handle}
            </a>
          </li>
        </ul>
        <p className="text-[13.5px] text-slate">© 2026 Kold Krate</p>
      </div>
    </footer>
  );
}
