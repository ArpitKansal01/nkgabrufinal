"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  dataCursor?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  dataCursor,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      data-cursor={dataCursor}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center transition-shadow select-none ${className}`}
      {...props}
    >
      <motion.span
        animate={{ x: position.x * 0.4, y: position.y * 0.4 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative z-10 flex items-center justify-center gap-2 pointer-events-none w-full"
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
