const { merge } = require('webpack-merge');

module.exports = (env) => {
  const envConfig = require(`./build-utils/webpack.config.${env.env}.js`);
  return merge(envConfig);
};
