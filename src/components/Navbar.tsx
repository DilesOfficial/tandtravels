import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/tt-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border/60"
          : "bg-transparent"
      }`}
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div
        className="container mx-auto px-4"
        style={{ paddingLeft: 'max(1rem, env(safe-area-inset-left, 0px))', paddingRight: 'max(1rem, env(safe-area-inset-right, 0px))' }}
      >
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="T & T Travels"
              className="h-10 sm:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:text-primary animated-underline ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+94750307030"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-primary"
              }`}
            >
              <Phone className="h-4 w-4" />
              +94 75 030 7030
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 rounded-xl px-5"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-border p-5 mb-4 animate-scale-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-foreground font-medium py-3 px-4 rounded-xl hover:bg-muted hover:text-primary transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="border-t border-border mt-2 pt-4 space-y-3">
                <a
                  href="tel:+94750307030"
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-muted text-foreground font-medium"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +94 75 030 7030
                </a>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full rounded-xl h-12"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
