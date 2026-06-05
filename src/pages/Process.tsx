import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO, BreadcrumbSchema, ServicePageSchema } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { BuildReadyChecklist } from "@/components/BuildReadyChecklist";
import { ScheduleDrivenSection } from "@/components/ScheduleDrivenSection";

const phases = [
  {
    phase: "I",
    label: "Vision",
    summary: "Quiet conversations that shape the brief before a single line is drawn.",
    steps: [
      {
        number: "01",
        title: "Initial Consultation",
        description:
          "An unhurried dialogue to understand your life, your land, and the residence you imagine.",
      },
      {
        number: "02",
        title: "Site Selection & Feasibility",
        description:
          "A measured study of orientation, structure, and code — so the architecture begins on certain ground.",
      },
    ],
  },
  {
    phase: "II",
    label: "Design",
    summary: "World-class architects and a transparent budget, shaped in lockstep.",
    steps: [
      {
        number: "03",
        title: "Design & Planning",
        description:
          "Bespoke drawings developed with a select circle of architects and interior designers who share our standard.",
      },
      {
        number: "04",
        title: "Transparent Budgeting",
        description:
          "A complete scope and cost framework, presented openly — no surprises later in the build.",
      },
      {
        number: "05",
        title: "Permits & Approvals",
        description:
          "Town of Palm Beach review, HOA navigation, and every approval — handled discreetly on your behalf.",
      },
    ],
  },
  {
    phase: "III",
    label: "Build",
    summary: "Master-built construction, led personally, never delegated.",
    steps: [
      {
        number: "06",
        title: "Construction Excellence",
        description:
          "A single Florida Certified Master Builder on site, leading a trusted bench of trades through every phase.",
      },
      {
        number: "07",
        title: "Custom Finishes",
        description:
          "Stone, millwork, hardware, and finish work selected and installed with the patience of an atelier.",
      },
    ],
  },
  {
    phase: "IV",
    label: "Delivery",
    summary: "The final hand-off — measured, complete, and quietly enduring.",
    steps: [
      {
        number: "08",
        title: "Quality Assurance",
        description:
          "A meticulous walkthrough against our own standard, well above the building code minimum.",
      },
      {
        number: "09",
        title: "Seamless Transition",
        description:
          "White-glove move-in support and an ongoing relationship long after the keys are placed in your hand.",
      },
    ],
  },
];

const allSteps = phases.flatMap((p) => p.steps);

const ctaClass =
  "group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-12 md:px-16 py-5 text-[10px] md:text-[11px] font-sans font-light tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500 hover:-translate-y-px hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]";

// HowTo schema for the construction process
const processSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Beau Monde Builders 9-Step Custom Home Building Process",
  description: "A meticulously orchestrated journey from vision to reality, guided by 30 years of expertise in luxury homebuilding.",
  totalTime: "PT12M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "Varies by project scope"
  },
  step: allSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description
  }))
};

