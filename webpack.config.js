const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { AngularCompilerPlugin } = require("@ngtools/webpack");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // обработка файлов TypeScript
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
