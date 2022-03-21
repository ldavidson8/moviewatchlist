const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      teal: {
        100: "#00ED82",
        200: "#1CE783",
        300: "#0EE694",
        400: "#04CD6A",
      },
      gray: {
        100: "#FFFFFF",
        200: "#F0F0F0",
        300: "#DDE0E6",
        400: "#C0C0C0",
        500: "#939498",
        600: "#4D4D4D",
        700: "#151516",
        800: "#040404",
      },
      cyan: {
        100: "#05AAA3",
        200: "#336E6B",
      },
      bluishcyan: {
        100: "#0F495C",
        200: "#0D3640",
      },
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
