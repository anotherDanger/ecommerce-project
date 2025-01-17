/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        customNavbarColor: '#9AA6B2',
        customBannerColor: '#BCCCDC'
      },
      transitionDuration: {
        '5000': '5000ms'
      }
    },
  },
  plugins: [],
}

