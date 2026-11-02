"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";
import { soundEngine } from "./AudioAmbience";

const NAV_LINKS = [
  { name: "Stories", href: "#stories" },
  { name: "Portfolio", href: "#gallery" },
  { name: "Cinema Reel", href: "#showreel" },
  { name: "The Experience", href: "#experience" },
  { name: "Investment", href: "#packages" },
  { name: "Faridabad Studio", href: "#studio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    soundEngine.playShutter();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3 bg-obsidian-950/80 backdrop-blur-xl border-b border-gold-400/20 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              soundEngine.playShutter();
            }}
            data-cursor="NKG"
            className="group flex items-center gap-3"
          >
            <div className="relative w-9 h-9 rounded-full border border-gold-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Camera className="w-4 h-4 text-gold-400 transition-transform duration-500 group-hover:rotate-12" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.2em] font-medium text-gold-gradient uppercase leading-none">
                NKGABRU
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-champagne/60 uppercase mt-0.5">
                Studio • Faridabad
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-champagne/75 hover:text-gold-300 transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-[10px] font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Dates Open 2026/27</span>
            </div>

            <MagneticButton
              onClick={() => handleNavClick("#studio")}
              dataCursor="BOOK"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-sans font-semibold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all"
            >
              <span>Reserve Dates</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-champagne hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian-950/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              <p className="text-[10px] font-mono text-gold-400 uppercase tracking-widest border-b border-gold-400/20 pb-2">
                Navigation Menu
              </p>
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-serif text-3xl text-champagne hover:text-gold-300 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-gold-400/60">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gold-400/20">
              <div className="flex items-center gap-2 text-xs font-mono text-champagne/70">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Surajkund Road, Faridabad, Delhi NCR</span>
              </div>
              <button
                onClick={() => handleNavClick("#studio")}
                className="w-full py-4 rounded-xl bg-gold-400 text-obsidian-950 font-semibold text-xs uppercase tracking-widest text-center shadow-lg"
              >
                Inquire For Your Wedding
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
