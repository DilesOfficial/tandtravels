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
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Our Services
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Exceptional Travel <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From seamless airport transfers to adventure-packed tours, we offer
            comprehensive travel services tailored to your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <div className="bg-card p-8 rounded-2xl shadow-lg hover-lift group h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-semibold"
          >
            Plan Your Trip Today
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
