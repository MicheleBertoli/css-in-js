module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel?stage=0'
    }, {
      test: /\.css$/,
      loaders: [
        'style/useable',
        'css'
      ]
    }]
  }
}
