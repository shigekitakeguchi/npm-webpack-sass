var webpack = require("webpack");

module.exports = {
  entry: './src/scripts/app.js',
  output: {
    path: __dirname + '/app/js',
    filename: 'bundle.js',
		publicPath: '/app/',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
