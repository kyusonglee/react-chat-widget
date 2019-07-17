'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = require('../../store/actions');

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Widget = function (_Component) {
  _inherits(Widget, _Component);

  function Widget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Widget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Widget.__proto__ || Object.getPrototypeOf(Widget)).call.apply(_ref, [this].concat(args))), _this), _this.toggleConversation = function () {
      _this.props.dispatch((0, _actions.toggleChat)());
    }, _this.handleMessageSubmit = function (event) {
      event.preventDefault();
      var userInput = event.target.message.value;
      if (userInput.trim()) {
        _this.props.dispatch((0, _actions.addUserMessage)(userInput));
        _this.props.handleNewUserMessage(userInput);
      }
      event.target.message.value = '';
    }, _this.handleQuickButtonClicked = function (event, value) {
      event.preventDefault();

      if (_this.props.handleQuickButtonClicked) {
        _this.props.handleQuickButtonClicked(value);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Widget, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.fullScreenMode) {
        this.props.dispatch((0, _actions.toggleChat)());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        onToggleConversation: this.toggleConversation,
        onSendMessage: this.handleMessageSubmit,
        onQuickButtonClicked: this.handleQuickButtonClicked,
        title: this.props.title,
        titleAvatar: this.props.titleAvatar,
        subtitle: this.props.subtitle,
        senderPlaceHolder: this.props.senderPlaceHolder,
        profileAvatar: this.props.profileAvatar,
        showCloseButton: this.props.showCloseButton,
        fullScreenMode: this.props.fullScreenMode,
        badge: this.props.badge,
        autofocus: this.props.autofocus,
        customLauncher: this.props.customLauncher,
        handleOnChangeMessage: this.props.handleOnChangeMessage,
        onLeft: this.props.onLeft
      });
    }
  }]);

  return Widget;
}(_react.Component);

Widget.propTypes = {
  title: _propTypes2.default.string,
  titleAvatar: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  handleNewUserMessage: _propTypes2.default.func.isRequired,
  handleQuickButtonClicked: _propTypes2.default.func.isRequired,
  senderPlaceHolder: _propTypes2.default.string,
  profileAvatar: _propTypes2.default.string,
  showCloseButton: _propTypes2.default.bool,
  fullScreenMode: _propTypes2.default.bool,
  badge: _propTypes2.default.number,
  handleOnChangeMessage: _propTypes2.default.func,
  autofocus: _propTypes2.default.bool,
  customLauncher: _propTypes2.default.func,
  onLeft: _propTypes2.default.bool
};

exports.default = (0, _reactRedux.connect)()(Widget);