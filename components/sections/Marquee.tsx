import { Fragment } from "react";

const disciplines = ["Weddings", "Portraiture", "Fashion & Editorial", "Events", "Commercial", "Monographs"];
const rituals = ["Observe", "Frame", "Preserve", "Print", "Bind", "Remember"];

// Repeat each band so the scrubbed 30% travel never runs out of type at wide viewports
const repeat = <T,>(items: T[]) => [...items, ...items, ...items];

function Band({ items, italic }: { items: string[]; italic?: boolean }) {
  return repeat(items).map((word, i) => (
    <Fragment key={`${word}-${i}`}>
      <span
        className={`font-display-hero text-[56px] leading-[1.1] tracking-tight md:text-[112px] ${
          italic ? "italic text-outline" : "text-primary"
        }`}
      >
        {word}
      </span>
      <span className="font-display-hero text-[40px] text-outline-variant md:text-[72px]">/</span>
    </Fragment>
  ));
}

/** Two oversized type bands that slide in opposite directions as the page scrolls. */
export default function Marquee() {
  return (
    <section
      aria-label="Disciplines"
      className="w-full overflow-hidden border-y border-surface-container-highest bg-background py-space-xl"
    >
      <p className="sr-only">{disciplines.join(", ")}</p>
      <div aria-hidden="true" className="flex w-max items-center gap-space-lg whitespace-nowrap" data-marquee="1">
        <Band items={disciplines} />
      </div>
      <div
        aria-hidden="true"
        className="mt-space-sm flex w-max items-center gap-space-lg whitespace-nowrap"
        data-marquee="-1"
      >
        <Band italic items={rituals} />
      </div>
    </section>
  );
}
