var path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env', 'babel-preset-react']
        }
      }
    }]
  }
}
