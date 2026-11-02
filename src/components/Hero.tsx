"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, Play, ArrowDown, MapPin, Award } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";

const STATS = [
  { value: "520+", label: "Royal Weddings" },
  { value: "12+", label: "Years in Faridabad & NCR" },
  { value: "44", label: "Global Destinations" },
  { value: "100%", label: "Handcrafted Heirlooms" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll parallax
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 800], [0, 200]);
  const yHeroMedia = useTransform(scrollY, [0, 800], [0, 90]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.2]);

  // Mouse tilt parallax for foreground floating cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const offsetX = (clientX / innerWidth - 0.5) * 35;
    const offsetY = (clientY / innerHeight - 0.5) * 35;
    mouseX.set(offsetX);
    mouseY.set(offsetY);
  };

  const scrollToSection = (id: string) => {
    soundEngine.playShutter();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 overflow-hidden bg-obsidian-950"
    >
      {/* Background Cinematic Atmosphere & Light Glows */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-10" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Cinematic Camera Viewfinder HUD Lines */}
      <div className="absolute inset-8 md:inset-12 pointer-events-none z-10 border border-gold-400/15 flex flex-col justify-between p-4">
        <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-gold-400/60 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-semibold">[REC] 4K RAW 120FPS</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline">ANAMORPHIC 2.39:1</span>
          </div>
          <div className="flex items-center gap-3">
            <span>FARIDABAD // 28.4891°N</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline">ISO 100 • 85MM F/1.2</span>
          </div>
        </div>

        {/* Viewfinder Center Crosshair */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-40">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gold-400" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-3 bg-gold-400" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-[1px] bg-gold-400" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-[1px] bg-gold-400" />
        </div>

        <div className="flex justify-between items-center text-[9px] font-mono text-champagne/40 tracking-widest uppercase">
          <span>COLOR: NKG-ROYAL-GOLD-LUT</span>
          <span>NKGABRU STUDIO FARIDABAD</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Text Reveal */}
          <motion.div
            style={{ y: yHeroText, opacity: opacityHero }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 backdrop-blur-md"
            >
              <Award className="w-3.5 h-3.5 text-gold-400" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-medium">
                Vogue Wedding Selects 2025 • Faridabad & Delhi NCR
              </span>
            </motion.div>

            {/* Headline with Staggered Word Reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.3 },
                },
              }}
              className="space-y-1"
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-normal leading-[1.05] tracking-tight">
                <span className="block text-champagne">Capturing The</span>
                <span className="block text-gold-gradient italic font-light">
                  Unspoken Poetry
                </span>
                <span className="block text-champagne">Of Royal Vows.</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base sm:text-lg text-champagne/80 max-w-xl font-light leading-relaxed"
            >
              Faridabad’s foremost wedding cinematography and fine-art photography atelier.
              We craft museum-worthy visual heirlooms for royal weddings across Surajkund,
              Delhi NCR, and palatial destinations worldwide.
            </motion.p>

            {/* Magnetic Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton
                onClick={() => scrollToSection("gallery")}
                dataCursor="EXPLORE"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-semibold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all"
              >
                <span>View Royal Portfolio</span>
                <Sparkles className="w-4 h-4 ml-1" />
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollToSection("showreel")}
                dataCursor="PLAY"
                className="px-7 py-4 rounded-full bg-obsidian-900/90 border border-gold-400/40 text-champagne hover:text-gold-300 font-mono text-xs tracking-widest uppercase backdrop-blur-md hover:border-gold-400 transition-all flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <Play className="w-3 h-3 text-gold-400 fill-gold-400 ml-0.5" />
                </div>
                <span>Play 2026 Reel</span>
              </MagneticButton>
            </motion.div>

            {/* Studio Address Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex items-center gap-2 text-xs font-mono text-champagne/50 pt-2"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Private Appointments at Surajkund Road Studio, Faridabad</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Multi-layer Parallax Photography Stage */}
          <motion.div
            style={{ y: yHeroMedia }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Main Centerpiece Image (LCP Candidate with fetchpriority="high" per modern-web-guidance) */}
            <motion.div
              style={{ x: springX, y: springY }}
              className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border border-gold-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group"
              data-cursor="VIEW"
            >
              {/* Note fetchpriority="high" for LCP image */}
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85"
                alt="Devika in Royal Sabyasachi Lehenga at Surajkund Palace, Faridabad"
                fetchPriority="high"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-[9px] font-mono tracking-widest text-gold-300 uppercase">
                  Featured Bride • Surajkund Palace
                </span>
                <p className="font-serif text-xl text-champagne font-normal">
                  Devika & Ranveer
                </p>
                <p className="text-[10px] font-mono text-champagne/60 tracking-wider">
                  Leica SL2-S • 50mm f/1.4 Summilux
                </p>
              </div>
            </motion.div>

            {/* Floating Satellite Card 1 - Sacred Fire (Parallax) */}
            <motion.div
              style={{
                x: useTransform(springX, (val) => -val * 1.4),
                y: useTransform(springY, (val) => -val * 1.4),
              }}
              className="absolute -top-8 -right-6 hidden sm:block w-44 aspect-[4/3] rounded-xl overflow-hidden border border-gold-400/40 shadow-2xl backdrop-blur-md bg-obsidian-900/60 p-1"
              data-cursor="PHERAS"
            >
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80"
                alt="Sacred Agni Pheras"
                loading="lazy"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-x-2 bottom-2 bg-obsidian-950/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-mono text-gold-300 text-center uppercase">
                Midnight Pheras
              </div>
            </motion.div>

            {/* Floating Satellite Card 2 - Candid Couple Moment (Parallax) */}
            <motion.div
              style={{
                x: useTransform(springX, (val) => val * 1.8),
                y: useTransform(springY, (val) => val * 1.8),
              }}
              className="absolute -bottom-8 -left-6 hidden sm:block w-48 aspect-[4/3] rounded-xl overflow-hidden border border-gold-400/40 shadow-2xl backdrop-blur-md bg-obsidian-900/60 p-1"
              data-cursor="EMOTION"
            >
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=80"
                alt="Candid Wedding Couple Laugh"
                loading="lazy"
                width={200}
                height={150}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-x-2 bottom-2 bg-obsidian-950/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] font-mono text-gold-300 text-center uppercase">
                Aravali Sunset Shoot
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Stats & Scroll Prompt */}
      <div className="relative z-20 max-w-7xl mx-auto w-full pt-8 border-t border-gold-400/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="space-y-1"
            >
              <div className="font-serif text-3xl sm:text-4xl text-gold-gradient font-light">
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-champagne/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => scrollToSection("manifesto")}
            className="group flex flex-col items-center gap-2 text-champagne/40 hover:text-gold-400 transition-colors"
          >
            <span className="text-[9px] font-mono uppercase tracking-[0.3em]">
              Scroll To Discover
            </span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-gold-400" />
            </motion.div>
          </button>
        </div>
      </div>
    </section>
  );
}
