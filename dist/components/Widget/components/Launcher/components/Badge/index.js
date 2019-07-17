'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function Badge(_ref) {
  var badge = _ref.badge;
  return badge > 0 && _react2.default.createElement(
    'span',
    { className: 'rcw-badge' },
    badge
  );
};

Badge.propTypes = {
  badge: _propTypes2.default.number
};

exports.default = Badge;