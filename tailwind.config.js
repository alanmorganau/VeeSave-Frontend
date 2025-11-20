/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        veesaveDark: '#1a1a1a',
        veesaveYellow: '#FFD400',
        veesaveLight: '#f4f4f4',
      },
    },
  },
  plugins: [],
};
