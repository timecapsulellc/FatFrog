/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frog-green': '#2F9E44',
        'frog-yellow': '#FCC419',
      },
    },
  },
  plugins: [],
}
