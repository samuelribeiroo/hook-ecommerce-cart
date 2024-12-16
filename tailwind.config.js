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
          DEFAULT: '#3b82f6',
          slate: '#193351',
          foreground: '#ffffff',
          RED: '#ef4444',
          BLACK: '#0000'
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Substitua 'Roboto' pela fonte que você está usando.
          // serif: ['Merriweather', 'serif'], // Exemplo para fontes serifadas.
        },
        darkMode: 'class'
      },
    },
  },
  plugins: [],
}

