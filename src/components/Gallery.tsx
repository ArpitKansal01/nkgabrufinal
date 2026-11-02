"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "../data/weddingData";
import { soundEngine } from "./AudioAmbience";
import { Eye, ChevronLeft, ChevronRight, X, Camera, MapPin } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Frames" },
  { id: "royal", label: "Royal Weddings" },
  { id: "pre-wedding", label: "Pre-Wedding" },
  { id: "haldi-mehendi", label: "Haldi & Mehendi" },
  { id: "candid", label: "Candid Emotions" },
  { id: "films", label: "Cinema Stills" },
] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    soundEngine.playShutter();
    setActiveCategory(cat);
  };

  const openLightbox = (index: number) => {
    soundEngine.playShutter();
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    soundEngine.playShutter();
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex === null) return;
    soundEngine.playShutter();
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const prevImage = () => {
    if (activeLightboxIndex === null) return;
    soundEngine.playShutter();
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  const activePhoto = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section id="gallery" className="relative py-32 px-6 md:px-12 bg-obsidian-900 border-t border-b border-gold-400/15 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              03 // Visual Archive
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              The Fine-Art Gallery
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-champagne/70 max-w-md font-light leading-relaxed">
            Click on any frame to inspect camera optics, shooting location in Faridabad & NCR, and cinematic composition.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                data-cursor="SELECT"
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-gold-400 text-obsidian-950 font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    : "bg-obsidian-850 text-champagne/70 border border-gold-400/20 hover:border-gold-400/50 hover:text-gold-300"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Masonry Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => openLightbox(index)}
                data-cursor="INSPECT"
                className="group relative rounded-2xl overflow-hidden border border-gold-400/20 bg-obsidian-850 cursor-pointer shadow-lg aspect-[4/5]"
              >
                {/* Standard below-the-fold image: uses loading="lazy", omits fetchpriority per modern-web-guidance */}
                <img
                  src={item.imageUrl}
                  alt={`${item.title} - ${item.couple}`}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Hover Details Panel */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-400/40 text-[9px] font-mono text-gold-300 uppercase">
                      {item.location}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gold-400 text-obsidian-950 flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-[10px] font-mono text-gold-400 tracking-wider">
                      {item.lens}
                    </p>
                    <h3 className="font-serif text-2xl text-champagne">
                      {item.title}
                    </h3>
                    <p className="text-xs text-champagne/80 font-light">
                      {item.couple} • {item.venue}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal with Full-Screen Inspection */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Lightbox Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <span className="font-serif text-xl text-gold-gradient">
                  NKGABRU
                </span>
                <span className="text-neutral-600">|</span>
                <span className="text-xs font-mono text-champagne/70">
                  FRAME {activeLightboxIndex! + 1} OF {filteredItems.length}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                data-cursor="CLOSE"
                className="p-2.5 rounded-full bg-obsidian-900 border border-gold-400/30 text-champagne hover:text-gold-300 hover:border-gold-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Central Stage */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={prevImage}
                data-cursor="PREV"
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-obsidian-900/80 backdrop-blur-md border border-gold-400/30 text-champagne hover:text-gold-300 hover:scale-110 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Photo */}
              <motion.div
                key={activePhoto.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[75vh] max-w-[85vw] rounded-2xl overflow-hidden border border-gold-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
              >
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={nextImage}
                data-cursor="NEXT"
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-obsidian-900/80 backdrop-blur-md border border-gold-400/30 text-champagne hover:text-gold-300 hover:scale-110 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Metadata Info */}
            <div className="max-w-3xl mx-auto w-full bg-obsidian-900/90 border border-gold-400/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 backdrop-blur-md">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-xl text-champagne">
                  {activePhoto.title} — {activePhoto.couple}
                </h4>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-champagne/60">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-gold-400" />
                    {activePhoto.venue}, {activePhoto.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Camera className="w-3 h-3 text-gold-400" />
                    {activePhoto.lens}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activePhoto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-obsidian-950 text-[10px] font-mono text-gold-400/90 border border-gold-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
