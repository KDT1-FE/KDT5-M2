const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    alias: { '~': path.resolve(__dirname, 'src') }
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true
  },
  module: {
    rules: [
      // {
      //   use: 'babel-loader',
      // },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'static'
        }
      ]
    })
  ]
  // presets: ['@babel/preset-env', '@babel/preset-react'],
  // plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
  // devserver: {
  //   port: 8080,
  // },
}
