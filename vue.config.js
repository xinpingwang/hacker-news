const tailwindcss = require("@tailwindcss/postcss7-compat");
const autoprefixer = require("autoprefixer");

module.exports = {
  lintOnSave: false,
  publicPath: "./",
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  },
};
