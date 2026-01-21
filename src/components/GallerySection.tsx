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
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Glimpses of <span className="text-primary">Paradise</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore the breathtaking landscapes, rich culture, and natural wonders
            that await you in Sri Lanka.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <StaggerItem key={index}>
              <div
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mt-1">
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
