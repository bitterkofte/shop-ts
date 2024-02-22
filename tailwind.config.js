/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'u-2xl': {'min': '1536px'},
        'u-xl': {'min': '1280px'},
        'u-lg': {'min': '1024px'},
        'u-md': {'min': '768px'},
        'u-sm': {'min': '501px'},

        'd-2xl': {'max': '1535px'},
        'd-xl': {'max': '1279px'},
        'd-lg': {'max': '1023px'},
        'd-md': {'max': '767px'},
        'd-sm': {'max': '500px'},
      }
    },
  },
  plugins: [],
}

