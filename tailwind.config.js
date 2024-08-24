/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F1EAFF",
        secondary: "#E5D4FF",
        primary_dark: "#DCBFFF",
        secondary_dar: "#D0A2F7",
      },
    },
  },
  plugins: [],
};
