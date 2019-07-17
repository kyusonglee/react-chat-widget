'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addUserMessage = addUserMessage;
exports.addResponseMessage = addResponseMessage;
exports.addLinkSnippet = addLinkSnippet;
exports.toggleMsgLoader = toggleMsgLoader;
exports.renderCustomComponent = renderCustomComponent;
exports.toggleWidget = toggleWidget;
exports.toggleInputDisabled = toggleInputDisabled;
exports.dropMessages = dropMessages;
exports.isWidgetOpened = isWidgetOpened;
exports.setQuickButtons = setQuickButtons;

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addUserMessage(text) {
  _store2.default.dispatch(actions.addUserMessage(text));
}

function addResponseMessage(text) {
  _store2.default.dispatch(actions.addResponseMessage(text));
}

function addLinkSnippet(link) {
  _store2.default.dispatch(actions.addLinkSnippet(link));
}

function toggleMsgLoader() {
  _store2.default.dispatch(actions.toggleMsgLoader());
}

function renderCustomComponent(component, props) {
  var showAvatar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  _store2.default.dispatch(actions.renderCustomComponent(component, props, showAvatar));
}

function toggleWidget() {
  _store2.default.dispatch(actions.toggleChat());
}

function toggleInputDisabled() {
  _store2.default.dispatch(actions.toggleInputDisabled());
}

function dropMessages() {
  _store2.default.dispatch(actions.dropMessages());
}

function isWidgetOpened() {
  return _store2.default.getState().behavior.get('showChat');
}

function setQuickButtons(buttons) {
  _store2.default.dispatch(actions.setQuickButtons(buttons));
}