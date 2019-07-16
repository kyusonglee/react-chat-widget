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

var _Conversation = require('./components/Conversation');

var _Conversation2 = _interopRequireDefault(_Conversation);

var _Launcher = require('./components/Launcher');

var _Launcher2 = _interopRequireDefault(_Launcher);

require('./style.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WidgetLayout = function (_React$Component) {
  _inherits(WidgetLayout, _React$Component);

  function WidgetLayout(props) {
    _classCallCheck(this, WidgetLayout);

    return _possibleConstructorReturn(this, (WidgetLayout.__proto__ || Object.getPrototypeOf(WidgetLayout)).call(this, props));
  }

  _createClass(WidgetLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(document.styleSheets);
      var slide_in = void 0,
          slide_out = void 0;
      for (var x = 0; x < document.styleSheets.length; ++x) {
        for (var y = 0; y < document.styleSheets[x].cssRules.length; ++y) {
          if (document.styleSheets[x].cssRules[y].name !== undefined) {
            if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 0; transform: translateX(300px); }" && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE) {
              slide_in = document.styleSheets[x].cssRules[y];
            }
            if (document.styleSheets[x].cssRules[y].cssRules[0].cssText === "0% { opacity: 1; transform: translateX(0px); }" && document.styleSheets[x].cssRules[y].type === CSSRule.KEYFRAMES_RULE) {
              slide_out = document.styleSheets[x].cssRules[y];
            }
          }
        }
      }

      if (this.props.onLeft) {
        slide_in.appendRule("0% { transform: translateX(0px); opacity: 0; }");
        slide_in.appendRule("100% { transform: translateX(20px); opacity: 1; }");
        slide_out.appendRule("0% { transform: translateX(20px); opacity: 0; }");
        slide_out.appendRule("100% { transform: translateX(0px); opacity: 1; }");
        document.querySelector(".rcw-widget-container").style.left = 0;
        document.querySelector(".rcw-launcher").style.left = "10px";
      } else {
        document.querySelector(".rcw-widget-container").style.right = 0;
        document.querySelector(".rcw-launcher").style.right = "10px";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.onLeft) {
        return _react2.default.createElement(
          'div',
          {
            className: 'rcw-widget-container ' + (this.props.fullScreenMode ? 'rcw-full-screen' : '') + ' ' + (this.props.showChat ? 'rcw-opened' : '')
          },
          this.props.showChat && _react2.default.createElement(_Conversation2.default, {
            title: this.props.title,
            subtitle: this.props.subtitle,
            sendMessage: this.props.onSendMessage,
            senderPlaceHolder: this.props.senderPlaceHolder,
            onQuickButtonClicked: this.props.onQuickButtonClicked,
            profileAvatar: this.props.profileAvatar,
            toggleChat: this.props.onToggleConversation,
            showChat: this.props.showChat,
            showCloseButton: this.props.showCloseButton,
            disabledInput: this.props.disabledInput,
            autofocus: this.props.autofocus,
            titleAvatar: this.props.titleAvatar,
            handleOnChangeMessage: this.props.handleOnChangeMessage
          }),
          this.props.customLauncher ? this.props.customLauncher(this.props.onToggleConversation) : !this.props.fullScreenMode && _react2.default.createElement(_Launcher2.default, {
            toggle: this.props.onToggleConversation,
            badge: this.props.badge
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          {
            className: 'rcw-widget-container ' + (this.props.fullScreenMode ? 'rcw-full-screen' : '') + ' ' + (this.props.showChat ? 'rcw-opened' : '')
          },
          this.props.customLauncher ? this.props.customLauncher(this.props.onToggleConversation) : !this.props.fullScreenMode && _react2.default.createElement(_Launcher2.default, {
            toggle: this.props.onToggleConversation,
            badge: this.props.badge
          }),
          this.props.showChat && _react2.default.createElement(_Conversation2.default, {
            title: this.props.title,
            subtitle: this.props.subtitle,
            sendMessage: this.props.onSendMessage,
            senderPlaceHolder: this.props.senderPlaceHolder,
            onQuickButtonClicked: this.props.onQuickButtonClicked,
            profileAvatar: this.props.profileAvatar,
            toggleChat: this.props.onToggleConversation,
            showChat: this.props.showChat,
            showCloseButton: this.props.showCloseButton,
            disabledInput: this.props.disabledInput,
            autofocus: this.props.autofocus,
            titleAvatar: this.props.titleAvatar,
            handleOnChangeMessage: this.props.handleOnChangeMessage
          })
        );
      }
    }
  }]);

  return WidgetLayout;
}(_react2.default.Component);
// const WidgetLayout = props => (
//   <div
//     className={
//       `rcw-widget-container ${props.fullScreenMode ? 'rcw-full-screen' : ''} ${props.showChat ? 'rcw-opened' : ''}`
//     }
//   >
//     {props.customLauncher ?
//       props.customLauncher(props.onToggleConversation) :
//       !props.fullScreenMode &&
//       <Launcher
//         toggle={props.onToggleConversation}
//         badge={props.badge}
//       />
//     }
//     {props.showChat &&
//       <Conversation
//         title={props.title}
//         subtitle={props.subtitle}
//         sendMessage={props.onSendMessage}
//         senderPlaceHolder={props.senderPlaceHolder}
//         onQuickButtonClicked={props.onQuickButtonClicked}
//         profileAvatar={props.profileAvatar}
//         toggleChat={props.onToggleConversation}
//         showChat={props.showChat}
//         showCloseButton={props.showCloseButton}
//         disabledInput={props.disabledInput}
//         autofocus={props.autofocus}
//         titleAvatar={props.titleAvatar}
//         handleOnChangeMessage={props.handleOnChangeMessage}
//       />
//     }
//   </div>
// );

WidgetLayout.propTypes = {
  title: _propTypes2.default.string,
  titleAvatar: _propTypes2.default.string,
  subtitle: _propTypes2.default.string,
  onSendMessage: _propTypes2.default.func,
  onToggleConversation: _propTypes2.default.func,
  showChat: _propTypes2.default.bool,
  senderPlaceHolder: _propTypes2.default.string,
  onQuickButtonClicked: _propTypes2.default.func,
  profileAvatar: _propTypes2.default.string,
  showCloseButton: _propTypes2.default.bool,
  disabledInput: _propTypes2.default.bool,
  fullScreenMode: _propTypes2.default.bool,
  badge: _propTypes2.default.number,
  autofocus: _propTypes2.default.bool,
  customLauncher: _propTypes2.default.func,
  handleOnChangeMessage: _propTypes2.default.func,
  onLeft: _propTypes2.default.bool
};

exports.default = (0, _reactRedux.connect)(function (store) {
  return {
    showChat: store.behavior.get('showChat'),
    disabledInput: store.behavior.get('disabledInput')
  };
})(WidgetLayout);