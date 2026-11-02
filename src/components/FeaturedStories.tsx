"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_STORIES, WeddingStory } from "../data/weddingData";
import { ArrowUpRight, Calendar, MapPin, X, CheckCircle2 } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";

export default function FeaturedStories() {
  const [selectedStory, setSelectedStory] = useState<WeddingStory | null>(null);

  const handleOpenStory = (story: WeddingStory) => {
    soundEngine.playShutter();
    setSelectedStory(story);
  };

  const handleCloseStory = () => {
    soundEngine.playShutter();
    setSelectedStory(null);
  };

  return (
    <section id="stories" className="relative py-32 px-6 md:px-12 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              02 // Curated Chronicles
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              Featured Royal Unions
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-champagne/70 max-w-md font-light leading-relaxed">
            A window into recent celebrations captured by our Faridabad atelier across the Aravalis, Delhi NCR, and heritage palaces.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-24">
          {WEDDING_STORIES.map((story, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Showcase Card */}
                <div
                  className={`relative ${
                    isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
                  }`}
                >
                  <div
                    onClick={() => handleOpenStory(story)}
                    data-cursor="STORY"
                    className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-gold-400/25 group cursor-pointer shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                  >
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                    {/* Floating Venue Tag */}
                    <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-400/30 text-[10px] font-mono text-gold-300">
                      <MapPin className="w-3 h-3 text-gold-400" />
                      <span>{story.venue}, {story.city}</span>
                    </div>

                    {/* Bottom CTA overlay */}
                    <div className="absolute bottom-6 right-6">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400 text-obsidian-950 text-xs font-semibold uppercase tracking-wider shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span>Read Chronicle</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editorial Narrative Details */}
                <div
                  className={`space-y-6 ${
                    isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4 text-xs font-mono text-gold-400/80">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      {story.date}
                    </span>
                    <span>•</span>
                    <span>{story.stats.ceremonies} Ceremonies</span>
                    <span>•</span>
                    <span>{story.stats.filmMinutes} Min 4K Film</span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-champagne font-light leading-snug">
                    {story.couple}
                  </h3>

                  <p className="font-serif text-lg text-gold-300/90 italic font-light">
                    &ldquo;{story.tagline}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-champagne/70 font-light leading-relaxed">
                    {story.summary}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {story.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-full bg-obsidian-850 border border-gold-400/20 text-[10px] font-mono text-champagne/70"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4">
                    <MagneticButton
                      onClick={() => handleOpenStory(story)}
                      dataCursor="VIEW"
                      className="px-6 py-3 rounded-full bg-obsidian-900 border border-gold-400/40 text-gold-300 hover:text-obsidian-950 hover:bg-gold-400 text-xs font-mono tracking-widest uppercase transition-all duration-300"
                    >
                      <span>Explore Chronicle & Gallery</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </MagneticButton>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Story Detail Lightbox / Drawer Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-obsidian-950/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl bg-obsidian-900 border border-gold-400/30 p-6 sm:p-10 shadow-2xl text-champagne space-y-8"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseStory}
                data-cursor="CLOSE"
                className="absolute top-6 right-6 p-2 rounded-full bg-obsidian-800 border border-gold-400/30 hover:border-gold-400 text-champagne hover:text-gold-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                  Featured Chronicle • {selectedStory.city}
                </span>
                <h3 className="font-serif text-3xl sm:text-5xl text-champagne">
                  {selectedStory.couple}
                </h3>
                <p className="font-serif text-lg sm:text-xl text-gold-300/90 italic">
                  {selectedStory.title}
                </p>
              </div>

              {/* Cover Image in Modal */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gold-400/30">
                <img
                  src={selectedStory.coverImage}
                  alt={selectedStory.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Story Narrative & Quote */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gold-400/15">
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400">
                    The Wedding Chronicle
                  </h4>
                  <p className="text-sm text-champagne/80 font-light leading-relaxed">
                    {selectedStory.summary}
                  </p>
                  <div className="p-4 rounded-xl bg-obsidian-950 border border-gold-400/20 italic font-serif text-base text-gold-200/90">
                    &ldquo;{selectedStory.vowsQuote}&rdquo;
                  </div>
                </div>

                <div className="space-y-4 bg-obsidian-950/60 p-5 rounded-2xl border border-gold-400/15">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400">
                    Master Deliverables
                  </h4>
                  <ul className="space-y-2 text-xs font-mono text-champagne/70">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>{selectedStory.stats.photosDelivered}+ Fine Art Images</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>{selectedStory.stats.filmMinutes} Min Feature Film 4K</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>{selectedStory.stats.ceremonies} Grand Ceremonies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      <span>Hand-Bound Velvet Album</span>
                    </li>
                  </ul>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        handleCloseStory();
                        const elem = document.getElementById("studio");
                        if (elem) elem.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="w-full py-2.5 rounded-lg bg-gold-400 text-obsidian-950 font-semibold text-xs uppercase tracking-wider"
                    >
                      Inquire Similar Wedding
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
