module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        test: "#CC0000",
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883"
        }
      },
      fontFamily: {
        body: ["Nunito"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
