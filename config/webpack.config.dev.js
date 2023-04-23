const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin, DefinePlugin } = require("webpack");

// Development
module.exports = {
  mode: "development",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../build"),
    },
    port: 3000,
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      // Babel-Loader
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
      // CSS-Loader
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // SASS-Loader
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanPlugin(),
    new DefinePlugin({
      process: { env: {} },
    }),
  ],
};
