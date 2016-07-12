const webpack = require('webpack');

module.exports = {

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },

  plugins: [
    new webpack.ProvidePlugin({
      reactCxs: 'react-cxs'
    })
  ]

}
