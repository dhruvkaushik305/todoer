/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#F7F7F7",
        raisinBlack: "#161925",
        delftBlue: "#23395B",
        uclaBlue: "#406E8E",
        mintGreen: "#CBF7ED",
        thistle: "#CFBCDF",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
