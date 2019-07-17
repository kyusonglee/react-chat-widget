'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _send_button = require('../../../../../../../assets/send_button.svg');

var _send_button2 = _interopRequireDefault(_send_button);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sender = function (_Component) {
  _inherits(Sender, _Component);

  function Sender() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sender);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sender.__proto__ || Object.getPrototypeOf(Sender)).call.apply(_ref, [this].concat(args))), _this), _this.input = _react2.default.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sender, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.input.current.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          sendMessage = _props.sendMessage,
          placeholder = _props.placeholder,
          disabledInput = _props.disabledInput,
          autofocus = _props.autofocus,
          handleOnChangeMessage = _props.handleOnChangeMessage;

      return _react2.default.createElement(
        'form',
        { className: 'rcw-sender', onSubmit: sendMessage },
        _react2.default.createElement('input', { type: 'text', className: 'rcw-new-message', name: 'message', onChange: handleOnChangeMessage, placeholder: placeholder, disabled: disabledInput, autoFocus: autofocus, autoComplete: 'off', ref: this.input }),
        _react2.default.createElement(
          'button',
          { type: 'submit', className: 'rcw-send' },
          _react2.default.createElement('img', { src: _send_button2.default, className: 'rcw-send-icon', alt: 'send' })
        )
      );
    }
  }]);

  return Sender;
}(_react.Component);

Sender.propTypes = {
  handleOnChangeMessage: _propTypes2.default.func,
  sendMessage: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  disabledInput: _propTypes2.default.bool,
  autofocus: _propTypes2.default.bool
};

exports.default = Sender;