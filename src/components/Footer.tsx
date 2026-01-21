import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/tt-logo.png";

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
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="T & T Travels" className="h-16 w-auto mb-4" />
            <p className="text-background/70 mb-6">
              Your trusted travel partner for over two decades. Experience the
              beauty of Sri Lanka with personalized service and unforgettable
              memories.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    {(social as any).isComponent ? <Icon /> : <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  No - 332 Munidasa Kumarathunge Rd,<br />
                  Seeduwa 11410, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70">+94 75 030 7030</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70">info@tandttravels.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-background/70 mb-4">
              Subscribe to receive travel tips, exclusive offers, and Sri Lanka
              travel inspiration.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} T & T Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
