"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Film } from "lucide-react";
import { soundEngine } from "./AudioAmbience";

type AspectRatio = "cinema" | "standard" | "vertical";
type ColorProfile = "royal-gold" | "monochrome" | "aravali-warmth";

export default function FilmShowreel() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [aspect, setAspect] = useState<AspectRatio>("cinema");
  const [colorProfile, setColorProfile] = useState<ColorProfile>("royal-gold");
  const [progress, setProgress] = useState(38);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    soundEngine.playShutter();
    setIsPlaying(!isPlaying);
  };

  const handleAspectChange = (newAspect: AspectRatio) => {
    soundEngine.playShutter();
    setAspect(newAspect);
  };

  const handleColorChange = (profile: ColorProfile) => {
    soundEngine.playShutter();
    setColorProfile(profile);
  };

  return (
    <section id="showreel" className="relative py-32 px-6 md:px-12 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              04 // Anamorphic Cinema
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              The 2026 Showreel
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* Aspect Switcher Buttons */}
            <div className="flex items-center p-1 rounded-xl bg-obsidian-900 border border-gold-400/20 text-xs font-mono">
              <button
                onClick={() => handleAspectChange("cinema")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  aspect === "cinema" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60 hover:text-champagne"
                }`}
              >
                2.39:1 Cinema
              </button>
              <button
                onClick={() => handleAspectChange("standard")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  aspect === "standard" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60 hover:text-champagne"
                }`}
              >
                16:9 4K
              </button>
              <button
                onClick={() => handleAspectChange("vertical")}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  aspect === "vertical" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60 hover:text-champagne"
                }`}
              >
                9:16 Reel
              </button>
            </div>
          </div>
        </div>

        {/* Video Stage Frame */}
        <div className="relative flex justify-center items-center">
          <motion.div
            layout
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`relative rounded-3xl overflow-hidden border border-gold-400/40 shadow-[0_25px_80px_rgba(0,0,0,0.95)] bg-obsidian-900 transition-all ${
              aspect === "cinema"
                ? "w-full aspect-[21/9]"
                : aspect === "standard"
                ? "w-full max-w-5xl aspect-[16/9]"
                : "w-full max-w-sm aspect-[9/16]"
            }`}
          >
            {/* Background Simulated Film Footage */}
            <div
              className={`absolute inset-0 w-full h-full transition-all duration-700 ${
                colorProfile === "monochrome"
                  ? "grayscale contrast-125 brightness-95"
                  : colorProfile === "aravali-warmth"
                  ? "sepia-[0.35] contrast-110 saturate-125"
                  : "saturate-115 contrast-105"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
                alt="Cinema Showreel Still"
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  isPlaying ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-obsidian-950/40" />
            </div>

            {/* Viewfinder Overlays & Film Grain */}
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

            {/* Top Bar inside Video Viewfinder */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20 pointer-events-none text-xs font-mono text-champagne/80">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-gold-400/30 text-gold-300">
                  <Film className="w-3.5 h-3.5" />
                  <span>RED V-RAPTOR 8K VV</span>
                </span>
                <span className="hidden sm:inline px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  COOKE ANAMORPHIC /i
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-red-400 font-bold">REC 02:44:18</span>
              </div>
            </div>

            {/* Center Big Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                data-cursor={isPlaying ? "PAUSE" : "PLAY"}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-400/90 text-obsidian-950 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.6)] backdrop-blur-md border-2 border-white/40"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 fill-obsidian-950" />
                ) : (
                  <Play className="w-8 h-8 fill-obsidian-950 ml-1" />
                )}
              </motion.button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
              {/* Progress Slider */}
              <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden relative cursor-pointer">
                <motion.div
                  className="bg-gold-400 h-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-champagne/80 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <span>01:14 / 03:45</span>
                  <span className="text-gold-400 uppercase tracking-widest hidden sm:inline">
                    Faridabad Royal Reel Series
                  </span>
                </div>

                {/* Color Profile Switcher */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-champagne/50 hidden md:inline">GRADE:</span>
                  <button
                    onClick={() => handleColorChange("royal-gold")}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                      colorProfile === "royal-gold" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60"
                    }`}
                  >
                    Royal Gold
                  </button>
                  <button
                    onClick={() => handleColorChange("monochrome")}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                      colorProfile === "monochrome" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60"
                    }`}
                  >
                    Noir Film
                  </button>
                  <button
                    onClick={() => handleColorChange("aravali-warmth")}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase ${
                      colorProfile === "aravali-warmth" ? "bg-gold-400 text-obsidian-950 font-bold" : "text-champagne/60"
                    }`}
                  >
                    Aravali Sunset
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
