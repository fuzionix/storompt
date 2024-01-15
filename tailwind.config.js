/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theme': {
        DEFAULT: '#c7e64c',
        pale: '#e7fa9e',
        dark: '#9dc20a',
        gray: '#c7cab9',
        grid: '#e4e7da',
        black: '#2c2e23',
        light: '#f6f7f3',
        verylight: '#f9faf6',
        darklight: '#c1c3bc',
        gridlight: '#e4e7da',
        100: '#252d06',
        200: '#4a5a0d',
        300: '#6f8613',
        400: '#94b319',
        500: '#b8df1f',
        600: '#c7e64c',
        700: '#d5ec79',
        800: '#e3f2a6',
        900: '#f1f9d3',
        950: '#f8fcea',
        980: '#fcfef7'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Plus Jakarta Sans', 'Sans-serif'],
        'display': ['Bagel Fat One', 'Arial', 'Sans-serif'],
      }
    },
  },
  plugins: [],
}

