"use client";

import clsx from "clsx";
import { useState } from "react";
import { AtSign, Mail, Phone } from "lucide-react";
import { krate, type Plunge } from "@/data/krate";
import { useChoice } from "./Choice";
import { MillStamp } from "./MillStamp";

type Fields = { name: string; phone: string; email: string; city: string; steps: string; spot: string; when: string; notes: string };
const EMPTY: Fields = { name: "", phone: "", email: "", city: "", steps: "Not sure", spot: "Not sure", when: "Just researching", notes: "" };

/**
 * The quote request, filled in on a kraft tally tag. On send, the tag is stamped and the visitor's email app opens
 * with everything written out to him; the phone number sits beside it for anyone who would rather call.
 */
export function Quote() {
  const { plunge, setPlunge } = useChoice();
  const [f, setF] = useState<Fields>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [stamped, setStamped] = useState(false);
  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) return setError("Add your name so he knows who's asking.");
    if (!f.phone.trim() && !f.email.trim()) return setError("Add a phone number or an email so he can reach you.");
    setError(null);
    const type = { cold: "Cold plunge", hot: "Hot plunge", both: "Cold and hot" }[plunge];
    const body = [
      `Name: ${f.name}`,
      f.phone && `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.city && `City: ${f.city}`,
      `Looking for: ${type}`,
      `Steps: ${f.steps}`,
      `Where it's going: ${f.spot}`,
      `Timing: ${f.when}`,
      f.notes && `\n${f.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    setStamped(true);
    const href = `mailto:${krate.email}?subject=${encodeURIComponent(`Quote request: ${type} (${f.name})`)}&body=${encodeURIComponent(body)}`;
    window.setTimeout(() => (window.location.href = href), 900);
  };

  return (
    <section id="quote" className="grain relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
        <div>
          <h2 className="stamp-type text-[clamp(48px,7vw,104px)] text-sap">
            Request
            <br />a quote
          </h2>
          <p className="mt-6 max-w-[44ch] text-[18px] leading-relaxed text-sap/88">
            Tell him what you&apos;re after. Sending opens your email with everything written out, so nothing gets lost. Rather talk? Call him.
          </p>
          <ul className="mt-10 space-y-4 text-[18px]">
            <li>
              <a href={krate.phoneHref} className="inline-flex items-center gap-3 font-bold text-sap hover:underline">
                <Phone size={20} aria-hidden /> {krate.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${krate.email}`} className="inline-flex items-center gap-3 font-semibold text-sap hover:underline">
                <Mail size={20} aria-hidden /> {krate.email}
              </a>
            </li>
            <li>
              <a href={krate.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-semibold text-sap hover:underline">
                <AtSign size={20} aria-hidden /> {krate.handle.replace("@", "")} on Instagram
              </a>
            </li>
          </ul>
          <p className="mt-10 max-w-[44ch] text-[15px] leading-relaxed text-sap/88">
            Handcrafted in Santa Cruz. Ask about delivery to your area.
          </p>
        </div>

        <div className="tag-wrap relative">
          <form onSubmit={send} noValidate className="tag tag-ring relative px-6 pb-9 pt-16 sm:px-10">
            <span className="staple right-[24%] top-[24px] rotate-[4deg]" aria-hidden />
            <div className="flex items-baseline justify-between border-b-2 border-kraft-ink/70 pb-2">
              <span className="stamp-type text-[34px] leading-none">Quote tally</span>
              <span className="crayon text-[18px] text-redwood">No. 1</span>
            </div>

            <fieldset className="mt-6">
              <legend className="stamp-type text-[20px]">Looking for</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {(["cold", "hot", "both"] as Plunge[]).map((p) => (
                  <label
                    key={p}
                    className={clsx(
                      "stamp-type cursor-pointer border-2 border-kraft-ink/70 py-2.5 text-center text-[22px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink",
                      plunge === p ? "bg-kraft-ink text-kraft" : "hover:bg-kraft-ink/10"
                    )}
                  >
                    <input type="radio" name="plunge" value={p} checked={plunge === p} onChange={() => setPlunge(p)} className="sr-only" />
                    {p === "both" ? "Both" : p === "cold" ? "Cold" : "Hot"}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Name" required>
                <input value={f.name} onChange={set("name")} autoComplete="name" className={input} />
              </Field>
              <Field label="City">
                <input value={f.city} onChange={set("city")} autoComplete="address-level2" className={input} />
              </Field>
              <Field label="Phone">
                <input value={f.phone} onChange={set("phone")} type="tel" autoComplete="tel" className={input} />
              </Field>
              <Field label="Email">
                <input value={f.email} onChange={set("email")} type="email" autoComplete="email" className={input} />
              </Field>
              <Field label="Steps">
                <select value={f.steps} onChange={set("steps")} className={input}>
                  <option>Not sure</option>
                  <option>Yes, add steps</option>
                  <option>No steps</option>
                </select>
              </Field>
              <Field label="Where it's going">
                <select value={f.spot} onChange={set("spot")} className={input}>
                  <option>Not sure</option>
                  <option>Patio</option>
                  <option>Deck</option>
                  <option>Yard</option>
                  <option>Garage or indoors</option>
                </select>
              </Field>
              <Field label="Timing" wide>
                <select value={f.when} onChange={set("when")} className={input}>
                  <option>Just researching</option>
                  <option>In the next 1–3 months</option>
                  <option>As soon as possible</option>
                </select>
              </Field>
              <Field label="Anything else" wide>
                <textarea value={f.notes} onChange={set("notes")} rows={3} className={clsx(input, "resize-y")} placeholder="Size you have in mind, questions for him…" />
              </Field>
            </div>

            {error && (
              <p role="alert" className="mt-4 text-[15px] font-semibold text-redwood">
                {error}
              </p>
            )}

            <button type="submit" className="stamp-type mt-7 w-full bg-ink py-4 text-[26px] tracking-[0.04em] text-sap transition-colors hover:bg-heart">
              Stamp it &amp; send
            </button>

            {stamped && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-live="polite">
                <div className="motion-safe:animate-[ink-in_.55s_var(--ease-out-expo)_both]" style={{ transform: "rotate(-8deg)" }}>
                  <MillStamp tone="cold" name="Tallied" top="Kold Krate · Santa Cruz" bottom="Opening your email" className="text-[clamp(56px,9vw,104px)]" />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

const input =
  "mt-1.5 block w-full border-0 border-b-2 border-kraft-ink/60 bg-kraft-2/40 px-2.5 py-2.5 text-[16.5px] text-kraft-ink placeholder:text-kraft-ink/50 focus:border-ink focus:bg-kraft-2/70 focus:outline-none";

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={clsx("block", wide && "sm:col-span-2")}>
      <span className="stamp-type text-[20px]">
        {label}
        {required && <span className="crayon ml-1 text-[16px] text-redwood">*</span>}
      </span>
      {children}
    </label>
  );
}
