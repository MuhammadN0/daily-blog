/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Poppins', 'ui-serif', 'Georgia'],
      sans:['lora']
    },
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}
