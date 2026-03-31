"use client";

import type { StaticImageData } from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CatalogFigure } from "@/components/equipment/CatalogFigure";

type Slide = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  priority?: boolean;
  /** Pass through to CatalogFigure: full image, intrinsic aspect ratio */
  natural?: boolean;
  /** With natural: cap max height (carousel slides default to constrained) */
  constrainNatural?: boolean;
  /** Same aspect box + contain for every slide (recommended for mixed aspect ratios) */
  uniformFrame?: boolean;
};

export function ImageCarousel({
  slides,
  ariaLabel = "Image carousel",
}: {
  slides: Slide[];
  ariaLabel?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const maxIndex = slides.length - 1;

  const updateActiveIndexFromScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const width = scroller.clientWidth;
    if (!width) return;
    const nextIndex = Math.round(scroller.scrollLeft / width);
    setActiveIndex(Math.min(maxIndex, Math.max(0, nextIndex)));
  }, [maxIndex]);

  useEffect(() => {
    updateActiveIndexFromScroll();
    // Keep active slide correct when viewport changes.
    const onResize = () => updateActiveIndexFromScroll();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateActiveIndexFromScroll]);

  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.min(maxIndex, Math.max(0, index));
      const node = slideRefs.current[clamped];
      if (!node) return;
      node.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      setActiveIndex(clamped);
    },
    [maxIndex]
  );

  const controls = useMemo(() => {
    if (slides.length <= 1) return null;
    return (
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2">
        <button
          type="button"
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-stroke/80 bg-brand-bg/70 text-ink shadow-sm backdrop-blur-sm transition hover:border-brand-gold/35 disabled:opacity-40"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex <= 0}
          aria-label="Previous image"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-brand-stroke/80 bg-brand-bg/70 text-ink shadow-sm backdrop-blur-sm transition hover:border-brand-gold/35 disabled:opacity-40"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex >= maxIndex}
          aria-label="Next image"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    );
  }, [activeIndex, goTo, maxIndex, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="relative">
      <div
        className="[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overflow-x-auto rounded-3xl"
        ref={scrollerRef}
        onScroll={updateActiveIndexFromScroll}
        style={{ scrollSnapType: "x mandatory" }}
        aria-label={ariaLabel}
        role="region"
      >
        <div className="flex">
          {slides.map((slide, idx) => (
            <div
              key={`${slide.alt}-${idx}`}
              ref={(node) => {
                slideRefs.current[idx] = node;
              }}
              className="w-full flex-shrink-0 scroll-snap-align-start"
            >
              <CatalogFigure
                src={slide.src}
                alt={slide.alt}
                caption={slide.caption}
                priority={slide.priority}
                uniformFrame={slide.uniformFrame}
                natural={slide.uniformFrame ? false : slide.natural}
                constrainNatural={
                  slide.uniformFrame
                    ? false
                    : slide.constrainNatural ?? (slide.natural === true ? true : false)
                }
                className="border-0 shadow-none"
              />
            </div>
          ))}
        </div>
      </div>

      {controls}

      {slides.length > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-2">
          {slides.map((_, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={idx}
                type="button"
                className={`h-2.5 w-2.5 rounded-full transition ${
                  isActive ? "bg-brand-gold" : "bg-brand-stroke/40 hover:bg-brand-stroke/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goTo(idx)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

