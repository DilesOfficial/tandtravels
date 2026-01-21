import { CheckCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const promises = [
  "Integrity in every interaction and transaction",
  "Complete confidentiality of your personal information",
  "Excellence in service delivery and customer care",
  "Transparent pricing with no hidden costs",
  "24/7 support throughout your journey",
  "Commitment to sustainable and responsible tourism",
];

export function PromiseSection() {
  return (
    <section className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <span className="font-semibold tracking-widest uppercase text-sm opacity-80">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Commitment to You
          </h2>
          <p className="text-lg opacity-90 mb-12 max-w-2xl mx-auto">
            At T & T Travels, we believe that trust is the foundation of every great
            journey. Here's what we promise to every traveler who chooses us.
          </p>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.08} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          {promises.map((promise, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                <p className="text-lg font-medium">{promise}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
