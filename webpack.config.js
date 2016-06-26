module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      }
    ]
  }
}
