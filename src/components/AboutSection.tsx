import { Award, Heart, Globe, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const stats = [
  { icon: Award, value: "25+", label: "Years of Excellence", color: "from-amber-500 to-orange-500" },
  { icon: Heart, value: "5000+", label: "Happy Travelers", color: "from-rose-500 to-pink-500" },
  { icon: Globe, value: "50+", label: "Destinations", color: "from-sky-500 to-blue-500" },
  { icon: Users, value: "100%", label: "Client Satisfaction", color: "from-emerald-500 to-green-600" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection direction="left" className="space-y-6">
            <div>
              <span className="section-badge">About Us</span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-4">
                Welcome to{" "}
                <span className="text-primary relative">
                  T &amp; T Travels
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C47 1.5 100 1 199 5.5" stroke="hsl(42 87% 55%)" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Since <strong className="text-foreground">2002</strong>, T &amp; T Travels has been your trusted partner in
              exploring the wonders of Sri Lanka. Built from a passion for showcasing the
              true beauty of this island, our company has grown from a
              small local operation to a respected name in the travel industry.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              With over <strong className="text-foreground">two decades of experience</strong>, we take pride in
              offering personalized travel experiences that combine comfort, safety,
              and authentic cultural immersion. Our deep local knowledge and
              commitment to excellence ensure that every journey with us becomes an
              unforgettable adventure.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking serene beaches, ancient temples, lush tea
              plantations, or thrilling wildlife safaris, T &amp; T Travels crafts
              itineraries that match your dreams and exceed your expectations.
            </p>

            <div className="pt-2 border-l-4 border-primary pl-5 bg-primary/5 rounded-r-xl py-4">
              <p className="italic text-foreground font-medium text-base sm:text-lg leading-relaxed">
                "Your journey is our passion. Your satisfaction is our commitment."
              </p>
              <p className="text-primary font-semibold mt-2 text-sm">
                — The T &amp; T Travels Team
              </p>
            </div>
          </AnimatedSection>

          {/* Right Stats Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-card p-5 sm:p-7 rounded-2xl shadow-lg card-hover text-center h-full border border-border/50 relative overflow-hidden">
                    {/* Subtle gradient top corner */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />

                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 shadow-md`}>
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-1 stat-number">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</p>
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
