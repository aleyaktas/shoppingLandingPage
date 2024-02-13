/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-xl": "0px 0px 10px 0px rgba(0, 0, 0, 0.12)",
        "2xl": "0px 25px 50px -12px #FFFFFF40",
      },
    },
  },
  plugins: [],
};
