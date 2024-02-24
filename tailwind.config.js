/** @type {import('tailwindcss').Config} */

module.exports = {
  // purge: ["./*.html", "./src/**/*.js"],
  content: [
    // "./client/src/components/**/*.{html,js,jsx,ts,tsx}",
    // "./client/src/pages/**/*.{html,js,jsx,ts,tsx}",
    // "./src/**/*.{html,js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    // "./**/*.{html}"
    "./index.html",   
    "./client/**/*.{html,js,jsx,ts,tsx}",
    "./client/src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./client/node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      height: {
        "180vh": "180vh",
      },
      margin: {
        '21': '80px',
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss"),
    require("autoprefixer"),
    require('tailwind-scrollbar'),
  ],

};

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{html,js,jsx,ts,tsx}",
//     "node_modules/flowbite-react/lib/esm/**/*.js",
//   ],
//   theme: {
//     extend: {
//       height: {
//         100: "35rem",
//         "100vh": "180vh",
//       },
//     },
//   },
//   plugins: [require("flowbite/plugin")],
// };
