/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        grey: "#ededed",
        green: "#70FB7C",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-black2":
          "linear-gradient(125deg, #232323, #0B0B0B)",

        "gradient-greenblue":
          "linear-gradient(125deg, #14D4FF, #474747)",

        "gradient-blackish":
          "linear-gradient(145deg, #22294B, #0B0B0B)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        reference1: "url('./assets/reference1.jpg')",
        reference2: "url('./assets/reference2.jpg')",
        reference3: "url('./assets/reference3.jpg')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
