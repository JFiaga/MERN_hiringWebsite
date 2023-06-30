/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend:{
    screens: {
      sm: "600px",

      md: "900px",
    },
    colors:{
      primary:'#1dbf73',
      primaryDark:'#1A1B1D'
    }
  }
  },
  plugins: [],
};
