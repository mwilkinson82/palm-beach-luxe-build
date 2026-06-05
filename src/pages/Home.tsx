import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SplashScreen } from "@/components/SplashScreen";
import { SEO } from "@/components/SEO";
import { WalkthroughVideoHero } from "@/components/WalkthroughVideoHero";
import { DeliveryShowcase } from "@/components/DeliveryShowcase";
import { WalkthroughShowcase } from "@/components/WalkthroughShowcase";
import { WalkthroughGallery, PhotoLightbox, PHOTOS as WALKTHROUGH_PHOTOS } from "@/components/WalkthroughGallery";
import { InterviewShowcase } from "@/components/InterviewShowcase";
import { BentoTile } from "@/components/BentoTile";
import { Parallax } from "@/components/Parallax";
import { ArrowRight, Star } from "lucide-react";
import fcmbLogo from "@/assets/fcmb-logo.png";
import logoSketch from "@/assets/beau-monde-logo-sketch.jpeg";
import renovationHero from "@/assets/projects/renovation-hero.jpg.asset.json";
import bespokePortrait from "@/assets/projects/bespoke-portrait.jpg.asset.json";
import bespokeDetail from "@/assets/projects/bespoke-detail.jpg.asset.json";
import nahbBadge from "@/assets/nahb-master-building-professional.png.asset.json";
// Carousel skips c10, so carousel position N>=10 maps to c(N+1).
import featuredResidence from "@/assets/constellation/c55.jpg.asset.json"; // carousel #54
import bento02 from "@/assets/constellation/c2.jpg.asset.json";              // carousel #2
import bento03 from "@/assets/constellation/c53.jpg.asset.json";             // carousel #52
import bento05 from "@/assets/constellation/c60.jpg.asset.json";             // carousel #59

// Zero-based indices into WALKTHROUGH_PHOTOS for the four bento tiles.
const BENTO_ANCHOR_INDEX = 53; // #54
const BENTO_02_INDEX = 1;      // #2
const BENTO_03_INDEX = 51;     // #52
const BENTO_05_INDEX = 58;     // #59

const EMBLEM_MEANINGS = [
  {
    title: "The Lions",
    body: "Strength and leadership — protecting the structural and financial integrity of your legacy home.",
  },
  {
    title: "The Parthenon",
    body: "The golden ratio and timeless quality — every residence transcending temporary trends to remain an architectural landmark.",
  },
  {
    title: "Palm Trees",
    body: "Our geographical stamp — the tranquility and exclusive heritage of Space Coast woven into the design itself.",
  },
];

const FCMB_CREDENTIALS = [
  { k: "Experience", v: "30 years of proven industry practice" },
  { k: "Record", v: "Clean regulatory and disciplinary history" },
  { k: "References", v: "Verified by clients and subcontractors" },
  { k: "Warranty", v: "Written, minimum one-year guarantee" },
];

