import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#040b15",
          900: "#071426", // Brand Deep Navy
          850: "#0b1b32",
          800: "#102644",
          700: "#1b3c69",
          600: "#27548f",
        },
        charcoal: {
          950: "#090d12",
          900: "#101820", // Brand Charcoal
          800: "#18222d",
          700: "#253342",
        },
        techblue: {
          DEFAULT: "#1769E0", // Brand Tech Blue
          50: "#f0f6fe",
          100: "#dbe8fd",
          200: "#bed6fb",
          300: "#91bbf8",
          400: "#5d99f3",
          500: "#1769E0",
          600: "#1254b8",
          700: "#0f4293",
          800: "#113878",
          900: "#143163",
        },
        gold: {
          DEFAULT: "#F5C76B", // Brand Warm Gold
          100: "#fef8e7",
          200: "#fdedc5",
          300: "#fbe09e",
          400: "#f8d374",
          500: "#F5C76B",
          600: "#d9a544",
          700: "#b48028",
          800: "#916422",
        },
        accentred: {
          DEFAULT: "#D62839", // Brand Accent Red
          light: "#eb4455",
          dark: "#a81927",
        },
        mutedgray: {
          DEFAULT: "#AEB8C8", // Brand Muted Gray
          light: "#d5dbe5",
          dark: "#77859c",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Manrope", "sans-serif"],
        display: ["var(--font-outfit)", "Manrope", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "ph-sunburst": "radial-gradient(circle at 50% 0%, rgba(245, 199, 107, 0.15) 0%, rgba(23, 105, 224, 0.08) 40%, rgba(7, 20, 38, 0) 70%)",
        "banig-pattern": "radial-gradient(rgba(245, 199, 107, 0.06) 1px, transparent 0)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { filter: "drop-shadow(0 0 15px rgba(245, 199, 107, 0.2))" },
          "100%": { filter: "drop-shadow(0 0 25px rgba(23, 105, 224, 0.4))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
