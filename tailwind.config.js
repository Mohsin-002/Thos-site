/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily:{
        openSans: ['openSans', 'sans-serif'],
        libreBold: ['Libre Baskerville', 'sans-serif']
      },
    },
  },
  plugins: [],
}
