"use client";

import React, { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AudioAmbience from "@/components/AudioAmbience";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import FeaturedStories from "@/components/FeaturedStories";
import Gallery from "@/components/Gallery";
import FilmShowreel from "@/components/FilmShowreel";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <SmoothScroll>
      <CustomCursor />
      <AudioAmbience />

      {/* Premium Cinematic Preloader */}
      {!loadingComplete && (
        <Preloader onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Main Page Layout */}
      <main className="min-h-screen bg-obsidian-950 text-champagne relative selection:bg-gold-400 selection:text-obsidian-950">
        <Navbar />
        <Hero />
        <Manifesto />
        <FeaturedStories />
        <Gallery />
        <FilmShowreel />
        <ExperienceTimeline />
        <Packages />
        <Testimonials />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
