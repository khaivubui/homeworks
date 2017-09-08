module.exports = {
  entry: './app.jsx',
  output: {
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
