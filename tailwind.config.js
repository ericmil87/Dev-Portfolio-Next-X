const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      ubuntu: ["Ubuntu"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },

    extend: {
      backdropBlur: {
        xl: '5px',
      },
      colors: {
        green: {
          DEFAULT: colors.sky.DEFAULT,
        }, 
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
