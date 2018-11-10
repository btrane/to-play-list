const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {

  // allow decorators
  config = injectBabelPlugin([
    '@babel/plugin-proposal-decorators',
    {
      legacy: true
    }
  ], config)

  return config
}