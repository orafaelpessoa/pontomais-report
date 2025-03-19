/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#F2F2F2',
        customGreen: '#027368', 
        customGreenDark: '#025c50', 
      }
    },
  },
  plugins: [],
}
