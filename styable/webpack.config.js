const StylablePlugin = require('stylable-integration/webpack-plugin');

module.exports = {
  module: {
    rules: [
      StylablePlugin.rule(),
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new StylablePlugin(),
  ],
}
