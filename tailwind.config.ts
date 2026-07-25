import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111820",
        blue: "#087BEA",
        deep: "#071D38",
        ice: "#EFF7FC",
        line: "#DCE7EE"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-oswald)", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
