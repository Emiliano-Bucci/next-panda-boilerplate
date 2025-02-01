import { theme_breakpoints } from "@/theme/breakpoints";
import { definePreset } from "@pandacss/dev";
import pandaBasePreset from "@pandacss/preset-base";

export const panda_preset = definePreset({
  name: "@/preset",
  utilities: pandaBasePreset.utilities,
  conditions: {
    ...pandaBasePreset.conditions,
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },
  theme: {
    breakpoints: theme_breakpoints,
  },
});
