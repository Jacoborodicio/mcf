const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
      port: 8080,
      historyApiFallback: true,
      contentBase: './',
      hot: true,
      index: 'index.html'
  },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: "marketing@http://localhost:8081/remoteEntry.js",
                dashboard: "dashboard@http://localhost:8082/remoteEntry.js",
                codeSchool: "codeSchool@http://localhost:8084/remoteEntry.js"
            },
            shared: packageJson.dependencies
        }),
    ],
};

// merge: Last parameter will overwrite the keys in common
module.exports = merge(commonConfig, devConfig);
