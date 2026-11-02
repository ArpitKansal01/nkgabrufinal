"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState<string>("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "action" | "hide">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the trailing ring
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only run on desktop/fine-pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      const clickable = target.closest("a, button, input, textarea, select, [role='button']");

      if (cursorTarget) {
        const text = cursorTarget.getAttribute("data-cursor") || "";
        setCursorText(text);
        setCursorVariant("action");
      } else if (clickable) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setCursorVariant("hide");
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
      setCursorVariant("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Central pinpoint dot */}
      <motion.div
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorVariant === "action" ? 0 : 1,
        }}
      />

      {/* Outer fluid trailing ring with dynamic states */}
      <motion.div
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border border-gold-400/80 transition-colors"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: cursorVariant === "action" ? 82 : cursorVariant === "hover" ? 48 : 28,
          height: cursorVariant === "action" ? 82 : cursorVariant === "hover" ? 48 : 28,
          backgroundColor:
            cursorVariant === "action"
              ? "rgba(212, 175, 55, 0.92)"
              : cursorVariant === "hover"
              ? "rgba(212, 175, 55, 0.12)"
              : "rgba(212, 175, 55, 0.03)",
          borderColor:
            cursorVariant === "action"
              ? "rgba(212, 175, 55, 1)"
              : cursorVariant === "hover"
              ? "rgba(212, 175, 55, 0.9)"
              : "rgba(212, 175, 55, 0.45)",
          scale: cursorVariant === "hide" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-bold tracking-widest text-obsidian-950 uppercase"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}

