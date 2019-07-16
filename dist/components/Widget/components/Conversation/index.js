'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Messages = require('./components/Messages');

var _Messages2 = _interopRequireDefault(_Messages);

var _Sender = require('./components/Sender');

var _Sender2 = _interopRequireDefault(_Sender);

var _QuickButtons = require('./components/QuickButtons');

var _QuickButtons2 = _interopRequireDefault(_QuickButtons);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Conversation = function Conversation(props) {
  return _react2.default.createElement(
    'div',
    { className: 'rcw-conversation-container' },
    _react2.default.createElement(_Header2.default, {
      title: props.title,
      subtitle: props.subtitle,
      toggleChat: props.toggleChat,
      showCloseButton: props.showCloseButton,
      titleAvatar: props.titleAvatar
    }),
    _react2.default.createElement(_Messages2.default, {
      profileAvatar: props.profileAvatar
    }),
    _react2.default.createElement(_QuickButtons2.default, { onQuickButtonClicked: props.onQuickButtonClicked }),
    _react2.default.createElement(_Sender2.default, {
      sendMessage: props.sendMessage,
      handleOnChangeMessage: props.handleOnChangeMessage,
      placeholder: props.senderPlaceHolder,
      disabledInput: props.disabledInput,
      autofocus: props.autofocus
    })
  );
};

Conversation.propTypes = {
  title: _propTypes2.default.string,
  titleAvatar: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  sendMessage: _propTypes2.default.func,
  senderPlaceHolder: _propTypes2.default.string,
  profileAvatar: _propTypes2.default.string,
  toggleChat: _propTypes2.default.func,
  showCloseButton: _propTypes2.default.bool,
  disabledInput: _propTypes2.default.bool,
  handleOnChangeMessage: _propTypes2.default.func,
  autofocus: _propTypes2.default.bool
};

exports.default = Conversation;