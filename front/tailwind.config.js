/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/aspect-ratio'),   
    nextui({
    prefix: "nextui", // prefix for themes variables
    addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      light: {
        // ...
        colors: {},
      },
      dark: {
        // ...
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
      // ... custom themes
    },
  }),
],
}

