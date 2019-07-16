'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(props) {
  return _react2.default.createElement(
    'div',
    { className: 'loader ' + (props.typing && 'active') },
    _react2.default.createElement(
      'div',
      { className: 'loader-container' },
      _react2.default.createElement('span', { className: 'loader-dots' }),
      _react2.default.createElement('span', { className: 'loader-dots' }),
      _react2.default.createElement('span', { className: 'loader-dots' })
    )
  );
};

Loader.propTypes = {
  typing: _propTypes2.default.bool
};

exports.default = Loader;