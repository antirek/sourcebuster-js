const path = require('path');

module.exports = {
  entry: './src/js/sourcebuster.js',
  output: {
    filename: 's.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: 'sbjs',
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      /*
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      */
    ],
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: true,
  },
};
