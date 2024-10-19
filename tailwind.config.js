/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
        },
      },
      lineHeight: {
        100: "100%",
        113: "113%",
        121: "121%",
        129: "129%",
        130: "130%",
        125: "125%",
        150: "150%",
        138: "138%",
      },
    },
  },
  plugins: [],
};
