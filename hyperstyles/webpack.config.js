var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel?stage=0'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?modules')
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
