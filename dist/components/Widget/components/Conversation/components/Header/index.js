'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clearButton = require('../../../../../../../assets/clear-button.svg');

var _clearButton2 = _interopRequireDefault(_clearButton);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      toggleChat = _ref.toggleChat,
      showCloseButton = _ref.showCloseButton,
      titleAvatar = _ref.titleAvatar;
  return _react2.default.createElement(
    'div',
    { className: 'rcw-header' },
    showCloseButton && _react2.default.createElement(
      'button',
      { className: 'rcw-close-button', onClick: toggleChat },
      _react2.default.createElement('img', { src: _clearButton2.default, className: 'rcw-close', alt: 'close' })
    ),
    _react2.default.createElement(
      'h4',
      { className: 'rcw-title' },
      titleAvatar && _react2.default.createElement('img', { src: titleAvatar, className: 'avatar', alt: 'profile' }),
      title
    ),
    _react2.default.createElement(
      'span',
      null,
      subtitle
    )
  );
};

Header.propTypes = {
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  toggleChat: _propTypes2.default.func,
  showCloseButton: _propTypes2.default.bool,
  titleAvatar: _propTypes2.default.string
};
exports.default = Header;