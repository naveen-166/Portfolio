// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        Edu:['Edu AU VIC WA NT Dots','sans-serif'],
        Poppins:['Poppins', 'sans-serif'],
        Porter:['Protest Strike','sans-serif'],
        Agdasima:['Agdasima', 'sans-serif']
      },
    },
  },
  plugins: [],
}
