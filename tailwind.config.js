/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        museomoderno: ['MuseoModerno', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif']
      },
      colors: {
        'light-green' : '#e5e7eb',
        'background-green' : '#061F00'
      },
    },
  },

  plugins: [],
}
