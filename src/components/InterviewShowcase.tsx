import { RevealAnimation } from "@/components/RevealAnimation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Parallax } from "@/components/Parallax";

interface InterviewShowcaseProps {
  iframeSrc?: string;
}

export const InterviewShowcase = ({
  iframeSrc = "https://media.reelreef.com/videos/019caebd-371f-734b-86ff-fe2acb4cb3a2",
}: InterviewShowcaseProps) => {
  return (
    <section
      aria-label="In conversation with AJ Hoover — Realtor interview at the completed residence"
      className="relative bg-primary text-primary-foreground py-16 md:py-24 lg:py-32 overflow-hidden border-t border-accent/20"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Video — left, cols 1–7 */}
          <RevealAnimation animation="luxury-reveal" className="lg:col-span-7 order-2 lg:order-1">
            <Parallax speed={0.06}>
              <div className="relative w-full aspect-video bg-black overflow-hidden md:border md:border-accent/30 shadow-2xl">
                <iframe
                  src={iframeSrc}
                  title="Realtor interview with AJ Hoover, CEO of Beau Monde Builders, at his newly completed Space Coast residence"
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            </Parallax>
          </RevealAnimation>

          {/* Editorial column — right, cols 8–12 */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative">
            {/* Parallax C ligature sits behind the headline column */}
            <span
              aria-hidden
              className="parallax-ligature absolute -top-16 md:-top-24 -left-6 md:-left-10 font-display italic text-[12rem] md:text-[18rem] lg:text-[20rem] leading-none text-accent/10 pointer-events-none select-none z-0"
              style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
            >
              C
            </span>

            <div className="relative z-10">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-10 bg-accent/50" />
                  <span className="font-sans uppercase text-accent text-[10px] md:text-xs tracking-[0.45em] font-light">
                    In Conversation
                  </span>
                </div>
              </RevealAnimation>

              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="font-display text-primary-foreground text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[0.95] mb-6">
                  The Builder, <span className="italic">on the Build</span>
                </h2>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={220}>
                <p className="font-serif italic font-light text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-md">
                  A candid interview with AJ Hoover, on site at the residence he just delivered.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={320}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-accent" />
                  <span className="font-sans uppercase text-primary-foreground/70 text-[10px] md:text-xs tracking-[0.3em] font-light">
                    With AJ Hoover · CEO, Beau Monde Builders
                  </span>
                </div>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={400}>
                <Button
                  asChild
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 font-sans uppercase tracking-[0.2em] text-xs rounded-none px-8"
                >
                  <Link to="/contact">Talk to Beau Monde</Link>
                </Button>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Footer caption — full-width hairline rule under the pair */}
        <RevealAnimation animation="fade-up" delay={500}>
          <div className="mt-12 md:mt-16 flex items-center justify-center space-x-3 text-primary-foreground/70">
            <div className="h-px w-8 md:w-12 bg-accent" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-light">
              On Site · A Pristine Luxury Build
            </span>
            <div className="h-px w-8 md:w-12 bg-accent" />
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};