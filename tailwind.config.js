/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
        hero2: "url('/assets/hero2.jpg')",
        hero3: "url('/assets/hero3.jpg')",
      },
      colors: {
        primary: "#025464",
        secondary: "#E57C23",
        highlights: "#E8AA42",
        myWhite: "#F8F1F1",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 255, 0.5)",
        innerGlass: "inset 0 2px 10px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
