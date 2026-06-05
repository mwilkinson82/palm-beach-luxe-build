import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { audioPreference } from "@/hooks/useAudioPreference";
import videoAsset from "@/assets/renovations-hero.mp4.asset.json";
import posterAsset from "@/assets/renovations-hero-poster.jpg.asset.json";

export const RenovationsHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const v = videoRef.current;
    if (!v) return;
    const onPlaying = () => setReady(true);
    v.addEventListener("playing", onPlaying);
    v.play().catch(() => {});
    return () => v.removeEventListener("playing", onPlaying);
  }, [reducedMotion]);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    audioPreference.set(!next);
    if (!next) v.play().catch(() => {});
  };

  return (
    <section
      aria-label="Renovations cinematic introduction"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      <img
        src={posterAsset.url}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-contain md:object-cover"
      />

      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterAsset.url}
          className={`absolute inset-0 h-full w-full object-contain md:object-cover transition-opacity duration-[1200ms] ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoAsset.url} type="video/mp4" />
        </video>
      )}

      {/* Vignette + edge gradients for nav legibility, matching the home VideoHero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Bottom-left brand mark */}
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 z-10 flex items-center space-x-3 text-white">
        <div className="h-px w-8 md:w-12 bg-accent" />
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light text-white/80">
          Palm Beach, Florida
        </span>
      </div>

      {/* Bottom-center scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-white/70 animate-float">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-px h-10 md:h-14 bg-gradient-to-b from-white/70 to-transparent" />
      </div>

      {/* Bottom-right unmute pill */}
      {!reducedMotion && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-10 group flex items-center gap-2 border border-white/30 bg-black/30 backdrop-blur-md px-4 py-2.5 text-white text-[10px] md:text-xs uppercase tracking-[0.25em] font-light hover:border-accent hover:bg-black/50 transition-colors"
        >
          {muted ? (
            <VolumeX className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
          )}
          <span>{muted ? "Unmute" : "Mute"}</span>
        </button>
      )}
    </section>
  );
};