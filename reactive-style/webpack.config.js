module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
    }]
  }
}
