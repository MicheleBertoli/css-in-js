var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.styling\.js/,
      loader: ExtractTextPlugin.extract('style', 'css!styling!babel')
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