const Process = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  // Clamp parallax to the first ~1 viewport so it doesn't drift forever.
  const heroScroll = Math.min(scrollY, typeof window !== "undefined" ? window.innerHeight : 900);
  const wordmarkY = heroScroll * -0.18;
  const wordmarkOpacity = Math.max(0.15, 1 - heroScroll / 600);
  const bodyY = heroScroll * 0.08;
  const bodyOpacity = Math.max(0, 1 - heroScroll / 500);

  return (
    <>
      <SEO 
        title="Our 9-Step Building Process"
        description="Discover Beau Monde Builders' meticulous 9-step custom home building process. From initial consultation to seamless move-in, we guide you through every phase."
        canonical="/process"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Process", url: "/process" }
      ]} />
      <ServicePageSchema 
        serviceName="Custom Luxury Home Building Process"
        description="Our comprehensive 9-step process ensures your vision becomes reality with precision and excellence."
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(processSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Editorial Hero */}
        <section className="relative pt-36 md:pt-44 pb-20 md:pb-32 bg-background overflow-hidden">
          {/* Seafoam wash that lifts away on scroll */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-[hsl(var(--seafoam))]/55 via-[hsl(var(--seafoam))]/15 to-transparent pointer-events-none transition-opacity duration-500"
            style={{ opacity: Math.max(0, 1 - heroScroll / 700) }}
          />
          {/* Faint engraved 'OUR PROCESS' watermark, scroll-parallax */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -right-6 md:right-2 lg:right-10 top-28 md:top-32 font-display italic text-[22vw] md:text-[16vw] lg:text-[12vw] leading-none text-primary/[0.04]"
            style={{ transform: `translate3d(0, ${heroScroll * 0.12}px, 0)` }}
          >
            Our Process
          </span>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl">
              {/* Eyebrow — hairline grows in */}
              <RevealAnimation animation="fade-up">
                <div className="group flex items-center space-x-3 mb-8">
                  <div className="h-px w-0 bg-accent transition-[width] duration-[1200ms] ease-out [.revealed_&]:w-12" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Our Process
                  </span>
                </div>
              </RevealAnimation>

              {/* Wordmark — scroll parallax + first-reveal lift */}
              <RevealAnimation animation="fade-up" delay={120}>
                <div
                  className="will-change-transform"
                  style={{
                    transform: `translate3d(0, ${wordmarkY}px, 0)`,
                    opacity: wordmarkOpacity,
                  }}
                >
                  <span className="block font-wordmark not-italic text-primary text-6xl md:text-7xl lg:text-[112px] leading-[0.95] tracking-tight mb-5 md:mb-7">
                    Beau Monde's
                  </span>
                </div>
              </RevealAnimation>

              {/* Headline — Cormorant, two beats reveal */}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary leading-[1.05] mb-10">
                <RevealAnimation animation="fade-up" delay={260}>
                  <span className="block">Ironclad nine-step</span>
                </RevealAnimation>
                <RevealAnimation animation="fade-up" delay={420}>
                  <span className="block italic text-muted-foreground">
                    journey to a residence.
                  </span>
                </RevealAnimation>
              </h1>

              {/* Body + brass hairline + meta — parallax fade with scroll */}
              <div
                className="will-change-transform"
                style={{
                  transform: `translate3d(0, ${bodyY}px, 0)`,
                  opacity: bodyOpacity,
                }}
              >
                <RevealAnimation animation="fade-up" delay={620}>
                  <p className="font-sans font-light text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                    30 years of master-built craft, distilled into a private,
                    measured cadence — from the first quiet conversation to the day
                    we hand you the keys.
                  </p>
                </RevealAnimation>

                <RevealAnimation animation="fade-up" delay={780}>
                  <div className="mt-12 flex items-center gap-6">
                    <div className="h-px w-12 bg-accent" />
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-accent">
                      Four phases · Nine steps · One Master Builder
                    </span>
                  </div>
                </RevealAnimation>
              </div>
            </div>
          </div>

          {/* Scroll hint — fades out as user scrolls. Hidden on mobile to avoid collision with stacked hero copy. */}
          <div
            className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 transition-opacity duration-500"
            style={{ opacity: Math.max(0, 1 - heroScroll / 200) }}
            aria-hidden
          >
            <span className="font-sans text-[9px] tracking-[0.4em] uppercase text-accent/70">
              Scroll
            </span>
            <span className="h-10 w-px bg-accent/40 animate-[pulse_2.4s_ease-in-out_infinite]" />
          </div>
        </section>

        {/* Phases */}
        {phases.map((phase, phaseIndex) => (
        <div key={phase.phase}>
          <section
            className={`relative overflow-hidden py-20 md:py-28 border-t border-accent/15 ${phaseIndex % 2 === 1 ? "bg-[hsl(var(--seafoam))]/35" : ""}`}
          >
            {/* Giant Roman-numeral watermark */}
            <RevealAnimation animation="fade-in">
              <span
                aria-hidden
                className="pointer-events-none select-none absolute -left-4 md:left-2 lg:left-8 top-10 md:top-14 font-display text-[28vw] md:text-[18vw] lg:text-[14vw] leading-none text-primary/[0.035] italic"
              >
                {phase.phase}
              </span>
            </RevealAnimation>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <RevealAnimation animation="fade-up" className="lg:col-span-4 lg:sticky lg:top-32 self-start">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-10 bg-accent" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                      Phase {phase.phase}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] mb-6">
                    <span className="italic">{phase.label}</span>
                  </h2>
                  <p className="font-sans font-light text-base text-muted-foreground leading-relaxed max-w-sm">
                    {phase.summary}
                  </p>
                </RevealAnimation>

                <div className="lg:col-span-8">
                  {phase.steps.map((step, i) => (
                    <RevealAnimation key={step.number} animation="fade-up" delay={i * 100}>
                      <article className="group relative py-8 md:py-10 border-t border-accent/15 first:border-t-0">
                        <div className="flex items-baseline gap-6 md:gap-10">
                          <span className="relative font-display text-3xl md:text-4xl text-accent/70 leading-none shrink-0 w-12 md:w-14">
                            {step.number}
                            <span
                              aria-hidden
                              className="pointer-events-none absolute -bottom-2 left-0 h-px w-6 bg-accent/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"
                            />
                          </span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display text-2xl md:text-3xl lg:text-[34px] text-primary leading-snug mb-3">
                              <span className="relative inline">
                                {step.title}
                                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                              </span>
                            </h3>
                            <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Build-Ready Checklist + Implementation CTA — between Design (II) and Build (III) */}
          {phaseIndex === 1 && (
            <>
              <section className="relative py-24 md:py-32 border-t border-accent/15 bg-background overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[hsl(var(--seafoam))]/30 to-transparent pointer-events-none"
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative">
                  <RevealAnimation animation="fade-up">
                    <div className="flex items-center justify-center space-x-3 mb-10 md:mb-14">
                      <div className="h-px w-10 bg-accent" />
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                        The Threshold
                      </span>
                      <div className="h-px w-10 bg-accent" />
                    </div>
                  </RevealAnimation>
                  <BuildReadyChecklist />
                </div>
              </section>

              {/* Implementation Phase CTA — navy slim band */}
              <section className="relative py-20 md:py-24 bg-primary text-primary-foreground overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_top,hsl(var(--accent))_0%,transparent_60%)]"
                />
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    <RevealAnimation animation="fade-up" className="lg:col-span-7">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="h-px w-10 bg-accent" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                          Implementation Phase
                        </span>
                      </div>
                      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.05] mb-6">
                        Drawings become a
                        <br />
                        <span className="italic text-primary-foreground/70">residence.</span>
                      </h2>
                      <p className="font-sans font-light text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-xl">
                        Once every checklist item is countersigned, your Master Builder takes
                        the site. A single point of accountability, a trusted bench of trades,
                        and weekly walk-throughs until the day we hand you the keys.
                      </p>
                    </RevealAnimation>

                    <RevealAnimation animation="fade-up" delay={150} className="lg:col-span-5">
                      <div className="flex flex-col items-start lg:items-end gap-5">
                        <Link
                          to="/contact"
                          className="group relative inline-flex items-center justify-center bg-background text-primary px-12 md:px-14 py-5 text-[10px] md:text-[11px] font-sans font-light tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/40 hover:ring-accent transition-all duration-500 hover:-translate-y-px"
                        >
                          <span className="relative">
                            Schedule Your Build-Ready Review
                            <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                          </span>
                        </Link>
                        <span className="font-sans font-light italic text-[12px] text-primary-foreground/50">
                          A 60-minute, private session with your Master Builder.
                        </span>
                      </div>
                    </RevealAnimation>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Schedule-driven, owner-transparent — after Build (III) */}
          {phaseIndex === 2 && (
            <ScheduleDrivenSection scrollY={scrollY} />
          )}
        </div>
        ))}

        {/* Closing CTA */}
        <section className="py-24 md:py-32 border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-10 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Begin
                  </span>
                  <div className="h-px w-10 bg-accent" />
                </div>
                <h2 className="font-display text-3xl md:text-5xl text-primary leading-[1.1] mb-8">
                  Begin your <span className="italic text-muted-foreground">residence.</span>
                </h2>
                <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
                  A short, private conversation is the right place to start. We'll listen
                  first, then walk you through how this process applies to your project.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <Link to="/contact" className={ctaClass}>
                    <span className="relative">
                      Talk to Beau Monde
                      <span className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                    </span>
                  </Link>
                  <Link
                    to="/projects"
                    className="group inline-flex items-center text-[10px] md:text-xs uppercase tracking-[0.4em] font-sans font-light text-primary"
                  >
                    <span className="relative pb-1">
                      Find My Style
                      <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-accent/40 group-hover:bg-accent transition-colors duration-500" />
                    </span>
                    <span className="ml-3 text-accent">→</span>
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </section>

      <Footer />
      </div>
    </>
  );
};

export default Process;
