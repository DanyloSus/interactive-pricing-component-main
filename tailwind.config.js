/** @type {import('tailwindcss')",.config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "full-slider-bar": "hsl(174, 77%, 80%)",
        "slider-backround": "hsl(174, 86%, 45%)",
        "discount-background": "hsl(14, 92%, 95%)",
        "discount-text": "hsl(15, 100%, 70%)",
        "cta-text": "hsl(226, 100%, 87%)",

        "pricing-component-background": "hsl (0, 0%, 100%)",
        "main-background": "hsl(230, 100%, 99%)",
        "empty-slider-bar": "hsl(224, 65%, 95%)",
        "toggle-background": "hsl(223, 50%, 87%)",
        text: "hsl(225, 20%, 60%)",
        "text-cta-background": "hsl(227, 35%, 25%)",
      },
      dropShadow: {
        range: "20px 0px 20px hsl(174, 77%, 80%)",
      },
      screens: {
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
