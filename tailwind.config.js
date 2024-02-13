/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
      },
      colors: {
        'green-win': '#00a854',
        'red-lose': '#a80000',
      },
    },
  },
  plugins: [],
};
