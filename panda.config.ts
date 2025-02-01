import { panda_preset } from "@/theme/preset";
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  eject: true,
  minify: true,
  include: ["./src/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  exclude: [],
  jsxStyleProps: "none",
  cssVarRoot: ":root",
  outdir: "src/panda",
  importMap: "@/panda",
  jsxFramework: "react",
  presets: [panda_preset],
  hash: {
    className: true,
    cssVar: false,
  },
});
