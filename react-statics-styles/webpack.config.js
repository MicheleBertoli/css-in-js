module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(bower_components)/,
      loader: 'babel?stage=0'
    }]
  }
}
