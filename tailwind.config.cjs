/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-160%) rotate(12deg)" },
          "100%": { transform: "translateX(160%) rotate(12deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.6s infinite",
      },
      colors: {
        neutral: colors.slate,
        primary: colors.purple,
        secondary: colors.rose,
        accent: colors.emerald,
        surface: colors.slate,
        background: Object.assign({}, colors.slate, {
          DEFAULT: colors.slate[900],
        }),

        // Simple flattened aliases used by tokens
        "on-primary": colors.white,
        "on-background": colors.white,
      },
    },
  },
  plugins: [],
};
