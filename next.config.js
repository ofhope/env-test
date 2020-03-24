const webpack = require('webpack');

// webpack: (config) => {
//   config.plugins.push(new webpack.EnvironmentPlugin(process.env));
//   return config;
// },

module.exports = {
  env: {
    'MY_ENV': process.env.MY_ENV
  },
  publicRuntimeConfig: {
    'MY_ENV': process.env.MY_ENV
  }
};