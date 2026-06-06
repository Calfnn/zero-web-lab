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
        // Light theme: white page, blue accent, near-black ink for text.
        background: "#FFFFFF",
        surface: {
          DEFAULT: "#F4F4F4",
          light: "#ECECEC",
        },
        // Dark tone for text and the "photo" tiles that stay dark on the light page.
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#2C6BFF",
          glow: "rgba(44, 107, 255, 0.18)",
        },
        muted: "#555555",
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
