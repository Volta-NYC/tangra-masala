import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#e7e9e2",
        cream: "#f4f1e9",
        ink: "#2a1727",
        forest: "#33685f",
        red: "#8e3d54",
        gold: "#cfb56f",
      },
    },
  },
  plugins: [],
};

export default config;
