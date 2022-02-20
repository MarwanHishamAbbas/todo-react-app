module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxl: { max: "1700px" },
      // => @media (max-width: 1700px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 768px) { ... }

      sm: { max: "425px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      primary: "#7367F0",
      secondary: "#F89B43",
      bodytext: "#B4B7BD",
      app: "#283046",
      backdrop: "#000000e1",
      faded: "#676D7D",
      border: "#676d7d60",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
