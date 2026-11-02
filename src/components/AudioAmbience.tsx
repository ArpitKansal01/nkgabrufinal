"use client";

import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

// Web Audio API ambient sound generator & shutter sound effects
class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playShutter() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Mechanical blade click 1
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(800, now);
      osc1.frequency.exponentialRampToValueAtTime(120, now + 0.04);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.05);

      // Shutter mirror slap 2
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(400, now + 0.06);
      osc2.frequency.exponentialRampToValueAtTime(80, now + 0.12);
      gain2.gain.setValueAtTime(0.25, now + 0.06);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.06);
      osc2.stop(now + 0.14);
    } catch {
      // Audio not permitted yet
    }
  }

  public startAmbience() {
    try {
      this.initContext();
      if (!this.ctx || this.isPlaying) return;

      this.isPlaying = true;
      const now = this.ctx.currentTime;
      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, now);
      masterGain.gain.linearRampToValueAtTime(0.12, now + 3); // gentle fade in
      masterGain.connect(this.ctx.destination);
      this.gainNode = masterGain;

      // Filter for warm cinematic analog feel
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, now);
      filter.Q.setValueAtTime(1.5, now);
      filter.connect(masterGain);

      // Warm cinematic pentatonic chord: D3, A3, C#4, F#4
      const frequencies = [146.83, 220.0, 277.18, 369.99];

      this.oscillators = frequencies.map((freq, i) => {
        const osc = this.ctx!.createOscillator();
        let panner: StereoPannerNode | null = null;
        try {
          panner = this.ctx!.createStereoPanner();
        } catch {
          panner = null;
        }

        osc.type = i % 2 === 0 ? "sine" : "triangle";
        // subtle detuning for rich cinematic shimmer
        osc.frequency.setValueAtTime(freq + (i * 0.4 - 0.6), now);

        const subGain = this.ctx!.createGain();
        subGain.gain.setValueAtTime(0.25 / frequencies.length, now);

        if (panner) {
          panner.pan.setValueAtTime((i / frequencies.length) * 1.6 - 0.8, now);
          osc.connect(subGain);
          subGain.connect(panner);
          panner.connect(filter);
        } else {
          osc.connect(subGain);
          subGain.connect(filter);
        }

        osc.start(now);
        return osc;
      });
    } catch {
      // Silent catch
    }
  }

  public stopAmbience() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const now = this.ctx.currentTime;
      if (this.gainNode) {
        this.gainNode.gain.linearRampToValueAtTime(0.001, now + 1);
      }
      setTimeout(() => {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {
            // pass
          }
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1000);
    } catch {
      this.isPlaying = false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience();
      return true;
    }
  }
}

export const soundEngine = new SoundEngine();

export default function AudioAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const active = soundEngine.toggle();
    setIsPlaying(active);
    if (active) {
      soundEngine.playShutter();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={handleToggle}
        data-cursor="CLICK"
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-obsidian-900/90 border border-gold-400/30 text-champagne backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-gold-400 hover:scale-105 hover:shadow-gold-500/10"
        title={isPlaying ? "Mute Cinematic Ambience" : "Play Cinematic Ambience"}
      >
        <span className="relative flex h-2 w-2">
          {isPlaying ? (
            <>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
            </>
          ) : (
            <span className="inline-flex rounded-full h-2 w-2 bg-neutral-600"></span>
          )}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-gold-400 transition-colors" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-neutral-400 transition-colors" />
        )}

        <span className="text-[11px] font-mono tracking-widest uppercase text-champagne/80 group-hover:text-gold-300">
          {isPlaying ? "Cinema Sound ON" : "Sound OFF"}
        </span>
      </button>
    </div>
  );
}
