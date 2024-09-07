/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        oscillate: "oscillate 1s infinite",
      },
      keyframes: {
        oscillate: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(+2px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
