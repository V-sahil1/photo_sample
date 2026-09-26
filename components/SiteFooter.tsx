import Link from "next/link";

const dispatchLinks = [
  { href: "/work", label: "Selected Works" },
  { href: "/services", label: "Commissions" },
  { href: "/about", label: "Exhibitions" },
  { href: "/contact", label: "Press & Licensing" },
];

const discourseLinks = [
  { href: "https://instagram.com", label: "Instagram", external: true },
  { href: "https://www.artsy.net", label: "Artsy", external: true },
  { href: "https://substack.com", label: "Substack", external: true },
  { href: "/work", label: "Monograph 2026", external: false },
];

const legalLinks = [
  { href: "/about", label: "Colophon" },
  { href: "/work", label: "Catalog Raisonné" },
  { href: "/contact", label: "Privacy & Rights" },
];

export default function SiteFooter() {
  return (
    <footer className="mt-space-xl w-full bg-surface-container-low shadow-[0_-1px_0_rgba(0,0,0,0.04)]">
      <div className="w-full px-margin-mobile py-space-xl md:px-margin">
        <div className="mb-space-xl grid grid-cols-1 gap-gutter md:grid-cols-12" data-reveal-group>
          <div className="flex flex-col justify-between space-y-space-md md:col-span-5">
            <span className="font-headline-md text-headline-md tracking-tight text-primary">
              Aurelien Vance Studio
            </span>
            <p className="max-w-md font-body-editorial text-body-editorial text-on-surface-variant">
              Contemporary architectural, portrait, and documentary monographs. Available for international
              commissions and editorial representation.
            </p>
          </div>
          <div className="flex flex-col space-y-space-sm md:col-span-3">
            <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-widest text-outline">
              Archive &amp; Studio
            </span>
            <span className="font-body-md text-body-md text-on-surface">Rue du Temple 74, 75003 Paris</span>
            <span className="font-body-md text-body-md text-on-surface-variant">By appointment only</span>
            <a
              className="mt-space-xs font-caption-meta text-caption-meta text-on-surface underline underline-offset-4 transition-colors hover:text-outline"
              href="mailto:atelier@aurelienvance.com"
            >
              atelier@aurelienvance.com
            </a>
          </div>
          <div className="flex flex-col space-y-space-sm md:col-span-2">
            <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-widest text-outline">
              Dispatch
            </span>
            {dispatchLinks.map((link) => (
              <Link
                className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-space-sm md:col-span-2">
            <span className="mb-space-xs font-label-caps text-label-caps uppercase tracking-widest text-outline">
              Discourse
            </span>
            {discourseLinks.map((link) =>
              link.external ? (
                <a
                  className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-space-md pt-space-lg sm:flex-row">
          <div className="text-center font-caption-meta text-caption-meta text-outline sm:text-left">
            © 2026 Aurelien Vance. All archival photographic plates and prints reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-xs font-caption-meta text-caption-meta text-outline">
            {legalLinks.map((link) => (
              <Link className="transition-colors hover:text-on-surface" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
