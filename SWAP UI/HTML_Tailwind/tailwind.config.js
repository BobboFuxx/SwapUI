/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#858585",
          "200": "#1c1c2a",
          "300": "#13131b",
          "400": "#101016",
          "500": "#0a0a0e",
        },
        white: "#fff",
        deepskyblue: {
          "100": "#30b7f6",
          "200": "rgba(48, 183, 246, 0.25)",
        },
        darkslateblue: "#3b2e5f",
        darkslategray: "#2c2c46",
      },
      spacing: {},
      fontFamily: {
        kanit: "Kanit",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "5xl": "24px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
