module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      test: /\.react.css$/,
      loader: 'babel!react-css-components/webpack',
    }]
  }
}
