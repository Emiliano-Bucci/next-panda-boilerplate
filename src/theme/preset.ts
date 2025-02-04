import { theme_breakpoints } from "@/theme/breakpoints";
import { buttonRecipe } from "@/theme/button";
import { definePreset } from "@pandacss/dev";
import pandaBasePreset from "@pandacss/preset-base";

import { textRecipe } from "./text";

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
    recipes: {
      textRecipe,
      buttonRecipe,
    },
  },
});
