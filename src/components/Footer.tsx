"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Sparkles } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const [istTime, setIstTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setIstTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEngine.playShutter();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-obsidian-950 text-champagne pt-20 pb-12 px-6 md:px-12 border-t border-gold-400/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Big Brand Monogram Banner */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-gold-400/15">
          <div className="space-y-2">
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] text-gold-gradient font-light uppercase">
              NKGABRU
            </h2>
            <p className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-champagne/60">
              Studio • Faridabad & Worldwide Destinations
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-obsidian-900 border border-gold-400/30 text-xs font-mono text-gold-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>FARIDABAD TIME: {istTime || "17:56:00"} IST</span>
            </div>
            <p className="text-[11px] font-mono text-champagne/50">
              Accepting 25 bespoke commissions per season
            </p>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-mono">
          {/* Col 1 */}
          <div className="space-y-4">
            <p className="text-gold-400 uppercase tracking-widest text-[11px]">
              Studio Atelier
            </p>
            <p className="text-champagne/70 leading-relaxed font-light">
              Suite 4, Heritage Arcade<br />
              Surajkund Road, Charmwood Village<br />
              Faridabad, Haryana 121009<br />
              Delhi NCR, India
            </p>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <p className="text-gold-400 uppercase tracking-widest text-[11px]">
              Signature Regions
            </p>
            <ul className="space-y-2 text-champagne/70 font-light">
              <li>Faridabad & Surajkund Heritage</li>
              <li>Delhi NCR Royal Farmhouses</li>
              <li>Jaipur & Udaipur Palace Destination</li>
              <li>Goa & International Venues</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <p className="text-gold-400 uppercase tracking-widest text-[11px]">
              Social & Film Archive
            </p>
            <ul className="space-y-2 text-champagne/70 font-light">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <InstagramIcon className="w-3.5 h-3.5 text-gold-400" />
                  <span>@nkgabrustudio (Reels)</span>
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <YoutubeIcon className="w-3.5 h-3.5 text-gold-400" />
                  <span>NKGABRU Cinema 4K</span>
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Private Gallery Portal</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Back to top */}
          <div className="space-y-4 flex flex-col justify-between">
            <div>
              <p className="text-gold-400 uppercase tracking-widest text-[11px] mb-2">
                Elevate Perspective
              </p>
              <p className="text-champagne/60 text-[11px] leading-relaxed">
                Every frame hand-crafted to become an indelible royal heirloom.
              </p>
            </div>

            <div>
              <MagneticButton
                onClick={scrollToTop}
                dataCursor="TOP"
                className="p-4 rounded-full bg-obsidian-900 border border-gold-400/40 text-gold-300 hover:text-obsidian-950 hover:bg-gold-400 transition-all duration-300 shadow-xl"
              >
                <ArrowUp className="w-4 h-4" />
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-champagne/40">
          <p>
            © {new Date().getFullYear()} NKGABRU STUDIO. ALL RIGHTS RESERVED. HAUTE COUTURE WEDDING CINEMATOGRAPHY — FARIDABAD, INDIA.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Client Archive Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
