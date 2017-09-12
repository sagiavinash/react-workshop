const path = require('path');
const config = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 8080,
    hot: true,
    lazy: false,
  },
  entry: path.resolve(__dirname, './src/js/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel-loader', // The module to load. "babel" is short for "babel-loader"
      exclude: /node_modules/,
      options: {
        presets: ['es2015', 'react', 'stage-0'],
      },
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
