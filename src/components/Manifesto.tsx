"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Heart, Crown, BookOpen } from "lucide-react";

const PILLARS = [
  {
    icon: Crown,
    number: "01",
    title: "Faridabad & NCR Royal Mastery",
    description:
      "Deeply rooted in Faridabad, we possess an intimate knowledge of the region's grandest settings—from the historic Aravali sunset lookouts to Vivanta Surajkund and royal Delhi NCR estates.",
  },
  {
    icon: Film,
    number: "02",
    title: "Anamorphic Cinema In 4K RAW",
    description:
      "Filmed with RED Digital Cinema and vintage anamorphic glass. We deliver the authentic organic texture, wide aspect ratios, and warm skin tones of timeless cinematic romance.",
  },
  {
    icon: Heart,
    number: "03",
    title: "The Invisible Candid Eye",
    description:
      "We believe the most sacred moments are unscripted. We blend seamlessly into your ceremonies to capture the quiet tear of a father, an unspoken whisper, and uninhibited joyous laughter.",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Italian Handcrafted Heirlooms",
    description:
      "Every wedding story is archived in bespoke museum-grade fine art albums. Hand-bound in Italian velvet and archival leather designed to endure for generations of family storytelling.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative py-32 px-6 md:px-12 bg-obsidian-900 border-t border-b border-gold-400/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Top Manifesto Statement with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              01 // The Studio Ethos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-champagne font-normal leading-snug">
              Every Sacred Knot Deserves A Cinematic Monument.
            </h2>
          </div>

          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-champagne/90 leading-[1.3] font-light"
            >
              &ldquo;We don’t believe in stiff posing or fabricated smiles. We exist to preserve the
              <span className="text-gold-gradient italic font-normal"> raw, breathtaking heartbeat </span>
              of two families uniting—the fragrance of marigolds, the sacred fire crackle, and the tear you never knew fell.&rdquo;
            </motion.p>
            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-champagne/50">
              <span className="w-12 h-[1px] bg-gold-400/40" />
              <span>NKGABRU CREATIVE DIRECTORS • FARIDABAD</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with Interactive Hover Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8 }}
                data-cursor="DISCOVER"
                className="group relative p-8 rounded-2xl bg-obsidian-850 border border-gold-400/20 hover:border-gold-400/60 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Subtle top shimmer on hover */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-obsidian-950 transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-champagne/40 group-hover:text-gold-400 transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-champagne group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-champagne/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-8 flex items-center gap-2 text-[10px] font-mono text-gold-400/60 group-hover:text-gold-400 transition-colors uppercase tracking-widest">
                  <span>Learn More</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

