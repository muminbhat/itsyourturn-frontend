/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        gray: {
          "100": "#8e8e8e",
          "200": "rgba(255, 255, 255, 0.7)",
        },
        peru: {
          "100": "#c69247",
          "200": "#a2783a",
          "300": "rgba(198, 146, 71, 0.6)",
        },
        silver: "#c4c4c4",
        darkslategray: "#323232",
        indigo: "#5b0076",
        darkmagenta: "#8f33a8",
      },
      spacing: {},
      fontFamily: {
        jost: "Jost",
        "nunito-sans": "'Nunito Sans'",
        "cormorant-garamond": "'Cormorant Garamond'",
        "alex-brush": "'Alex Brush'",
        poppins: "Poppins",
        "cinzel-decorative": "'Cinzel Decorative'",
        allura: "Allura",
      },
      borderRadius: {
        "3xs-2": "9.2px",
        "3xs-7": "9.7px",
        "mid-1": "17.1px",
        "160xl-5": "179.5px",
        "9xs": "4px",
        "42xl-7": "61.7px",
      },
    },
    fontSize: {
      "lg-4": "1.15rem",
      "5xl": "1.5rem",
      lgi: "1.19rem",
      "8xl-6": "1.73rem",
      "3xl": "1.38rem",
      "4xl-8": "1.49rem",
      "17xl-7": "2.29rem",
      "10xl": "1.81rem",
      "36xl-1": "3.44rem",
      "14xl": "2.06rem",
      "25xl": "2.75rem",
      "base-4": "0.96rem",
      "xl-5": "1.28rem",
      base: "1rem",
      "48xl-6": "4.22rem",
      "22xl": "2.56rem",
      "35xl": "3.38rem",
      "mid-9": "1.12rem",
      "7xl-9": "1.68rem",
      "49xl": "4.25rem",
      "base-2": "1.01rem",
      lg: "1.13rem",
      xl: "1.25rem",
      "xl-1": "1.26rem",
      "13xl-3": "2.02rem",
      "7xl": "1.63rem",
      "lgi-3": "1.21rem",
      "13xl": "2rem",
      "7xl-8": "1.68rem",
      "2xl": "1.31rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};