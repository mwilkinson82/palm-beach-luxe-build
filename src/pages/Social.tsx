import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO } from "@/components/SEO";
import { SOCIAL_LINKS } from "@/lib/site";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Social = () => {
  return (
    <>
      <SEO
        title="Social | Beau Monde Builders Palm Beach"
        description="Beau Monde Builders on Instagram (@bmbbuilders), Facebook, LinkedIn, and YouTube."
        path="/social"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Social", path: "/social" },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-light mb-6">
              Connect & Follow
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-light text-foreground mb-8 tracking-tight">
              Our <span className="font-serif italic">Social Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Experience the artistry of luxury homebuilding through our curated social channels. 
              Design inspiration, project updates, and behind-the-scenes insights.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Grid */}
      <RevealAnimation animation="luxury-reveal">
        <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Instagram */}
            <div className="group relative overflow-hidden bg-foreground text-background p-12 aspect-square flex flex-col justify-between animate-fade-in hover:scale-[1.02] transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Instagram className="h-12 w-12 mb-8 text-accent" />
                <h2 className="text-4xl font-serif italic mb-4">Instagram</h2>
                <p className="text-background/70 font-light leading-relaxed mb-8">
                  Explore our latest projects, design inspiration, and luxury home showcases.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 w-full"
                asChild
              >
                <a href={SOCIAL_LINKS.instagram.href} target="_blank" rel="noopener noreferrer">
                  Follow Us
                </a>
              </Button>
            </div>

            {/* Facebook */}
            <div className="group relative overflow-hidden bg-foreground text-background p-12 aspect-square flex flex-col justify-between animate-fade-in hover:scale-[1.02] transition-transform duration-700" style={{ animationDelay: "100ms" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Facebook className="h-12 w-12 mb-8 text-accent" />
                <h2 className="text-4xl font-serif italic mb-4">Facebook</h2>
                <p className="text-background/70 font-light leading-relaxed mb-8">
                  Join our community and stay updated on news, events, and client testimonials.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 w-full"
                asChild
              >
                <a href={SOCIAL_LINKS.facebook.href} target="_blank" rel="noopener noreferrer">
                  Like Our Page
                </a>
              </Button>
            </div>

            {/* YouTube */}
            <div className="group relative overflow-hidden bg-foreground text-background p-12 aspect-square flex flex-col justify-between animate-fade-in hover:scale-[1.02] transition-transform duration-700" style={{ animationDelay: "200ms" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-red-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Youtube className="h-12 w-12 mb-8 text-accent" />
                <h2 className="text-4xl font-serif italic mb-4">YouTube</h2>
                <p className="text-background/70 font-light leading-relaxed mb-8">
                  Watch virtual tours, construction updates, and educational content.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 w-full"
                asChild
              >
                <a href={SOCIAL_LINKS.youtube.href} target="_blank" rel="noopener noreferrer">
                  Subscribe
                </a>
              </Button>
            </div>

            {/* LinkedIn */}
            <div className="group relative overflow-hidden bg-foreground text-background p-12 aspect-square flex flex-col justify-between animate-fade-in hover:scale-[1.02] transition-transform duration-700" style={{ animationDelay: "300ms" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <Linkedin className="h-12 w-12 mb-8 text-accent" />
                <h2 className="text-4xl font-serif italic mb-4">LinkedIn</h2>
                <p className="text-background/70 font-light leading-relaxed mb-8">
                  Connect professionally and learn about career opportunities.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="relative z-10 border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500 w-full"
                asChild
              >
                <a href={SOCIAL_LINKS.linkedin.href} target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-32 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-display font-light text-foreground mb-6 tracking-tight">
              Latest From <span className="font-serif italic">Instagram</span>
            </h2>
            <p className="text-accent font-light tracking-[0.3em] text-sm">
              {SOCIAL_LINKS.instagram.handle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-muted/30 hover:bg-muted/50 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
      </div>
    </>
  );
};

export default Social;
