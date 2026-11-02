import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: {
          950: "#060709",
          900: "#0B0C10",
          850: "#101217",
          800: "#161821",
          700: "#202330",
          600: "#2B2F42",
        },
        gold: {
          50: "#FAF7EE",
          100: "#F4ECD6",
          200: "#E9D8A6",
          300: "#DFC372",
          400: "#D4AF37", // Classic Royal Gold
          500: "#C49C2C",
          600: "#A37F1F",
          700: "#7F6116",
          800: "#5D450F",
          900: "#3D2B09",
        },
        champagne: {
          light: "#FBF7ED",
          DEFAULT: "#F4EBD0",
          dark: "#E5D4A6",
        },
        crimson: {
          DEFAULT: "#8A1C2E",
          dark: "#5E111E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA771C 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.25), transparent)",
        "radial-vignette": "radial-gradient(circle at center, transparent 30%, rgba(6, 7, 9, 0.85) 100%)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
