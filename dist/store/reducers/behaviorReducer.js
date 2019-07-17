'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _behaviorReducer;

var _immutable = require('immutable');

var _store = require('../../utils/store');

var _actionTypes = require('../actions/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _immutable.Map)({ showChat: false, disabledInput: false, msgLoader: false });

var behaviorReducer = (_behaviorReducer = {}, _defineProperty(_behaviorReducer, actionTypes.TOGGLE_CHAT, function (state) {
  return state.update('showChat', function (showChat) {
    return !showChat;
  });
}), _defineProperty(_behaviorReducer, actionTypes.TOGGLE_INPUT_DISABLED, function (state) {
  return state.update('disabledInput', function (disabledInput) {
    return !disabledInput;
  });
}), _defineProperty(_behaviorReducer, actionTypes.TOGGLE_MSG_LOADER, function (state) {
  return state.update('msgLoader', function (msgLoader) {
    return !msgLoader;
  });
}), _behaviorReducer);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  return (0, _store.createReducer)(behaviorReducer, state, action);
};