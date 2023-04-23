/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/colors");
const { defaultConfig } = require("tailwindcss/defaultConfig");

module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        baseColor: "#0A192F",
        lightBaseColor: "#112D3C",
        darkteal: {},
        specialGreen: "#64ffda",
        lighNavy: "#112240",
        lightSlate: "#ccd6f6",
        lightestBorder: "#233554",
        neutral: {

        },
        'profile-back': "linear-gradient(180deg, #FFF5E6 0%, #FFFFFF 100%)",
        734400: "#734400",
        trending: {
          background: "#FFF0D9",
          icon: "#E64A19",
        },
      },
      height: {
        'headerSearch': '70%',
      },
    },
    backgroundImage: {
      'profile-back': "linear-gradient(180deg, #FFF5E6 0%, #FFFFFF 100%)",
    }
  },
  plugins: [],
};
