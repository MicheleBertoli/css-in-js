module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['babel', 'react-map-styles']
    }]
  }
}
