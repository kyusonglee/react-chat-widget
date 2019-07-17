'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _Widget = require('./components/Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _store = require('../src/store/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedWidget = function ConnectedWidget(props) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_Widget2.default, {
      title: props.title,
      titleAvatar: props.titleAvatar,
      subtitle: props.subtitle,
      handleNewUserMessage: props.handleNewUserMessage,
      handleQuickButtonClicked: props.handleQuickButtonClicked,
      senderPlaceHolder: props.senderPlaceHolder,
      profileAvatar: props.profileAvatar,
      showCloseButton: props.showCloseButton,
      fullScreenMode: props.fullScreenMode,
      badge: props.badge,
      autofocus: props.autofocus,
      customLauncher: props.launcher,
      handleOnChangeMessage: props.handleOnChangeMessage,
      onLeft: props.onLeft
    })
  );
};

ConnectedWidget.propTypes = {
  title: _propTypes2.default.string,
  titleAvatar: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  handleNewUserMessage: _propTypes2.default.func.isRequired,
  handleQuickButtonClicked: _propTypes2.default.func,
  senderPlaceHolder: _propTypes2.default.string,
  profileAvatar: _propTypes2.default.string,
  showCloseButton: _propTypes2.default.bool,
  fullScreenMode: _propTypes2.default.bool,
  badge: _propTypes2.default.number,
  autofocus: _propTypes2.default.bool,
  launcher: _propTypes2.default.func,
  handleOnChangeMessage: _propTypes2.default.func,
  onLeft: _propTypes2.default.bool
};

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  fullScreenMode: false,
  badge: 0,
  autofocus: true,
  onLeft: true
};

exports.default = ConnectedWidget;