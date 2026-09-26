"use client";

import Image from "next/image";
import { useOverlay } from "@/components/OverlayProvider";
import { featuredStory } from "@/lib/content";

export default function FeaturedStory() {
  const { openProject } = useOverlay();

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-primary px-margin-mobile py-space-xl text-center text-on-primary md:px-margin md:py-32">
      {/* Oversized plate so the parallax drift never exposes an edge */}
      <div className="absolute inset-x-0 -top-[15%] h-[130%] opacity-40" data-parallax="-10">
        <Image
          alt="High-contrast black and white photograph of storm clouds sweeping across steep Nordic basalt cliffs."
          className="object-cover object-center"
          fill
          sizes="100vw"
          src="/images/featured-story.jpg"
        />
      </div>
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 flex max-w-3xl flex-col items-center space-y-space-md">
        <span className="font-label-caps text-label-caps uppercase tracking-[0.3em] text-surface-container-high" data-reveal>
          Featured Story
        </span>
        <h2 className="font-display-hero text-headline-lg-mobile leading-tight font-normal text-surface sm:text-headline-lg md:text-[68px] md:leading-tight" data-split="words">
          “A Moment in Time.”
        </h2>
        <p className="max-w-xl font-body-editorial text-body-editorial text-surface-container-high" data-delay="0.3" data-reveal>
          A documented journey through the remote western fjords, where silence has physical weight and light shifts
          every heartbeat.
        </p>
        <button
          className="mt-space-sm cursor-pointer bg-surface px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary transition-colors hover:bg-surface-container-highest"
          data-delay="0.45"
          data-reveal
          onClick={() => openProject(featuredStory)}
          type="button"
        >
          EXPLORE STORY →
        </button>
      </div>
    </section>
  );
}
