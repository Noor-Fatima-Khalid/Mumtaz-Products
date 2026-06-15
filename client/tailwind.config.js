module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          dark: "#1C3A2F",
          mid: "#224c39",
          light: "#3D7A5A"
        },
        gold: "#C9A84C",
        "gold-light": "#E2C97E",
        "gold-pale": "#efe3ba",
        cream: "#F5F0E8",
        sage: "#E8EDE6",
        white: "#FAFAF7",
        text: {
          dark: "#1A1A18",
          mid: "#3D3D38",
          muted: "#7A7A72",
        },
      },

      boxShadow: {
        card: "0 4px 16px rgba(28, 58, 47, 0.10)",
        hover: "0 12px 36px rgba(28, 58, 47, 0.22)",
        press:
          "0 2px 8px rgba(28, 58, 47, 0.30), inset 0 2px 6px rgba(28, 58, 47, 0.08)",
      },

      borderRadius: {
        card: "12px",
        btn: "6px",
      },

      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },

      transitionDuration: {
        DEFAULT: "250ms",
      },

      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}