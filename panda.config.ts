import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  minify: true,
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  cssVarRoot: ":root",
  outdir: "src/styled-system",
  jsxFramework: "react",
  theme: {
    extend: {},
  },
});
