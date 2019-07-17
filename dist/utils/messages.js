'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNewMessage = createNewMessage;
exports.createLinkSnippet = createLinkSnippet;
exports.createComponentMessage = createComponentMessage;
exports.scrollToBottom = scrollToBottom;
exports.createQuickButton = createQuickButton;

var _immutable = require('immutable');

var _constants = require('../constants.js');

var _Message = require('../components/Widget/components/Conversation/components/Messages/components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Snippet = require('../components/Widget/components/Conversation/components/Messages/components/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

var _QuickButton = require('../components/Widget/components/Conversation/components/QuickButtons/components/QuickButton');

var _QuickButton2 = _interopRequireDefault(_QuickButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createNewMessage(text, sender) {
  return (0, _immutable.Map)({
    type: _constants.MESSAGES_TYPES.TEXT,
    component: _Message2.default,
    text: text,
    sender: sender,
    showAvatar: sender === _constants.MESSAGE_SENDER.RESPONSE
  });
}

function createLinkSnippet(link) {
  return (0, _immutable.Map)({
    type: _constants.MESSAGES_TYPES.SNIPPET.LINK,
    component: _Snippet2.default,
    title: link.title,
    link: link.link,
    target: link.target || '_blank',
    sender: _constants.MESSAGE_SENDER.RESPONSE,
    showAvatar: true
  });
}

function createComponentMessage(component, props, showAvatar) {
  return (0, _immutable.Map)({
    type: _constants.MESSAGES_TYPES.CUSTOM_COMPONENT,
    component: component,
    props: props,
    sender: _constants.MESSAGE_SENDER.RESPONSE,
    showAvatar: showAvatar
  });
}

/**
 * Easing Functions
 * @param {*} t timestamp
 * @param {*} b begining
 * @param {*} c change
 * @param {*} d duration
 */
function sinEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

/**
 * 
 * @param {*} target scroll target
 * @param {*} scrollStart
 * @param {*} scroll scroll distance
 */
function scrollWithSlowMotion(target, scrollStart, scroll) {
  var raf = window.webkitRequestAnimationFrame || window.requestAnimationFrame;
  var start = null;
  var step = function step(timestamp) {
    if (!start) {
      start = timestamp;
    }
    var stepScroll = sinEaseOut(timestamp - start, 0, scroll, _constants.MESSAGE_BOX_SCROLL_DURATION);
    var total = scrollStart + stepScroll;
    target.scrollTop = total;
    if (total < scrollStart + scroll) {
      raf(step);
    }
  };
  raf(step);
}

function scrollToBottom(messagesDiv) {
  if (!messagesDiv) return;
  var screenHeight = messagesDiv.clientHeight;
  var scrollTop = messagesDiv.scrollTop;

  var scrollOffset = messagesDiv.scrollHeight - (scrollTop + screenHeight);

  scrollOffset && scrollWithSlowMotion(messagesDiv, scrollTop, scrollOffset);
}

function createQuickButton(button) {
  return (0, _immutable.Map)({
    component: _QuickButton2.default,
    label: button.label,
    value: button.value
  });
}