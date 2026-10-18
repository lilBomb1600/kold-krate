import { insideSize, specs } from "@/data/krate";

/** What goes into every one, as a plain spec sheet. */
export function Specs() {
  const rows = insideSize ? [...specs, { label: "Inside", value: insideSize }] : specs;
  return (
    <section id="specs" className="stone scroll-mt-16">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-36">
        <div className="lg:col-span-4">
          <h2 className="display text-[clamp(30px,3.2vw,48px)] text-ink">What goes into one</h2>
          <p className="mt-5 max-w-[34ch] text-[17px] leading-[1.65] text-slate">Every tub gets all of this.</p>
        </div>
        <dl className="lg:col-span-7 lg:col-start-6">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 border-t border-slate/25 py-5 sm:grid-cols-[180px_1fr] sm:gap-8 last:border-b">
              <dt className="text-[13px] font-medium tracking-[0.14em] text-slate uppercase sm:pt-1">{r.label}</dt>
              <dd className="text-[17.5px] leading-[1.55] text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
