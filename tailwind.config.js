/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5E6D3',
        coral: '#FF6B6B',
        navy: '#2D3047',
        orange: '#FF9F1C',
        skyBlue: '#A8E0FF',
        purple: '#9B6EDC',
        deepPink: '#FF1B6B',
        goldenYellow: '#FFD93D',
        magenta: '#FF00FF',
        sage: '#96A886',
        terracotta: '#C76D4E',
        sand: '#D4B483',
        mint: '#9DC9B8',
        dustyRose: '#C98986',
        mustard: '#D4A373',
        retroBlue: '#4B99D0',
        retroOrange: '#E85D24',
        retroCream: '#F7E5A4',
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF6B6B, 0 0 20px #FF6B6B, 0 0 25px #FF6B6B',
      },
    },
  },
  plugins: [],
}
