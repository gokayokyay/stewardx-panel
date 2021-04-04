module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'black-tint': '#0A0A0A',
        'turkuaz': '#71FFF6',
        'orange-selected': '#FAD14F'
      }
    },
    fontFamily: {
      'display': 'Overpass Mono'
    }
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      borderOpacity: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    }
  },
  plugins: [],
}