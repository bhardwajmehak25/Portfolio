/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "0%": { transform: "rotateX(90deg)", opacity: 0 },
          "50%": { transform: "rotateX(0deg)", opacity: 1 },
          "100%": { transform: "rotateX(-90deg)", opacity: 0 },
        },
      },
      animation: {
        flip: "flip 2s ease-in-out",
      },

      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) ' },
        },
      },
    },
  },
  plugins: [],
};