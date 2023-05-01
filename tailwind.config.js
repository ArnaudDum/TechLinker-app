/** @type {import('tailwindcss').Config} */
let defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Inter', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}