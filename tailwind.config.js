/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", "ui-sans-serif", "system-ui"],
        serif: ["MontserratVariable", "ui-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        minitube: {
          primary: "#39336c",
          "primary-content": "#ffffff",
          secondary: "#c16a59",
          "secondary-content": "#ffffff",
          accent: "#37cdbe",
          "accent-content": "#163835",
          neutral: "#3d4451",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f2f2f2",
          "base-300": "#e5e6e6",
          "base-content": "#1f2937",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
