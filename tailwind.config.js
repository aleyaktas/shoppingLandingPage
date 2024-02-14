/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "dark-s": "0px 0px 2px 0px #00000012",
        "dark-m": "0px 0px 4px 0px #00000012",
        "dark-lg": "0px 0px 6px 0px #00000012",
        "dark-xl": "0px 0px 10px 0px rgba(0, 0, 0, 0.12)",
        "2xl": "0px 25px 50px -12px #FFFFFF40",
      },
      height: {
        112: "28rem",
      },
    },
  },
  plugins: [],
};
