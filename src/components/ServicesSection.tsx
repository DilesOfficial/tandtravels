import { Car, Map, Camera, Compass, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Comfortable, reliable airport pickup and drop-off services with meet-and-greet assistance.",
  },
  {
    icon: Map,
    title: "Customized Tours",
    description:
      "Bespoke itineraries designed around your interests, timeline, and budget for a truly personal experience.",
  },
  {
    icon: Camera,
    title: "Sightseeing Tours",
    description:
      "Explore Sri Lanka's iconic landmarks, from ancient ruins to natural wonders with expert guides.",
  },
  {
    icon: Compass,
    title: "Adventure Travel",
    description:
      "Wildlife safaris, trekking, water sports, and thrilling experiences for the adventurous traveler.",
  },
  {
    icon: Users,
    title: "Group Tours",
    description:
      "Perfect for families, friends, or corporate groups seeking shared memorable experiences.",
  },
  {
    icon: Plane,
    title: "Complete Packages",
    description:
      "All-inclusive travel packages with accommodation, meals, activities, and transportation.",
  },
];

export function ServicesSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
            Exceptional Travel <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground px-2">
            From seamless airport transfers to adventure-packed tours, we offer
            comprehensive travel services tailored to your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <div className="bg-card p-5 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover-lift group h-full">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-8 sm:mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-lg px-6 sm:px-8 py-4 sm:py-6 font-semibold"
          >
            Plan Your Trip Today
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