const COMMITMENTS = [
  {
    n: "I",
    title: "Bespoke Design",
    body: "We collaborate with renowned architects to shape a home that embodies your aesthetic and the way you actually live.",
  },
  {
    n: "II",
    title: "Precision Execution",
    body: "Disciplined project management. On time, on budget, beyond expectation — measured by the detail you notice last.",
  },
  {
    n: "III",
    title: "Lifetime Commitment",
    body: "The relationship outlives the build. Comprehensive warranty support and ongoing care for the home and the investment.",
  },
];

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [bentoLightboxIndex, setBentoLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <SEO 
        canonical="/"
        description="Beau Monde Builders — Florida's premier custom luxury home builder on the Space Coast, Space Coast. 30 years crafting bespoke oceanfront estates."
      />
      
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen 
          duration={3000} 
          onComplete={() => setShowSplash(false)} 
        />
      )}
      
      <div className="min-h-screen bg-background">
        <Navigation />

      <h1 className="sr-only">Beau Monde Builders — Custom Luxury Home Builder in Space Coast</h1>

      {/* Hero Section — AJ Hoover walkthrough */}
      <WalkthroughVideoHero />

      {/* Founder Walkthrough */}
      <WalkthroughShowcase />

      {/* Realtor Interview with AJ — paired with the walkthrough (same home, two lenses) */}
      <InterviewShowcase />

      {/* New Delivery Showcase */}
      <DeliveryShowcase />

      {/* Featured Residence — cinematic band on a seafoam wash */}
      <section
        aria-label="Featured Residence"
        className="relative bg-seafoam text-foreground border-y border-accent/30 overflow-hidden pt-20 md:pt-28 lg:pt-32"
      >
        <div className="absolute inset-0 silk-grain opacity-[0.04] pointer-events-none select-none" />

        {/* Editorial header — sits above the bento */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-accent" />
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent">
                    Featured · Newly Completed Residence
                  </span>
                </div>
              </RevealAnimation>
              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.02] tracking-tight text-primary">
                  The Shores <span className="italic">at Tranquility.</span>
                </h2>
              </RevealAnimation>
            </div>
            <div className="lg:col-span-5">
              <RevealAnimation animation="fade-up" delay={240}>
                <p className="font-sans font-light text-[15px] md:text-base leading-relaxed text-foreground/80 mb-7 max-w-lg">
                  An intracoastal estate completed this season — every threshold, joint, and finish
                  shaped by 30 years of Beau Monde craftsmanship.
                </p>
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center gap-3 bg-primary text-primary-foreground font-sans text-[11px] uppercase tracking-[0.28em] font-medium px-10 py-5 transition-[background,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/95 hover:-translate-y-[1px]"
                >
                  <span aria-hidden className="pointer-events-none absolute inset-[3px] border border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
                  <span className="relative z-10">Find My Style</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1" strokeWidth={1.25} />
                </Link>
              </RevealAnimation>
            </div>
          </div>
        </div>

        {/* Bento mosaic — 4 photos, asymmetric editorial grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mt-12 md:mt-16">
          <RevealAnimation animation="fade-up" delay={160}>
            <div className="grid grid-cols-12 gap-3 md:gap-4 md:grid-rows-6 md:h-[80vh] md:min-h-[620px] md:max-h-[820px]">
              {/* Anchor — tall portrait left on desktop, offset hero on mobile */}
              <BentoTile
                src={featuredResidence.url}
                alt="The Shores at Tranquility — a Beau Monde newly completed residence"
                anchor
                onClick={() => setBentoLightboxIndex(BENTO_ANCHOR_INDEX)}
                className="col-span-12 md:col-span-7 md:row-span-6 aspect-[4/5] md:aspect-auto"
              />
              {/* Wide landscape — top right, dominant */}
              <BentoTile
                src={bento02.url}
                alt="The Shores at Tranquility — interior living detail"
                onClick={() => setBentoLightboxIndex(BENTO_02_INDEX)}
                className="col-start-2 col-span-11 md:col-start-auto md:col-span-5 md:row-span-4 aspect-[16/10] md:aspect-auto"
              />
              {/* Lower right — wider */}
              <BentoTile
                src={bento03.url}
                alt="The Shores at Tranquility — architectural ceiling and millwork"
                onClick={() => setBentoLightboxIndex(BENTO_03_INDEX)}
                className="col-span-7 md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto"
              />
              {/* Lower far right — narrow accent */}
              <BentoTile
                src={bento05.url}
                alt="The Shores at Tranquility — brass and stone finish detail"
                onClick={() => setBentoLightboxIndex(BENTO_05_INDEX)}
                className="col-span-5 md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto"
              />
            </div>
          </RevealAnimation>

          {/* Caption rail under the mosaic */}
          <div className="mt-5 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-primary/70">
              <span className="h-px w-8 bg-accent" />
              <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase">Selected frames · The Shores</span>
            </div>
            <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary/55 hidden md:block">
              Scroll for the full walkthrough ↓
            </span>
          </div>
        </div>

        {/* Indexed filmstrip — the second act */}
        <div className="pt-12 md:pt-16 lg:pt-20 pb-16 md:pb-24">
          <WalkthroughGallery />
        </div>
      </section>

      {bentoLightboxIndex !== null && (
        <PhotoLightbox
          photos={WALKTHROUGH_PHOTOS}
          initialIndex={bentoLightboxIndex}
          onClose={() => setBentoLightboxIndex(null)}
        />
      )}

      {/* Editorial Sequence — Bespoke hero + Stats */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none select-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">

          {/* Band 1 — Hero editorial */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border-b border-accent/30 pb-16 md:pb-20">
            <div className="lg:col-span-7 lg:pr-12 order-2 lg:order-1">
              <RevealAnimation animation="fade-up">
                <span className="block font-sans text-[10px] tracking-[0.25em] text-accent uppercase mb-4">
                  The Beau Monde Standard
                </span>
              </RevealAnimation>

              <div className="relative">
                <span
                  aria-hidden
                  className="parallax-ligature absolute -top-10 md:-top-16 -left-3 md:-left-12 font-display italic text-[8rem] md:text-[16rem] lg:text-[18rem] leading-none text-accent/15 pointer-events-none select-none"
                  style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
                >
                  B
                </span>
                <RevealAnimation animation="luxury-reveal" delay={120}>
                  <h2 className="relative z-10 font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.9] font-light mb-8 tracking-tight">
                    Bespoke Luxury <br />
                    <span className="italic">Redefined</span>
                  </h2>
                </RevealAnimation>
              </div>

              <RevealAnimation animation="fade-up" delay={250}>
                <p className="font-sans font-light text-base md:text-lg leading-relaxed max-w-lg mb-10 text-foreground/85">
                  Where architectural excellence meets uncompromising craftsmanship. 30 years of creating Space Coast's
                  most distinguished estates — custom residences beginning at $5M and rising into the extraordinary.
                </p>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={400}>
                <div className="flex flex-wrap items-center gap-4 md:gap-5 mb-10">
                  {/* Primary — Navy with engraved brass corner ticks */}
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center bg-primary text-primary-foreground font-sans text-[11px] uppercase tracking-[0.28em] font-medium px-10 md:px-12 py-5 overflow-hidden transition-[background,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary/95 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.55)]"
                  >
                    {/* brass corner ticks */}
                    <span aria-hidden className="pointer-events-none absolute top-1.5 left-1.5 w-2.5 h-px bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute top-1.5 left-1.5 w-px h-2.5 bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute top-1.5 right-1.5 w-2.5 h-px bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute top-1.5 right-1.5 w-px h-2.5 bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute bottom-1.5 left-1.5 w-2.5 h-px bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute bottom-1.5 left-1.5 w-px h-2.5 bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute bottom-1.5 right-1.5 w-2.5 h-px bg-accent/80" />
                    <span aria-hidden className="pointer-events-none absolute bottom-1.5 right-1.5 w-px h-2.5 bg-accent/80" />
                    {/* brass sheen sweep on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-accent/25 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out"
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      Talk to Beau Monde
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1" strokeWidth={1.25} />
                    </span>
                  </Link>

                  {/* Secondary — Ivory with brass hairline that thickens on hover */}
                  <Link
                    to="/projects"
                    className="group relative inline-flex items-center justify-center bg-transparent text-primary font-sans text-[11px] uppercase tracking-[0.28em] font-medium px-10 md:px-12 py-5 border border-primary/80 transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-primary hover:text-primary-foreground hover:-translate-y-[1px]"
                  >
                    {/* brass inner hairline frame, fades in on hover */}
                    <span aria-hidden className="pointer-events-none absolute inset-[3px] border border-accent/0 group-hover:border-accent/60 transition-colors duration-500" />
                    <span className="relative z-10">Find My Style</span>
                  </Link>
                </div>
              </RevealAnimation>

              <RevealAnimation animation="fade-up" delay={550}>
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" strokeWidth={1.25} />
                    ))}
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">
                    50+ Reviews · Google Verified
                  </span>
                </div>
              </RevealAnimation>
            </div>

            <div className="lg:col-span-5 relative lg:pb-28 order-1 lg:order-2">
              <div className="flex flex-row items-start gap-3 lg:block">
                {/* Interior — dominant */}
                <div className="w-[58%] lg:w-full">
                  <RevealAnimation animation="scale-in" delay={200}>
                    <div className="relative">
                      <Parallax speed={0.08} className="block">
                        <img
                          src={bespokeDetail.url}
                          alt="Beau Monde interior — coffered ceilings, brass lanterns, marble island"
                          className="w-full aspect-[4/5] object-cover shadow-[40px_40px_80px_-20px_hsl(var(--primary)/0.25)]"
                          loading="lazy"
                        />
                        {/* engraved corner hairline (brass, bottom-right) */}
                        <span
                          aria-hidden
                          className="absolute bottom-2 right-2 lg:bottom-3 lg:right-3 w-10 h-10 lg:w-16 lg:h-16 border-b border-r border-accent/70 pointer-events-none"
                        />
                      </Parallax>
                    </div>
                  </RevealAnimation>
                </div>

                {/* Portrait — small offset counterpart */}
                <div className="w-[42%] mt-8 lg:mt-0 lg:absolute lg:bottom-[-3rem] lg:left-[-2.5rem] lg:w-[46%] lg:z-30">
                  <RevealAnimation animation="fade-up" delay={420}>
                    <div className="relative">
                      <img
                        src={bespokePortrait.url}
                        alt="Portrait of a Beau Monde client — the life behind the residence"
                        className="w-full aspect-[3/4] object-cover object-[center_top] shadow-[30px_30px_60px_-20px_hsl(var(--primary)/0.4)] ring-1 ring-accent/30"
                        loading="lazy"
                      />
                      <div className="hidden lg:block absolute -bottom-5 -right-6 z-10">
                        <p className="font-display italic text-sm text-accent bg-background px-4 py-2 border border-accent/40 shadow-md whitespace-nowrap">
                          Turning blueprints to fingerprints
                        </p>
                      </div>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>

          {/* Band 2 — Stats */}
          <div className="py-12 md:py-14 border-b border-accent/30">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-accent/20">
              {[
                { v: "30", l: "Years Excellence" },
                { v: "$150M+", l: "Project Value" },
                { v: "25+", l: "Estate Homes" },
                { v: "100%", l: "Client Satisfaction" },
              ].map((s, i) => (
                <RevealAnimation key={s.l} animation="fade-up" delay={i * 120}>
                  <div className="text-center first:border-l-0">
                    <div className="font-display text-4xl md:text-5xl font-light mb-1">{s.v}</div>
                    <div className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-accent">
                      {s.l}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Renovations — NEW announcement + three-commitment treatment */}
      <section className="relative bg-background text-foreground overflow-hidden border-t border-accent/20">
        {/* Navy announcement strip */}
        <RevealAnimation animation="fade-up">
          <div className="relative bg-primary text-primary-foreground">
            <div className="absolute inset-0 silk-grain opacity-[0.05] pointer-events-none" />
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-6 md:py-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
              <span className="inline-flex items-center font-sans text-[10px] tracking-[0.35em] uppercase border border-accent text-accent px-3 py-1.5">
                New · 2026
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary-foreground/85">
                Beau Monde is now offering
              </span>
              <span className="font-display italic text-xl md:text-2xl leading-none text-primary-foreground">
                Renovations.
              </span>
            </div>
          </div>
        </RevealAnimation>

        {/* Full-bleed cinematic hero */}
        <RevealAnimation animation="fade-in">
          <div className="relative w-full overflow-hidden">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/2] lg:aspect-[16/9] xl:aspect-[2/1] min-h-[600px] md:min-h-[720px] lg:min-h-[820px] overflow-hidden">
              <img
                src={renovationHero.url}
                alt="Beau Monde Builders renovation — interior with marble kitchen, brass lanterns, and ocean view"
                className="cinema-image absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />
              {/* Navy scrim — soft, focused on bottom-left for headline legibility only */}
              <div className="cinema-veil absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--primary)/0.55),hsl(var(--primary)/0.18)_45%,transparent_70%)] pointer-events-none" />
              {/* Brass hairline frame — feathered top & bottom with corner ticks */}
              <div className="cinema-hairline absolute left-6 right-6 md:left-12 md:right-12 top-6 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />
              <div className="cinema-hairline absolute left-6 right-6 md:left-12 md:right-12 bottom-6 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />
              {/* Engraved corner ticks */}
              <div className="cinema-hairline absolute left-6 md:left-12 top-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute right-6 md:right-12 top-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute left-6 md:left-12 bottom-6 w-px h-3 bg-accent/70 pointer-events-none" />
              <div className="cinema-hairline absolute right-6 md:right-12 bottom-6 w-px h-3 bg-accent/70 pointer-events-none" />

              {/* Bottom navy gradient — mobile only, lifts wordmark legibility */}
              <div aria-hidden className="md:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/70 to-transparent pointer-events-none" />

              {/* Headline overlay — bottom-left */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 pb-48 sm:p-12 md:p-16 lg:p-20">
                <div className="max-w-3xl">
                  <RevealAnimation animation="fade-up" delay={450}>
                    <span className="block font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent mb-5 md:mb-6">
                      A New Beau Monde Offering
                    </span>
                  </RevealAnimation>
                  <RevealAnimation animation="luxury-reveal" delay={650}>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-primary-foreground mb-8 md:mb-10">
                      Renovations <span className="hidden md:inline">at the </span>
                      <span className="md:hidden"><br />at the </span>
                      <span className="italic">same standard.</span>
                    </h2>
                  </RevealAnimation>
                  <RevealAnimation animation="fade-up" delay={950}>
                    <Link
                      to="/renovations"
                      className="group/cta relative inline-flex items-center gap-2.5 md:gap-4 pl-5 pr-6 md:pl-8 md:pr-10 py-3.5 md:py-[1.35rem] font-sans text-[10px] md:text-[11px] uppercase tracking-[0.25em] md:tracking-[0.32em] font-medium text-primary-foreground bg-transparent transition-colors duration-[600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:bg-primary/35"
                    >
                      {/* Brass hairline frame */}
                      <span aria-hidden className="pointer-events-none absolute inset-0 border border-accent/55 group-hover/cta:border-accent/90 transition-colors duration-[600ms]" />
                      {/* Corner ticks */}
                      <span aria-hidden className="pointer-events-none absolute -top-px -left-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -left-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -right-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -top-px -right-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px h-3 w-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px w-3 h-px bg-accent" />
                      <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-3 w-px bg-accent" />
                      <span className="relative">Explore Renovations</span>
                      <span aria-hidden className="relative flex items-center">
                        <span className="block h-px w-4 md:w-6 bg-accent/70 origin-left transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/cta:scale-x-150" />
                        <ArrowRight className="ml-2 h-3.5 w-3.5 text-accent transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover/cta:translate-x-1.5" strokeWidth={1.25} />
                      </span>
                    </Link>
                  </RevealAnimation>
                </div>
              </div>

              {/* Beau Monde wordmark — bottom-right signature */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 hidden md:block pointer-events-none">
                <span className="font-wordmark text-xl md:text-2xl lg:text-3xl text-primary-foreground/55 tracking-wide">
                  Beau Monde
                </span>
              </div>
              <div className="absolute bottom-5 left-0 right-0 md:hidden text-center pointer-events-none">
                <span className="font-wordmark text-base text-primary-foreground/40 tracking-wide">
                  Beau Monde
                </span>
              </div>
            </div>
          </div>
        </RevealAnimation>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20 md:py-28 lg:py-32">
          {/* Three commitments — applied to renovations */}
          <div className="relative">
            <div className="text-center mb-12 md:mb-14">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center justify-center gap-4">
                  <span className="h-px w-10 md:w-14 bg-accent/50" />
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent">
                    One Standard · Applied to Renovation
                  </span>
                  <span className="h-px w-10 md:w-14 bg-accent/50" />
                </div>
              </RevealAnimation>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-accent/30">
              {[
                {
                  n: "I",
                  title: "Discretion",
                  body: "Riverfront addresses, historic estates, occupied condominiums — handled with the privacy our clients expect. Quiet site protocols, vetted crews, no public reels.",
                },
                {
                  n: "II",
                  title: "Continuity",
                  body: "We don't grind your home down to studs and disappear. The same project lead from walk-through to punch list, with disciplined sequencing that respects your life inside the building.",
                },
                {
                  n: "III",
                  title: "Same Standard",
                  body: "The trades, materials, and tolerances of a Beau Monde ground-up build — applied to a kitchen, a primary suite, a whole floor. No tier-down for the smaller scope.",
                },
              ].map((row, i) => (
                <RevealAnimation key={row.n} animation="fade-up" delay={i * 150}>
                  <article className="relative h-full p-8 md:p-10 border-b border-accent/30 md:border-b md:border-r md:[&:last-child]:border-r-0 flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <span className="font-display italic text-5xl md:text-6xl font-light text-accent leading-none">
                        {row.n}
                      </span>
                      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/60 mt-2">
                        0{i + 1} / 03
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mb-4 text-primary">
                      {row.title}
                    </h3>
                    <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80">
                      {row.body}
                    </p>
                  </article>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy — lifted to top-level, seafoam editorial card */}
      <section className="relative bg-background text-foreground py-20 md:py-28 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <RevealAnimation animation="luxury-reveal">
            <div className="relative bg-seafoam p-10 sm:p-14 lg:p-20 border border-accent/20 overflow-hidden">
              <div className="absolute inset-0 silk-grain opacity-[0.04] pointer-events-none select-none" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <span className="block font-sans text-[10px] tracking-[0.25em] text-accent uppercase mb-8 text-center">
                  Our Philosophy
                </span>
                <div className="relative flex justify-center min-h-[12rem] md:min-h-[16rem] items-center">
                  <span
                    aria-hidden
                    className="parallax-ligature-centered absolute top-1/2 left-1/2 font-display italic text-[12rem] md:text-[16rem] leading-none text-accent/10 pointer-events-none select-none"
                    style={{ fontFeatureSettings: "'swsh' 1, 'dlig' 1" }}
                  >
                    A
                  </span>
                  <h3 className="relative z-10 font-display text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-8 md:mb-12 text-center italic text-primary">
                    Architectural mastery meets personal vision.
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 font-sans font-light text-[15px] leading-relaxed text-foreground/90">
                  <p>
                    Founded on the principle that a custom home is the ultimate expression of its owner, AJ Hoover has
                    spent 30 years refining a hands-on approach that prioritizes the artisanal over the industrial.
                  </p>
                  <p>
                    By limiting our project count, we ensure that every stone, every beam, and every finish receives the
                    meticulous attention it deserves. Your vision is our blueprint; your satisfaction is our fingerprint.
                  </p>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Our Marks — Cinematic Emblem Band + Credential Plinth */}
      <section className="relative bg-background text-foreground overflow-hidden border-t border-accent/20">
        <div className="absolute inset-0 silk-grain opacity-[0.03] pointer-events-none select-none z-0" />

        {/* Emblem band — ivory, no seafoam wrapper */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Emblem plate */}
              <div className="lg:col-span-5">
                <RevealAnimation animation="scale-in">
                  <Parallax speed={0.05}>
                    <div className="relative w-full max-w-md mx-auto lg:mx-0">
                      {/* Corner ticks */}
                      <span aria-hidden className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-accent/70" />
                      <span aria-hidden className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-accent/70" />
                      <span aria-hidden className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-accent/70" />
                      <span aria-hidden className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-accent/70" />
                      <div className="border border-accent/30 bg-card p-6 shadow-[0_30px_60px_-30px_rgba(15,42,61,0.35)]">
                        <div className="w-full aspect-square">
                          <img
                            src={logoSketch}
                            alt="Beau Monde Builders emblem — classical architecture with lions and palm trees"
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </Parallax>
                </RevealAnimation>
              </div>

              {/* Meanings */}
              <div className="lg:col-span-7">
                <RevealAnimation animation="fade-up">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="h-px w-10 bg-accent" />
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent">
                      Our Marks
                    </span>
                  </div>
                </RevealAnimation>
                <RevealAnimation animation="luxury-reveal" delay={100}>
                  <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-[1.05] mb-12 md:mb-14 max-w-xl">
                    The signs that stand <br className="hidden md:block" />behind the work.
                  </h2>
                </RevealAnimation>

                <div className="space-y-8 md:space-y-10">
                  {EMBLEM_MEANINGS.map((item, i) => (
                    <RevealAnimation key={item.title} animation="fade-up" delay={180 + i * 80}>
                      <div>
                        <h4 className="font-sans text-xs uppercase tracking-[0.25em] mb-3 flex items-center gap-4 text-primary">
                          <span className="w-8 h-px bg-accent" />
                          {item.title}
                        </h4>
                        <p className="font-sans font-light text-[15px] leading-relaxed text-primary/80 pl-12 max-w-xl">
                          {item.body}
                        </p>
                      </div>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline divider between emblem band and credential plinth */}
        <div className="relative z-10 flex justify-center">
          <span aria-hidden className="block w-24 h-px bg-accent/40" />
        </div>

        {/* Ivory credential plinth */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 py-20 md:py-28 lg:py-32">
          {/* Eyebrow + headline */}
          <RevealAnimation animation="fade-up">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
                Heritage &amp; Accreditation
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>
          </RevealAnimation>
          <RevealAnimation animation="luxury-reveal" delay={100}>
            <h3 className="font-display italic text-4xl md:text-5xl font-light text-primary text-center leading-[1.05] mb-14 md:mb-16">
              Certifications held by the few.
            </h3>
          </RevealAnimation>

          {/* Architectural triple-rule (top) */}
          <RevealAnimation animation="fade-up" delay={160}>
            <div className="flex flex-col items-center gap-1.5 mb-16 md:mb-20 origin-left">
              <div className="w-full h-px bg-accent/25" />
              <div className="w-full h-[3px] bg-accent" />
              <div className="w-full h-px bg-accent/25" />
            </div>
          </RevealAnimation>

          {/* Badge pair */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 mb-14 md:mb-16">
            <RevealAnimation animation="scale-in" delay={200}>
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  <span aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 border border-accent/25" />
                  <div className="relative bg-card border border-accent/25 p-5 shadow-[0_20px_40px_-18px_rgba(15,42,61,0.3)]">
                    <img
                      src={fcmbLogo}
                      alt="Florida Certified Master Builder"
                      className="h-24 md:h-28 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary text-center max-w-[180px] leading-snug">
                  Florida Certified Master Builder
                </span>
              </div>
            </RevealAnimation>

            <div aria-hidden className="hidden md:block w-px h-28 bg-accent/30" />

            <RevealAnimation animation="scale-in" delay={280}>
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  <span aria-hidden className="absolute inset-0 translate-x-2 translate-y-2 border border-accent/25" />
                  <div className="relative bg-card border border-accent/25 p-5 shadow-[0_20px_40px_-18px_rgba(15,42,61,0.3)]">
                    <img
                      src={nahbBadge.url}
                      alt="NAHB Certified Master Building Professional"
                      className="h-24 md:h-28 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary text-center max-w-[200px] leading-snug">
                  NAHB Certified Master Building Professional
                </span>
              </div>
            </RevealAnimation>
          </div>

          {/* Narrative */}
          <RevealAnimation animation="fade-up" delay={340}>
            <p className="font-sans font-light text-[15px] md:text-base leading-relaxed text-primary/80 text-center max-w-2xl mx-auto mb-14 md:mb-16">
              Voluntary credentials awarded only to builders with the experience, ethics, and record to back
              them — the FCMB the pinnacle in Florida, the NAHB Master designation the national benchmark.
            </p>
          </RevealAnimation>

          {/* Credentials ledger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 mb-16 md:mb-20">
            {FCMB_CREDENTIALS.map((row, i) => (
              <RevealAnimation key={row.k} animation="fade-up" delay={400 + i * 60}>
                <div className="flex items-baseline justify-between gap-4 border-b border-accent/25 pb-2.5">
                  <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent shrink-0">
                    {row.k}
                  </span>
                  <span className="font-sans font-light text-[13px] text-primary/85 text-right">
                    {row.v}
                  </span>
                </div>
              </RevealAnimation>
            ))}
          </div>

          {/* Architectural triple-rule (bottom) */}
          <RevealAnimation animation="fade-up" delay={600}>
            <div className="flex flex-col items-center gap-1.5 origin-left">
              <div className="w-full h-px bg-accent/25" />
              <div className="w-full h-[3px] bg-accent" />
              <div className="w-full h-px bg-accent/25" />
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Three Commitments — redesigned card grid */}
      <section className="relative bg-background text-foreground py-20 md:py-28 lg:py-32 overflow-hidden border-t border-accent/20">
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="text-center mb-16 md:mb-20">
            <RevealAnimation animation="fade-up">
              <span className="block font-sans text-[10px] tracking-[0.25em] uppercase text-accent mb-4">
                Our Approach
              </span>
            </RevealAnimation>
            <div className="relative">
              <span
                aria-hidden
                className="parallax-ligature-centered absolute top-1/2 left-1/2 font-display italic text-[12rem] md:text-[16rem] leading-none text-accent/10 pointer-events-none select-none"
              >
                III
              </span>
              <RevealAnimation animation="luxury-reveal" delay={120}>
                <h2 className="relative z-10 font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight">
                  Three commitments, <br />
                  <span className="italic">one standard.</span>
                </h2>
              </RevealAnimation>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent/30 border border-accent/30">
            {COMMITMENTS.map((row, i) => (
              <RevealAnimation key={row.n} animation="fade-up" delay={i * 150}>
                <article className="group relative h-full bg-background p-8 md:p-10 lg:p-12 flex flex-col transition-all duration-500 hover:bg-seafoam">
                  {/* Top brass rule that fills navy on hover */}
                  <span aria-hidden className="absolute top-0 left-0 h-px w-12 bg-accent transition-all duration-500 group-hover:w-full group-hover:bg-primary" />

                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display italic text-5xl md:text-6xl font-light text-accent leading-none">
                      {row.n}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-foreground/60 mt-2">
                      0{i + 1} / 03
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-light leading-tight mb-4 text-primary">
                    {row.title}
                  </h3>
                  <p className="font-sans font-light text-[15px] leading-relaxed text-foreground/80 flex-1">
                    {row.body}
                  </p>
                </article>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA — full-width navy invitation */}
      <section
        aria-label="Begin a conversation"
        className="relative w-full bg-primary text-primary-foreground py-32 md:py-40 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 silk-grain opacity-[0.05] pointer-events-none select-none" />
        {/* Brass hairlines top + bottom */}
        <span aria-hidden className="absolute left-10 right-10 top-8 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />
        <span aria-hidden className="absolute left-10 right-10 bottom-8 h-px bg-[linear-gradient(to_right,transparent,hsl(var(--accent)/0.55)_18%,hsl(var(--accent)/0.55)_82%,transparent)] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <RevealAnimation animation="fade-up">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-10 md:w-14 bg-accent/50" />
              <span className="font-sans text-[10px] md:text-xs tracking-[0.35em] uppercase text-accent">
                By Appointment · Rockledge
              </span>
              <span className="h-px w-10 md:w-14 bg-accent/50" />
            </div>
          </RevealAnimation>

          <RevealAnimation animation="luxury-reveal" delay={120}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] tracking-tight mb-8 text-primary-foreground">
              Begin a <span className="italic">conversation.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation animation="fade-up" delay={240}>
            <p className="font-sans font-light text-base md:text-lg leading-relaxed text-primary-foreground/70 mb-12 max-w-xl mx-auto">
              A small number of commissions each year, taken on by invitation and considered conversation.
              We would be honored to hear what you have in mind.
            </p>
          </RevealAnimation>

          <RevealAnimation animation="fade-up" delay={360}>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-primary-foreground text-primary font-sans text-[11px] uppercase tracking-[0.28em] font-medium px-12 py-5 transition-[background,color,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px]"
            >
              <span aria-hidden className="pointer-events-none absolute inset-[3px] border border-accent/0 group-hover:border-accent/70 transition-colors duration-500" />
              <span className="relative z-10">Talk to Beau Monde</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1" strokeWidth={1.25} />
            </Link>
          </RevealAnimation>

          <RevealAnimation animation="fade-up" delay={480}>
            <p className="mt-10 font-sans text-[11px] md:text-xs tracking-[0.25em] uppercase text-primary-foreground/55 flex items-center justify-center gap-3 flex-wrap">
              <a href="tel:+13212984122" className="hover:text-accent transition-colors">(321) 298-4122</a>
              <span aria-hidden className="inline-block w-1 h-1 rounded-full bg-accent/70" />
              <a href="mailto:ajhoover@mac.com" className="hover:text-accent transition-colors normal-case tracking-[0.15em]">ajhoover@mac.com</a>
              <span aria-hidden className="inline-block w-1 h-1 rounded-full bg-accent/70" />
              <span>1129 Rockledge Blvd.</span>
            </p>
          </RevealAnimation>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Home;
