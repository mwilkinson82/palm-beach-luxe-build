import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO, PersonSchema, BreadcrumbSchema } from "@/components/SEO";
import { Award, Shield, Users, FileCheck } from "lucide-react";
import ajImageAsset from "@/assets/aj-hoover-v2.png.asset.json";
import fcmbLogo from "@/assets/fcmb-logo.png";
import nahbBadge from "@/assets/nahb-master-building-professional.png.asset.json";
import michelleImage from "@/assets/michelle-williams.jpg";
import johnImage from "@/assets/john-colaiacovo.jpg";
import lindaImage from "@/assets/linda-lucas.jpg";
import jillImageAsset from "@/assets/jill-hoover.png.asset.json";
const jillImage = jillImageAsset.url;

const ajImage = ajImageAsset.url;

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const heroScroll = Math.min(
    scrollY,
    typeof window !== "undefined" ? window.innerHeight : 900,
  );
  const wordmarkY = heroScroll * -0.18;
  const wordmarkOpacity = Math.max(0.2, 1 - heroScroll / 600);
  const portraitY = heroScroll * 0.08;
  const washOpacity = Math.max(0, 1 - heroScroll / 700);

  return (
    <>
      <SEO 
        title="About AJ Hoover & Our Team"
        description="Meet AJ Hoover, Florida Certified Master Builder and CEO of Beau Monde Builders. 30 years of excellence in luxury custom home building in Palm Beach."
        canonical="/about"
      />
      <PersonSchema 
        name="AJ Hoover"
        jobTitle="CEO & Founder"
        description="Florida Certified Master Builder with 30 years of experience in luxury custom home building. Founder of Beau Monde Builders, Palm Beach's premier luxury home builder."
        image="https://beaumondebuilders.com/assets/aj-hoover.png"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "About", url: "/about" }
      ]} />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Editorial Hero */}
        <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 bg-background overflow-hidden">
          {/* Seafoam wash that lifts away on scroll */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-[hsl(var(--seafoam))]/55 via-[hsl(var(--seafoam))]/15 to-transparent pointer-events-none transition-opacity duration-500"
            style={{ opacity: washOpacity }}
          />
          {/* Italic 'The House Of' watermark */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -left-4 md:left-2 lg:left-8 top-32 md:top-36 font-display italic text-[22vw] md:text-[16vw] lg:text-[13vw] leading-none text-primary/[0.04]"
            style={{ transform: `translate3d(0, ${heroScroll * 0.1}px, 0)` }}
          >
            The House Of
          </span>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
              {/* Left — wordmark + intro */}
              <div className="lg:col-span-7">
                <RevealAnimation animation="fade-up">
                  <div className="group flex items-center space-x-3 mb-8">
                    <div className="h-px w-0 bg-accent transition-[width] duration-[1200ms] ease-out [.revealed_&]:w-12" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                      The House Of —
                    </span>
                  </div>
                </RevealAnimation>

                <RevealAnimation animation="fade-up" delay={120}>
                  <div
                    className="will-change-transform"
                    style={{
                      transform: `translate3d(0, ${wordmarkY}px, 0)`,
                      opacity: wordmarkOpacity,
                    }}
                  >
                    <span className="block font-wordmark not-italic text-primary text-6xl md:text-7xl lg:text-[120px] leading-[0.9] tracking-tight">
                      Beau Monde
                    </span>
                  </div>
                </RevealAnimation>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mt-8 md:mt-10 max-w-xl">
                  <RevealAnimation animation="fade-up" delay={300}>
                    <span className="block">Built by AJ Hoover.</span>
                  </RevealAnimation>
                  <RevealAnimation animation="fade-up" delay={460}>
                    <span className="block italic text-muted-foreground">
                      Held to one standard.
                    </span>
                  </RevealAnimation>
                </h1>

                <RevealAnimation animation="fade-up" delay={640}>
                  <div className="mt-10 flex items-center gap-4 text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground/70 font-sans">
                    <span>Palm Beach</span>
                    <span className="h-px w-6 bg-accent/50" />
                    <span>Est. by AJ Hoover</span>
                  </div>
                </RevealAnimation>
              </div>

              {/* Right — portrait */}
              <RevealAnimation animation="fade-up" delay={220} className="lg:col-span-5">
                <div
                  className="relative will-change-transform"
                  style={{ transform: `translate3d(0, ${portraitY}px, 0)` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={ajImage}
                      alt="AJ Hoover, Founder of Beau Monde Builders"
                      loading="eager"
                      decoding="async"
                      onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* The Story — long-form editorial */}
        <section className="relative py-24 md:py-36 bg-background border-t border-accent/15 overflow-hidden">
          <span
            aria-hidden
            className="pointer-events-none select-none absolute right-0 top-16 font-display italic text-[18vw] md:text-[12vw] leading-none text-primary/[0.035] whitespace-nowrap"
          >
            The Maker.
          </span>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-2xl mx-auto">
              <RevealAnimation animation="fade-up">
                <div className="flex items-center space-x-3 mb-10 justify-center">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    The Story
                  </span>
                  <div className="h-px w-12 bg-accent" />
                </div>
              </RevealAnimation>

              {/* Movement I */}
              <RevealAnimation animation="fade-up" delay={120}>
                <div className="mb-16">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display italic text-accent text-2xl">I.</span>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
                      Origin
                    </span>
                  </div>
                  <p className="font-display text-primary text-xl md:text-2xl leading-[1.55] first-letter:font-display first-letter:italic first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-accent">
                    Rural Upstate New York. A single-parent household, a long
                    horizon, and a kid who learned every trade with his hands —
                    framing, finish carpentry, mechanical, stone. Nothing was
                    given. Everything was earned at the bench.
                  </p>
                </div>
              </RevealAnimation>

              {/* Movement II */}
              <RevealAnimation animation="fade-up" delay={180}>
                <div className="mb-16">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display italic text-accent text-2xl">II.</span>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
                      The Standard
                    </span>
                  </div>
                  <p className="font-display text-primary text-xl md:text-2xl leading-[1.55]">
                    AJ moved to Florida and spent two decades curating the
                    artisans, engineers, and trade partners now behind every
                    Beau Monde home — masons, millworkers, mechanical and
                    technology specialists who meet a standard most firms
                    can't enforce. Beau Monde isn't a crew. It's a vetted
                    network operating under one signature.
                  </p>
                </div>
              </RevealAnimation>

              {/* Pull quote */}
              <RevealAnimation animation="scale-in" delay={220}>
                <div className="my-16 md:my-20 text-center">
                  <div className="h-px w-16 bg-accent mx-auto mb-8" />
                  <p className="font-display italic text-primary text-3xl md:text-4xl leading-[1.25]">
                    "Old-world standards. New-world tools.
                    <br className="hidden md:block" />
                    One signature on every house."
                  </p>
                  <div className="h-px w-16 bg-accent mx-auto mt-8" />
                </div>
              </RevealAnimation>

              {/* Movement III */}
              <RevealAnimation animation="fade-up" delay={140}>
                <div>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display italic text-accent text-2xl">III.</span>
                    <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans">
                      Today
                    </span>
                  </div>
                  <p className="font-display text-primary text-xl md:text-2xl leading-[1.55]">
                    30 years on, AJ still walks every job and signs every
                    standard — now backed by a technology stack that gives
                    owners full transparency into daily logs, CPM schedules,
                    and the selection process from dream board through
                    procurement and install. Old discipline. Modern
                    instruments.
                  </p>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Philosophy — light, editorial */}
        <section className="relative py-24 md:py-32 bg-background border-t border-accent/15 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[hsl(var(--seafoam))]/35 to-transparent pointer-events-none"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <RevealAnimation animation="fade-up">
              <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Our Philosophy
                  </span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
                  Three principles,
                  <br />
                  <span className="italic text-muted-foreground">held without exception.</span>
                </h2>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto border-t border-accent/20">
              {[
                {
                  n: "01",
                  k: "Excellence",
                  v: "Every detail held to a higher standard than the brief required.",
                },
                {
                  n: "02",
                  k: "Integrity",
                  v: "One number, one timeline, one conversation — kept honest from day one.",
                },
                {
                  n: "03",
                  k: "Discretion",
                  v: "Quiet houses, quiet families, quiet press. The work speaks for the firm.",
                },
              ].map((p, i) => (
                <RevealAnimation key={p.n} animation="fade-up" delay={i * 140}>
                  <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-accent/20 h-full">
                    <div className="font-display italic text-accent text-2xl mb-6">{p.n}</div>
                    <h3 className="font-display italic text-primary text-3xl md:text-4xl mb-5 leading-tight">
                      {p.k}
                    </h3>
                    <p className="font-sans font-light text-base text-muted-foreground leading-relaxed">
                      {p.v}
                    </p>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="relative py-24 md:py-32 bg-background border-t border-accent/15 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
              {/* Badges */}
              <RevealAnimation animation="fade-up">
                <div className="flex items-start justify-center gap-8 md:gap-14">
                  {[
                    {
                      src: fcmbLogo,
                      alt: "Florida Certified Master Builder",
                      cap: "Florida Certified Master Builder",
                    },
                    {
                      src: nahbBadge.url,
                      alt: "NAHB Certified Master Building Professional",
                      cap: "NAHB Master Building Professional",
                    },
                  ].map((b) => (
                    <div key={b.cap} className="flex flex-col items-center">
                      <div className="bg-background p-6 md:p-8 border border-accent/30">
                        <img
                          src={b.src}
                          alt={b.alt}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                          className="w-32 h-32 md:w-44 md:h-44 object-contain"
                        />
                      </div>
                      <div className="mt-4 h-px w-6 bg-accent" />
                      <span className="mt-3 font-sans text-[9px] md:text-[10px] tracking-[0.32em] uppercase text-muted-foreground text-center max-w-[160px] leading-snug">
                        {b.cap}
                      </span>
                    </div>
                  ))}
                </div>
              </RevealAnimation>

              {/* Copy */}
              <RevealAnimation animation="fade-up" delay={140}>
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="h-px w-12 bg-accent" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                      Elite Certification
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-primary leading-[1.05] mb-6">
                    Florida Certified
                    <br />
                    <span className="italic text-muted-foreground">Master Builder.</span>
                  </h2>
                  <p className="font-sans font-light text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
                    AJ holds the Florida Certified Master Builder designation —
                    an elite voluntary credential earned through 30 years of
                    proven work, impeccable ethics, and unbroken client trust.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-accent/20">
                    {[
                      { Icon: Award, k: "30 Years Experience", v: "Proven industry tenure." },
                      { Icon: Shield, k: "Clean Record", v: "No regulatory issues." },
                      { Icon: Users, k: "Verified References", v: "Owner & subcontractor." },
                      { Icon: FileCheck, k: "Written Warranty", v: "Minimum one-year coverage." },
                    ].map(({ Icon, k, v }, i) => (
                      <div
                        key={k}
                        className={`flex items-start gap-3 p-5 border-b border-accent/20 ${
                          i % 2 === 0 ? "sm:border-r" : ""
                        }`}
                      >
                        <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-1" strokeWidth={1.25} />
                        <div>
                          <h4 className="font-sans text-[11px] tracking-[0.18em] uppercase text-primary mb-1">
                            {k}
                          </h4>
                          <p className="font-sans font-light text-xs text-muted-foreground">{v}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <div className="h-px w-10 bg-accent" />
                    <span className="font-sans text-[10px] md:text-xs tracking-[0.32em] uppercase text-muted-foreground">
                      Background verified · 5+ years licensed · Fully insured · Board approved
                    </span>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative py-24 md:py-32 bg-background border-t border-accent/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Leadership
                  </span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
                  The leadership
                  <br />
                  <span className="italic text-muted-foreground">behind every Beau Monde home.</span>
                </h2>
              </div>
            </RevealAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 max-w-6xl mx-auto">
              {[
                { name: "John Colaiacovo", role: "Senior Project Manager", metric: "40", unit: "Years", discipline: "Luxury Construction Management", image: johnImage },
                { name: "Michelle Williams", role: "Director of Finance & Operations", metric: "20", unit: "Years", discipline: "Luxury Construction Finance", image: michelleImage },
                { name: "Linda Lucas", role: "Senior Project Manager", metric: "25", unit: "Years", discipline: "Turning Visions Into Residences", image: lindaImage },
              ].map((member, i) => (
                <RevealAnimation key={member.name} animation="fade-up" delay={i * 140}>
                  <div className="group relative">
                    {/* Portrait */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-muted/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                        className="w-full h-full object-cover object-center grayscale-[35%] group-hover:grayscale-0 transition-[filter] duration-700"
                      />
                      {/* Seafoam wash that lifts on hover */}
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-[hsl(var(--seafoam))]/40 mix-blend-multiply opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"
                      />
                      {/* Subtle bottom gradient so the numeral sits cleanly on any portrait */}
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-primary/45 via-primary/15 to-transparent pointer-events-none"
                      />
                      {/* Hairline that draws in left-to-right under the metric */}
                      <div
                        aria-hidden
                        className="absolute left-5 md:left-6 bottom-3 md:bottom-4 h-px bg-accent/70 origin-left scale-x-0 [.revealed_&]:scale-x-100 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[600ms] w-20 md:w-28"
                      />
                      {/* Oversized metric, bottom-left of portrait */}
                      <div className="absolute left-5 md:left-6 bottom-5 md:bottom-7 flex items-end gap-2.5">
                        <span
                          className="font-display leading-[0.85] text-[88px] md:text-[120px] tracking-tight text-background/95 [text-shadow:0_1px_24px_hsl(var(--primary)/0.35)] opacity-0 translate-y-2 [.revealed_&]:opacity-100 [.revealed_&]:translate-y-0 [.revealed_&]:[clip-path:inset(0_0_0_0)] [clip-path:inset(0_100%_0_0)] transition-[clip-path,opacity,transform] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                        >
                          {member.metric}
                        </span>
                        <span className="font-sans text-[10px] tracking-[0.38em] uppercase text-background/85 pb-3 md:pb-4 opacity-0 translate-y-1 [.revealed_&]:opacity-100 [.revealed_&]:translate-y-0 transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[900ms]">
                          {member.unit}
                        </span>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="mt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-0 bg-accent transition-[width] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-[300ms] [.revealed_&]:w-8" />
                        <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-sans">
                          {member.role}
                        </p>
                      </div>
                      <h3 className="font-display text-2xl md:text-[28px] text-primary leading-tight mb-3">
                        {member.name}
                      </h3>
                      <p className="font-sans font-light text-sm md:text-base text-muted-foreground leading-relaxed">
                        {member.discipline}
                      </p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* The Beau Monde Organization */}
            <RevealAnimation animation="fade-up" delay={120}>
              <div className="max-w-6xl mx-auto mt-24 md:mt-32 border-t border-accent/20 pt-12 md:pt-16">
                <div className="text-center mb-8">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    The Beau Monde Organization
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] text-center max-w-3xl mx-auto mb-10">
                  Our strategic partners and subcontractors form an organization of
                  {" "}
                  <span className="italic text-muted-foreground">over 50 members</span>
                  {" "}
                  working to turn your vision into a residence.
                </h3>
                <p className="font-sans font-light text-sm md:text-base text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                  Architects · Structural &amp; Civil Engineers · Master Masons ·
                  Millwork &amp; Cabinetry · Mechanical, Electrical &amp; Plumbing ·
                  Smart-Home &amp; Security · Landscape Architects · Interior Partners
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative py-24 md:py-32 bg-background border-t border-accent/15 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[hsl(var(--seafoam))]/30 to-transparent pointer-events-none"
          />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <RevealAnimation animation="fade-up">
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-8">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent font-sans font-light">
                    Begin a conversation
                  </span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-[1.1] mb-10">
                  Every Beau Monde home
                  <br />
                  <span className="italic text-muted-foreground">starts at the same table.</span>
                </h2>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 font-sans text-xs tracking-[0.3em] uppercase"
                  asChild
                >
                  <Link to="/contact">Talk to Beau Monde</Link>
                </Button>
              </div>
            </RevealAnimation>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
