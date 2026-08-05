/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "../../apps/**/*.{ts,tsx}",
    "../../packages/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        background: "#FAFAF8",
        surface: "#FFFFFF",
        primary: {
          DEFAULT: "#202A36",
          foreground: "#FAFAF8"
        },
        secondary: {
          DEFAULT: "#6B7280",
          foreground: "#202A36"
        },
        accent: {
          DEFAULT: "#C8A86B",
          hover: "#B8975B",
          light: "#F7F3EA"
        },
        border: "rgba(0,0,0,0.08)",
        success: "#34C759",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "28px",
      },
      fontFamily: {
        sans: ["General Sans", "Plus Jakarta Sans", "Inter", "sans-serif"],
        display: ["General Sans", "Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight: "-0.02em"
      },
      boxShadow: {
        "subtle": "0 2px 15px rgba(0, 0, 0, 0.03), 0 1px 3px rgba(0, 0, 0, 0.05)",
        "hover": "0 10px 30px rgba(0, 0, 0, 0.06)",
        "card": "0 4px 20px rgba(0, 0, 0, 0.03)"
      }
    },
  },
  plugins: [],
};
