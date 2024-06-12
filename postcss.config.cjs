module.exports = {
  plugins: [
    "@pandacss/dev/postcss",
    "@csstools/postcss-cascade-layers",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 2,
        features: {
          "custom-properties": true,
        },
      },
    ],
  ],
};
