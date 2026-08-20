import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#eaf0f7",
        cream: "#f7f9fd",
        ink: "#0b1020",
        forest: "#5269ff",
        red: "#ff5d7a",
        gold: "#d8f34d",
      },
    },
  },
  plugins: [],
};

export default config;
