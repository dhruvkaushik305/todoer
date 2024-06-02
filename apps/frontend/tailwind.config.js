/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        flockingStars: "url('/assets/flock of shooting stars.png')",
      },
      colors: {
        midnightBlue: "#003D7A",
        darkBlue: "#051537",
        navyBlue: "#04247C",
        customBlue: "#0458AB",
        offWhite: "#F7F7F7",
      },
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        Lobster: ["Lobster", "sans-serif"],
        Sriracha: ["Sriracha", "cursive"],
        ArchivoBlack: ["Archivo Black", "sans-serif"],
        Khand: ["Khand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
