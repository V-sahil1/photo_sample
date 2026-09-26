"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/Icon";
import { navLinks } from "@/lib/content";
import { ease, gsap, motionOK, ScrollTrigger, useGSAP } from "@/lib/gsap";

const menuLinks = [
  { href: "/", label: "Index", meta: "Monograph Vol. VII" },
  { href: "/work", label: "Selected Work", meta: "Plates 01 — 08" },
  { href: "/about", label: "About the Artist", meta: "Paris · Copenhagen" },
  { href: "/services", label: "Services & Practices", meta: "Commissions" },
  { href: "/contact", label: "Contact & Inquiries", meta: "Availability 2026 / 27" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Tuck the header away while reading downwards; bring it back on any upward scroll
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(motionOK, () => {
      const header = headerRef.current!;
      let hidden = false;
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          const hide = self.direction === 1 && self.scroll() > 240;
          if (hide === hidden) return;
          hidden = hide;
          gsap.to(header, { yPercent: hide ? -100 : 0, duration: 0.6, ease: "power3.out", overwrite: true });
        },
      });
    });
    return () => mm.revert();
  }, []);

  // Ledger rows of the index menu deal in one after another
  useGSAP(
    () => {
      if (!menuOpen) return;
      const mm = gsap.matchMedia();
      mm.add(motionOK, () => {
        gsap.from("[data-menu-row]", { autoAlpha: 0, y: 48, duration: 1.1, stagger: 0.07, ease, delay: 0.1 });
        gsap.from("[data-menu-fade]", { autoAlpha: 0, duration: 1, ease: "power2.out", delay: 0.4 });
      });
      return () => mm.revert();
    },
    { dependencies: [menuOpen], scope: menuRef },
  );

  return (
    <>
      <header
        className="fixed top-0 z-50 w-full bg-background/80 shadow-[0_1px_8px_rgba(0,0,0,0.02)] backdrop-blur-xl transition-colors duration-300"
        ref={headerRef}
      >
        <div className="flex h-20 w-full items-center justify-between px-margin-mobile md:px-margin">
          <div className="flex items-center gap-space-sm">
            <Link
              className="font-headline-sm text-headline-sm tracking-tight text-primary transition-opacity hover:opacity-80"
              href="/"
            >
              AURELIEN VANCE
            </Link>
            <span className="ml-space-xs hidden font-caption-meta text-caption-meta text-outline sm:inline-block">
              EST. 2014
            </span>
          </div>

          <nav aria-label="Primary" className="hidden items-center gap-space-lg md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`font-label-caps text-label-caps uppercase tracking-widest transition-colors ${
                    active ? "font-medium text-primary" : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-space-md">
            <button
              aria-expanded={menuOpen}
              className="flex items-center gap-space-xs px-space-sm py-space-xs font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant transition-colors hover:text-on-surface"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <span className="hidden sm:inline">Index</span>
              <Icon className="text-[18px]" name="menu" />
              <span className="sr-only sm:hidden">Open menu</span>
            </button>
            <Link
              aria-label="About the artist"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary transition-opacity hover:opacity-80"
              href="/about"
            >
              <Icon className="text-[18px] text-on-primary" name="person" />
            </Link>
          </div>
        </div>
      </header>

      {/* Index menu: flat, opaque archival canvas (no blur), ledger-style rows */}
      {menuOpen && (
        <div
          aria-label="Site index"
          aria-modal="true"
          className="animate-fade-in fixed inset-0 z-[55] flex flex-col overflow-y-auto bg-background"
          data-lenis-prevent
          ref={menuRef}
          role="dialog"
        >
          <div className="flex h-20 w-full shrink-0 items-center justify-between px-margin-mobile md:px-margin">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">AURELIEN VANCE</span>
            <button
              className="flex items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:text-outline"
              onClick={() => setMenuOpen(false)}
              type="button"
            >
              CLOSE <Icon className="text-[18px]" name="close" />
            </button>
          </div>
          <nav
            aria-label="Site index"
            className="flex flex-1 flex-col justify-center px-margin-mobile py-space-xl md:px-margin"
          >
            <span
              className="mb-space-md block font-label-caps text-label-caps uppercase tracking-widest text-outline"
              data-menu-fade
            >
              Catalog Index
            </span>
            <ul className="border-b border-surface-container-highest">
              {menuLinks.map((link, i) => (
                <li className="border-t border-surface-container-highest" data-menu-row key={link.href}>
                  <Link
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className="group flex items-baseline justify-between gap-space-md px-space-xs py-5 transition-colors hover:bg-[#efece6]"
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="flex items-baseline gap-space-md">
                      <span className="w-8 font-caption-meta text-caption-meta text-outline">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-headline-md text-headline-sm transition-transform group-hover:translate-x-2 md:text-headline-md ${
                          isActive(link.href) ? "italic text-primary" : "text-primary"
                        }`}
                      >
                        {link.label}
                      </span>
                    </span>
                    <span className="flex items-center gap-space-md">
                      <span className="hidden font-caption-meta text-caption-meta text-outline sm:inline">
                        {link.meta}
                      </span>
                      <Icon className="text-[18px] text-outline group-hover:text-primary" name="arrow_outward" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className="flex shrink-0 flex-col justify-between gap-space-xs px-margin-mobile pb-space-lg font-caption-meta text-caption-meta text-outline sm:flex-row md:px-margin"
            data-menu-fade
          >
            <span>atelier@aurelienvance.com</span>
            <span>Rue du Temple 74, 75003 Paris</span>
          </div>
        </div>
      )}
    </>
  );
}
