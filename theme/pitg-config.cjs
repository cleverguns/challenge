const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  fontFamily: {
    'montserrat': ['var(--pitg-font-family-header)',...defaultTheme.fontFamily.sans],
    'sourcesans': ['var(--pitg-font-family-copy)',...defaultTheme.fontFamily.sans]
  },
  colors: {
    'pitg-primary-purple': 'var(--pitg-primary-purple)'
  },
  borderRadius: {
    'pitg-rounded-sm': 'var(--pitg-rounded-sm)'
  }
}