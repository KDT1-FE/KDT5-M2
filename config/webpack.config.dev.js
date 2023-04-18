const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "index.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../build"),
    },
    port: 3000,
    liveReload: true,
    watchFiles: "index.html",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new CleanPlugin(),
  ],
};
