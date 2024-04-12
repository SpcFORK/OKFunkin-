const path = require("path");

module.exports = {
  mode: "production",
  entry: "./index.ts", // Assuming your entry point is index.ts in src
  output: {
    filename: "exports.js",
    path: path.resolve(__dirname, "../JS"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
};
