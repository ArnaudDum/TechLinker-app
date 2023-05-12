/** @type {import('tailwindcss').Config} */
let defaultTheme = require("tailwindcss/defaultTheme")
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#1A1E23',
        'gray': '#282B37',
        'blue': '#3EB6D2',
        'green': '#6ECFA7',
        'turquoise': '#5EC5BF'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Wix Madefor Text', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  plugins: [],
}