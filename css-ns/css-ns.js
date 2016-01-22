var createCssNs = require('css-ns');
var React = require('react');

module.exports = function(namespace) {
  return createCssNs({
    namespace,
    React
  });
};
