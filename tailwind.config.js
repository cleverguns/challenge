/** @type {import('tailwindcss').Config} */

const { colors, fontFamily, borderRadius } = require('./src/theme/pitg-config.cjs')

export default {
  content: ['src/**/*.{html,js,css}'],
  theme: {
    extend: {
      fontFamily,
      colors,
      borderRadius
    },
  },
  plugins: [],
}
