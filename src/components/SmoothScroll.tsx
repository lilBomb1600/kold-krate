"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Smooth scrolling, plus a glide for in-page links. Off for reduced motion. */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    lenis = new Lenis({ autoRaf: true, lerp: 0.11 });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href")!);
      if (!el) return;
      e.preventDefault();
      lenis?.scrollTo(el as HTMLElement, { offset: -64 });
      history.replaceState(null, "", a.getAttribute("href"));
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      lenis?.destroy();
      lenis = null;
    };
  }, []);
  return null;
}

export function glideTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -64 });
  else el.scrollIntoView({ behavior: "smooth" });
}
