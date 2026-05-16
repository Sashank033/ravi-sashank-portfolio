import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne:    ["var(--font-syne)",    "sans-serif"],
        body:    ["var(--font-body)",    "sans-serif"],
      },
      colors: {
        navy: {
          950: "#020817",
          900: "#0a1628",
          800: "#0f2040",
        },
      },
      boxShadow: {
        "glow":           "0 0 28px rgba(14,165,233,0.30)",
        "glow-sm":        "0 0 14px rgba(14,165,233,0.20)",
        "glow-lg":        "0 0 56px rgba(14,165,233,0.40)",
        "glow-violet":    "0 0 28px rgba(99,102,241,0.28)",
        "glow-emerald":   "0 0 28px rgba(16,185,129,0.25)",
        "card":           "0 20px 60px rgba(0,0,0,0.50), 0 0 0 1px rgba(255,255,255,0.04)",
      },
      animation: {
        "spin-slow":    "spin 22s linear infinite",
        "pulse-glow":   "pulseGlow 9s ease-in-out infinite",
        "float":        "float 7s ease-in-out infinite",
        "border-flow":  "borderFlow 4s linear infinite",
        "slide-up":     "slideUp 0.5s ease forwards",
      },
      keyframes: {
        pulseGlow: {
          "0%,100%": { opacity: "0.22", transform: "scale(1)"    },
          "50%":     { opacity: "0.42", transform: "scale(1.07)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)"    },
          "50%":     { transform: "translateY(-18px)"},
        },
        borderFlow: {
          "0%":   { backgroundPosition:   "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to:   { opacity: "1", transform: "translateY(0)"    },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
