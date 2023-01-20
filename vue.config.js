const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "My Title",
    },
  },
};
