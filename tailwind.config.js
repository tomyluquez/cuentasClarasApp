/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#fafafa",
        lightColor: "green",
        darkBg: "black",
        darkColor: "#fafafa",
        lightBgCard: "#FCFFCD",
        darkBgCard: "#878382",
        lightButton: "#bdbf93",
        darkButton: "#16bbf7",
        lightLabel: "#9b9b9b",
        darkLabel: "#fafafa",
        whatsButton: "#25D366",
      },
    },
  },
  plugins: [],
};
