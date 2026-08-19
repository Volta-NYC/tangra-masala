import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f1e5",
        cream: "#fffaf0",
        ink: "#171410",
        forest: "#124331",
        red: "#b42f24",
        gold: "#e8b94e",
      },
    },
  },
  plugins: [],
};

export default config;
