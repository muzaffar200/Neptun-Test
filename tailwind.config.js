/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'custom-989': { 'max': '989px' }, 

      },
    },
  },
  plugins: [],
}