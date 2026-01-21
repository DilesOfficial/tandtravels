import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { AboutSection } from "@/components/AboutSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GallerySection } from "@/components/GallerySection";
import { PromiseSection } from "@/components/PromiseSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <HeroCarousel />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <PromiseSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Index;
