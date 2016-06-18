module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }, {
      test: /\.css.js$/,
      loader: 'style!css!cess!babel'
    }]
  }
}
