/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1430" },
      // => @media (max-width: 1535px) { ... }

      // xl: { max: "1023px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1440px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1024px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "768px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "320px" },
    },
  },
};
