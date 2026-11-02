"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PACKAGES } from "../data/weddingData";
import { Check, Sparkles, ArrowRight, ShieldCheck, Calculator } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";

export default function Packages() {
  // Interactive Custom Estimator State
  const [days, setDays] = useState(2);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [includePreWedding, setIncludePreWedding] = useState(true);
  const [includeLeatherAlbum, setIncludeLeatherAlbum] = useState(true);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = days === 1 ? 120000 : days === 2 ? 210000 : days === 3 ? 320000 : 420000;
    if (includeDrone) base += 35000;
    if (includePreWedding) base += 45000;
    if (includeLeatherAlbum) base += 30000;
    return base;
  };

  const handleSelectPackage = (pkgName: string) => {
    soundEngine.playShutter();
    const contactElem = document.getElementById("studio");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      const selectElem = document.getElementById("package-select") as HTMLSelectElement | null;
      if (selectElem) {
        selectElem.value = pkgName;
      }
    }
  };

  return (
    <section id="packages" className="relative py-32 px-6 md:px-12 bg-obsidian-950 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold-400/20">
          <div className="space-y-3">
            <span className="text-[11px] font-mono text-gold-400 tracking-[0.3em] uppercase block">
              06 // Curated Investment
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-champagne font-light">
              Collections & Bespoke Tiers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-champagne/70 max-w-md font-light leading-relaxed">
            Transparent, all-inclusive collections for couples who hold visual art, authentic emotion, and family legacy in the highest esteem.
          </p>
        </div>

        {/* 3 Main Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.recommended
                  ? "bg-obsidian-900 border-2 border-gold-400 shadow-[0_0_50px_rgba(212,175,55,0.2)] lg:-translate-y-4"
                  : "bg-obsidian-900/60 border border-gold-400/20 hover:border-gold-400/50"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-400 text-obsidian-950 text-[10px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Chosen by Faridabad Couples</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-champagne">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-champagne/60 font-light mt-1">
                    {pkg.subtitle}
                  </p>
                </div>

                <div className="py-4 border-y border-gold-400/15">
                  <div className="font-serif text-4xl sm:text-5xl text-gold-gradient font-light">
                    {pkg.price}
                  </div>
                  <div className="text-[10px] font-mono text-champagne/50 uppercase tracking-wider mt-1">
                    Inclusive of Master Color Grading & 4K Cinema
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="font-mono text-gold-300 uppercase tracking-wider text-[11px]">
                    Ideal Coverage:
                  </p>
                  <p className="text-champagne/80 font-light">{pkg.idealFor}</p>
                </div>

                <div className="space-y-2 text-xs">
                  <p className="font-mono text-gold-300 uppercase tracking-wider text-[11px]">
                    Dedicated Team:
                  </p>
                  <p className="text-champagne/80 font-light">{pkg.crew}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="font-mono text-gold-400 uppercase tracking-wider text-[11px]">
                    Master Deliverables:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.deliverables.map((d, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-champagne/80 font-light">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <MagneticButton
                  onClick={() => handleSelectPackage(pkg.name)}
                  dataCursor="RESERVE"
                  className={`w-full py-4 rounded-full text-xs font-semibold uppercase tracking-widest transition-all ${
                    pkg.recommended
                      ? "bg-gold-400 text-obsidian-950 shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:bg-gold-300"
                      : "bg-obsidian-850 text-gold-300 border border-gold-400/30 hover:border-gold-400 hover:text-obsidian-950 hover:bg-gold-400"
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Bespoke Package Estimator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-obsidian-900 border border-gold-400/30 p-8 sm:p-12 shadow-2xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gold-400/20 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-champagne">
                  Interactive Bespoke Wedding Estimator
                </h3>
                <p className="text-xs text-champagne/60 font-light">
                  Tailor your exact coverage days and artisanal add-ons for an instant estimate.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              <span>Direct Faridabad Studio Pricing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6">
              {/* Celebration Days Slider / Selector */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-champagne/70 uppercase">Celebration Duration:</span>
                  <span className="text-gold-300 font-bold">{days} Days of Coverage</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`py-2 rounded-xl text-xs font-mono tracking-wider transition-colors ${
                        days === d
                          ? "bg-gold-400 text-obsidian-950 font-bold"
                          : "bg-obsidian-850 text-champagne/70 border border-gold-400/20"
                      }`}
                    >
                      {d} {d === 1 ? "Day" : d === 4 ? "4+ Days" : "Days"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons Checklist */}
              <div className="space-y-3">
                <p className="text-xs font-mono text-champagne/70 uppercase">
                  Artisanal Add-ons:
                </p>

                <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-850 border border-gold-400/15 cursor-pointer hover:border-gold-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeDrone}
                      onChange={(e) => setIncludeDrone(e.target.checked)}
                      className="accent-gold-400 w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-xs text-champagne">Aerial 4K Cinema Drone Unit</span>
                  </div>
                  <span className="text-xs font-mono text-gold-400">+₹35,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-850 border border-gold-400/15 cursor-pointer hover:border-gold-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includePreWedding}
                      onChange={(e) => setIncludePreWedding(e.target.checked)}
                      className="accent-gold-400 w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-xs text-champagne">Aravali Sunset Pre-Wedding Cine Shoot</span>
                  </div>
                  <span className="text-xs font-mono text-gold-400">+₹45,000</span>
                </label>

                <label className="flex items-center justify-between p-3 rounded-xl bg-obsidian-850 border border-gold-400/15 cursor-pointer hover:border-gold-400/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeLeatherAlbum}
                      onChange={(e) => setIncludeLeatherAlbum(e.target.checked)}
                      className="accent-gold-400 w-4 h-4 rounded cursor-pointer"
                    />
                    <span className="text-xs text-champagne">Hand-Stitched Italian Leather Album</span>
                  </div>
                  <span className="text-xs font-mono text-gold-400">+₹30,000</span>
                </label>
              </div>
            </div>

            {/* Live Calculated Output Box */}
            <div className="p-8 rounded-2xl bg-obsidian-950 border border-gold-400/30 flex flex-col items-center justify-center text-center space-y-4 shadow-xl">
              <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest">
                Estimated Bespoke Investment
              </span>
              <div className="font-serif text-5xl sm:text-6xl text-gold-gradient font-light">
                ₹{calculateEstimate().toLocaleString("en-IN")}
              </div>
              <p className="text-xs text-champagne/60 max-w-xs font-light">
                Includes dedicated creative directors, 4K RED/Sony cinema equipment, and private online gallery.
              </p>

              <div className="pt-2 w-full">
                <MagneticButton
                  onClick={() => handleSelectPackage(`Bespoke Estimate (₹${calculateEstimate().toLocaleString("en-IN")})`)}
                  dataCursor="LOCK"
                  className="w-full py-3.5 rounded-full bg-gold-400 text-obsidian-950 text-xs font-semibold uppercase tracking-widest hover:bg-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all"
                >
                  Lock In This Configuration
                </MagneticButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
