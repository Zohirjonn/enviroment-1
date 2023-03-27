/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "1340px": "1340px",
        "820px": "820px",
        "560px": "560px",
        "300px": "300px",
        "250px": "250px",
        "200px": "200px",
        "160px": "160px",
        "60%": "60%",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1340px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        small: { max: "639.9px" },
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      boxShadow: {
        def: " 0px 2px 4px rgba(0, 0, 0, 0.04)",
        fil: "0px 5px 15px rgba(0, 0, 0, 0.09)",
      },
      padding: {
        DEFAULT: "1px",
        "14px": "14px",
        "22px": "22px",
        "30px": "30px",
        "40px": "40px",
        "120px": "120px",
        "140px": "140px",
      },
      margin: {
        "40px": "40px",
        "35px": "35px",
        "30px": "30px",
      },
      width: {
        "22px": "24px",
        "60%": "60%",
      },
      height: {
        "22px": "24px",
      },
    },
    colors: {
      "white-1": "#FFFFFF",
      "white-2": "#F9F9F9",
      "white-3": "#B6B6B6",
      "white-4": "#F6F6F6",
      "white-5": "#F3F3F3",
      "black-1": "#000000",
      "black-2": "#282828",
      "black-3": "#364F6B",
      "orange-1": "#EB5A1E",
      "orange-2": "#EB5A1E",
    },
    borderRadius: {
      large: "30px",
      "10px": "10px",
      "5px": "5px",
      "50%": "50%",
    },
    backgroundImage: {
      "pizza-logo": "url('../images/pitsanav.svg')",
      "t-1": "url('../images/111.svg')",
      "top-korz": "url('../images/korzina.svg')",
      "empty-img": "url('../src/assets/images/shopping-cart-colour 1.svg')",
      "smile-img": "url('../src/assets/images/😕.svg')",
      "de-img": "url('../src/assets/images/Group 35.svg')",
      "in-img": "url('../src/assets/images/Group 34.svg')",
      "clean-img": "url('../src/assets/images/Group 36.svg')",
      "kor-img":
        "url('../src/assets/images/iconfinder_shopping-cart_2561279 1.svg')",
      "trash-img":
        "url('../src/assets/images/iconfinder_trash-2_3324927 1.svg')",
      "path-img": "url('../src/assets/images/_Path_.svg')",
    },
  },
  plugins: [],
};
