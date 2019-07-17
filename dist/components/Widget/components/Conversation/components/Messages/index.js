'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

var _reactRedux = require('react-redux');

var _actions = require('../../../../../../store/actions');

var _messages = require('../../../../../../utils/messages');

var _Loader = require('./components/Loader');

var _Loader2 = _interopRequireDefault(_Loader);

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Messages = function (_Component) {
  _inherits(Messages, _Component);

  function Messages() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Messages);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Messages.__proto__ || Object.getPrototypeOf(Messages)).call.apply(_ref, [this].concat(args))), _this), _this.$message = null, _this.getComponentToRender = function (message) {
      var ComponentToRender = message.get('component');
      var previousMessage = _this.props.messages.get();
      if (message.get('type') === 'component') {
        return _react2.default.createElement(ComponentToRender, message.get('props'));
      }
      return _react2.default.createElement(ComponentToRender, { message: message });
    }, _this.shouldRenderAvatar = function (message, index) {
      var previousMessage = _this.props.messages.get(index - 1);
      if (message.get('showAvatar') && previousMessage.get('showAvatar')) {
        _this.props.dispatch((0, _actions.hideAvatar)(index));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Messages, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _messages.scrollToBottom)(this.$message);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _messages.scrollToBottom)(this.$message);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          messages = _props.messages,
          profileAvatar = _props.profileAvatar,
          typing = _props.typing;

      return _react2.default.createElement(
        'div',
        { id: 'messages', className: 'rcw-messages-container', ref: function ref(msg) {
            return _this2.$message = msg;
          } },
        messages.map(function (message, index) {
          return _react2.default.createElement(
            'div',
            { className: 'rcw-message', key: index },
            profileAvatar && message.get('showAvatar') && _react2.default.createElement('img', { src: profileAvatar, className: 'rcw-avatar', alt: 'profile' }),
            _this2.getComponentToRender(message)
          );
        }),
        _react2.default.createElement(_Loader2.default, { typing: typing })
      );
    }
  }]);

  return Messages;
}(_react.Component);

Messages.propTypes = {
  messages: _reactImmutableProptypes2.default.listOf(_reactImmutableProptypes2.default.map),
  profileAvatar: _propTypes2.default.string
};

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    messages: store.messages,
    typing: store.behavior.get('msgLoader')
  };
})(Messages);