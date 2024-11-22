/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Um tom de azul
          foreground: '#ffffff',
          RED: '#ef4444'
        },
        darkMode: 'class'
      },
    },
  },
  plugins: [],
}

