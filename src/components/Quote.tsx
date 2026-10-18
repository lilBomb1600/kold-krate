"use client";

import clsx from "clsx";
import { useState } from "react";
import { krate, plungeNames, type Plunge } from "@/data/krate";
import { useChoice } from "./Choice";

type Fields = { name: string; phone: string; email: string; city: string; spot: string; when: string; notes: string };
const EMPTY: Fields = { name: "", phone: "", email: "", city: "", spot: "Not sure yet", when: "Just looking", notes: "" };
const choices: { key: Plunge; label: string }[] = [
  { key: "cold", label: "Cold" },
  { key: "hot", label: "Hot" },
  { key: "pair", label: "A pair" },
];

/** The quote request. Sending opens the visitor's email with everything written out to him; or they call. */
export function Quote() {
  const { plunge, setPlunge } = useChoice();
  const [f, setF] = useState<Fields>(EMPTY);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim()) return setError("Add your name so I know who's asking.");
    if (!f.phone.trim() && !f.email.trim()) return setError("Add a phone number or an email so I can get back to you.");
    setError(null);
    const body = [
      `Name: ${f.name}`,
      f.phone && `Phone: ${f.phone}`,
      f.email && `Email: ${f.email}`,
      f.city && `City: ${f.city}`,
      `Looking for: ${plungeNames[plunge]}`,
      `Where it's going: ${f.spot}`,
      `Timing: ${f.when}`,
      f.notes && `\n${f.notes}`,
    ]
      .filter(Boolean)
      .join("\n");
    setSent(true);
    window.location.href = `mailto:${krate.email}?subject=${encodeURIComponent(`Quote: ${plungeNames[plunge]} (${f.name})`)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="quote" className="stone-dark scroll-mt-16 text-foam">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12 lg:py-36">
        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(34px,4vw,60px)]">Let&apos;s talk about yours.</h2>
          <p className="mt-6 max-w-[40ch] text-[18px] leading-[1.65] text-mist">
            Tell me what you have in mind and where it&apos;s going. Sending opens your email with it all filled in. If you&apos;d rather
            talk, give me a call.
          </p>
          <a href={krate.phoneHref} className="font-display tnum mt-10 block text-[clamp(28px,2.6vw,38px)] text-foam hover:underline">
            {krate.phone}
          </a>
          <a href={`mailto:${krate.email}`} className="mt-3 block text-[17px] text-mist hover:text-foam hover:underline">
            {krate.email}
          </a>
          <p className="mt-10 max-w-[40ch] text-[16px] leading-[1.6] text-mist">I build them in Santa Cruz. Ask me about delivery to your area.</p>
        </div>

        <form onSubmit={send} noValidate className="lg:col-span-6 lg:col-start-7">
          <fieldset>
            <legend className="text-[13px] font-medium tracking-[0.14em] text-mist uppercase">Looking for</legend>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {choices.map((c) => (
                <label
                  key={c.key}
                  className={clsx(
                    "cursor-pointer rounded-[2px] border py-3.5 text-center text-[16px] transition-colors duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-foam",
                    plunge === c.key ? "border-foam bg-foam text-ink" : "border-foam/30 text-foam hover:border-foam/70"
                  )}
                >
                  <input type="radio" name="plunge" value={c.key} checked={plunge === c.key} onChange={() => setPlunge(c.key)} className="sr-only" />
                  {c.label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
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
            <Field label="Where it's going">
              <select value={f.spot} onChange={set("spot")} className={input}>
                <option>Not sure yet</option>
                <option>Patio</option>
                <option>Deck</option>
                <option>Yard</option>
                <option>Garage or indoors</option>
              </select>
            </Field>
            <Field label="Timing">
              <select value={f.when} onChange={set("when")} className={input}>
                <option>Just looking</option>
                <option>In the next few months</option>
                <option>As soon as I can</option>
              </select>
            </Field>
            <Field label="Anything else" wide>
              <textarea value={f.notes} onChange={set("notes")} rows={3} className={clsx(input, "resize-y")} placeholder="Questions, the space you have, anything" />
            </Field>
          </div>

          {error && (
            <p role="alert" className="mt-6 text-[15.5px] text-[#f1c9b8]">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-9 w-full rounded-[2px] bg-foam py-4 text-[16.5px] font-medium text-ink transition-colors duration-300 hover:bg-mist sm:w-auto sm:px-12"
          >
            {sent ? "Opening your email…" : "Send it"}
          </button>
        </form>
      </div>
    </section>
  );
}

const input =
  "mt-2 block w-full rounded-none border-0 border-b border-foam/30 bg-transparent px-0 py-2.5 text-[17px] text-foam placeholder:text-mist/60 focus:border-foam focus:outline-none [&>option]:text-ink";

function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) {
  return (
    <label className={clsx("block", wide && "sm:col-span-2")}>
      <span className="text-[13px] font-medium tracking-[0.14em] text-mist uppercase">
        {label}
        {required && <span className="ml-1 text-foam" aria-hidden>*</span>}
      </span>
      {children}
    </label>
  );
}
