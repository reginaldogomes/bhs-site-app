const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Inclua os arquivos do projeto
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-raleway)", "sans-serif"],
      },
      colors: {
        primary: "#0683e2",
        secondary: "#34495e",
        accent: "#4C6FE7",
      },

      animation: {
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-delay": "fade-in 1.5s ease-out forwards",
        "slide-in-fade": "slide-in-fade 1s ease-out forwards",
        "pulse-slow": "pulse 8s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-in-fade": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};
