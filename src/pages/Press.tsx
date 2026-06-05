import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { RevealAnimation } from "@/components/RevealAnimation";
import { SEO, BreadcrumbSchema } from "@/components/SEO";

const Press = () => {
  return (
    <>
      <SEO 
        title="Press & Media"
        description="Press coverage and media recognition for Beau Monde Builders. Industry awards, media features, and thought leadership in Space Coast luxury homebuilding."
        canonical="/press"
      />
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Press", url: "/press" }
      ]} />
      <div className="min-h-screen bg-background">
        <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10 pt-32 pb-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <p className="text-sm uppercase tracking-[0.3em] text-accent font-light mb-6">
              Media & Recognition
            </p>
            <h1 className="text-6xl md:text-8xl font-display font-light text-foreground mb-8 tracking-tight">
              In The <span className="font-serif italic">Spotlight</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              Recognized by industry leaders for setting new standards in luxury homebuilding 
              throughout Space Coast and Florida.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Recognition */}
      <RevealAnimation animation="luxury-reveal">
        <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
              {[
                { number: "01", title: "Industry Awards", desc: "Recognized for excellence in custom luxury homebuilding" },
                { number: "02", title: "Media Features", desc: "Featured in prestigious publications and outlets" },
                { number: "03", title: "Thought Leadership", desc: "Setting standards in architectural innovation" }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-6 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-6xl font-display font-light text-accent/30">{item.number}</div>
                  <h2 className="text-2xl font-serif italic text-foreground">{item.title}</h2>
                  <div className="w-12 h-px bg-accent mx-auto" />
                  <p className="text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="text-center space-y-12 py-20 animate-fade-in">
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-display font-light text-foreground tracking-tight">
                  Press Coverage <span className="font-serif italic">Coming Soon</span>
                </h2>
                <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                  We are currently curating our latest press features and industry recognition. 
                  Stay informed about our media appearances and accolades.
                </p>
              </div>
              <div className="pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-background transition-all duration-500"
                  asChild
                >
                  <Link to="/contact">Press Inquiries</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      {/* Media Contact */}
      <RevealAnimation animation="fade-up" delay={100}>
        <section className="py-32 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIi8+PC9nPjwvc3ZnPg==')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-display font-light tracking-tight">
              Media Inquiries
            </h2>
            <p className="text-xl text-background/70 font-light leading-relaxed">
              For press inquiries, interviews, or media requests, please contact our communications team.
            </p>
            <div className="pt-4">
              <a
                href="mailto:press@beaumondebuilders.com"
                className="text-accent hover:text-background transition-colors text-lg font-light tracking-wider"
              >
                press@beaumondebuilders.com
              </a>
            </div>
          </div>
        </div>
      </section>
      </RevealAnimation>

      <Footer />
      </div>
    </>
  );
};

export default Press;
