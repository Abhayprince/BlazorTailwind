/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./wwwroot/index.html",
        "./Pages/**/*.{razor,cshtml}",
        "./Shared/**/*.{razor,cshtml}",
        "./Components/**/*.{razor,cshtml}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

