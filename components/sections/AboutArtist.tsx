import Image from "next/image";
import Link from "next/link";
import { approach } from "@/lib/content";

export default function AboutArtist({ inquiryHref = "/contact" }: { inquiryHref?: string }) {
  return (
    <section className="w-full border-y border-surface-container-highest bg-surface-container-low px-margin-mobile py-space-xl md:px-margin">
      {/* Two column spread */}
      <div className="mb-space-xl grid grid-cols-1 items-start gap-gutter md:grid-cols-12">
        <div className="relative md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-container" data-reveal-media>
            <div className="absolute inset-0" data-media>
              <Image
                alt="Black and white portrait of photographer Eléna Vance holding a vintage medium format camera in a Paris loft studio."
                className="object-cover object-center"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                src="/images/about-portrait.jpg"
              />
            </div>
          </div>
          <div className="flex justify-between pt-space-xs text-outline" data-delay="0.3" data-reveal>
            <span className="font-caption-meta text-caption-meta">Plate N° 82 — Atelier Vance</span>
            <span className="font-caption-meta text-caption-meta">Rue Charlot, 75003</span>
          </div>
        </div>

        <div className="flex h-full flex-col justify-between space-y-space-lg md:col-span-7 md:pl-space-lg">
          <div>
            <span className="mb-space-sm block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
              About The Artist
            </span>
            <h3 className="mb-space-md font-display-hero text-headline-lg-mobile leading-[1.08] tracking-tight text-primary sm:text-headline-lg md:text-display-hero md:leading-[1.08]" data-split>
              “I photograph people, stories &amp; moments.”
            </h3>
            <p className="mb-space-md font-body-editorial text-body-editorial leading-relaxed text-on-surface" data-reveal>
              Over twelve years of documentary and editorial practice, I have rejected contrived posturing in favor
              of raw cadence. Photography, to me, is not the creation of an illusion, but the patient
              acknowledgment of an existing truth.
            </p>
            <p className="mb-space-lg font-body-lg text-body-lg leading-relaxed text-on-surface-variant" data-delay="0.1" data-reveal>
              Specializing in heirloom wedding monographs, fine art portraiture, and architectural narratives, each
              commission is treated as a limited printed work bound to outlast digital impermanence.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-space-xs border-t border-surface-container-highest pt-space-md sm:flex-row sm:items-center" data-reveal>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">
              BASED IN COPENHAGEN / PARIS · AVAILABLE WORLDWIDE
            </span>
            <Link
              className="font-label-caps text-label-caps uppercase tracking-widest text-primary underline underline-offset-4 transition-colors hover:text-outline"
              href={inquiryHref}
            >
              Inquire For 2026/27 →
            </Link>
          </div>
        </div>
      </div>

      {/* Methodology matrix */}
      <div className="border-t border-surface-container-highest pt-space-xl">
        <div className="mb-space-md">
          <span className="block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
            Methodology
          </span>
          <h4 className="mt-1 font-headline-md text-headline-md text-primary" data-split>
            My Approach
          </h4>
        </div>
        <div className="grid grid-cols-1 gap-gutter pt-space-sm md:grid-cols-3" data-reveal-group>
          {approach.map((item) => (
            <div className="space-y-space-xs" key={item.title}>
              <span className="block font-caption-meta text-caption-meta tracking-widest text-outline">
                {item.index}
              </span>
              <h5 className="font-headline-sm text-headline-sm text-primary">{item.title}</h5>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
