/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      // fontFamily: {
      //   "Jost": "Jost"
      // },
      animation: {
        backgroundPositionSpin: "background-position-spin 3000ms infinite alternate",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        primary: {
          '50': '#fef9ec',
          '100': '#fbeeca',
          '200': '#f7dc90',
          '300': '#f3c860',
          '400': '#efaf30',
          '500': '#e88f18',
          '600': '#cd6b12',
          '700': '#ab4b12',
          '800': '#8b3b15',
          '900': '#723215',
          '950': '#411807',
        },
      },
    },
  },
  plugins: [],
};
