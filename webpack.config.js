module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    port: 8000,
    historyApiFallback: true, // เหมือนให้ใช้ api router ของ react
    contentBase: './public' // เรียก root folder public
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
