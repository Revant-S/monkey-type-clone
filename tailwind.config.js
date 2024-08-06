/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ejs"
  ],
  theme: {
    extend: {
      keyframes: {
        bar: {
          "0%": {
            width: "100%"
          },
          "50%": {
            width: "50%"
          },
          "100%": {
            width: "0%"
          }
        },
        moveLeftWaitRight: {
          "0%": { transform: "translateX(100%)" },
          "20%": { transform: "translateX(0)" },
          "80%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(110%)" },
        }
      },
      animation: {
        "bar": "bar 3s linear 1 forwards",
        moveInOut: "moveLeftWaitRight 5s linear 1 forwards",
      },
    },
  },
  safelist: [
    'bg-green-100',
    'bg-red-100',
    'text-black',
    'text-red-600',
    'bg-green-800',
    'bg-red-800',
    'bg-white',
  ],
  plugins: [],
};