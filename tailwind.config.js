module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      boxShadow: {
        card: '2px 2px 20px rgba(0,0,0,0.1)'
      }
    },
  },
  variants: {},
  plugins: [],
}