"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Lenis inertial scrolling driven by the GSAP ticker so ScrollTrigger stays in sync,
 * plus a hairline reading-progress rule pinned to the top of the viewport.
 * Overlays opt out of the smoothing with data-lenis-prevent.
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lenis = new Lenis({
      anchors: true,
      lerp: 0.09,
      stopInertiaOnNavigate: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } },
    );

    // Accordions, filters and late-loading images change page height without a window resize
    let timer: number | undefined;
    const observer = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    });
    observer.observe(document.body);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Re-measure after client-side navigation swaps the page content
  useEffect(() => {
    lenisRef.current?.resize();
    ScrollTrigger.refresh();
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[52] h-px origin-left bg-primary"
      ref={barRef}
      style={{ transform: "scaleX(0)" }}
    />
  );
}
