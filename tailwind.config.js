/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "420px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        primary: "hsla(176, 77%, 34%, 1)",
        secondary: "hsla(225, 90%, 42%, 1)",
        lightBlue: "hsla(217, 100%, 94%, 1)",
        grayS27L86: "hsla(238, 27%, 20%, 1)",
        grayS0L100A6: "hsla(0, 0%, 100%, 0.6)",
        grayS0L35: "hsla(0, 0%, 35%, 1)",
        grayS0L30: "hsla(0, 0%, 30%, 1)",
        grayS0L96: "hsla(0, 0%, 96%, 1)",
        grayS0L98: "hsla(0, 0%, 98%, 1)",
        grayS40L10: "hsla(0, 40%, 10%, 1)",
        grayS10L37: "hsla(237, 10%, 37%, 1)",
        grayS0L77: "hsla(0, 0%, 77%, 1)",
        grayS12L53: "hsla(240, 12%, 53%, 1)",
        grayS19L18: "hsla(200, 19%, 18%, 1)",
        grayS90L12: "hsla(247, 90%, 12%, 1)",
        grayS11L46: "hsla(240, 11%, 46%, 1)",
        pinkS100L89: "hsla(284, 100%, 89%, 1)",
        pinkS78L49: "hsla(357, 78%, 49%, 1)",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
