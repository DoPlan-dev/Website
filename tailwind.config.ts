import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Brand palette — restricted to the five provided solid colors:
        // #D83F87, #2A1B3D, #44318D, #E98074, #A4B3B6
        //
        // We still expose numeric shades for convenience in Tailwind classes,
        // but every shade of a given token resolves to the same solid color.
        accent: {
          DEFAULT: "#D83F87",
          50: "#D83F87",
          100: "#D83F87",
          200: "#D83F87",
          300: "#D83F87",
          400: "#D83F87",
          500: "#D83F87",
          600: "#D83F87",
          700: "#D83F87",
          800: "#D83F87",
          900: "#D83F87",
        },
        dark: {
          DEFAULT: "#2A1B3D",
          50: "#2A1B3D",
          100: "#2A1B3D",
          200: "#2A1B3D",
          300: "#2A1B3D",
          400: "#2A1B3D",
          500: "#2A1B3D",
          600: "#2A1B3D",
          700: "#2A1B3D",
          800: "#2A1B3D",
          900: "#2A1B3D",
        },
        primary: {
          DEFAULT: "#44318D",
          50: "#44318D",
          100: "#44318D",
          200: "#44318D",
          300: "#44318D",
          400: "#44318D",
          500: "#44318D",
          600: "#44318D",
          700: "#44318D",
          800: "#44318D",
          900: "#44318D",
        },
        secondary: {
          DEFAULT: "#E98074",
          50: "#E98074",
          100: "#E98074",
          200: "#E98074",
          300: "#E98074",
          400: "#E98074",
          500: "#E98074",
          600: "#E98074",
          700: "#E98074",
          800: "#E98074",
          900: "#E98074",
        },
        light: {
          DEFAULT: "#A4B3B6",
          50: "#A4B3B6",
          100: "#A4B3B6",
          200: "#A4B3B6",
          300: "#A4B3B6",
          400: "#A4B3B6",
          500: "#A4B3B6",
          600: "#A4B3B6",
          700: "#A4B3B6",
          800: "#A4B3B6",
          900: "#A4B3B6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "typing": "typing 2s steps(20) infinite",
        "blink": "blink 1s infinite",
      },
      keyframes: {
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

