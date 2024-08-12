import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        "pc": "1280px",
        "mo": "100%"
      }
    },
  },
  plugins: [],
};
export default config;
