const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
  },
});
