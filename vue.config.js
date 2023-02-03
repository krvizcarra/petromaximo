const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "My Title",
    },
  },
};
