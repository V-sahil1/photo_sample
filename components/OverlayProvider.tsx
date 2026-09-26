"use client";

import Image from "next/image";
import Link from "next/link";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import Icon from "@/components/Icon";
import { caseStudyImages, type CaseStudyImage, type LightboxImage, type Project } from "@/lib/content";

type OverlayContextValue = {
  openProject: (project: Project) => void;
  openLightbox: (images: LightboxImage[], index: number) => void;
};

const OverlayContext = createContext<OverlayContextValue | null>(null);

export function useOverlay() {
  const ctx = useContext(OverlayContext);
  if (!ctx) throw new Error("useOverlay must be used inside <OverlayProvider>");
  return ctx;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function OverlayProvider({ children }: { children: React.ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<{ images: LightboxImage[]; index: number } | null>(null);

  const openProject = useCallback((p: Project) => setProject(p), []);
  const closeProject = useCallback(() => setProject(null), []);
  const openLightbox = useCallback(
    (images: LightboxImage[], index: number) => setLightbox({ images, index }),
    [],
  );
  const closeLightbox = useCallback(() => setLightbox(null), []);

  const step = useCallback((delta: number) => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + delta + lb.images.length) % lb.images.length } : lb,
    );
  }, []);

  const anyOpen = project !== null || lightbox !== null;

  // Lock page scroll while an overlay is showing
  useEffect(() => {
    if (!anyOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [anyOpen]);

  // Keyboard: Esc closes the topmost overlay, arrows page the lightbox
  useEffect(() => {
    if (!anyOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox) closeLightbox();
        else closeProject();
      }
      if (lightbox && e.key === "ArrowLeft") step(-1);
      if (lightbox && e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [anyOpen, lightbox, closeLightbox, closeProject, step]);

  const current = lightbox ? lightbox.images[lightbox.index] : null;
  const gallery = project?.gallery ?? caseStudyImages;

  return (
    <OverlayContext.Provider value={{ openProject, openLightbox }}>
      {children}

      {/* Editorial case-study drawer */}
      {project && (
        <div
          aria-labelledby="modal-title"
          aria-modal="true"
          className="animate-fade-in fixed inset-0 z-[60] flex justify-end bg-primary/80 backdrop-blur-sm"
          data-lenis-prevent
          onClick={closeProject}
          role="dialog"
        >
          <div
            className="animate-drawer-in flex h-full w-full max-w-3xl flex-col justify-between overflow-y-auto bg-background p-margin-mobile md:p-margin"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="mb-space-lg flex items-center justify-between border-b border-surface-container-highest pb-space-sm">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-outline">
                  {project.category} / Monograph
                </span>
                <button
                  className="flex cursor-pointer items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:text-outline"
                  onClick={closeProject}
                  type="button"
                >
                  CLOSE <Icon className="text-[18px]" name="close" />
                </button>
              </div>
              <h2
                className="mb-1 font-headline-lg text-headline-lg-mobile tracking-tight text-primary md:text-headline-lg"
                id="modal-title"
              >
                {project.title}
              </h2>
              <span className="mb-space-md block font-caption-meta text-caption-meta uppercase tracking-widest text-outline">
                {project.meta}
              </span>
              <p className="mb-space-lg font-body-editorial text-body-editorial leading-relaxed text-on-surface-variant">
                {project.synopsis}
              </p>

              {/* Photobook layout sequence */}
              <div className="mb-space-lg space-y-space-md">
                <CaseStudyPlate
                  img={gallery[0]}
                  onOpen={() => openLightbox(gallery, 0)}
                  sizes="(min-width: 768px) 700px, 100vw"
                />
                <div className="grid grid-cols-2 gap-space-sm">
                  <CaseStudyPlate
                    img={gallery[1]}
                    onOpen={() => openLightbox(gallery, 1)}
                    sizes="(min-width: 768px) 350px, 50vw"
                  />
                  <CaseStudyPlate
                    img={gallery[2]}
                    onOpen={() => openLightbox(gallery, 2)}
                    sizes="(min-width: 768px) 350px, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-space-md border-t border-surface-container-highest pt-space-md">
              <Link
                className="font-label-caps text-label-caps uppercase tracking-widest text-primary underline underline-offset-4"
                href="/contact"
                onClick={closeProject}
              >
                Inquire About Similar Commissions →
              </Link>
              <span className="hidden font-caption-meta text-caption-meta text-outline sm:inline">
                Archival Monograph Plate
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen image lightbox */}
      {lightbox && current && (
        <div
          aria-label="Image viewer"
          aria-modal="true"
          className="animate-fade-in fixed inset-0 z-[70] flex flex-col justify-between bg-primary p-space-md text-surface md:p-space-lg"
          data-lenis-prevent
          role="dialog"
        >
          <div className="flex w-full items-center justify-between">
            <span className="font-caption-meta text-caption-meta tracking-widest text-surface/70">
              {pad(lightbox.index + 1)} / {pad(lightbox.images.length)}
            </span>
            <button
              className="flex cursor-pointer items-center gap-1 font-label-caps text-label-caps uppercase tracking-widest text-surface hover:text-surface-container-highest"
              onClick={closeLightbox}
              type="button"
            >
              <span>ESC</span>
              <Icon className="text-[20px]" name="close" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center p-space-sm md:p-space-md">
            <button
              aria-label="Previous image"
              className="absolute left-0 z-10 cursor-pointer p-space-sm text-surface/60 hover:text-surface"
              onClick={() => step(-1)}
              type="button"
            >
              <Icon className="text-[32px]" name="west" />
            </button>
            <div className="flex h-full w-full max-w-5xl flex-col items-center justify-center">
              <div className="relative h-[60vh] w-full md:h-[70vh]">
                <Image
                  alt={current.alt}
                  className="object-contain"
                  fill
                  key={current.src}
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  src={current.src}
                />
              </div>
              <p className="mt-space-sm text-center font-caption-meta text-caption-meta tracking-wider text-surface/70">
                {pad(lightbox.index + 1)} / {current.caption}
              </p>
            </div>
            <button
              aria-label="Next image"
              className="absolute right-0 z-10 cursor-pointer p-space-sm text-surface/60 hover:text-surface"
              onClick={() => step(1)}
              type="button"
            >
              <Icon className="text-[32px]" name="east" />
            </button>
          </div>

          <div className="flex items-center justify-between border-t border-surface/10 pt-space-xs font-caption-meta text-caption-meta text-surface/50">
            <span>Eléna Vance Studio Archive</span>
            <span className="hidden sm:inline">Medium Format Gelatin Silver Print</span>
          </div>
        </div>
      )}
    </OverlayContext.Provider>
  );
}

function CaseStudyPlate({
  img,
  onOpen,
  sizes,
}: {
  img: CaseStudyImage;
  onOpen: () => void;
  sizes: string;
}) {
  return (
    <button
      aria-label={`View ${img.caption}`}
      className={`relative block w-full cursor-zoom-in overflow-hidden bg-surface-container ${img.aspect}`}
      onClick={onOpen}
      type="button"
    >
      <Image alt={img.alt} className="object-cover" fill sizes={sizes} src={img.src} />
    </button>
  );
}
