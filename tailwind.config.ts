import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF7F2",
        sand: "#F3EDE3",
        marble: "#F5F4F0",
        charcoal: "#1C1917",
        bronze: {
          50: "#FAF6EE",
          100: "#F3EAD3",
          200: "#E6D3A3",
          300: "#D7B973",
          400: "#C9A252",
          500: "#B8893B",
          600: "#9A7130",
          700: "#7A5A28",
          800: "#5C4420",
          900: "#40301A",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 50px -20px rgba(28,25,23,0.25)",
        card: "0 10px 30px -12px rgba(28,25,23,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
