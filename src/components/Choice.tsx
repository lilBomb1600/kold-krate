"use client";

import { createContext, useContext, useState } from "react";
import type { Plunge } from "@/data/krate";

/** The plunge a visitor picks (cold, hot or a pair), carried down into the quote form. */
const Ctx = createContext<{ plunge: Plunge; setPlunge: (p: Plunge) => void }>({ plunge: "cold", setPlunge: () => {} });

export function ChoiceProvider({ children }: { children: React.ReactNode }) {
  const [plunge, setPlunge] = useState<Plunge>("cold");
  return <Ctx.Provider value={{ plunge, setPlunge }}>{children}</Ctx.Provider>;
}

export const useChoice = () => useContext(Ctx);
