/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnightBlue: "#003D7A",
        darkBlue: "#051537",
        navyBlue: "#04247C",
        blue: "#0458AB",
        offWhite: "#F7F7F7",
        raisinBlack: "#161925",
        delftBlue: "#23395B",
        uclaBlue: "#406E8E",
        mintGreen: "#CBF7ED",
        thistle: "#CFBCDF",
      },
      fontFamily: {
        Pacifico: ["Pacifico", "cursive"],
        Lobster: ["Lobster", "sans-serif"],
        Sriracha: ["Sriracha", "cursive"],
      },
    },
  },
  plugins: [],
};
