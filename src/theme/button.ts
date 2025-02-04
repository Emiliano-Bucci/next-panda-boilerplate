import { defineRecipe } from "@pandacss/dev";

export const buttonRecipe = defineRecipe({
  className: "button",
  jsx: ["Button"],
  base: {
    position: "relative",
    cursor: "pointer",
  },
  variants: {},
});
