/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        prata: ["Prata", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orange: "#f0bc60",
        "light-rose": "#cdb4b6",
        "blue-green": "#4e9687",
        "dark-blue": "#21414d",
      },
      boxShadow: {
        'inner': 'inset 100vw 0 0 0 #21414d',
        'none': 'inset 0 0 0 0 #4e9687',
      },
      keyframes: {
        lineUp: {
          " 0%": {
            opacity: "0",
            transform: "translateY(80%)",
          },
          "20%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0%)",
          },
        },
        slide: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        back: {
          "0%": { backgroundSize: "0 200%" },
        },
        text: {
          "50%": { backgroundPosition: "0 -100%,0 0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "24rem" },
        },
      },
      animation: {
        lineUp: "lineUp 5s ease-out ",
        back: "back .7s infinite steps(1)",
        text: "text calc(var(--n)*.3s) steps(var(--n)) forwards;",
        slide: "slide 3.5s   steps(30, end) infinite",
        typing: "4s steps(44) 1s 1 normal both,",
      },
    },
  },
  plugins: [],
};
