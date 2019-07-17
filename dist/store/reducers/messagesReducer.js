'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _messagesReducer;

var _immutable = require('immutable');

var _store = require('../../utils/store');

var _messages = require('../../utils/messages');

var _constants = require('../../constants.js');

var _actionTypes = require('../actions/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _immutable.List)([]);

var messagesReducer = (_messagesReducer = {}, _defineProperty(_messagesReducer, actionTypes.ADD_NEW_USER_MESSAGE, function (state, _ref) {
  var text = _ref.text;
  return state.push((0, _messages.createNewMessage)(text, _constants.MESSAGE_SENDER.CLIENT));
}), _defineProperty(_messagesReducer, actionTypes.ADD_NEW_RESPONSE_MESSAGE, function (state, _ref2) {
  var text = _ref2.text;
  return state.push((0, _messages.createNewMessage)(text, _constants.MESSAGE_SENDER.RESPONSE));
}), _defineProperty(_messagesReducer, actionTypes.ADD_NEW_LINK_SNIPPET, function (state, _ref3) {
  var link = _ref3.link;
  return state.push((0, _messages.createLinkSnippet)(link, _constants.MESSAGE_SENDER.RESPONSE));
}), _defineProperty(_messagesReducer, actionTypes.ADD_COMPONENT_MESSAGE, function (state, _ref4) {
  var component = _ref4.component,
      props = _ref4.props,
      showAvatar = _ref4.showAvatar;
  return state.push((0, _messages.createComponentMessage)(component, props, showAvatar));
}), _defineProperty(_messagesReducer, actionTypes.DROP_MESSAGES, function () {
  return (0, _immutable.List)([]);
}), _defineProperty(_messagesReducer, actionTypes.HIDE_AVATAR, function (state, _ref5) {
  var index = _ref5.index;
  return state.update(index, function (message) {
    return message.set('showAvatar', false);
  });
}), _messagesReducer);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  return (0, _store.createReducer)(messagesReducer, state, action);
};