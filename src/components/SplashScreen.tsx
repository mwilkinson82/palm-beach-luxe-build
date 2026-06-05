import { useState, useEffect } from "react";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";

interface SplashScreenProps {
  duration?: number;
  onComplete: () => void;
}

export const SplashScreen = ({ duration = 3000, onComplete }: SplashScreenProps) => {
  const [phase, setPhase] = useState<"loading" | "entering" | "visible" | "exiting" | "complete">("loading");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = logoSketch;
    
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
      img.onerror = () => setImageLoaded(true); // Proceed anyway on error
    }
  }, []);

  // Start animation once image is loaded
  useEffect(() => {
    if (!imageLoaded) return;

    // Start entering phase
    setPhase("entering");
    
    const enterTimer = setTimeout(() => {
      setPhase("visible");
    }, 100);

    // Phase 2: Stay visible, then start exit (use shorter fade time)
    const exitTimer = setTimeout(() => {
      setPhase("exiting");
    }, duration - 800);

    // Phase 3: Complete and unmount
    const completeTimer = setTimeout(() => {
      setPhase("complete");
      onComplete();
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [imageLoaded, duration, onComplete]);

  if (phase === "complete") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-seafoam transition-opacity duration-700 ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo Container */}
      <div
        className={`flex flex-col items-center transition-all duration-700 ease-out ${
          phase === "loading" || phase === "entering" 
            ? "opacity-0 scale-95" 
            : "opacity-100 scale-100"
        }`}
      >
        {/* Logo Image */}
        <div className="relative mb-8">
          <img
            src={logoSketch}
            alt="Beau Monde Builders"
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain ring-1 ring-accent shadow-[0_25px_50px_-12px_rgba(15,42,61,0.45)] rounded-sm"
          />
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-[0.2em] text-primary uppercase">
            Beau Monde
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-primary/60 font-light">
              Builders
            </span>
            <div className="h-px w-8 bg-accent" />
          </div>
          <p className="text-sm sm:text-base md:text-lg tracking-[0.25em] uppercase text-primary/50 font-light mt-2">
            Palm Beach
          </p>
        </div>

        {/* Subtle loading indicator */}
        <div className="mt-12">
          <div className="w-32 h-px bg-primary/10 overflow-hidden">
            <div 
              className={`h-full bg-accent origin-left ${imageLoaded ? '' : 'opacity-0'}`}
              style={{
                animation: imageLoaded ? `loadingBar ${duration - 800}ms ease-out forwards` : 'none',
              }}
            />
          </div>
        </div>
      </div>

      {/* CSS for loading animation */}
      <style>{`
        @keyframes loadingBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};
