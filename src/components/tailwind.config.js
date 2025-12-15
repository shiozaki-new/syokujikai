/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Noto Serif JP"', 'serif'],
        body: ['"Noto Sans JP"', 'sans-serif'],
      },
      keyframes: {
        floatDots: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(120px, -120px)' },
        },
      },
      animation: {
        'float-dots': 'floatDots 30s linear infinite',
      },
    },
  },
  plugins: [],
}
