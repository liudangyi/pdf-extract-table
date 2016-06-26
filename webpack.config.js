module.exports = {
  entry: './src/main.js',
  output: {
    path: 'dist',
    publicPath: 'dist/',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]',
        },
      },
    ]
  }
}
