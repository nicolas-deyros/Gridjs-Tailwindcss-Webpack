const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({ sourceMap: true }),
      new TerserPlugin({ sourceMap: true }),
      // new CompressionPlugin({
      //   filename: '[path].gz',
      //   algorithm: 'gzip',
      //   test: /\.(js|html|css)$/,
      //   threshold: 10240,
      //   minRatio: 0.8,
      // }),
      new CompressionPlugin({
        filename: '[path].br',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          // zlib’s `level` option matches Brotli’s `BROTLI_PARAM_QUALITY` option.
          level: 11,
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false,
      }),
    ],
  },
});
