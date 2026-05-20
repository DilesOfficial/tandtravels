import { Car, Map, Camera, Compass, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: Car,
    title: "Airport Transfers",
    description:
      "Comfortable, reliable airport pickup and drop-off services with meet-and-greet assistance.",
    gradient: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Map,
    title: "Customized Tours",
    description:
      "Bespoke itineraries designed around your interests, timeline, and budget for a truly personal experience.",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: Camera,
    title: "Sightseeing Tours",
    description:
      "Explore Sri Lanka's iconic landmarks, from ancient ruins to natural wonders with expert guides.",
    gradient: "from-rose-500 to-pink-500",
    bg: "bg-rose-50 dark:bg-rose-950/20",
  },
  {
    icon: Compass,
    title: "Adventure Travel",
    description:
      "Wildlife safaris, trekking, water sports, and thrilling experiences for the adventurous traveler.",
    gradient: "from-emerald-500 to-green-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    icon: Users,
    title: "Group Tours",
    description:
      "Perfect for families, friends, or corporate groups seeking shared memorable experiences.",
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    icon: Plane,
    title: "Complete Packages",
    description:
      "All-inclusive travel packages with accommodation, meals, activities, and transportation.",
    gradient: "from-teal-500 to-cyan-600",
    bg: "bg-teal-50 dark:bg-teal-950/20",
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
    <section id="services" className="py-16 sm:py-24 bg-muted relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="section-badge">Our Services</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            Exceptional Travel{" "}
            <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            From seamless airport transfers to adventure-packed tours, we offer
            comprehensive travel services tailored to your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index}>
                <div className="group bg-card rounded-2xl shadow-md hover:shadow-xl border border-border/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                  {/* Colored top bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />

                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base flex-1">
                      {service.description}
                    </p>

                    {/* Learn More link */}
                    <button
                      onClick={scrollToContact}
                      className={`mt-5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} flex items-center gap-1 group/link w-fit`}
                    >
                      Book This Tour
                      <svg className="h-4 w-4 transition-transform group-hover/link:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-lg px-8 sm:px-10 py-5 sm:py-7 font-bold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
          >
            Plan Your Trip Today
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
