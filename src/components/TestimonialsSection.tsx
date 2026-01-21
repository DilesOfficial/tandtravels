import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Christian J",
    country: "Germany",
    text: "For 21 days Tharanga was more than just a guide. He organized, he planned, he gave tips, he always had time, he cared, he always helped and was flexible. His presence was never disruptive but always enriching. An absolute recommendation!",
    rating: 5,
    date: "Mar 2022",
    tripType: "Family",
  },
  {
    name: "Sylvia",
    country: "Germany",
    text: "We traveled with Tharanga and are grateful that he accompanied us so well. He is a safe driver and took us to all the destinations we wanted. We changed the plan during the trip, but that wasn't a problem. His recommendations were great. We can only recommend him!",
    rating: 5,
    date: "Dec 2023",
    tripType: "Couples",
  },
  {
    name: "Diana O",
    country: "Israel",
    text: "Second time coming with friends to Sri Lanka and being with our amazing guide T & T Travels. We had the best time especially by the coast. We got everything we requested such as nice hotels and even nice surfing local spots. Definitely recommend!",
    rating: 5,
    date: "Nov 2022",
    tripType: "Friends",
  },
  {
    name: "Bhawna M",
    country: "India",
    text: "Tharanga is an excellent guide and really thoughtful person. He made our travel very easy. Last minute modifications were done without any hassle. Our kids loved his company. His package rate was very competitive compared to direct booking.",
    rating: 5,
    date: "Dec 2021",
    tripType: "Family",
  },
  {
    name: "Artem",
    country: "Russia",
    text: "It simply was the best journey in my life. Tharanga took us from airport and accompanied us through our entire journey over the whole island. He gave us best prices for hotels, always drove secure, was always polite and patient.",
    rating: 5,
    date: "May 2021",
    tripType: "Friends",
  },
  {
    name: "Voyager",
    country: "France",
    text: "We had a very good time. Serious and reliable company. We always felt comfortable. We had a super driver who eventually became our travel companion. The serious and precise manager will also help you in choosing the itinerary. Enjoy Sri Lanka!",
    rating: 5,
    date: "Aug 2023",
    tripType: "Friends",
  },
  {
    name: "Arpan",
    country: "India",
    text: "Excellent arrangements made by Tharanga including hotel, sight seeing, and car. He was very cooperative and friendly during the whole trip. We recommend him.",
    rating: 5,
    date: "Nov 2022",
    tripType: "Couples",
  },
  {
    name: "Philwin",
    country: "Singapore",
    text: "Always helpful! Very safe driver! Very flexible! Very discreet and polite! In principle he is there if you need him and otherwise he's working close by and ready to assist you whenever needed.",
    rating: 5,
    date: "Mar 2022",
    tripType: "Family",
  },
  {
    name: "Karina N",
    country: "Singapore",
    text: "Had a great and relaxing experience in Sri Lanka with Tharanga as a guide throughout the trip. He was knowledgeable and highly adaptable to any new requests. He went out of his way to make detours to find my missing airpod and was very patient and helpful.",
    rating: 5,
    date: "Mar 2022",
    tripType: "Friends",
  },
  {
    name: "Michelle L",
    country: "Singapore",
    text: "Amazing trips to Sri Lanka with trustworthy and safe guide with Tharanga! Have been back to Sri Lanka twice (2017 & 2022). Both times excellent experience around Sri Lanka with Tharanga's good advice and tips. Not only reliable, he's also very flexible with changes to plans.",
    rating: 5,
    date: "Mar 2022",
    tripType: "Couples",
  },
];

const TripAdvisorIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 5.997 5.997 0 0 0 4.04-10.43L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.912C14.756 8.088 13.5 9.834 12.998 11.9c-.503-2.065-1.758-3.812-3.508-4.733A11.392 11.392 0 0 1 12 6.255zm-6.003 2.12a3.997 3.997 0 1 1 0 7.994 3.997 3.997 0 0 1 0-7.994zm12.006 0a3.997 3.997 0 1 1 0 7.994 3.997 3.997 0 0 1 0-7.994zM6 10.376a2 2 0 1 0-.001 3.999A2 2 0 0 0 6 10.376zm12.003 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
  </svg>
);

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* TripAdvisor Badge */}
        <AnimatedSection className="flex justify-center mb-12">
          <a
            href="https://www.tripadvisor.co.uk/Attraction_Review-g297897-d15848526-Reviews-T_and_T_Travels-Negombo_Western_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row items-center gap-4 bg-muted hover:bg-muted/80 rounded-2xl px-6 py-4 sm:px-8 sm:py-5 transition-all shadow-lg hover:shadow-xl border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="text-[#00AF87]">
                <TripAdvisorIcon />
              </div>
              <span className="font-bold text-lg text-foreground">TripAdvisor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-[#00AF87]" />
                ))}
              </div>
              <span className="text-2xl font-bold text-foreground">5.0</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="font-medium">24 Reviews</span>
              <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors" />
            </div>
          </a>
        </AnimatedSection>

        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            What Our <span className="text-primary">Travelers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real reviews from travelers who've experienced the T & T difference.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative bg-muted rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/20" />

            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-6 w-6 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div>
                <p className="font-serif text-xl font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].country} • {testimonials[currentIndex].tripType} • {testimonials[currentIndex].date}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
