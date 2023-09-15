/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#5c8d89",
        "green": "#74b49b",
        "light-green": "#a7d7c5",
        "very-light-green": "#f4f9f4",
        "dark-grey": "#828282",
        "light-grey": "#f2f2f2",
      }
    },
  },
  plugins: [],
};

