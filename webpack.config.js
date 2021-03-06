// Webpack is used to compile JavaScript modules.

const path = require('path');

module.exports = {
  /**
   * Entry point indicates which module webpack should use to begin building out
   * its internal dependency graph. 
   */
  entry: './src/index.js',

  /**
   * Output property tells webpack where to emit the bundles it creates and how
   * to name those files. Here it says to the 'dist' folder.
   */
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};