import { useState } from "react";
import { X } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

import sigiriya from "@/assets/sigiriya.jpg";
import kandy from "@/assets/kandy.jpg";
import galle from "@/assets/galle.jpg";
import nuwaraEliya from "@/assets/nuwara-eliya.jpg";
import weligama from "@/assets/weligama.jpg";
import southernCoast from "@/assets/southern-coast.jpg";

const galleryImages = [
  { src: sigiriya, title: "Sigiriya Rock Fortress", category: "Cultural Heritage" },
  { src: kandy, title: "Kandy City", category: "Sacred City" },
  { src: galle, title: "Galle Lighthouse", category: "Southern Coast" },
  { src: nuwaraEliya, title: "Ella Nine Arch Bridge", category: "Hill Country" },
  { src: weligama, title: "Mirissa Beach", category: "Beach Paradise" },
  { src: southernCoast, title: "Weligama Bay", category: "Coastal Resort" },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="section-badge">Gallery</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-5 leading-tight">
            Glimpses of <span className="text-primary">Paradise</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Explore the breathtaking landscapes, rich culture, and natural wonders
            that await you in Sri Lanka.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-[10px] sm:text-sm font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-xl font-bold text-white mt-0.5 sm:mt-1">
                    {image.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 text-white hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center">
              <span className="text-primary text-xs font-medium uppercase tracking-widest">
                {galleryImages[selectedImage].category}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mt-1">
                {galleryImages[selectedImage].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
