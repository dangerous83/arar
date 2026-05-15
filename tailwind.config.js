/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#03000a",
          900: "#080014",
          800: "#12002b",
          700: "#1a0438",
        },
        violetx: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
        },
        neon: "#a855f7",
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Cormorant Garamond"', "serif"],
        sans: ['"Geist"', '"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(139,92,246,0.55)",
        cardGlow:
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(168,85,247,0.15), 0 30px 60px -30px rgba(139,92,246,0.4)",
        pill: "0 10px 30px -10px rgba(139,92,246,0.7)",
      },
      backgroundImage: {
        "radial-violet":
          "radial-gradient(60% 50% at 50% 0%, rgba(139,92,246,0.45) 0%, rgba(139,92,246,0.15) 30%, rgba(3,0,10,0) 70%)",
        "grid-faint":
          "linear-gradient(rgba(168,85,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%,100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
