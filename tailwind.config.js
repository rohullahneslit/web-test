/** @type {import('tailwindcss').Config} */
const defaultColors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      bgImg: "url('./assets/images/Background.png')",
    },
    extend: {
      colors: {
        ...defaultColors,
        primary: "#ffce31",
        secondary: "#1849C6",
        primaryWhite: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
