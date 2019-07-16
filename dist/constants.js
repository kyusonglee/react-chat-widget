'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGE_BOX_SCROLL_DURATION = exports.PROP_TYPES = exports.MESSAGES_TYPES = exports.MESSAGE_SENDER = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactImmutableProptypes = require('react-immutable-proptypes');

var _reactImmutableProptypes2 = _interopRequireDefault(_reactImmutableProptypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MESSAGE_SENDER = exports.MESSAGE_SENDER = {
  CLIENT: 'client',
  RESPONSE: 'response'
};

var MESSAGES_TYPES = exports.MESSAGES_TYPES = {
  TEXT: 'text',
  SNIPPET: {
    LINK: 'snippet'
  },
  CUSTOM_COMPONENT: 'component'
};

var PROP_TYPES = exports.PROP_TYPES = {
  MESSAGE: _reactImmutableProptypes2.default.contains({
    type: _propTypes2.default.oneOf([MESSAGES_TYPES.TEXT, MESSAGES_TYPES.SNIPPET.LINK]),
    text: _propTypes2.default.string,
    sender: _propTypes2.default.oneOf([MESSAGE_SENDER.CLIENT, MESSAGE_SENDER.RESPONSE])
  }),

  SNIPPET: _reactImmutableProptypes2.default.contains({
    type: _propTypes2.default.oneOf([MESSAGES_TYPES.TEXT, MESSAGES_TYPES.SNIPPET.LINK]),
    title: _propTypes2.default.string,
    link: _propTypes2.default.string,
    sender: _propTypes2.default.oneOf([MESSAGE_SENDER.CLIENT, MESSAGE_SENDER.RESPONSE])
  })
};

var MESSAGE_BOX_SCROLL_DURATION = exports.MESSAGE_BOX_SCROLL_DURATION = 400;