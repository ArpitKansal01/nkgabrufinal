"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS, FAQ_ITEMS } from "../data/weddingData";
import { Star, ChevronDown, Quote, Heart, Award } from "lucide-react";
import { soundEngine } from "./AudioAmbience";

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    soundEngine.playShutter();
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-32 px-6 md:px-12 bg-obsidian-900 border-t border-b border-gold-400/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Testimonials Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              07 // Testimonials & Acclaim
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              Words From Our Couples
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-gold-300">
            <div className="flex text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span>5.0 Star Rating Across 500+ Unions</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-obsidian-850 border border-gold-400/20 hover:border-gold-400/60 transition-all flex flex-col justify-between shadow-xl space-y-6 relative group"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-gold-400/30 group-hover:text-gold-400 transition-colors" />

                <div className="flex text-gold-400 gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                <p className="font-serif text-base sm:text-lg text-champagne/90 leading-relaxed font-light italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-gold-400/10">
                <img
                  src={t.avatar}
                  alt={t.couple}
                  className="w-12 h-12 rounded-full object-cover border border-gold-400/40"
                />
                <div>
                  <h4 className="font-serif text-base text-champagne">
                    {t.couple}
                  </h4>
                  <p className="text-[10px] font-mono text-gold-400/80">
                    {t.venue} • {t.city}
                  </p>
                  <p className="text-[9px] font-mono text-champagne/40">
                    Married {t.weddingDate}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Badges */}
        <div className="py-8 px-6 rounded-2xl bg-obsidian-950 border border-gold-400/20 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-mono text-champagne/60 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gold-400" />
            Vogue Wedding Selects 2025
          </span>
          <span className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-gold-400" />
            WedMeGood Best Cinema Studio NCR
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gold-400" />
            Better Photography Wedding Awards
          </span>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-8 max-w-4xl mx-auto pt-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
              Got Questions?
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-champagne">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-obsidian-850 border border-gold-400/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 text-champagne hover:text-gold-300 transition-colors"
                  >
                    <span className="font-serif text-lg sm:text-xl font-normal">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 text-xs sm:text-sm text-champagne/70 font-light leading-relaxed border-t border-gold-400/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

