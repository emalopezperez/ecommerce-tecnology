/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./src/**/*.jsx", "./index.html"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

  ],
}