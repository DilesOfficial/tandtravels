import { Shield, Heart, Clock, Globe } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const features = [
  {
    icon: Shield,
    title: "Safe & Comfortable Journeys",
    description:
      "Your safety is our priority. Well-maintained vehicles, experienced drivers, and comprehensive insurance ensure worry-free travel.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every itinerary is crafted to match your preferences. We listen, plan, and deliver experiences tailored just for you.",
  },
  {
    icon: Clock,
    title: "25+ Years of Trust",
    description:
      "Since 2002, we've built our reputation on reliability, integrity, and exceptional service that keeps travelers coming back.",
  },
  {
    icon: Globe,
    title: "Global Clientele",
    description:
      "Trusted by travelers from around the world, we bring local expertise and international standards together.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Why Choose Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            The T & T <span className="text-primary">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What sets us apart is our unwavering commitment to making your Sri Lanka
            experience extraordinary in every way.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={index}>
                <div className="group p-8 rounded-2xl bg-muted hover:bg-primary transition-all duration-300 hover-lift cursor-default h-full">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-white mb-4 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
