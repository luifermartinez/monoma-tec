/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", "Verdana", "sans-serif"],
      },
      colors: {
        primary: "#c983ff",
      },
      backgroundImage:{
        meteors: "url('/img/bg.svg')",
      }
    },
  },
  plugins: [],
};
