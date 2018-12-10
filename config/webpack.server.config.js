const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const path = require('path');

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, '../src/entry-server.js'),
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
  },
  devtool: 'source-map',
  externals: nodeExternals({
    whitelist: /\.(css|scss|sass)$/,
  }),
  plugins: [
    new VueSSRServerPlugin(),
  ],
});