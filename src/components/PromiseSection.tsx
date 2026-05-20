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
    <section className="py-16 sm:py-24 bg-accent text-accent-foreground relative overflow-hidden">
      {/* Decorative grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block font-semibold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm mb-4">
            Our Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-5 leading-tight">
            Our Commitment to You
          </h2>
          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            At T &amp; T Travels, we believe that trust is the foundation of every great
            journey. Here's what we promise to every traveler who chooses us.
          </p>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.08} className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {promises.map((promise, index) => (
            <StaggerItem key={index}>
              <div className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-base sm:text-lg font-medium leading-relaxed">{promise}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
