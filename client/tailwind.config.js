/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        bgColor: '#FCF6F4',
      },
      aspectRatio: {
        '9/12': '9 / 12',
      },
    },
  },
  plugins: [],
}

