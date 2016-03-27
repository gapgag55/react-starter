module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    filename: 'bundle.js',
    publicPath: '/public'
  },
  devServer: {
    inline: true,
    port: 5555
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
