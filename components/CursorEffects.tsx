"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Desktop-only cursor micro-interactions from the design:
 * a 4px dot, and a label badge ("OPEN CASE", "EXPAND", "VIEW") over elements
 * with data-cursor. The badge trails the pointer with GSAP easing for a softer, inked feel.
 */
export default function CursorEffects() {
  const dotRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const badgeTextRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const badge = badgeRef.current!;
    const badgeText = badgeTextRef.current!;

    gsap.set([dot, badge], { xPercent: -50, yPercent: -50 });
    const follow = (el: HTMLElement, duration: number) => ({
      x: gsap.quickTo(el, "x", { duration, ease: "power3" }),
      y: gsap.quickTo(el, "y", { duration, ease: "power3" }),
    });
    const dotTo = follow(dot, 0.08);
    const badgeTo = follow(badge, 0.3);

    let visible = false;
    let label: string | null = null;

    const onMove = (e: MouseEvent) => {
      for (const to of [dotTo, badgeTo]) {
        to.x(e.clientX);
        to.y(e.clientY);
      }
      if (!visible) {
        visible = true;
        gsap.to(dot, { autoAlpha: 1, duration: 0.3 });
      }

      const target = e.target as Element | null;
      const labelled = target?.closest<HTMLElement>("[data-cursor]");
      const next = labelled && window.innerWidth >= 1024 ? (labelled.dataset.cursor ?? "VIEW") : null;
      if (next !== label) {
        label = next;
        if (next) badgeText.textContent = next;
        gsap.to(badge, {
          autoAlpha: next ? 1 : 0,
          scale: next ? 1 : 0.6,
          duration: 0.35,
          ease: next ? "back.out(2)" : "power2.in",
        });
      }
    };

    const onLeave = () => {
      visible = false;
      label = null;
      gsap.to([dot, badge], { autoAlpha: 0, duration: 0.3 });
    };

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-1 w-1 rounded-full bg-primary opacity-0 md:block"
        ref={dotRef}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden items-center justify-center bg-primary px-space-sm py-1 font-label-caps text-label-caps uppercase tracking-widest text-on-primary opacity-0 lg:flex"
        ref={badgeRef}
      >
        <span ref={badgeTextRef}>VIEW</span>
      </div>
    </>
  );
}
