import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RevealAnimation } from "@/components/RevealAnimation";
import { Home, Users, Cog, Image, Newspaper, Share2, Mail, FileText, Shield, Hammer } from "lucide-react";

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", path: "/", icon: Home, description: "Welcome to Beau Monde Builders" },
      { name: "About Us", path: "/about", icon: Users, description: "Meet AJ Hoover and our team" },
      { name: "Our Process", path: "/process", icon: Cog, description: "Our 9-step luxury building process" },
      { name: "Your Style", path: "/projects", icon: Image, description: "Explore architectural styles" },
      { name: "Renovations", path: "/renovations", icon: Hammer, description: "Whole-home, condo, kitchen, and bath work" },
      { name: "Questions", path: "/#faq", icon: FileText, description: "Draft answers about the Palm Beach office" },
      { name: "Contact", path: "/contact", icon: Mail, description: "Get in touch with us" },
    ]
  },
  {
    title: "Media & Social",
    links: [
      { name: "Press", path: "/press", icon: Newspaper, description: "News and media coverage" },
      { name: "Social Media", path: "/social", icon: Share2, description: "Connect with us online" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy", icon: Shield, description: "How we protect your data" },
      { name: "Terms of Service", path: "/terms", icon: FileText, description: "Website terms and conditions" },
    ]
  }
];

const Sitemap = () => {
  return (
    <>
      <SEO
        title="Sitemap | Beau Monde Builders Palm Beach"
        path="/sitemap"
        description="Directory of pages on the Beau Monde Builders Palm Beach website: services, styles, renovations, and contact."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Sitemap", path: "/sitemap" },
        ]}
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">Navigation</span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-thin mb-6">
                  Site <span className="italic font-light text-muted-foreground">Map</span>
                </h1>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  A complete directory of all pages on the Beau Monde Builders website
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {sitemapSections.map((section, sectionIndex) => (
                  <RevealAnimation key={section.title} animation="fade-up" delay={sectionIndex * 100}>
                    <div>
                      <h2 className="text-xl font-display font-light mb-6 pb-3 border-b border-border">
                        {section.title}
                      </h2>
                      <ul className="space-y-4">
                        {section.links.map((link) => {
                          const IconComponent = link.icon;
                          return (
                            <li key={link.path}>
                              <Link 
                                to={link.path}
                                className="group flex items-start space-x-3 p-3 -mx-3 rounded-lg hover:bg-secondary transition-colors"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                  <IconComponent className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                  <span className="block text-foreground font-medium group-hover:text-accent transition-colors">
                                    {link.name}
                                  </span>
                                  <span className="text-sm text-muted-foreground font-light">
                                    {link.description}
                                  </span>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* Additional Resources */}
              <RevealAnimation animation="fade-up" delay={300}>
                <div className="mt-16 pt-12 border-t border-border">
                  <h2 className="text-xl font-display font-light mb-6">Additional Resources</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="/sitemap.xml" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <span className="block text-foreground font-medium">XML Sitemap</span>
                      <span className="text-sm text-muted-foreground font-light">For search engines</span>
                    </a>
                    <a 
                      href="/robots.txt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <span className="block text-foreground font-medium">Robots.txt</span>
                      <span className="text-sm text-muted-foreground font-light">Crawler instructions</span>
                    </a>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;
