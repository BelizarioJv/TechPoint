export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        play: ["Play", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        danger: "#ef4444",
        custom: {
          light: "#F0F9FF",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
