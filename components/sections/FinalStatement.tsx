import Image from "next/image";
import Link from "next/link";

export default function FinalStatement({ href = "/contact" }: { href?: string }) {
  return (
    <Link className="group relative block h-[480px] w-full overflow-hidden md:h-[665px]" href={href}>
      {/* Oversized plate so the parallax drift never exposes an edge */}
      <div className="absolute inset-x-0 -top-[12%] h-[124%]" data-parallax="-8">
        <Image
          alt="Grand marble doorway bathed in soft morning light, casting warm geometric shadows onto limestone floors."
          className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
          fill
          sizes="100vw"
          src="/images/final-statement.jpg"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/30 p-space-md text-center transition-colors group-hover:bg-primary/50">
        <span
          className="mb-space-xs font-label-caps text-label-caps uppercase tracking-[0.3em] text-surface"
          data-reveal
        >
          Archive N° 092
        </span>
        <h2
          className="font-display-hero text-headline-lg-mobile tracking-tight text-surface transition-all duration-300 group-hover:tracking-wide sm:text-headline-lg md:text-display-hero"
          data-split="chars"
        >
          LET&apos;S WORK TOGETHER →
        </h2>
        <span
          className="mt-space-sm font-caption-meta text-caption-meta uppercase tracking-widest text-surface/80"
          data-delay="0.4"
          data-reveal
        >
          Commencing Commissions 2026
        </span>
      </div>
    </Link>
  );
}
