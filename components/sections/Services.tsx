"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "@/components/Icon";
import { services } from "@/lib/content";

export default function Services({ inquiryHref = "/contact" }: { inquiryHref?: string }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-background px-margin-mobile py-space-xl md:px-margin">
      <div className="mb-space-lg flex flex-col justify-between gap-space-sm border-b border-surface-container-highest pb-space-sm md:flex-row md:items-end">
        <div>
          <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
            Commissions
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg" data-split>
            Services &amp; Practices
          </h2>
        </div>
        <span className="max-w-xs font-caption-meta text-caption-meta text-outline" data-delay="0.2" data-reveal>
          Each project is tailored with archival print curation and bespoke photographic sequencing.
        </span>
      </div>

      {/* Accordion rows — one open at a time */}
      <div className="divide-y divide-surface-container-highest border-b border-surface-container-highest" data-reveal-group>
        {services.map((service, i) => {
          const isOpen = open === i;
          const panelId = `service-panel-${i}`;
          return (
            <div
              className="group px-space-xs py-space-md transition-colors hover:bg-surface-container-low"
              data-cursor="EXPAND"
              key={service.title}
            >
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer flex-col justify-between gap-space-sm text-left sm:flex-row sm:items-center"
                onClick={() => setOpen(isOpen ? null : i)}
                type="button"
              >
                <span className="flex items-baseline gap-space-md">
                  <span className="w-8 shrink-0 font-caption-meta text-caption-meta text-outline">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary transition-transform group-hover:translate-x-2">
                    {service.title}
                  </span>
                </span>
                <span className="flex items-center gap-space-lg self-end sm:self-auto">
                  <span className="hidden font-caption-meta text-caption-meta text-on-surface-variant md:inline">
                    {service.tags}
                  </span>
                  <Icon
                    className={`text-[20px] text-outline transition-transform group-hover:text-primary ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    name="expand_more"
                  />
                </span>
              </button>
              {isOpen && (
                <div className="animate-fade-in grid grid-cols-1 gap-gutter pt-space-md pb-space-xs md:grid-cols-12" id={panelId}>
                  <div className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant md:col-span-8">
                    <span className="mb-space-xs block font-caption-meta text-caption-meta text-outline md:hidden">
                      {service.tags}
                    </span>
                    {service.body}
                  </div>
                  <div className="flex items-end md:col-span-4 md:justify-end">
                    <Link
                      className="font-label-caps text-label-caps uppercase tracking-widest text-primary underline underline-offset-4"
                      href={inquiryHref}
                    >
                      {service.cta}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
