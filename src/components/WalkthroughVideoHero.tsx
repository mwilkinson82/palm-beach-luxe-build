import { useEffect, useState } from "react";

/**
 * Cinematic hero variant that uses the AJ Hoover walkthrough video (Reelreef
 * iframe) instead of a self-hosted MP4/HLS. Keeps the same chrome as
 * `VideoHero` (vignette, location stamp, scroll indicator) so the page feels
 * identical above the fold.
 */
interface WalkthroughVideoHeroProps {
  iframeSrc?: string;
  locationLabel?: string;
}

export const WalkthroughVideoHero = ({
  iframeSrc = "https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a",
  locationLabel = "Space Coast, Florida",
}: WalkthroughVideoHeroProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Autoplay loop, muted by default (browser policy). User can unmute by
  // tapping anywhere on the player — the iframe handles its own controls.
  let src = iframeSrc;
  try {
    const url = new URL(iframeSrc);
    url.searchParams.set("autoplay", "1");
    url.searchParams.set("muted", "1");
    url.searchParams.set("loop", "1");
    url.searchParams.set("controls", "0");
    src = url.toString();
  } catch {
    /* ignore */
  }

  return (
    <section
      aria-label="Cinematic walkthrough with AJ Hoover"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      <iframe
        src={src}
        title="Newly completed project walkthrough with AJ Hoover, CEO of Beau Monde Builders"
        allow="autoplay; picture-in-picture"
        className={`absolute inset-0 h-full w-full transition-opacity duration-[1200ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          border: 0,
          // Fill the viewport, cropping the letterboxed video to a true
          // edge-to-edge cinematic hero (matches `object-cover` on <video>).
          width: "max(100vw, calc(100svh * 16 / 9))",
          height: "max(100svh, calc(100vw * 9 / 16))",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          position: "absolute",
        }}
      />

      {/* Vignette + bottom gradient for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      {/* Bottom-left brand mark */}
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white pointer-events-none">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          {locationLabel}
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float pointer-events-none">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>
    </section>
  );
};