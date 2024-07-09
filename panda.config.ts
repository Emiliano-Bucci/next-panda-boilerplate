import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

export default defineConfig({
  eject: true,
  minify: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  cssVarRoot: ":root",
  outdir: "src/styled-system",
  jsxFramework: "react",
  globalCss: defineGlobalStyles({
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      textWrap: "unset",
    },
  }),
  theme: {
    extend: {
      breakpoints: {
        base: "0px",
        xxs: "340px",
        xs: "600px",
        md: "768px",
        lg: "1024px",
        lgx: "1280px",
        lgxx: "1440px",
        xl: "1600px",
      },
    },
  },
});
