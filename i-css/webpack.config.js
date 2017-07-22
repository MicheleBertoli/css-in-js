module.exports = {
  module: {
    loaders: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
};