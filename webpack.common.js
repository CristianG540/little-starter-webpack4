const path = require('path')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'], // Agrego el babel-polyfill para trabajar con async/await
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  target: 'web'
}
