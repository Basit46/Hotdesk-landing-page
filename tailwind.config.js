/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "cursive"],
        "open-sauce-one": ["Open Sauce One", "sans-serif"],
      },
      backgroundImage: {
        partnersbg: "linear-gradient(180deg, #222, #000)",
        bg2: "linear-gradient(180deg, #000, #222);",
      },
    },
  },
  plugins: [],
};
