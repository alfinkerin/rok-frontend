module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
      backgroundColor: {
        biru: "#5265cb",
        dark: "#434045",
        gold: "#ffde52",
        anggur: "#71184e",
      },
      textColor: {
        biru: "#5265cb",
        dark: "#434045",
        gold: "#ffde52",
        anggur: "#71184e",
      },
      gradientColorStops: {
        biru: "#5265cb",
        dark: "#434045",
        gold: "#ffde52",
        anggur: "#71184e",
      },
      height: {
        70: "23rem",
        80: "80rem",
        90: "90rem",
        100: "100rem",
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#333",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
            },
            maxWidth: "100%",
            p: {
              img: {
                width: "100%",
              },
            },
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
