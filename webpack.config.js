const { truncate } = require("fs")
const path = require("path")

module.exports = {
    experiments: {
        topLevelAwait: true
    },
  entry : "./src/app.js",
  output : {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  },
  resolve: {
    fallback: {
      fs: false
    }
  }
}