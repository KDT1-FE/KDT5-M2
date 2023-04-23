const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  entry: "./src/main.js",
  output: {
    // Default
    // path: path.resolve(__dirname, "dist"),
    // filename: "kled.js",
    clean: true,
  },
  module: {
    //  jsx와 js는 babel(바벨)을 이용하여 빌드
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/, // .scss || .css로 끝나는 파일을 찾음
        use: [
          // 순서 유의 (style, css, sass)
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
