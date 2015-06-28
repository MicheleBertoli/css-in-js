var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, { 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize')
    }]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}
