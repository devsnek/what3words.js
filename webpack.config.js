const UglifyJS = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'browser.js',
    library: 'w3w',
    libraryTarget: 'umd',
  },
  plugins: [
    new UglifyJS(),
  ],
  module: {
    rules: [
      ...require('snekfetch/webpack.supplemental').rules,
    ],
  },
};
