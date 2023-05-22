/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#238de9",
      "light-blue": "#8bc9ff",
      red: "#ed3434",
      purple: "#7F23E9",
    },
    fontFamily: {
      // "open-sans": ["'Open Sans'"]
    }
  },
  plugins: [],
}

