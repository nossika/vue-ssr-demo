const webpack = require('webpack');
const path = require('path');
const del = require('del');
const clientConfig = require('../config/webpack.client.config');
const clientCompiler = webpack(clientConfig);
const serverConfig = require('../config/webpack.server.config');
const serverCompiler = webpack(serverConfig);

(async () => {
  await del([path.resolve(__dirname, '../dist/**')]);
  
  clientCompiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
      return;
    }
    if (stats.hasErrors()) {
      console.error(stats.toJson().errors);
      return;
    }
    console.log('clientCompiler ok');
  });
  
  serverCompiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
      return;
    }
    if (stats.hasErrors()) {
      console.error(stats.toJson().errors);
      return;
    }
    console.log('serverCompiler ok');
  });

})()

