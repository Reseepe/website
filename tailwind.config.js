/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#1B9BA2",
        kotak: "#F5F5F5",
      },
      boxShadow: {
        'custom-left-bottom': '-6px 8px 2px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}

