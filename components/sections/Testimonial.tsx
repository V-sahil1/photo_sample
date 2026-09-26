import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full overflow-hidden bg-background px-margin-mobile py-space-xl md:px-margin">
      <figure className="mx-auto max-w-4xl space-y-space-sm py-space-lg text-center">
        <span className="block font-label-caps text-label-caps uppercase tracking-[0.2em] text-outline" data-reveal>
          Endorsement
        </span>
        <blockquote className="font-display-hero text-headline-md italic tracking-tight text-primary md:text-headline-lg" data-split="scrub">
          “The photographs feel like memories we can step back into. Not posed artifacts, but breathing pieces of
          our lived lives.”
        </blockquote>
        <figcaption className="pt-space-xs font-caption-meta text-caption-meta uppercase tracking-widest text-on-surface-variant" data-reveal>
          Aurelia &amp; Julian — Private Estate, Provence
        </figcaption>
      </figure>

      {/* Overlapping photo mosaic */}
      <div className="mt-space-lg grid grid-cols-12 items-center gap-gutter-mobile md:gap-gutter">
        <div className="col-span-6 -mt-6 md:col-span-3" data-parallax="6">
          <div className="relative aspect-[3/4] overflow-hidden bg-surface-container" data-reveal-media>
            <div className="absolute inset-0" data-media>
              <Image
                alt="Candid detail of hands exchanging a ceramic cup during a candlelit wedding dinner."
                className="object-cover object-center"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                src="/images/mosaic-01.jpg"
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-5" data-parallax="3">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-container" data-reveal-media>
            <div className="absolute inset-0" data-media>
              <Image
                alt="A solitary figure walking along the stone parapets of an ancient monastery at dusk."
                className="object-cover object-center"
                fill
                sizes="(min-width: 768px) 42vw, 50vw"
                src="/images/mosaic-02.jpg"
              />
            </div>
          </div>
        </div>
        <div className="z-10 col-span-12 mt-space-md md:col-span-4 md:-mt-10 md:-ml-8" data-parallax="12">
          <div className="relative aspect-[4/5] overflow-hidden bg-surface-container" data-reveal-media>
            <div className="absolute inset-0" data-media>
              <Image
                alt="Black and white portrait of a woman smiling softly with her eyes closed in the rain."
                className="object-cover object-center"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src="/images/mosaic-03.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
