import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] w-full flex-col justify-center px-margin-mobile py-space-xl md:px-margin">
      <span className="mb-space-xs block font-label-caps text-label-caps uppercase tracking-widest text-outline">
        Plate N° 404
      </span>
      <h1 className="mb-space-md font-display-hero text-display-hero-mobile tracking-tight text-primary md:text-display-hero">
        This plate is missing from the archive.
      </h1>
      <p className="mb-space-lg max-w-xl font-body-editorial text-body-editorial text-on-surface-variant">
        The page you were looking for has been moved or never existed.
      </p>
      <Link
        className="self-start font-label-caps text-label-caps uppercase tracking-widest text-primary underline underline-offset-4 transition-colors hover:text-outline"
        href="/"
      >
        Return to the Index →
      </Link>
    </section>
  );
}
