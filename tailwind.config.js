/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'], // Set Gilroy as the default sans font
      },
    },
  },
  plugins: [],
}
