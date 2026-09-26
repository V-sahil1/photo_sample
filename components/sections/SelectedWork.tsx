"use client";

import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { useOverlay } from "@/components/OverlayProvider";
import { ease, gsap, motionOK, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { categories, plates } from "@/lib/content";

export default function SelectedWork() {
  const { openProject } = useOverlay();
  const [filter, setFilter] = useState<(typeof categories)[number]>("ALL");
  const gridRef = useRef<HTMLDivElement>(null);
  const lastFilter = useRef(filter);

  const visible = plates.filter((p) => filter === "ALL" || p.filter === filter);

  // Re-deal the plates whenever the filter changes (the initial reveal is scroll-driven)
  useGSAP(
    () => {
      if (lastFilter.current === filter) return;
      lastFilter.current = filter;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        gsap.fromTo(
          gridRef.current!.children,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08, ease, overwrite: "auto" },
        );
      });
      ScrollTrigger.refresh();
    },
    { dependencies: [filter], scope: gridRef },
  );

  return (
    <section className="w-full scroll-mt-20 bg-background px-margin-mobile py-space-xl md:px-margin" id="selected-work">
      {/* Section header & archival ledger meta */}
      <div className="mb-space-xl flex flex-col justify-between gap-space-md border-b border-surface-container-highest pb-space-sm md:flex-row md:items-end">
        <div>
          <span
            className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline"
            data-reveal
          >
            Portfolio Index
          </span>
          <h2
            className="font-headline-lg text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg"
            data-split
          >
            Selected Work
          </h2>
          <p
            className="mt-space-xs font-body-editorial text-body-editorial text-on-surface-variant"
            data-delay="0.2"
            data-reveal
          >
            A collection of moments, people, places and stories.
          </p>
        </div>

        {/* Category filter bar with editorial slash dividers */}
        <div
          aria-label="Filter by category"
          className="flex flex-wrap items-center gap-x-space-sm gap-y-2 font-label-caps text-label-caps uppercase tracking-widest"
          data-delay="0.3"
          data-reveal
          role="group"
        >
          {categories.map((cat, i) => (
            <Fragment key={cat}>
              {i > 0 && <span className="text-outline-variant">/</span>}
              <button
                aria-pressed={filter === cat}
                className={`cursor-pointer transition-colors ${
                  filter === cat
                    ? "text-primary underline underline-offset-4"
                    : "text-outline hover:text-primary"
                }`}
                onClick={() => setFilter(cat)}
                type="button"
              >
                {cat}
              </button>
            </Fragment>
          ))}
        </div>
      </div>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12" ref={gridRef}>
        {visible.map((plate) => {
          const layout = filter !== "ALL" && plate.filtered ? plate.filtered : plate;
          return (
            <button
              className={`group flex cursor-pointer flex-col space-y-space-xs text-left ${layout.span} ${plate.extra ?? ""}`}
              data-cursor="OPEN CASE"
              key={plate.title}
              onClick={() => openProject(plate)}
              type="button"
            >
              <div
                className={`relative w-full overflow-hidden bg-surface-container ${layout.aspect}`}
                data-reveal-media
              >
                <div className="absolute inset-0" data-media>
                  <Image
                    alt={plate.alt}
                    className={`object-cover object-center transition-transform duration-700 ease-out ${plate.hoverScale}`}
                    fill
                    sizes={layout.sizes}
                    src={plate.image}
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-primary/0 p-space-md opacity-0 transition-colors duration-300 group-hover:bg-primary/20 group-hover:opacity-100">
                  <span className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-surface">
                    View Project <Icon className="text-[14px]" name="arrow_outward" />
                  </span>
                </div>
              </div>
              <div className="flex w-full items-baseline justify-between gap-space-sm pt-space-xs" data-reveal>
                <span className="font-headline-sm text-headline-sm text-primary transition-opacity group-hover:opacity-75">
                  {plate.name}
                </span>
                <span className="shrink-0 font-caption-meta text-caption-meta text-outline">{plate.place}</span>
              </div>
              <span className="font-caption-meta text-caption-meta text-on-surface-variant" data-delay="0.1" data-reveal>
                {plate.series}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
