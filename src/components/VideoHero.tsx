import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Volume2, VolumeX } from "lucide-react";
import { audioPreference } from "@/hooks/useAudioPreference";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoSource {
  hls: string;
  mp4: string;
  poster: string;
}

const DESKTOP: VideoSource = {
  hls: "https://stream.mux.com/SzK4tiWJ4hQb3vexGNT007JdU9Yzwp01hn.m3u8",
  mp4: "https://videos.aryeo.com/listings/01980906-7190-732c-8c9f-77c58527bd80/9f763580-f927-448c-bb1e-52d05458bbde.mp4",
  poster:
    "https://image.mux.com/SzK4tiWJ4hQb3vexGNT007JdU9Yzwp01hn/thumbnail.png?width=1920&height=1080&time=1",
};

const MOBILE: VideoSource = {
  hls: "https://stream.mux.com/XLvwqDrUK01E8Gqbld701veJ943LIjgr9k.m3u8",
  mp4: "https://videos.aryeo.com/listings/01980906-7190-732c-8c9f-77c58527bd80/9f763580-f6f1-49f6-8893-c98440ee8d68.mp4",
  poster:
    "https://image.mux.com/XLvwqDrUK01E8Gqbld701veJ943LIjgr9k/thumbnail.png?width=1080&height=1920&time=1",
};

interface VideoHeroProps {
  desktop?: VideoSource;
  mobile?: VideoSource;
}

export const VideoHero = ({
  desktop = DESKTOP,
  mobile = MOBILE,
}: VideoHeroProps) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const source = isMobile ? mobile : desktop;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // Attach HLS (or native fallback) whenever the active source changes
  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    setReady(false);
    let hls: Hls | null = null;

    const onPlaying = () => setReady(true);
    video.addEventListener("playing", onPlaying);

    // Safari plays HLS natively; everyone else needs hls.js
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = source.hls;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(source.hls);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (_e, data) => {
        if (data.fatal) {
          // Fall back to direct MP4 if HLS fails
          hls?.destroy();
          hls = null;
          video.src = source.mp4;
          video.play().catch(() => {});
        }
      });
    } else {
      video.src = source.mp4;
    }

    video.play().catch(() => {});

    return () => {
      video.removeEventListener("playing", onPlaying);
      hls?.destroy();
    };
  }, [source, reducedMotion]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    audioPreference.set(!next);
    if (!next) video.play().catch(() => {});
  };

  return (
    <section
      aria-label="Cinematic introduction to Beau Monde Builders"
      className="relative h-[100svh] w-full overflow-hidden bg-black"
    >
      {/* Poster fallback (visible until video fades in, or always for reduced motion) */}
      <img
        src={source.poster}
        alt=""
        aria-hidden="true"
        width={isMobile ? 1080 : 1920}
        height={isMobile ? 1920 : 1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!reducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={source.poster}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${
            mounted && ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {/* Vignette + bottom gradient for legibility */}
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
    </section>
  );
};
