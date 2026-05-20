import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, User, Calendar, Users, Globe, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const WHATSAPP_NUMBER = "94750307030"; // +94 75 030 7030

const contactInfo = [
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    details: ["+94 75 030 7030"],
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@tandttravels.com"],
    href: "mailto:info@tandttravels.com",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["No - 332 Munidasa Kumarathunge Rd", "Seeduwa 11410, Sri Lanka"],
    href: "https://maps.google.com/?q=Seeduwa+Sri+Lanka",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon – Sat: 9:00 AM – 6:00 PM", "Sunday: By Appointment"],
    color: "from-purple-500 to-pink-500",
  },
];

const tourTypes = [
  "Airport Transfer",
  "Customized Tour",
  "Sightseeing Tour",
  "Adventure Travel",
  "Group Tour",
  "Complete Package",
  "Other",
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    tourType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build a detailed WhatsApp message with all form details
    const lines = [
      "🌴 *New Inquiry – T & T Travels*",
      "",
      `👤 *Name:* ${formData.name}`,
      formData.email ? `📧 *Email:* ${formData.email}` : null,
      formData.phone ? `📞 *Phone:* ${formData.phone}` : null,
      formData.destination ? `📍 *Destination / Interests:* ${formData.destination}` : null,
      formData.travelDate ? `📅 *Travel Date:* ${formData.travelDate}` : null,
      formData.travelers ? `👥 *Number of Travelers:* ${formData.travelers}` : null,
      formData.tourType ? `🗺️ *Tour Type:* ${formData.tourType}` : null,
      formData.message ? `\n💬 *Message:*\n${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const encodedMessage = encodeURIComponent(lines);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <span className="inline-block bg-primary/10 text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-5 leading-tight">
            Let's Plan Your{" "}
            <span className="text-primary relative">
              Dream Journey
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5.5C47 1.5 100 1 199 5.5" stroke="hsl(42 87% 55%)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Fill in the form and we'll reply via WhatsApp instantly — with your full inquiry pre-loaded.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12 items-start">
          {/* Contact Info Cards */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-4">
            <StaggerContainer className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const card = (
                  <div
                    key={index}
                    className="group relative bg-card rounded-2xl p-5 shadow-md border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient corner accent */}
                    <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${info.color} opacity-10 rounded-bl-full`} />

                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-md`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-foreground text-sm mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                      {info.href && (
                        <ChevronRight className="flex-shrink-0 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto mt-1" />
                      )}
                    </div>
                  </div>
                );

                return (
                  <StaggerItem key={index}>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                        {card}
                      </a>
                    ) : card}
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* WhatsApp Direct Button */}
            <AnimatedSection delay={0.3}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello! I'm interested in booking a tour with T & T Travels. Could you please help me?")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L0 24l6.335-1.502A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.856 0-3.598-.484-5.115-1.335L3 21.5l.878-3.795A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Chat Directly on WhatsApp
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection delay={0.4}>
              <div className="rounded-2xl overflow-hidden shadow-md border border-border h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.9!2d79.8777!3d7.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6f4c8d5b%3A0x9e0c1c1c1c1c1c1c!2sNo%20332%20Munidasa%20Kumarathunge%20Rd%2C%20Seeduwa%2011410!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="T & T Travels Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </AnimatedSection>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="right" className="lg:col-span-3">
            <div className="bg-card rounded-3xl shadow-xl border border-border overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-primary to-amber-500 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">Send us a Message</h3>
                    <p className="text-white/80 text-sm">We'll reply on WhatsApp instantly</p>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-primary" />
                        Your Name <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Smith"
                      required
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <Phone className="h-3.5 w-3.5 text-primary" />
                        Phone / WhatsApp
                      </span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    <span className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      Email Address
                    </span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                  />
                </div>

                {/* Destination & Travel Date Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="destination" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <Globe className="h-3.5 w-3.5 text-primary" />
                        Destination / Interests
                      </span>
                    </label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g. Sigiriya, Kandy, Beaches"
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="travelDate" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        Travel Date
                      </span>
                    </label>
                    <Input
                      id="travelDate"
                      name="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                    />
                  </div>
                </div>

                {/* Number of Travelers & Tour Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="travelers" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        Number of Travelers
                      </span>
                    </label>
                    <Input
                      id="travelers"
                      name="travelers"
                      type="number"
                      min="1"
                      value={formData.travelers}
                      onChange={handleChange}
                      placeholder="e.g. 2"
                      className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="tourType" className="block text-sm font-semibold text-foreground mb-2">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        Tour Type
                      </span>
                    </label>
                    <select
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full h-11 px-3 rounded-md border border-border bg-muted/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select a tour type</option>
                      {tourTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans, special requirements, or any questions you have..."
                    rows={4}
                    required
                    className="bg-muted/50 border-border focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 gap-3"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.849L0 24l6.335-1.502A11.949 11.949 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.856 0-3.598-.484-5.115-1.335L3 21.5l.878-3.795A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                  Send via WhatsApp
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Clicking "Send via WhatsApp" will open WhatsApp with your details pre-filled. We typically respond within minutes.
                </p>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
