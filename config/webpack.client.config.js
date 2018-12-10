const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-client.js'),
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    minimize: true,
    splitChunks: {
      chunks: 'async',
      cacheGroups: {
        commons: {
          name: "common",
          chunks: "all",
          minChunks: 3,
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          test: /node_modules/,
          chunks: "all",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new VueSSRClientPlugin(),
    new CopyWebpackPlugin([
      {
        from: 'static/*',
        to: path.resolve(__dirname, '../dist'),
        context: path.resolve(__dirname, '../src'),
      }
    ]),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[chunkhash].css",
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, '../src/index.html'),
    //   inject: 'body',
    // }),
  ],
});