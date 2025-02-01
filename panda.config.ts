import { panda_preset } from "@/theme/preset";
import { pluginRemoveFeatures } from "@pandabox/panda-plugins";
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
  plugins: [
    pluginRemoveFeatures({
      features: ["no-jsx", "no-patterns", "no-sva", "no-styled"],
    }),
  ],
  hash: {
    className: true,
    cssVar: false,
  },
});
