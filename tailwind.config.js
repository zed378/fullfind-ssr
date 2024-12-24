/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "spin-very-slow": "spin 60s linear infinite",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      hans: ["Black Han Sans", "sans-serif"],
      retro: ["retro"],
    },
    screens: {
      xs: "240px",
      sm: "360px",
      md: "480px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
      try2: "1285px",
      "3xl": "1400px",
      try: "1775px",
      hd: "1900px",
      wide: "1921px",
    },
  },
  plugins: [],
};
