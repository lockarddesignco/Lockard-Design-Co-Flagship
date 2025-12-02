import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00f3ff',
          purple: '#bc13fe',
          dark: '#050505',
          card: '#111111'
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
        'grid-pattern-light': "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
};
export default config;