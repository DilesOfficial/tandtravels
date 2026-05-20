import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/tt-logo.png";

const WHATSAPP_NUMBER = "94750307030";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const TripAdvisorIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 5.997 5.997 0 0 0 4.04-10.43L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.912C14.756 8.088 13.5 9.834 12.998 11.9c-.503-2.065-1.758-3.812-3.508-4.733A11.392 11.392 0 0 1 12 6.255zm-6.003 2.12a3.997 3.997 0 1 1 0 7.994 3.997 3.997 0 0 1 0-7.994zm12.006 0a3.997 3.997 0 1 1 0 7.994 3.997 3.997 0 0 1 0-7.994zM6 10.376a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 10.376zm12.003 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/19t81oM61E/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/t.t.travelssrilanka?igsh=YzljYTk1ODg3Zg==", label: "Instagram" },
  { icon: GoogleIcon, href: "https://share.google/Xl5icq8w9NSORmNLN", label: "Google", isComponent: true },
  { icon: TripAdvisorIcon, href: "https://www.tripadvisor.co.uk/Attraction_Review-g297897-d15848526-Reviews-T_and_T_Travels-Negombo_Western_Province.html", label: "TripAdvisor", isComponent: true },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* WhatsApp CTA Banner */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-500 py-4 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-medium text-sm sm:text-base text-center sm:text-left">
            💬 Ready to book? Chat with us instantly on WhatsApp!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'd like to enquire about a tour with T & T Travels.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-green-700 font-bold px-5 py-2 rounded-xl text-sm hover:bg-green-50 transition-colors shadow-md whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4" />
            Chat Now
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <img src={logo} alt="T & T Travels" className="h-12 sm:h-16 w-auto mb-5 mx-auto sm:mx-0" />
            <p className="text-background/70 mb-6 text-sm sm:text-base leading-relaxed">
              Your trusted travel partner for over two decades. Experience the
              beauty of Sri Lanka with personalized service and unforgettable
              memories.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary hover:scale-110 flex items-center justify-center transition-all duration-200 shadow-sm"
                    aria-label={social.label}
                  >
                    {(social as any).isComponent ? <Icon /> : <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors text-sm sm:text-base animated-underline inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm sm:text-base text-left leading-relaxed">
                  No - 332 Munidasa Kumarathunge Rd,<br />
                  Seeduwa 11410, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+94750307030"
                  className="text-background/70 hover:text-primary text-sm sm:text-base transition-colors"
                >
                  +94 75 030 7030
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@tandttravels.com"
                  className="text-background/70 hover:text-primary text-sm sm:text-base transition-colors"
                >
                  info@tandttravels.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <h3 className="font-serif text-lg sm:text-xl font-bold mb-5 relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h3>
            <p className="text-background/70 mb-5 text-sm sm:text-base leading-relaxed">
              Subscribe to receive travel tips, exclusive offers, and Sri Lanka
              travel inspiration.
            </p>
            <form className="space-y-3 max-w-sm mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-10 sm:mt-14 pt-7 sm:pt-8 text-center space-y-1.5">
          <p className="text-background/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} T &amp; T Travels. All rights reserved.
          </p>
          <p className="text-background/40 text-xs">
            Developed by{" "}
            <a
              href="https://ideacode.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              ideacode.org
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
