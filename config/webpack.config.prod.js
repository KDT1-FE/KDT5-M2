const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");

// Production
module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "js/[name].[hash:8].js",
    sourceMapFilename: "./js/[id].[hash:8].js.map",
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, "../src"),
    },
    extensions: ["", ".js", ".json", ".jsx"],
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
      // Source-Map-Loader
      {
        test: [/\.js$/, /\.jsx>/],
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new CleanPlugin(),
  ],
};
