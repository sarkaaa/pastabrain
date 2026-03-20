module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "bg-light": "url('/bg.png')",
        "bg-dark": "url('/bg-dark.png')",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
