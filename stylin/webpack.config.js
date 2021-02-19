module.exports = {
  mode: `production`,
  entry: `./button.js`,
  output: {
    path: __dirname,
    filename: `bundle.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-react`]
          }
        },
      },
      {
        test: /\.scss$/i,
        use: [
          `@stylin/msa-loader`,
          `style-loader`,
          {loader: `css-loader`, options: {modules: true}},
          `sass-loader`
        ]
      }
    ]
  }
}
