/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'rubik': ['rubik'],
      'merriweather': ['Merriweather']
    }
  },
  plugins: [require("daisyui"), require('tailwindcss-animated')],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  }
}

