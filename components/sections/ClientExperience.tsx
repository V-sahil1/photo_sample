import { experienceSteps } from "@/lib/content";

export default function ClientExperience() {
  return (
    <section className="w-full bg-surface-container-low px-margin-mobile py-space-xl md:px-margin">
      <div className="mb-space-xl">
        <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline" data-reveal>
          The Protocol
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg" data-split>
          Client Experience
        </h2>
      </div>
      <div className="relative">
        {/* Timeline rule drawn behind the step markers as the protocol scrolls into view */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-4 hidden h-px origin-left bg-outline-variant md:block"
          data-draw
        />
        <ol className="relative grid grid-cols-1 gap-gutter sm:grid-cols-2 md:grid-cols-4" data-reveal-group>
        {experienceSteps.map((step, i) => (
          <li className="relative space-y-space-sm" key={step.title}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-surface-container-highest bg-surface font-caption-meta text-caption-meta font-medium text-primary">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">{step.title}</h3>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">{step.body}</p>
          </li>
        ))}
        </ol>
      </div>
    </section>
  );
}
