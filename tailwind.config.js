/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    hostname: 'tailwindui.com',
    loader: 'imgix',
    path: 'https://tailwindui.com/img/ecommerce-images/',
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
