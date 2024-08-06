const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/client/scripts/home.ts",
    test: "./src/client/scripts/test.ts"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./public/dist/scripts/bundles"),
  },
  module: {
    rules: [
      { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          },
        },
      }
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
