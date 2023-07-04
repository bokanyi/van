/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'orange': '#f0bc60',
        'light-rose': '#cdb4b6',
        'blue-green': '#4e9687',
        'dark-blue': '#21414d',

      },
    },
  },
  plugins: [],
}

