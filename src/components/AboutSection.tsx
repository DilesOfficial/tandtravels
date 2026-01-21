import { Award, Heart, Globe, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence" },
  { icon: Heart, value: "5000+", label: "Happy Travelers" },
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left" className="space-y-4 sm:space-y-6">
            <div className="inline-block">
              <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm">
                About Us
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Welcome to <span className="text-primary">T & T Travels</span>
            </h2>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Since <strong>2002</strong>, T & T Travels has been your trusted partner in
              exploring the wonders of Sri Lanka. Founded by{" "}
              <strong>Mr. Tharanga Priyashantha</strong>, our company has grown from a
              small local operation to a respected name in the travel industry.
            </p>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              With over <strong>two decades of experience</strong>, we take pride in
              offering personalized travel experiences that combine comfort, safety,
              and authentic cultural immersion. Our deep local knowledge and
              commitment to excellence ensure that every journey with us becomes an
              unforgettable adventure.
            </p>
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking serene beaches, ancient temples, lush tea
              plantations, or thrilling wildlife safaris, T & T Travels crafts
              itineraries that match your dreams and exceed your expectations.
            </p>

            <div className="pt-3 sm:pt-4">
              <p className="italic text-foreground font-medium text-sm sm:text-base">
                "Your journey is our passion. Your satisfaction is our commitment."
              </p>
              <p className="text-primary font-semibold mt-2 text-sm sm:text-base">
                — Tharanga Priyashantha, Founder
              </p>
            </div>
          </AnimatedSection>

          {/* Right Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-card p-4 sm:p-6 rounded-xl shadow-lg hover-lift text-center h-full">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                      <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium text-xs sm:text-base">{stat.label}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
