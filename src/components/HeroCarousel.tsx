import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
    description:
      "Rise above the jungle canopy to discover an ancient palace perched atop a massive rock — one of the world's greatest archaeological wonders.",
  },
  {
    image: kandy,
    title: "Kandy",
    subtitle: "Sacred City & Temple of the Tooth",
    description:
      "Nestled among misty mountains, Kandy is Sri Lanka's cultural capital — home to the revered Temple of the Tooth and vibrant Kandyan traditions.",
  },
  {
    image: galle,
    title: "Galle",
    subtitle: "Historic Dutch Fort & Lighthouse",
    description:
      "Wander through cobblestone streets and colonial-era ramparts in Galle's UNESCO World Heritage fortress overlooking the Indian Ocean.",
  },
  {
    image: nuwaraEliya,
    title: "Ella",
    subtitle: "Nine Arch Bridge & Hill Country",
    description:
      "Ride the iconic blue train across the Nine Arch Bridge, surrounded by emerald tea plantations and mist-wrapped mountains.",
  },
  {
    image: weligama,
    title: "Mirissa",
    subtitle: "Tropical Beach Paradise",
    description:
      "Discover pristine crescent beaches, spot blue whales, and sip coconuts at sunset along one of Sri Lanka's most beloved coastal retreats.",
  },
  {
    image: southernCoast,
    title: "Weligama",
    subtitle: "Luxury Coastal Retreats",
    description:
      "A laid-back surf town with gentle waves, luxury resorts, and breathtaking sunsets over the glittering Indian Ocean.",
  },
];

