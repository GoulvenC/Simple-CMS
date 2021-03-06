module.exports = {
  mode: "jit",
  purge: [
    "./src/*.tsx",
    "./src/**/*.tsx",
    "./index.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#E95678",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
