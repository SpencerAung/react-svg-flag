const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src',
  devtool: 'source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new CompressionPlugin()
  ]
};