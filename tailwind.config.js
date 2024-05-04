/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
    sm:'325px',
    md:'575px',
    lg:'768px',
    xl:'992px',
    '2xl':'1092px',
    '3xl':'1280px',
    }
  },
  plugins: [],
}