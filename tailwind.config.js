/** @type {import('tailwindcss').Config} */
let defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#262626',
        'gray': '#3F3F3F',
        'gray-light': '#F3F3F3',
        'blue': '#3EB6D2',
        'green': '#6ECFA7',
        'turquoise': '#5EC5BF'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Wix Madefor Text', ...defaultTheme.fontFamily.mono]
      },
      screens: {
        's': '400px'
      }
    },
  },
  plugins: [],
}