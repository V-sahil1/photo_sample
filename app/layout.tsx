import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import CursorEffects from "@/components/CursorEffects";
import OverlayProvider from "@/components/OverlayProvider";
import ScrollAnimations from "@/components/ScrollAnimations";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

// Runs before first paint: flags motion-capable browsers so reveal targets start hidden
// (no flash before hydration). Falls back to showing everything if GSAP never boots.
const motionBootstrap = `(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("motion");setTimeout(function(){if(!d.classList.contains("motion-ready"))d.classList.remove("motion")},4000)})();`;

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Aurelien Vance Studio — Fine Art & Documentary Photography",
    template: "%s · Aurelien Vance Studio",
  },
  description:
    "Archival silver prints, medium format negatives, and documentary observation worldwide. Wedding, portrait, editorial and commercial photography from Paris and Copenhagen.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${garamond.variable} ${inter.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBootstrap }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body-md text-body-md text-on-surface antialiased selection:bg-surface-container-highest selection:text-primary">
        <OverlayProvider>
          <SiteHeader />
          <main className="w-full bg-background pt-20">{children}</main>
          <SiteFooter />
        </OverlayProvider>
        <CursorEffects />
        <SmoothScroll />
        <ScrollAnimations />
      </body>
    </html>
  );
}
