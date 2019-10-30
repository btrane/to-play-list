const {
  override,
  addDecoratorsLegacy
} = require('customize-cra');

module.exports = override(
  // allow decorators
  addDecoratorsLegacy()
);