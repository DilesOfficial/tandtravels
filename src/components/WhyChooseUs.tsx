import { Shield, Heart, Clock, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Safe & Comfortable Journeys",
    description:
      "Your safety is our priority. Well-maintained vehicles, experienced drivers, and comprehensive insurance ensure worry-free travel.",
    gradient: "from-blue-500 to-cyan-500",
    number: "01",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every itinerary is crafted to match your preferences. We listen, plan, and deliver experiences tailored just for you.",
    gradient: "from-rose-500 to-pink-500",
    number: "02",
  },
  {
    icon: Clock,
    title: "25+ Years of Trust",
    description:
      "Since 2002, we've built our reputation on reliability, integrity, and exceptional service that keeps travelers coming back.",
    gradient: "from-amber-500 to-orange-500",
    number: "03",
  },
  {
    icon: Globe,
    title: "Global Clientele",
    description:
      "Trusted by travelers from around the world, we bring local expertise and international standards together.",
    gradient: "from-emerald-500 to-green-600",
    number: "04",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            The T &amp; T{" "}
            <span className="text-primary">Difference</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            What sets us apart is our unwavering commitment to making your Sri Lanka
            experience extraordinary in every way.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index}>
                <div className="group relative p-6 sm:p-8 rounded-2xl bg-muted border border-border/50 hover:border-primary/30 transition-all duration-400 card-hover cursor-default h-full overflow-hidden">
                  {/* Large number background */}
                  <span className="absolute top-3 right-4 font-serif text-7xl font-bold text-primary/6 select-none leading-none">
                    {feature.number}
                  </span>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {feature.description}
                  </p>

                  {/* Hover gradient bottom line */}
                  <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${feature.gradient} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`} />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
