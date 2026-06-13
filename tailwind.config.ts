import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme: near-black page (#030303), indigo accent, white ink for text.
        background: "#030303",
        surface: {
          DEFAULT: "#0E0E11",
          light: "#17171B",
        },
        // "ink" is the primary foreground (text + UI lines) on the dark page.
        ink: {
          DEFAULT: "#FFFFFF",
          soft: "#D4D4D8",
        },
        accent: {
          DEFAULT: "#8B5CF6",
          glow: "rgba(139, 92, 246, 0.30)",
        },
        muted: "#9CA3AF",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.18em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(1.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-fast": "marquee 16s linear infinite",
        pulseDot: "pulseDot 1.6s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
