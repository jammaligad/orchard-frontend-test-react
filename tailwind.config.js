/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orchardRed: '#b4162c'
      }
    },
    fontFamily: {
      helvetica: ['Helvetica', 'sans-serif'],
      rubik: ['Rubik', 'sans-serif']
    }
  },
  plugins: []
}
