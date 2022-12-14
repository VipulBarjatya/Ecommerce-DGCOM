module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins',sans-serif",
        roboto: "'Roboto',sans-serif",
      },
      colors: {
        primary: "#3397ff",
        darkblue: "#1f2937",
        lightdarkblue: "#303f53",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  plugins: [require("daisyui")],
};
