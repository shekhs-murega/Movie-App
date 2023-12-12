// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Allow importing outside of src/
  config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules'];
  return config;
};
