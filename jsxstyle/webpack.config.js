var path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel!' + path.join(__dirname, 'node_modules/jsxstyle/lib/webpackLoader.js')
    }]
  }
}
