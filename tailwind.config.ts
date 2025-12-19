/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B3C53",    // Deep Dark
        secondary: "#234C6A",  // Navy
        accent: "#456882",     // Steel Blue
        light: "#E3E3E3",      // Light Grey
      },
    },
  },
  plugins: [],
};