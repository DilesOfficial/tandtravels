import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import sigiriya from "@/assets/sigiriya.jpg";
import kandy from "@/assets/kandy.jpg";
import galle from "@/assets/galle.jpg";
import nuwaraEliya from "@/assets/nuwara-eliya.jpg";
import weligama from "@/assets/weligama.jpg";
import southernCoast from "@/assets/southern-coast.jpg";

const slides = [
  {
    image: sigiriya,
    title: "Sigiriya",
    subtitle: "Ancient Lion Rock Fortress",
  },
  {
    image: kandy,
    title: "Kandy",
    subtitle: "Sacred City & Temple of the Tooth",
  },
  {
    image: galle,
    title: "Galle",
    subtitle: "Historic Dutch Fort & Lighthouse",
  },
  {
    image: nuwaraEliya,
    title: "Ella",
    subtitle: "Scenic Nine Arch Bridge & Hill Country",
  },
  {
    image: weligama,
    title: "Mirissa",
    subtitle: "Tropical Palm Paradise",
  },
  {
    image: southernCoast,
    title: "Weligama",
    subtitle: "Luxury Coastal Retreats",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-medium mb-2 tracking-widest uppercase opacity-90 animate-fade-in">
              Welcome to T & T Travels
            </p>
            <p className="text-2xl md:text-3xl font-serif italic text-primary mb-6 animate-fade-in">
              "Bookmark in your own way, With Save Day Our Travel Agency"
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Trusted Travel Partner
              <br />
              <span className="text-primary">For Over Two Decades</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the beauty of Sri Lanka with personalized tours,
              comfortable transportation, and unforgettable memories since 2002.
            </p>

            {/* Current Slide Info */}
            <div className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-2">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg opacity-80">{slides[currentSlide].subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-semibold"
              >
                Explore Our Services
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground text-lg px-8 py-6 font-semibold"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all text-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-all text-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all border-2 border-white ${
              index === currentSlide
                ? "bg-primary w-8 border-primary"
                : "bg-white/80 w-3 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
