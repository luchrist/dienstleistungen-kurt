import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bone: "#F7F6F2",
        creme: "#ECEAE3",
        ink: "#14181A",
        laub: {
          50: "#F1F6E9",
          100: "#DFEBC9",
          200: "#BFD79B",
          300: "#8CC63F",
          400: "#6A9B2E",
          500: "#4E7A1C",
          600: "#3D6016",
          700: "#2F4A11",
          800: "#24390D",
          900: "#172609"
        },
        erde: {
          50: "#F8F2EA",
          100: "#EDE0CD",
          200: "#DBC2A0",
          300: "#C6A172",
          400: "#B3874F",
          500: "#9A6F3C",
          600: "#7D5930",
          700: "#5F4425",
          800: "#46321B",
          900: "#2E2112"
        },
        kies: {
          50: "#F4F4F4",
          100: "#E6E6E6",
          200: "#CDCECF",
          300: "#B0B1B3",
          400: "#949597",
          500: "#7C7D80",
          600: "#636467",
          700: "#4C4D50",
          800: "#363739",
          900: "#232426"
        }
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"]
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      }
    }
  },
  plugins: []
};

export default config;
