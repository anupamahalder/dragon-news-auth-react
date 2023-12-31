/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
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

