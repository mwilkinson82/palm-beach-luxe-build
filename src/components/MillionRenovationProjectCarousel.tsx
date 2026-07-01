import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { RevealAnimation } from "@/components/RevealAnimation";
import { cn } from "@/lib/utils";
import {
  MILLION_RENOVATION_PROJECT,
  type MillionRenovationProjectPhoto,
} from "@/data/millionRenovationProject";

type MillionRenovationProjectCarouselProps = {
  variant?: "home" | "page";
  className?: string;
};

const photos = MILLION_RENOVATION_PROJECT.photos;

export const MillionRenovationProjectCarousel = ({
  variant = "page",
  className,
}: MillionRenovationProjectCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const selectedPhoto = photos[selectedIndex] ?? photos[0];

  useEffect(() => {
    if (!api) return;

    const updateSelected = () => setSelectedIndex(api.selectedScrollSnap());

    updateSelected();
    api.on("select", updateSelected);
    api.on("reInit", updateSelected);

    return () => {
      api.off("select", updateSelected);
      api.off("reInit", updateSelected);
    };
  }, [api]);

  const scrollTo = (index: number) => api?.scrollTo(index);

  return (
    <section
      id="million-renovation-project"
      aria-labelledby={`million-renovation-${variant}-heading`}
      className={cn(
        "relative overflow-hidden border-y border-accent/20 bg-seafoam text-foreground",
        variant === "home" ? "py-16 md:py-20" : "py-24 md:py-32",
        className,
      )}
    >
      <div className="absolute inset-0 silk-grain opacity-[0.04] pointer-events-none select-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <RevealAnimation animation="fade-up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-12">
            <div className="max-w-4xl min-w-0">
              <div className="flex items-center gap-3 mb-5 text-accent">
                <span className="h-px w-10 bg-accent" />
                <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase">
                  Renovation Portfolio
                </span>
              </div>
              <h2
                id={`million-renovation-${variant}-heading`}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] text-primary"
              >
                {MILLION_RENOVATION_PROJECT.eyebrow}:{" "}
                <span className="italic text-muted-foreground">
                  {MILLION_RENOVATION_PROJECT.title}
                </span>
              </h2>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={120}>
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{ align: "start", loop: true }}
              className="relative"
            >
              <CarouselContent className="ml-0">
                {photos.map((photo, index) => (
                  <CarouselItem key={photo.number} className="pl-0">
                    <figure className="relative bg-primary overflow-hidden border border-accent/30 shadow-[0_40px_90px_-35px_rgba(15,42,61,0.65)]">
                      <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[16/9]">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/70 via-primary/15 to-transparent" />
                        <button
                          type="button"
                          onClick={() => setLightboxIndex(index)}
                          aria-label={`Open photo ${index + 1} in full screen`}
                          className="absolute right-4 top-4 md:right-6 md:top-6 flex h-11 w-11 items-center justify-center border border-primary-foreground/35 bg-primary/45 text-primary-foreground backdrop-blur-sm transition-colors duration-300 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/70"
                        >
                          <Maximize2 className="h-4 w-4" strokeWidth={1.4} />
                        </button>
                      </div>
                    </figure>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute inset-y-0 left-3 right-3 md:left-6 md:right-6 flex items-center justify-between pointer-events-none">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                aria-label="Previous renovation photo"
                className="pointer-events-auto flex h-11 w-11 md:h-12 md:w-12 items-center justify-center border border-accent/55 bg-background/80 text-primary shadow-[0_16px_35px_-20px_rgba(15,42,61,0.7)] backdrop-blur transition-colors duration-300 hover:border-accent hover:bg-background focus:outline-none focus:ring-2 focus:ring-accent/70"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.35} />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                aria-label="Next renovation photo"
                className="pointer-events-auto flex h-11 w-11 md:h-12 md:w-12 items-center justify-center border border-accent/55 bg-background/80 text-primary shadow-[0_16px_35px_-20px_rgba(15,42,61,0.7)] backdrop-blur transition-colors duration-300 hover:border-accent hover:bg-background focus:outline-none focus:ring-2 focus:ring-accent/70"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={1.35} />
              </button>
            </div>
          </div>
        </RevealAnimation>

        <RevealAnimation animation="fade-up" delay={220}>
          <div className="mt-5 md:mt-6 flex flex-col gap-5">
            <div className="flex items-center justify-between gap-6">
              <div className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary/70 tabular-nums">
                <span className="text-primary">
                  {String(selectedIndex + 1).padStart(2, "0")}
                </span>
                <span className="text-primary/40">
                  {" "}
                  / {String(photos.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
              {photos.map((photo, index) => {
                const active = index === selectedIndex;
                return (
                  <button
                    key={photo.number}
                    type="button"
                    onClick={() => scrollTo(index)}
                    aria-label={`Show photo ${index + 1}`}
                    aria-current={active}
                    className={cn(
                      "relative flex-shrink-0 w-20 md:w-28 lg:w-32 aspect-[4/3] overflow-hidden border bg-primary transition-all duration-300",
                      active
                        ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))]"
                        : "border-accent/25 opacity-65 hover:border-accent/70 hover:opacity-100",
                    )}
                  >
                    <img
                      src={photo.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </RevealAnimation>
      </div>

      {lightboxIndex !== null && (
        <ProjectPhotoLightbox
          photos={photos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};

type ProjectPhotoLightboxProps = {
  photos: MillionRenovationProjectPhoto[];
  initialIndex: number;
  onClose: () => void;
};

const ProjectPhotoLightbox = ({
  photos,
  initialIndex,
  onClose,
}: ProjectPhotoLightboxProps) => {
  const [current, setCurrent] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);
  const total = photos.length;

  const go = useCallback(
    (delta: number) => setCurrent((index) => (index + delta + total) % total),
    [total],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [go, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Million dollar renovation project gallery"
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm animate-fade-in flex flex-col"
      onClick={onClose}
    >
      <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none" />

      <div
        className="relative z-20 flex items-center justify-between px-5 md:px-8 pt-5 md:pt-6 text-primary-foreground/85"
        onClick={(event) => event.stopPropagation()}
      >
        <span className="font-sans uppercase text-[10px] md:text-xs tracking-[0.35em]">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close renovation gallery"
          className="min-h-[44px] min-w-[44px] flex items-center justify-center border border-primary-foreground/30 bg-black/40 hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/70"
        >
          <X className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      <div
        className="relative flex-1 flex items-center justify-center px-3 md:px-16 pb-[150px] md:pb-[170px]"
        onClick={(event) => event.stopPropagation()}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const dx = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchStartX.current = null;
        }}
      >
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous renovation photo"
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/70"
        >
          <ArrowLeft className="h-5 w-5" strokeWidth={1.25} />
        </button>

        <img
          key={current}
          src={photos[current].src}
          alt={photos[current].alt}
          className="max-h-full max-w-full object-contain border border-accent/30 shadow-2xl animate-fade-in"
        />

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next renovation photo"
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center border border-primary-foreground/30 bg-black/40 text-primary-foreground hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/70"
        >
          <ArrowRight className="h-5 w-5" strokeWidth={1.25} />
        </button>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-20 px-3 md:px-6 lg:px-10 pb-4 md:pb-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-3 text-primary-foreground/70">
          <span className="h-px w-6 bg-accent" />
          <span className="font-sans text-[10px] tracking-[0.35em] uppercase">
            {MILLION_RENOVATION_PROJECT.title}
          </span>
        </div>
        <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
          {photos.map((photo, index) => {
            const active = index === current;
            return (
              <button
                key={photo.number}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={active}
                className={cn(
                  "group relative flex-shrink-0 w-24 md:w-32 aspect-[3/2] bg-black overflow-hidden border transition-all duration-300",
                  active
                    ? "border-accent shadow-[0_0_0_1px_hsl(var(--accent))]"
                    : "border-primary-foreground/20 hover:border-accent/70 opacity-70 hover:opacity-100",
                )}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>,
    document.body,
  );
};