// Josefin Sans font stack (Futura alternative)
const futura = "'Josefin Sans', 'Futura', 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const stripRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isTransitioning = useRef(false);

  const goToSlide = useCallback((index: number) => {
    if (index === current || isTransitioning.current) return;
    isTransitioning.current = true;
    setCurrent(index);
    setTimeout(() => { isTransitioning.current = false; }, 900);
  }, [current]);

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    autoPlayRef.current = setInterval(nextSlide, 5500);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying, nextSlide]);

  const pauseAndResume = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleNav = (fn: () => void) => { pauseAndResume(); fn(); };

  // Scroll active card into view inside the strip only (avoids scrolling/jumping the window)
  useEffect(() => {
    if (!stripRef.current) return;
    const cards = stripRef.current.querySelectorAll<HTMLButtonElement>("[data-card]");
    const activeCard = cards[current];
    if (activeCard) {
      const container = stripRef.current;
      const containerWidth = container.clientWidth;
      const cardWidth = activeCard.clientWidth;
      
      // Calculate relative position using getBoundingClientRect to avoid offsetParent issues
      const containerRect = container.getBoundingClientRect();
      const cardRect = activeCard.getBoundingClientRect();
      
      const cardOffsetLeftInContainer = cardRect.left - containerRect.left + container.scrollLeft;
      const targetScrollLeft = cardOffsetLeftInContainer - (containerWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: targetScrollLeft,
        behavior: "smooth"
      });
    }
  }, [current]);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100dvh" }}
    >
      {/* ── Background Images ─────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: 0,
            transition: "opacity 1000ms ease-in-out",
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            style={{
              transform: i === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 7000ms ease-out",
            }}
          />
          {/* Dark overlay — heavy on left for text readability, lighter on right */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.15) 100%)" }} />
          {/* Bottom fade for card strip readability */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 35%, transparent 65%)" }} />
        </div>
      ))}

      {/* ── Giant Watermark Location Name ─────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none select-none"
        style={{ zIndex: 1 }}
      >
        <span
          key={`wm-${current}`}
          className="animate-fade-in"
          style={{
            fontFamily: futura,
            fontWeight: 800,
            letterSpacing: "0.04em",
            lineHeight: 0.85,
            /*
             * White at 20% opacity — readable on dark slides (jungle, city)
             * Dark text-shadow gives definition on lighter / bright-sky slides.
             *   mobile  375px → ~80px
             *   tablet  768px → ~115px
             *   desktop 1440px → ~208px
             */
            fontSize: "clamp(5rem, 15vw, 13rem)",
            color: "rgba(255, 255, 255, 0.20)",
            textShadow: "0 2px 16px rgba(0, 0, 0, 0.30)",
            paddingRight: "clamp(0.5rem, 2vw, 2rem)",
            whiteSpace: "nowrap",
          }}
        >
          {slides[current].title.toUpperCase()}
        </span>
      </div>

      {/* ── Main Content Layer ────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col"
        style={{
          zIndex: 2,
          paddingTop: "calc(env(safe-area-inset-top, 0px) + 4.5rem)",
          paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)",
        }}
      >
        {/* ── Left Hero Text ──────────────────────────── */}
        <div
          className="flex-1 flex flex-col justify-center"
          style={{ padding: "0 clamp(1.25rem, 5vw, 5rem)" }}
        >
          <div style={{ maxWidth: "clamp(18rem, 55vw, 38rem)" }}>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="flex-shrink-0" style={{ width: "clamp(1.5rem, 3vw, 2.5rem)", height: "2px", background: "hsl(42 87% 55%)" }} />
              <span
                style={{
                  fontFamily: futura,
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "hsl(42 87% 60%)",
                  /* mobile 10px → desktop 13px */
                  fontSize: "clamp(0.625rem, 1.2vw, 0.8125rem)",
                }}
              >
                T &amp; T Travels
              </span>
            </div>

            {/* "Welcome to" line */}
            <div
              key={`head-${current}`}
              className="animate-fade-in-up"
              style={{ animationDuration: "0.6s" }}
            >
              <p
                style={{
                  fontFamily: futura,
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: 1.1,
                  margin: 0,
                  /* mobile 26px → tablet 44px → desktop 56px */
                  fontSize: "clamp(1.625rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                Welcome to
              </p>

              {/* "Sri Lanka" — bolder, gold accent */}
              <p
                style={{
                  fontFamily: futura,
                  fontWeight: 700,
                  color: "hsl(42 87% 55%)",
                  lineHeight: 1.05,
                  margin: "0.05em 0 0",
                  /* mobile 32px → tablet 56px → desktop 68px */
                  fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Sri Lanka
              </p>
            </div>

            {/* Description — animates per slide */}
            <p
              key={`desc-${current}`}
              className="animate-fade-in-up animation-delay-100"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
                color: "rgba(255,255,255,0.72)",
                lineHeight: 1.65,
                marginTop: "clamp(0.75rem, 2vw, 1.25rem)",
                marginBottom: 0,
                /* mobile 13px → desktop 16px */
                fontSize: "clamp(0.8125rem, 1.5vw, 1rem)",
                maxWidth: "32rem",
              }}
            >
              {slides[current].description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 animation-delay-200 animate-fade-in-up"
              style={{ marginTop: "clamp(1.25rem, 3vw, 2rem)" }}
            >
              <button
                onClick={() => scrollTo("#services")}
                className="group flex items-center gap-2 font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  fontFamily: futura,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  background: "hsl(42 87% 55%)",
                  color: "hsl(160 30% 12%)",
                  border: "none",
                  borderRadius: "0.625rem",
                  cursor: "pointer",
                  /* mobile 12px → desktop 15px */
                  fontSize: "clamp(0.75rem, 1.3vw, 0.9375rem)",
                  padding: "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.25rem, 2.5vw, 1.75rem)",
                  boxShadow: "0 4px 20px hsl(42 87% 55% / 0.35)",
                }}
              >
                Explore Destinations
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  style={{ width: "clamp(0.875rem, 1.5vw, 1rem)", height: "clamp(0.875rem, 1.5vw, 1rem)" }}
                />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  fontFamily: futura,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  background: "transparent",
                  color: "rgba(255,255,255,0.92)",
                  border: "2px solid rgba(255,255,255,0.45)",
                  borderRadius: "0.625rem",
                  cursor: "pointer",
                  fontSize: "clamp(0.75rem, 1.3vw, 0.9375rem)",
                  padding: "clamp(0.7rem, 1.5vw, 0.9rem) clamp(1.25rem, 2.5vw, 1.75rem)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(42 87% 55%)";
                  (e.currentTarget as HTMLButtonElement).style.color = "hsl(42 87% 55%)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.45)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.92)";
                }}
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Destination Card Strip ────────────── */}
        <div style={{ padding: "0 clamp(1rem, 4vw, 4rem)" }}>

          {/* Card strip + arrows row */}
          <div className="flex items-end gap-3">

            {/* Scrollable cards */}
            <div
              ref={stripRef}
              className="scrollbar-hide flex flex-1 overflow-x-auto items-end"
              style={{ gap: "clamp(0.5rem, 1vw, 0.75rem)", scrollSnapType: "x mandatory" }}
            >
              {slides.map((slide, i) => {
                const isActive = i === current;
                return (
                  <button
                    key={i}
                    data-card={i}
                    onClick={() => handleNav(() => goToSlide(i))}
                    className="group relative flex-shrink-0 overflow-hidden focus:outline-none"
                    style={{
                      scrollSnapAlign: "start",
                      /* Active card: taller & wider */
                      width: isActive
                        ? "clamp(8rem, 16vw, 13rem)"
                        : "clamp(5.5rem, 11vw, 9rem)",
                      height: isActive
                        ? "clamp(7rem, 14vw, 11.5rem)"
                        : "clamp(5.5rem, 11vw, 9rem)",
                      borderRadius: "0.75rem",
                      border: isActive
                        ? "2px solid hsl(42 87% 55%)"
                        : "2px solid rgba(255,255,255,0.18)",
                      transition: "width 0.55s cubic-bezier(0.4,0,0.2,1), height 0.55s cubic-bezier(0.4,0,0.2,1), border-color 0.3s",
                      cursor: "pointer",
                      background: "transparent",
                      padding: 0,
                    }}
                  >
                    {/* Card image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ borderRadius: "inherit" }}
                    />

                    {/* Gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        borderRadius: "inherit",
                        background: isActive
                          ? "linear-gradient(to top, rgba(0,0,0,0.80) 45%, rgba(0,0,0,0.1) 100%)"
                          : "linear-gradient(to top, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.25) 100%)",
                      }}
                    />

                    {/* Active top border accent */}
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 right-0 animate-scale-in"
                        style={{ height: "3px", background: "hsl(42 87% 55%)", borderRadius: "0.75rem 0.75rem 0 0" }}
                      />
                    )}

                    {/* Card text */}
                    <div
                      className="absolute bottom-0 left-0 right-0"
                      style={{ padding: "clamp(0.5rem, 1.5vw, 0.875rem)" }}
                    >
                      <p
                        style={{
                          fontFamily: futura,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.97)",
                          margin: 0,
                          lineHeight: 1.1,
                          /* mobile 9px → desktop 13px */
                          fontSize: "clamp(0.5625rem, 1.1vw, 0.8125rem)",
                        }}
                      >
                        {slide.title}
                      </p>

                      {/* Subtitle only on active card */}
                      {isActive && (
                        <p
                          className="animate-fade-in"
                          style={{
                            fontFamily: futura,
                            fontWeight: 300,
                            color: "hsl(42 87% 60%)",
                            margin: "0.2em 0 0",
                            lineHeight: 1.2,
                            /* mobile 8px → desktop 11px */
                            fontSize: "clamp(0.5rem, 0.9vw, 0.6875rem)",
                          }}
                        >
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation arrows — stacked vertically */}
            <div className="flex flex-col gap-2 flex-shrink-0 pb-1">
              <button
                onClick={() => handleNav(prevSlide)}
                aria-label="Previous destination"
                className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  width: "clamp(2rem, 3.5vw, 2.75rem)",
                  height: "clamp(2rem, 3.5vw, 2.75rem)",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "hsl(42 87% 55%)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(42 87% 55%)";
                  (e.currentTarget as HTMLButtonElement).style.color = "hsl(160 30% 12%)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
              >
                <ChevronLeft style={{ width: "clamp(0.875rem, 1.5vw, 1.125rem)", height: "clamp(0.875rem, 1.5vw, 1.125rem)" }} />
              </button>
              <button
                onClick={() => handleNav(nextSlide)}
                aria-label="Next destination"
                className="flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                style={{
                  width: "clamp(2rem, 3.5vw, 2.75rem)",
                  height: "clamp(2rem, 3.5vw, 2.75rem)",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.12)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  backdropFilter: "blur(8px)",
                  color: "white",
                  cursor: "pointer",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "hsl(42 87% 55%)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "hsl(42 87% 55%)";
                  (e.currentTarget as HTMLButtonElement).style.color = "hsl(160 30% 12%)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                  (e.currentTarget as HTMLButtonElement).style.color = "white";
                }}
              >
                <ChevronRight style={{ width: "clamp(0.875rem, 1.5vw, 1.125rem)", height: "clamp(0.875rem, 1.5vw, 1.125rem)" }} />
              </button>
            </div>
          </div>

          {/* Slide counter + progress bars */}
          <div
            className="flex items-center gap-2"
            style={{ marginTop: "clamp(0.5rem, 1.2vw, 0.875rem)" }}
          >
            <span
              style={{
                fontFamily: futura,
                fontWeight: 700,
                color: "hsl(42 87% 55%)",
                fontSize: "clamp(0.6875rem, 1.1vw, 0.8125rem)",
                minWidth: "1.75rem",
                letterSpacing: "0.05em",
              }}
            >
              {String(current + 1).padStart(2, "0")}
            </span>

            <div className="flex items-center gap-1">
              {slides.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "2px",
                    borderRadius: "2px",
                    background: i === current ? "hsl(42 87% 55%)" : "rgba(255,255,255,0.28)",
                    width: i === current ? "clamp(1.5rem, 3vw, 2.5rem)" : "clamp(0.375rem, 0.8vw, 0.5rem)",
                    transition: "width 0.5s ease, background 0.5s ease",
                  }}
                />
              ))}
            </div>

            <span
              style={{
                fontFamily: futura,
                fontWeight: 400,
                color: "rgba(255,255,255,0.35)",
                fontSize: "clamp(0.6875rem, 1.1vw, 0.8125rem)",
                letterSpacing: "0.05em",
              }}
            >
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
