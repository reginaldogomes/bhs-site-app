import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0984e3", // Azul Elétrico
        secondary: "#28A745", // Verde Limão
        background: "#F8F9FA", // Cinza Claro
        footer: "#343A40", // Cinza Escuro
        textPrimary: "#212529", // Preto/Cinza Escuro
        textSecondary: "#6C757D", // Cinza Claro
      },
    },
  },
  plugins: [],
} satisfies Config;
