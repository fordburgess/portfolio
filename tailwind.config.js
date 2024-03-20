/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    extend: {
      fontFamily: {
        museomoderno: ['MuseoModerno', 'sans-serif'],
      },
      colors: {
        'light-green' : '#E4E3D2',
        'background-green' : '#061F00'
      },
    },
  },

  plugins: [],
}

