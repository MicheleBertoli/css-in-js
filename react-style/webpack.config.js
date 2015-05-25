var ReactStylePlugin = require('react-style-webpack-plugin');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: [
        ReactStylePlugin.loader(),
        'babel'
      ]
    }]
  },
  plugins: [
    new ReactStylePlugin('bundle.css')
  ]
}
