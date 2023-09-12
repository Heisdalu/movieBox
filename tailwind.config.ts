import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      0.5: "0.5rem",
      0.75: "0.75rem",
      1: "1rem",
      1.5: "1.5rem",
      2: "2rem",
      16: "1rem",
      100: "100%",
    },
    screens: {
      md: "768px",
      lg: "1024px",
      vlg: "1280px",
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/wick.jpg')",
      },
      colors: {
        white: "#fff",
        black: "#000",
        rose: "#BE123C",
        gray: "#9CA3AF",
        spb: "#111827",
      },
      borderRadius: {
        "50": "50%",
        "6": "6px",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        36: "2.25rem",
        18: "1.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
