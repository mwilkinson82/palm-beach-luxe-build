import { Link } from "react-router-dom";
import fcmbLogo from "@/assets/fcmb-logo.png";
import nahbBadge from "@/assets/nahb-master-building-professional.png.asset.json";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground font-sans">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <span className="text-3xl font-wordmark tracking-tight leading-none text-primary-foreground block">
                Beau Monde
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.4em] text-accent/90 font-medium">
                Builders · Palm Beach
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm text-primary-foreground/70">
              Creating Palm Beach's most distinguished estates through architectural excellence
              and uncompromising craftsmanship since 1994.
            </p>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">Explore</h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/75">
              {[
                { label: "About", path: "/about" },
                { label: "Process", path: "/process" },
                { label: "Find My Style", path: "/projects" },
                { label: "Renovations", path: "/renovations" },
                { label: "Press", path: "/press" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm font-light text-primary-foreground/75">
              <li>Custom Home Design</li>
              <li>Architectural Planning</li>
              <li>Luxury Construction</li>
              <li>Project Management</li>
              <li>Interior Design</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-accent font-semibold mb-6">Contact</h4>
            <address className="not-italic space-y-4 text-sm font-light text-primary-foreground/75">
              <p className="leading-relaxed">
                205 Worth Avenue · Suite 120<br />
                Palm Beach, FL 33480
              </p>
              <p>
                <a href="tel:+15616468992" className="hover:text-primary-foreground transition-colors">
                  (561) 646-8992
                </a>
              </p>
              <p>
                <a href="mailto:aj@bmbpalmbeach.com" className="hover:text-primary-foreground transition-colors">
                  aj@bmbpalmbeach.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Credentials Row — engraved colophon */}
        <div className="border-t border-b border-accent/15 py-10 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">
            {/* Certification Medallions — FCMB + NAHB */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-background/5 p-1 ring-1 ring-accent/40 flex items-center justify-center">
                  <img
                    src={fcmbLogo}
                    alt="Florida Certified Master Builder"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] leading-tight text-primary-foreground/70">
                  Florida Certified<br />Master Builder
                </span>
              </div>
              <div aria-hidden className="hidden md:block w-px h-12 bg-accent/25" />
              <div className="flex items-center gap-4">
                <div className="h-16 rounded-md bg-background/95 px-2 py-1.5 ring-1 ring-accent/40 shadow-[0_12px_32px_hsl(var(--primary-foreground)/0.12)] flex items-center justify-center">
                  <img
                    src={nahbBadge.url}
                    alt="NAHB Certified Master Building Professional"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] leading-tight text-primary-foreground/70">
                  NAHB Certified<br />Master Building Professional
                </span>
              </div>
            </div>

            {/* Engraved credential set */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {[
                { eyebrow: "Accredited", line: "Fully Insured" },
                { eyebrow: "State Registered", line: "FL Licensed Contractor" },
              { eyebrow: "Established", line: "30 Years · Since 1994" },
              ].map((c, i, arr) => (
                <div key={c.eyebrow} className="flex items-center gap-x-12">
                  <div className="text-center">
                    <span className="block font-display italic text-[11px] uppercase tracking-[0.25em] text-accent mb-1.5">
                      {c.eyebrow}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/85">
                      {c.line}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span aria-hidden className="hidden md:block w-px h-8 bg-accent/25" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Beau Monde Builders. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-primary-foreground/80 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary-foreground/80 transition-colors">Terms</Link>
            <Link to="/sitemap" className="hover:text-primary-foreground/80 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
