"use client";

import Image from "next/image";
import Icon from "@/components/Icon";
import { useOverlay } from "@/components/OverlayProvider";
import { dispatches } from "@/lib/content";

export default function Dispatches() {
  const { openLightbox } = useOverlay();

  return (
    <section className="w-full border-t border-surface-container-highest bg-surface-container-low px-margin-mobile py-space-xl md:px-margin">
      <div className="mb-space-lg flex flex-col justify-between gap-space-xs border-b border-surface-container-highest pb-space-sm sm:flex-row sm:items-end">
        <div>
          <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
            Studio Dispatches
          </span>
          <h2 className="font-headline-md text-headline-sm text-primary sm:text-headline-md" data-split>
            More Work — Follow the Latest Stories
          </h2>
        </div>
        <a
          className="flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:text-outline"
          href="https://instagram.com"
          rel="noopener noreferrer"
          data-delay="0.2"
          data-reveal
          target="_blank"
        >
          @ELENAVANCE.STUDIO <Icon className="text-[14px]" name="arrow_outward" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-space-sm md:grid-cols-6" data-reveal-group>
        {dispatches.map((img, i) => (
          <button
            aria-label={`View ${img.caption}`}
            className="group relative aspect-square cursor-pointer overflow-hidden bg-surface-container"
            data-cursor="VIEW"
            key={img.src}
            onClick={() => openLightbox(dispatches, i)}
            type="button"
          >
            <Image
              alt={img.alt}
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              fill
              sizes="(min-width: 768px) 16vw, 50vw"
              src={img.src}
            />
            <span className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <Icon className="text-[20px] text-surface" name="fullscreen" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
