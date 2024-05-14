/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors :{
        blue :{
          700 : "#146Eb4",
          100 : "#1174c2",
          900 : "#0e4f82"
        },
        slate :{
          200 : "#f2f2f2"
        }
      }
    },
  },
  plugins: [],
}

