"use client";

import Image from "next/image";
import { useRef } from "react";
import Icon from "@/components/Icon";
import { ease, gsap, motionOK, SplitText, useGSAP } from "@/lib/gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        const section = root.current!;
        const title = section.querySelector<HTMLElement>("[data-hero-title]")!;

        // Mount choreography: plate settles, meta fades, statement rises line by line, rule draws
        gsap
          .timeline({ defaults: { ease } })
          .fromTo("[data-hero-media]", { scale: 1.18 }, { scale: 1, duration: 2.8, ease: "power2.out" }, 0)
          .fromTo("[data-hero-meta]", { autoAlpha: 0, y: -12 }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.1 }, 0.3)
          .fromTo("[data-hero-eyebrow]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1.2 }, 0.4)
          .fromTo("[data-hero-rule]", { scaleX: 0 }, { scaleX: 1, duration: 1.8, ease: "expo.inOut" }, 0.8)
          .fromTo("[data-hero-foot]", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 1.2, stagger: 0.12 }, 1.3);

        gsap.set(title, { visibility: "visible" });
        SplitText.create(title, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, { yPercent: 110, duration: 1.6, stagger: 0.14, ease, delay: 0.5 }),
        });

        gsap.to("[data-hero-scroll-icon]", { y: 5, duration: 0.9, ease: "sine.inOut", repeat: -1, yoyo: true });

        // Scroll-out: the photograph sinks behind while the statement lifts and dissolves
        const out = { trigger: section, start: "top top", end: "bottom top", scrub: true };
        gsap.to("[data-hero-media]", { yPercent: 18, ease: "none", scrollTrigger: out });
        gsap.to("[data-hero-content]", { y: -120, opacity: 0, ease: "none", scrollTrigger: out });
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      className="relative -mt-20 flex h-svh min-h-[640px] w-full flex-col justify-between overflow-hidden bg-primary p-margin-mobile md:p-margin"
      ref={root}
    >
      {/* Fine art hero photo, settles from a scale on mount and drifts on scroll */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <div className="relative h-full w-full" data-hero-media>
          <Image
            alt="Editorial fine art portrait of a woman in a flowing gown standing in a brutalist concrete courtyard in Paris, raking sun casting geometric shadows."
            className="object-cover object-center"
            fill
            priority
            sizes="100vw"
            src="/images/hero.jpg"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-primary/80 via-primary/30 to-primary/40" />
      </div>

      {/* Top spacer for header clearance */}
      <div className="relative z-10 flex w-full items-start justify-between pt-20">
        <span
          className="font-label-caps text-label-caps uppercase tracking-widest text-surface/80"
          data-hero-in
          data-hero-meta
        >
          Fine Art Monograph / Vol. VII
        </span>
        <span
          className="hidden font-label-caps text-label-caps uppercase tracking-widest text-surface/80 sm:inline"
          data-hero-in
          data-hero-meta
        >
          Paris · Copenhagen
        </span>
      </div>

      {/* Statement */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col justify-end pb-space-lg" data-hero-content>
        <div className="mb-space-md space-y-space-xs">
          <p
            className="font-label-caps text-label-caps uppercase tracking-[0.25em] text-surface/75"
            data-hero-eyebrow
            data-hero-in
          >
            Eléna Vance — Photographer / Visual Artist
          </p>
          <h1
            className="font-display-hero text-display-hero-mobile font-normal tracking-tight text-surface sm:text-display-hero md:text-[84px] md:leading-[90px]"
            data-hero-in
            data-hero-title
          >
            Capturing moments that deserve to be remembered.
          </h1>
        </div>
        <div className="relative flex flex-col justify-between gap-space-sm pt-space-md sm:flex-row sm:items-end">
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px origin-left bg-surface/20"
            data-hero-rule
          />
          <p className="max-w-sm font-body-md text-body-md text-surface/80" data-hero-foot data-hero-in>
            Archival silver prints, medium format negatives, and documentary observation worldwide.
          </p>
          <a
            className="inline-flex items-center gap-space-xs text-surface transition-colors hover:text-surface-container-highest"
            data-hero-foot
            data-hero-in
            href="#selected-work"
          >
            <span className="font-label-caps text-label-caps uppercase tracking-widest">SCROLL</span>
            <span className="inline-flex" data-hero-scroll-icon>
              <Icon className="text-[16px]" name="south" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
