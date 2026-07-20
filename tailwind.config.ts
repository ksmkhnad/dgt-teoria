import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Warm off-white, very slight tint.
        paper: {
          DEFAULT: "#F8F7F3",
          dark: "#0A0A0A",
        },
        ink: {
          DEFAULT: "#0F0F0F",
          soft: "#3F3F3F",
          faint: "#8A8A8A",
        },
        brand: {
          DEFAULT: "#B91C1C",
          dark: "#7F1D1D",
          hover: "#991B1B",
        },
      },
      letterSpacing: {
        widest: "0.14em",
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "5px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
