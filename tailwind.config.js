/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },



  daisyui: {
    themes: [
      {
        agencytheme: {
          primary: "#111430",
          secondary: "#FBD062",
          accent: "#3A4256",
          neutral: "#3d4451",
          white:  "#FFFFFF",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
