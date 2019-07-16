'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _markdownIt = require('markdown-it');

var _markdownIt2 = _interopRequireDefault(_markdownIt);

var _markdownItSup = require('markdown-it-sup');

var _markdownItSup2 = _interopRequireDefault(_markdownItSup);

var _markdownItSanitizer = require('markdown-it-sanitizer');

var _markdownItSanitizer2 = _interopRequireDefault(_markdownItSanitizer);

var _markdownItLinkAttributes = require('markdown-it-link-attributes');

var _markdownItLinkAttributes2 = _interopRequireDefault(_markdownItLinkAttributes);

var _constants = require('../../../../../../../../constants.js');

require('./styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var sanitizedHTML = (0, _markdownIt2.default)().use(_markdownItSup2.default).use(_markdownItSanitizer2.default).use(_markdownItLinkAttributes2.default, { attrs: { target: '_blank', rel: 'noopener' } }).render(this.props.message.get('text'));

      return _react2.default.createElement(
        'div',
        { className: 'rcw-' + this.props.message.get('sender') },
        _react2.default.createElement('div', { className: 'rcw-message-text', dangerouslySetInnerHTML: { __html: sanitizedHTML } })
      );
    }
  }]);

  return Message;
}(_react.PureComponent);

Message.propTypes = {
  message: _constants.PROP_TYPES.MESSAGE
};

exports.default = Message;