/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'orchard-red': '#b4162c'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'open-sans-light': ['Open Sans Light', 'sans-serif'],
        'open-sans-semibold': ['Open Sans Semibold', 'sans-serif'],
        'open-sans-condensed': ['Open Sans Condensed', 'sans-serif'],
        'open-sans-condensed-light': [
          'Open Sans Condensed Light',
          'sans-serif'
        ],
        'open-sans-semicondensed': ['Open Sans SemiCondensed', 'sans-serif'],
        'open-sans-semicondensed-light': [
          'Open Sans SemiCondensed Light',
          'sans-serif'
        ]
      }
    }
  },
  plugins: []
}
