/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#135549",
        secondary: "#CFF480",
        secondary2: "#FFEDCC",
        "mint-dark": "#FBE4B9",
        dark: "#0F0F0F",
        gray: "#A1A1A1",
        "gray-main": "#D9D9D9",
        "background-mint": "#F5FAFD",
        "light-primary": "#208A77",
      },
      fontFamily: {
        Ordinary: "Ordinary",
        SF: ["SF", "sans-serif"],
      },
    },
  },
  plugins: [],
};
