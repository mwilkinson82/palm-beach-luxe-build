import { cn } from "@/lib/utils";

interface BentoTileProps {
  src: string;
  alt: string;
  /** Short brass-eyebrow caption shown bottom-left. */
  label?: string;
  /** Anchor tile gets corner ticks, persistent caption, and a stronger lift. */
  anchor?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Editorial bento tile with tactile hover + tap microinteractions.
 *
 * Hover (desktop):
 *  - slow image zoom + subtle warm-up filter
 *  - ring brightens to brass
 *  - tile lifts and shadow deepens
 *  - bottom brass hairline draws across
 *  - caption fades up (non-anchor tiles)
 *
 * Active (touch):
 *  - quick 0.985 press scale so taps feel physical
 *
 * Focus-visible:
 *  - same treatment as hover, plus brass focus ring offset
 *  - tile is keyboard-reachable via tabIndex=0 (decorative, no action)
 */
export const BentoTile = ({
  src,
  alt,
  label,
  anchor = false,
  className,
  onClick,
}: BentoTileProps) => (
  <figure
    tabIndex={0}
    role={onClick ? "button" : undefined}
    aria-label={onClick ? alt : undefined}
    onClick={onClick}
    onKeyDown={
      onClick
        ? (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onClick();
            }
          }
        : undefined
    }
    className={cn(
      "group/tile relative overflow-hidden bg-primary outline-none",
      onClick && "cursor-pointer",
      "ring-1 ring-accent/30",
      anchor
        ? "shadow-[0_40px_70px_-30px_rgba(15,42,61,0.5)]"
        : "shadow-[0_18px_40px_-22px_rgba(15,42,61,0.45)]",
      "transition-[transform,box-shadow,--tw-ring-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
      "hover:ring-accent/80 focus-visible:ring-accent/90 focus-visible:ring-2",
      anchor
        ? "hover:-translate-y-[3px] hover:shadow-[0_55px_85px_-30px_rgba(15,42,61,0.6)] focus-visible:-translate-y-[3px]"
        : "hover:-translate-y-[2px] hover:shadow-[0_28px_55px_-22px_rgba(15,42,61,0.55)] focus-visible:-translate-y-[2px]",
      "active:scale-[0.985] active:duration-150",
      className,
    )}
  >
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={cn(
        "absolute inset-0 h-full w-full object-cover will-change-transform",
        "transition-[transform,filter] duration-[1600ms] ease-out",
        "group-hover/tile:scale-[1.045] group-focus-visible/tile:scale-[1.045]",
        "group-hover/tile:brightness-[1.04] group-hover/tile:saturate-[1.05]",
        "group-focus-visible/tile:brightness-[1.04] group-focus-visible/tile:saturate-[1.05]",
      )}
    />

    {/* Soft navy floor — only on hover/focus, lifts the caption */}
    {label && (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-0",
          "bg-gradient-to-t from-primary/75 via-primary/25 to-transparent",
          "transition-opacity duration-700 ease-out",
          anchor
            ? "opacity-90"
            : "group-hover/tile:opacity-100 group-focus-visible/tile:opacity-100",
        )}
      />
    )}

    {/* Brass hairline that draws across on hover/focus */}
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-accent",
        "origin-left scale-x-0 transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
        "group-hover/tile:scale-x-100 group-focus-visible/tile:scale-x-100",
      )}
    />

    {/* Anchor-only corner ticks */}
    {anchor && (
      <>
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 left-4 md:top-6 md:left-6 w-5 h-5 border-t border-l border-accent/70 transition-[width,height,border-color] duration-700 ease-out group-hover/tile:w-7 group-hover/tile:h-7 group-hover/tile:border-accent"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-4 right-4 md:bottom-6 md:right-6 w-5 h-5 border-b border-r border-accent/70 transition-[width,height,border-color] duration-700 ease-out group-hover/tile:w-7 group-hover/tile:h-7 group-hover/tile:border-accent"
        />
      </>
    )}

    {label && (
      <figcaption
        className={cn(
          "absolute left-4 bottom-4 md:left-6 md:bottom-6 flex items-center gap-2 text-primary-foreground/95",
          "transition-[opacity,transform] duration-700 ease-out",
          anchor
            ? "opacity-100"
            : "opacity-0 translate-y-1 group-hover/tile:opacity-100 group-hover/tile:translate-y-0 group-focus-visible/tile:opacity-100 group-focus-visible/tile:translate-y-0",
        )}
      >
        <span
          className={cn(
            "h-px bg-accent transition-[width] duration-700 ease-out",
            anchor ? "w-6" : "w-4 group-hover/tile:w-7 group-focus-visible/tile:w-7",
          )}
        />
        <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase">
          {label}
        </span>
      </figcaption>
    )}
  </figure>
);