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
    <section 
      id="home" 
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: 'calc(100dvh)',
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)'
      }}
    >
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
        </div>
      ))}

      {/* Content Overlay */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{ 
          paddingTop: 'calc(env(safe-area-inset-top, 0px) + 3.5rem)',
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 2.5rem)'
        }}
      >
        <div className="container mx-auto px-3 sm:px-6 text-center text-white flex-1 flex flex-col justify-center max-h-full overflow-hidden">
          <div className="max-w-4xl mx-auto flex flex-col justify-center gap-1 sm:gap-2">
            {/* Welcome text - hidden on small mobile */}
            <p className="hidden sm:block text-xs md:text-base lg:text-xl font-medium tracking-widest uppercase opacity-90 animate-fade-in">
              Welcome to T & T Travels
            </p>
            
            {/* Slogan - responsive with optimized clamp for all iPhones */}
            <p 
              className="font-serif italic text-primary animate-fade-in leading-snug px-1"
              style={{ 
                fontSize: 'clamp(0.7rem, 2.8vw, 1.5rem)',
                lineHeight: '1.3'
              }}
            >
              "Bookmark in your own way,
              <br className="xs:hidden" />
              <span className="hidden xs:inline"> </span>
              With Save Day Our Travel Agency"
            </p>
            
            {/* Main heading - optimized clamp for iPhone SE to Pro Max */}
            <h1 
              className="font-serif font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(1.1rem, 5.5vw, 3.5rem)' }}
            >
              Your Trusted Travel Partner
              <br />
              <span className="text-primary">For Over Two Decades</span>
            </h1>
            
            {/* Description - visible on xs and up, optimized for readability */}
            <p 
              className="hidden xs:block opacity-90 max-w-xl mx-auto px-2 leading-relaxed"
              style={{ fontSize: 'clamp(0.6rem, 2.2vw, 1rem)' }}
            >
              Experience the beauty of Sri Lanka with personalized tours,
              comfortable transportation, and unforgettable memories since 2002.
            </p>

            {/* Current Slide Info */}
            <div className="mt-1 sm:mt-2">
              <h2 
                className="font-serif font-semibold"
                style={{ fontSize: 'clamp(0.95rem, 3.5vw, 1.75rem)' }}
              >
                {slides[currentSlide].title}
              </h2>
              <p 
                className="opacity-80"
                style={{ fontSize: 'clamp(0.55rem, 1.8vw, 1rem)' }}
              >
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Buttons - stacked on mobile, row on larger screens */}
            <div className="flex flex-col gap-2 xs:gap-2.5 sm:flex-row sm:gap-4 justify-center max-w-xs xs:max-w-sm sm:max-w-none mx-auto mt-2 sm:mt-4 px-2">
              <Button
                size="lg"
                onClick={() => scrollToSection("#services")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto h-auto"
                style={{ 
                  fontSize: 'clamp(0.7rem, 2vw, 1rem)', 
                  padding: 'clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 2.5vw, 1.5rem)' 
                }}
              >
                Explore Our Services
              </Button>
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold w-full sm:w-auto h-auto"
                style={{ 
                  fontSize: 'clamp(0.7rem, 2vw, 1rem)', 
                  padding: 'clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 2.5vw, 1.5rem)' 
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - hidden on very small mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all text-white hidden xs:flex items-center justify-center"
        style={{ marginLeft: 'env(safe-area-inset-left, 0px)' }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all text-white hidden xs:flex items-center justify-center"
        style={{ marginRight: 'env(safe-area-inset-right, 0px)' }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>

      {/* Dots Navigation */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-3"
        style={{ bottom: 'calc(env(safe-area-inset-bottom, 0px) + 0.75rem)' }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 sm:h-3 rounded-full transition-all border border-white/70 ${
              index === currentSlide
                ? "bg-primary w-4 sm:w-8 border-primary"
                : "bg-white/60 w-2 sm:w-3 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
