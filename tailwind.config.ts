import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#edf6ef",
        cream: "#fbfff7",
        ink: "#14251c",
        forest: "#6f9f7c",
        red: "#b64a34",
        gold: "#d8a84a",
      },
    },
  },
  plugins: [],
};

export default config;
