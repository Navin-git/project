/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)"
        },
        secondary: {
          dark: "var(--secondary-dark)",
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)"
        },
        dark: {
          dark: "var(--dark-dark)",
          DEFAULT: "var(--dark)",
          light: "var(--dark-light)"
        },
        error: {
          DEFAULT: "var(--error)",
          light: "var(--error-light)"
        }
      }
    }
  },
  plugins: []
};
