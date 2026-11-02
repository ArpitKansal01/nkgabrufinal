"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { STUDIO_INFO, PACKAGES } from "../data/weddingData";
import { MapPin, Phone, Mail, Clock, MessageSquare, Sparkles, CheckCircle2 } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    email: "",
    phone: "",
    date: "",
    city: "Faridabad",
    packageType: "The Grand Royale Heirloom",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketRef, setTicketRef] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playShutter();

    // Generate unique reference
    const refCode = "NKG-" + Math.floor(100000 + Math.random() * 900000);
    setTicketRef(refCode);
    setIsSubmitted(true);

    // Trigger golden celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F3E5AB", "#AA771C", "#FFFFFF"],
      });
    } catch {
      // pass
    }
  };

  const handleWhatsApp = () => {
    soundEngine.playShutter();
    const text = encodeURIComponent(
      `Hello NKGABRU Studio! I would like to inquire about wedding photography & cinematography in Faridabad/NCR for my wedding.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <section id="studio" className="relative py-32 px-6 md:px-12 bg-obsidian-950 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
            08 // Initiate The Heirloom
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
            Visit Our Faridabad Atelier
          </h2>
          <p className="text-xs sm:text-sm text-champagne/70 font-light">
            Due to our bespoke multi-camera production standard, we accept only 25-30 weddings annually. Let us connect to discuss your date.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Information & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-obsidian-900 border border-gold-400/30 space-y-6 shadow-xl">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                  Flagship Creative Suite
                </span>
                <h3 className="font-serif text-2xl text-champagne">
                  NKGABRU Studio Faridabad
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono text-champagne/80">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-champagne">Surajkund Studio</p>
                    <p className="text-champagne/60 text-[11px] leading-relaxed mt-0.5">
                      {STUDIO_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-champagne">Private Appointments</p>
                    <p className="text-champagne/60 text-[11px]">Tue – Sun: 11:00 AM – 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-champagne">Direct Concierge</p>
                    <a href={`tel:${STUDIO_INFO.phone}`} className="text-gold-300 hover:underline text-[11px]">
                      {STUDIO_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-champagne">Electronic Correspondence</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="text-gold-300 hover:underline text-[11px]">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Connect */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  data-cursor="WHATSAPP"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/60 transition-colors text-xs font-mono tracking-wider flex items-center justify-center gap-2 uppercase"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Instant WhatsApp Concierge</span>
                </button>
              </div>
            </div>

            {/* GPS & Landmark Card */}
            <div className="p-6 rounded-2xl bg-obsidian-900/50 border border-gold-400/20 text-xs font-mono space-y-2">
              <div className="flex justify-between text-champagne/60">
                <span>GPS COORDINATES</span>
                <span className="text-gold-400">{STUDIO_INFO.coordinates}</span>
              </div>
              <div className="flex justify-between text-champagne/60">
                <span>PROXIMITY</span>
                <span>5 Mins from Vivanta Surajkund Palace</span>
              </div>
              <div className="flex justify-between text-champagne/60">
                <span>DELHI NCR BORDER</span>
                <span>South Delhi 15 Mins • Gurugram 35 Mins</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-obsidian-900 border border-gold-400/30 shadow-2xl relative">
              <h3 className="font-serif text-2xl sm:text-3xl text-champagne mb-2">
                Inquire For Your Celebration
              </h3>
              <p className="text-xs text-champagne/60 font-light mb-8">
                Share your dates and vision. We will confirm date availability and prepare our moodboard deck within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ranveer Singhal"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Partner's Name */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Partner’s Name
                    </label>
                    <input
                      type="text"
                      name="partnerName"
                      placeholder="e.g. Devika Sharma"
                      value={formData.partnerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="ranveer@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98112 XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Wedding Date */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Wedding Dates / Month *
                    </label>
                    <input
                      type="text"
                      name="date"
                      required
                      placeholder="e.g. 14–16 December 2026"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Venue City */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                      Venue / City Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Vivanta Surajkund, Faridabad"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Package Select */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                    Preferred Collection
                  </label>
                  <select
                    id="package-select"
                    name="packageType"
                    value={formData.packageType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs focus:outline-none transition-colors"
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={pkg.name} className="bg-obsidian-900 text-champagne">
                        {pkg.name} — ({pkg.price})
                      </option>
                    ))}
                    <option value="Custom Bespoke Estimate" className="bg-obsidian-900 text-champagne">
                      Custom Bespoke Multi-Day Estimate
                    </option>
                  </select>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-[11px] font-mono text-champagne/70 uppercase tracking-wider block">
                    Tell Us About Your Story & Vision
                  </label>
                  <textarea
                    rows={3}
                    name="notes"
                    placeholder="Tell us about the vibe, number of guests, specific ceremonies, or aesthetic preferences..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-gold-400/20 focus:border-gold-400 text-champagne text-xs placeholder:text-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <MagneticButton
                  type="submit"
                  dataCursor="SUBMIT"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  <span>Request Date Availability & Portfolio Deck</span>
                </MagneticButton>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-obsidian-950/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="max-w-md w-full rounded-3xl bg-obsidian-900 border border-gold-400/40 p-8 text-center space-y-6 shadow-2xl"
            >
              <div className="w-16 h-16 rounded-full bg-gold-400/20 border border-gold-400/50 flex items-center justify-center mx-auto text-gold-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                  Reservation Inquired
                </span>
                <h3 className="font-serif text-3xl text-champagne">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs text-champagne/70 font-light leading-relaxed">
                  Our Faridabad creative director has received your wedding details for {formData.date}. We are checking calendar holds and will call you shortly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-gold-400/20 text-xs font-mono space-y-1">
                <p className="text-champagne/50">CONFIRMATION CODE</p>
                <p className="text-gold-300 font-bold text-lg">{ticketRef}</p>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 rounded-xl bg-gold-400 text-obsidian-950 text-xs font-semibold uppercase tracking-wider hover:bg-gold-300"
              >
                Return to Portfolio
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
