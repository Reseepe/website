/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        main: "#1B9BA2",
        kotak: "#F5F5F5",
        second: "#EFF0F3"
      },
      boxShadow: {
        'custom-left-bottom': '-6px 8px 2px 2px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        typing: {
          '0%, 10%, 100%': { width: '0%' },
          '70%, 90%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#1B9BA2' },
        },
      },
      animation: {
        typing: 'typing 5s steps(30, end) infinite, blink 1.5s infinite step-end',
      },
    },
  },
  plugins: [],
}

