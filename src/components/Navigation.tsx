import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Only routes with a full-bleed dark hero get the transparent-over-hero treatment.
  const transparentRoutes = ["/", "/renovations"];
  const canBeTransparent = transparentRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent over the hero (light text), ivory after scroll (dark text).
  // Mobile menu open or non-hero routes always force the solid surface for legibility.
  const solid = !canBeTransparent || scrolled || isOpen;
  const shellClass = solid
    ? "bg-background/95 backdrop-blur-md border-b border-border/60 shadow-sm"
    : "bg-transparent border-b border-transparent";
  const textClass = solid ? "text-foreground" : "text-white";
  const mutedClass = solid ? "text-muted-foreground" : "text-white/70";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${shellClass}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className={`text-2xl md:text-[28px] font-wordmark tracking-tight leading-none transition-colors duration-500 ${textClass}`}>
                Beau Monde
              </span>
              <span className={`mt-1 text-[10px] tracking-[0.3em] uppercase font-light transition-colors duration-500 ${mutedClass}`}>
                Builders · Palm Beach
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/renovations" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 hover:text-accent ${textClass}`}
            >
              Renovations
            </Link>
            <Link 
              to="/projects" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 hover:text-accent ${textClass}`}
            >
              Your Style
            </Link>
            <Link 
              to="/process" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 hover:text-accent ${textClass}`}
            >
              Process
            </Link>
            <Link 
              to="/about" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 hover:text-accent ${textClass}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-xs uppercase tracking-[0.25em] font-normal transition-colors duration-500 hover:text-accent ${textClass}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center bg-primary text-primary-foreground px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-sans font-light ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500 hover:-translate-y-px hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]"
            >
              <span className="relative inline-block">
                Talk to Beau Monde
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" aria-hidden="true" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 -mr-2 transition-colors duration-500 ${textClass}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-8 space-y-6 bg-background/95 backdrop-blur-md border-t border-border/60 animate-fade-in px-2">
            <Link
              to="/"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/renovations"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Renovations
            </Link>
            <Link
              to="/projects"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Your Style
            </Link>
            <Link
              to="/process"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Process
            </Link>
            <Link
              to="/about"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-xs uppercase tracking-[0.25em] text-foreground hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center justify-center w-full bg-primary text-primary-foreground px-8 py-5 text-[10px] uppercase tracking-[0.3em] font-sans font-light ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500"
              >
                <span className="relative inline-block">
                  Talk to Beau Monde
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-700 ease-out group-hover:w-full" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
