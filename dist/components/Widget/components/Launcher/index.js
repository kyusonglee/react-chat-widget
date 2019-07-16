'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _launcher_button = require('../../../../../assets/launcher_button.svg');

var _launcher_button2 = _interopRequireDefault(_launcher_button);

var _clearButton = require('../../../../../assets/clear-button.svg');

var _clearButton2 = _interopRequireDefault(_clearButton);

var _Badge = require('./components/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Launcher = function Launcher(_ref) {
  var toggle = _ref.toggle,
      chatOpened = _ref.chatOpened,
      badge = _ref.badge;
  return _react2.default.createElement(
    'button',
    { type: 'button', className: chatOpened ? 'rcw-launcher rcw-hide-sm' : 'rcw-launcher', onClick: toggle },
    _react2.default.createElement(_Badge2.default, { badge: badge }),
    chatOpened ? _react2.default.createElement('img', { src: _clearButton2.default, className: 'rcw-close-launcher', alt: '' }) : _react2.default.createElement('img', { src: _launcher_button2.default, className: 'rcw-open-launcher', alt: '' })
  );
};

Launcher.propTypes = {
  toggle: _propTypes2.default.func,
  chatOpened: _propTypes2.default.bool,
  badge: _propTypes2.default.number
};

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    chatOpened: store.behavior.get('showChat')
  };
})(Launcher);