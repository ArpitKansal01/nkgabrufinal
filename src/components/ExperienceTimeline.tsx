"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Compass, Camera, Sparkles, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "The Vision & Coffee Consultation",
    location: "At Our Faridabad Creative Suite",
    icon: Coffee,
    description:
      "We invite you to our studio on Surajkund Road for freshly brewed coffee. We review your bridal lehengas, jewelry palette, family traditions, and formulate a customized shot list.",
    tags: ["Faridabad Studio Meet", "Wardrobe Synergy", "Timeline Structuring"],
  },
  {
    step: "02",
    title: "Light Mapping & Venue Pre-Scouting",
    location: "Surajkund, Delhi NCR & Beyond",
    icon: Compass,
    description:
      "We survey your wedding venue before the celebrations. We calculate the exact golden hour solar angle, assess mandap lighting, and coordinate with your decor planners.",
    tags: ["Solar Angle Tracking", "Decor Collaboration", "Baraat Route Planning"],
  },
  {
    step: "03",
    title: "The Multi-Crew Cinematic Coverage",
    location: "Unobtrusive Royal Production",
    icon: Camera,
    description:
      "Our directors and senior candid artists glide quietly through your ceremonies. No disruptive strobe flashes or artificial poses—just timeless, heartfelt documentation.",
    tags: ["RED Cinema 4K", "Prime Anamorphic Lenses", "Silent Aerial Drone"],
  },
  {
    step: "04",
    title: "Color Grading & Italian Velvet Heirloom",
    location: "Hand-Delivered To Your Doorstep",
    icon: Sparkles,
    description:
      "Your footage undergoes custom LUT color grading and acoustic sound mastering. Photos are archival-printed and bound in bespoke Italian velvet and full-grain leather.",
    tags: ["4K HDR Color Grade", "72-Hour Sneak Peek", "Italian Bound Heirloom"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative py-32 px-6 md:px-12 bg-obsidian-900 border-t border-b border-gold-400/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              05 // The Atelier Process
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              The NKGABRU Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-champagne/70 max-w-md font-light leading-relaxed">
            From our first conversation at our Faridabad studio to unboxing your velvet wedding album, here is our 4-stage royal bespoke journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-gold-400/10 via-gold-400/40 to-gold-400/10 z-0 pointer-events-none" />

          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative z-10 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-obsidian-850 border border-gold-400/20 hover:border-gold-400/60 transition-all duration-300 shadow-xl group space-y-6"
              >
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl text-gold-400/40 group-hover:text-gold-400 transition-colors font-bold">
                      {item.step}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block">
                      {item.location}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-champagne group-hover:text-gold-300 transition-colors mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-champagne/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gold-400/10">
                  {item.tags.map((tag) => (
                    <div key={tag} className="flex items-center gap-2 text-[10px] font-mono text-champagne/60">
                      <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

