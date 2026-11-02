"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { soundEngine } from "./AudioAmbience";
import { Sparkles } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const STATUS_MESSAGES = [
  "INITIALIZING OPTICAL SENSORS",
  "CAPTURING GOLDEN HOUR AT SURAJKUND",
  "HARVESTING SACRED FIRE & ROYAL PHERAS",
  "COLOR GRADING 4K 12-BIT LOG CINEMA",
  "WELCOME TO NKGABRU STUDIO • FARIDABAD",
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Increment progress with realistic cinematic pacing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        // Random natural increments
        const step = Math.floor(Math.random() * 8) + 3;
        const nextVal = Math.min(100, prev + step);

        // Update status based on milestone
        const msgIdx = Math.min(
          STATUS_MESSAGES.length - 1,
          Math.floor((nextVal / 100) * STATUS_MESSAGES.length)
        );
        setStatusIndex(msgIdx);

        return nextVal;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    soundEngine.playShutter();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-obsidian-950 text-champagne select-none overflow-hidden"
        >
          {/* Subtle background grain & radial luxury gradient */}
          <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
          <div className="absolute inset-0 bg-grain pointer-events-none" />

          {/* Cinematic Top & Bottom Bars Opening on Exit */}
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-x-0 top-0 h-1/2 bg-obsidian-950 origin-top pointer-events-none z-10 border-b border-gold-400/20"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-obsidian-950 origin-bottom pointer-events-none z-10 border-t border-gold-400/20"
          />

          {/* Central Monogram and Aperture Visual */}
          <div className="relative z-20 flex flex-col items-center max-w-md w-full px-6 text-center">
            {/* Spinning Aperture Blades Ring */}
            <div className="relative w-32 h-32 mb-8 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-gold-400/20 border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-gold-400/30"
              />

              {/* Shutter Blade SVG */}
              <svg className="w-16 h-16 text-gold-400 opacity-90" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
                <path d="M50 4 A46 46 0 0 1 89 27 L50 50 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M89 27 A46 46 0 0 1 96 50 L50 50 Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M96 50 A46 46 0 0 1 73 89 L50 50 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M73 89 A46 46 0 0 1 50 96 L50 50 Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M50 96 A46 46 0 0 1 11 73 L50 50 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M11 73 A46 46 0 0 1 4 50 L50 50 Z" fill="currentColor" fillOpacity="0.25" />
                <path d="M4 50 A46 46 0 0 1 27 11 L50 50 Z" fill="currentColor" fillOpacity="0.15" />
                <circle cx="50" cy="50" r="14" fill="#060709" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="4" fill="#D4AF37" />
              </svg>

              <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-obsidian-900 border border-gold-400/40 text-[9px] font-mono tracking-widest text-gold-300">
                85MM F/1.2
              </span>
            </div>

            {/* Brand Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-1 mb-8"
            >
              <h1 className="font-serif text-3xl md:text-4xl tracking-[0.25em] text-gold-gradient font-light uppercase">
                NKGABRU
              </h1>
              <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] uppercase text-champagne/70">
                Studio • Faridabad & Worldwide
              </p>
            </motion.div>

            {/* Progress Bar & Percentage */}
            <div className="w-full max-w-xs space-y-3 mb-6">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-gold-400/80">REEL BUFFER</span>
                <span className="text-gold-300 font-bold">{progress}%</span>
              </div>

              <div className="h-[2px] w-full bg-obsidian-800 rounded-full overflow-hidden p-0 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-amber-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Status Message */}
              <div className="h-6 overflow-hidden flex items-center justify-center">
                <motion.p
                  key={statusIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-[10px] font-mono text-champagne/60 tracking-wider uppercase truncate"
                >
                  {STATUS_MESSAGES[statusIndex]}
                </motion.p>
              </div>
            </div>

            {/* Action CTA when ready or auto countdown */}
            <div className="min-h-[50px] flex items-center justify-center">
              {isReady ? (
                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleEnter}
                  data-cursor="ENTER"
                  className="group relative px-7 py-3 rounded-full bg-gold-400 text-obsidian-950 font-sans font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-gold-300 shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Enter Experience</span>
                  <span className="text-[10px] opacity-70">➔</span>
                </motion.button>
              ) : (
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest animate-pulse">
                  Calibrating 4K Lens Cinema...
                </span>
              )}
            </div>

            {/* Studio Location Coordinates */}
            <div className="mt-8 text-[9px] font-mono text-neutral-600 tracking-widest uppercase">
              FARIDABAD (28.4891° N, 77.2981° E) • VOGUE SELECTS
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
