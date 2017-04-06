module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader?-minimize&-import&-modules!postcss-loader!sass-loader',
      exclude: /(node_modules|bower_components)/,
    }]
  }
};
