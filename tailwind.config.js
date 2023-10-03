/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // custom tailwind class for font family 
      fontFamily:{
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

