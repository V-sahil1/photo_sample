"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { ease, gsap, motionOK, SplitText, useGSAP } from "@/lib/gsap";

/**
 * Attribute-driven scroll choreography, re-scanned on every route change.
 * Sections stay server components and simply opt in with data attributes:
 *
 *   data-split="lines|words|chars|scrub"  SplitText headline reveals (scrub = word-by-word ink-in)
 *   data-reveal                           fade + rise when entering the viewport
 *   data-reveal-group                     staggers its direct children in
 *   data-reveal-media                     clip-path wipe; a child [data-media] settles from a zoom
 *   data-parallax="n"                     drifts from yPercent n to -n across its parent
 *   data-draw                             hairline that draws left→right with scroll
 *   data-marquee="1|-1"                   horizontal type band scrubbed by scroll
 *   data-delay="0.2"                      optional extra delay (seconds) for split / reveal
 */
export default function ScrollAnimations() {
  const pathname = usePathname();
  const lastPath = useRef(pathname);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(motionOK, () => {
        const all = (selector: string) => gsap.utils.toArray<HTMLElement>(selector);
        const delayOf = (el: HTMLElement) => parseFloat(el.dataset.delay ?? "0");
        const enter = (trigger: Element, start = "top 90%") => ({ trigger, start, once: true });

        // Soft page fade on client-side navigation (the first load is handled by the reveals)
        if (lastPath.current !== pathname) {
          gsap.fromTo("main", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8, ease: "power2.out" });
        }

        all("[data-split]").forEach((el) => {
          const mode = el.dataset.split || "lines";
          const delay = delayOf(el);
          gsap.set(el, { visibility: "visible" });

          if (mode === "scrub") {
            SplitText.create(el, {
              type: "words",
              autoSplit: true,
              onSplit: (self) =>
                gsap.fromTo(
                  self.words,
                  { opacity: 0.12 },
                  {
                    opacity: 1,
                    ease: "none",
                    stagger: 0.1,
                    scrollTrigger: { trigger: el, start: "top 80%", end: "bottom 45%", scrub: true },
                  },
                ),
            });
            return;
          }

          if (mode === "chars") {
            SplitText.create(el, {
              type: "words,chars",
              mask: "words",
              autoSplit: true,
              onSplit: (self) =>
                gsap.from(self.chars, {
                  yPercent: 110,
                  duration: 1.2,
                  stagger: 0.025,
                  ease,
                  delay,
                  scrollTrigger: enter(el),
                }),
            });
            return;
          }

          const byWords = mode === "words";
          SplitText.create(el, {
            type: byWords ? "words" : "lines",
            mask: byWords ? "words" : "lines",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(byWords ? self.words : self.lines, {
                yPercent: 110,
                duration: 1.3,
                stagger: byWords ? 0.06 : 0.12,
                ease,
                delay,
                scrollTrigger: enter(el),
              }),
          });
        });

        all("[data-reveal]").forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 36 },
            { autoAlpha: 1, y: 0, duration: 1.2, ease, delay: delayOf(el), scrollTrigger: enter(el) },
          );
        });

        all("[data-reveal-group]").forEach((group) => {
          gsap.fromTo(
            group.children,
            { autoAlpha: 0, y: 48 },
            { autoAlpha: 1, y: 0, duration: 1.2, ease, stagger: 0.12, scrollTrigger: enter(group, "top 85%") },
          );
        });

        all("[data-reveal-media]").forEach((el) => {
          const media = el.querySelector("[data-media]");
          gsap.set(el, { visibility: "visible" });
          const tl = gsap.timeline({ scrollTrigger: enter(el, "top 88%") });
          tl.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" },
          );
          if (media) tl.fromTo(media, { scale: 1.3 }, { scale: 1, duration: 2, ease }, 0);
        });

        all("[data-parallax]").forEach((el) => {
          const amount = parseFloat(el.dataset.parallax || "10");
          gsap.fromTo(
            el,
            { yPercent: amount },
            {
              yPercent: -amount,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        all("[data-draw]").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: "none",
              transformOrigin: "left center",
              scrollTrigger: { trigger: el.parentElement, start: "top 85%", end: "bottom 60%", scrub: true },
            },
          );
        });

        all("[data-marquee]").forEach((el) => {
          const forward = parseFloat(el.dataset.marquee || "1") >= 0;
          gsap.fromTo(
            el,
            { xPercent: forward ? 0 : -30 },
            {
              xPercent: forward ? -30 : 0,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.6 },
            },
          );
        });
      });

      lastPath.current = pathname;
      // Lifts the pre-hydration hide from globals.css now that GSAP owns the initial states
      document.documentElement.classList.add("motion-ready");

      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
