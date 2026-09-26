"use client";

import { useState } from "react";
import { projectTypes } from "@/lib/content";

const fieldClass =
  "bg-transparent border-b border-outline pb-space-xs font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-outline/60";
const labelClass = "font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant";

export default function ContactInquiry() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section className="w-full scroll-mt-20 bg-background px-margin-mobile py-space-xl md:px-margin" id="contact-inquiry">
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {/* Statement */}
        <div className="flex flex-col justify-between space-y-space-lg md:col-span-5">
          <div>
            <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
              Availability 2026 / 2027
            </span>
            <h2 className="mb-space-md font-headline-lg text-headline-lg-mobile leading-tight tracking-tight text-primary md:text-headline-lg md:leading-tight" data-split>
              Let&apos;s create something beautiful.
            </h2>
            <p className="max-w-md font-body-editorial text-body-editorial text-on-surface-variant" data-delay="0.2" data-reveal>
              For wedding bookings, portrait appointments, editorial assignments, or print monograph licensing.
            </p>
          </div>
          <div className="space-y-space-sm border-t border-surface-container-highest pt-space-md" data-reveal>
            <div className="font-caption-meta text-caption-meta uppercase tracking-widest text-outline">
              Direct Contact
            </div>
            <a
              className="block font-body-md text-body-md text-primary hover:text-outline"
              href="mailto:atelier@elenavance.com"
            >
              atelier@elenavance.com
            </a>
            <a
              className="block font-body-md text-body-md text-on-surface-variant hover:text-primary"
              href="tel:+33142689022"
            >
              +33 (0)1 42 68 90 22
            </a>
            <p className="pt-space-xs font-caption-meta text-caption-meta text-outline">
              Response time within 48 business hours.
            </p>
          </div>
        </div>

        {/* Editorial form */}
        <div className="md:col-span-7 md:pl-space-md" data-delay="0.15" data-reveal>
          <form
            className="flex flex-col space-y-space-md bg-surface-container-low p-space-md sm:p-space-lg"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-2">
              <div className="flex flex-col space-y-space-xs">
                <label className={labelClass} htmlFor="inq-name">
                  Your Full Name *
                </label>
                <input className={fieldClass} id="inq-name" name="name" placeholder="e.g. Eleanor Vance" required type="text" />
              </div>
              <div className="flex flex-col space-y-space-xs">
                <label className={labelClass} htmlFor="inq-email">
                  Email Address *
                </label>
                <input
                  className={fieldClass}
                  id="inq-email"
                  name="email"
                  placeholder="eleanor@domain.com"
                  required
                  type="email"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-md sm:grid-cols-3">
              <div className="flex flex-col space-y-space-xs">
                <label className={labelClass} htmlFor="inq-type">
                  Project Type *
                </label>
                <select className={fieldClass} id="inq-type" name="type" required>
                  {projectTypes.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col space-y-space-xs">
                <label className={labelClass} htmlFor="inq-date">
                  Anticipated Date
                </label>
                <input className={fieldClass} id="inq-date" name="date" placeholder="Month / Year" type="text" />
              </div>
              <div className="flex flex-col space-y-space-xs">
                <label className={labelClass} htmlFor="inq-location">
                  Location / Venue
                </label>
                <input className={fieldClass} id="inq-location" name="location" placeholder="City, Country" type="text" />
              </div>
            </div>
            <div className="flex flex-col space-y-space-xs">
              <label className={labelClass} htmlFor="inq-details">
                Project Details &amp; Vision
              </label>
              <textarea
                className={`${fieldClass} resize-none`}
                id="inq-details"
                name="details"
                placeholder="Tell me about your narrative, locations, timeline, or mood..."
                rows={4}
              />
            </div>
            <div className="flex flex-col justify-between gap-space-sm pt-space-sm sm:flex-row sm:items-center">
              <span className="font-caption-meta text-caption-meta text-outline">
                Archival security assured. Your details remain completely confidential.
              </span>
              <button
                className="shrink-0 cursor-pointer bg-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest text-on-primary transition-colors hover:bg-secondary"
                type="submit"
              >
                SEND INQUIRY →
              </button>
            </div>
            {sent && (
              <div
                className="border-t border-outline-variant pt-space-xs font-body-md text-body-md text-primary"
                role="status"
              >
                Thank you. Your dossier has been transmitted to Eléna Vance Studio. You will receive a response
                shortly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
