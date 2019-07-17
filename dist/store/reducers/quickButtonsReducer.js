'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _store = require('../../utils/store');

var _messages = require('../../utils/messages');

var _actionTypes = require('../actions/actionTypes');

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = (0, _immutable.List)([]);

var quickButtonsReducer = _defineProperty({}, actionTypes.SET_QUICK_BUTTONS, function (state, action) {
  return (0, _immutable.List)(action.buttons.map(function (button) {
    return (0, _messages.createQuickButton)(button);
  }));
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];
  return (0, _store.createReducer)(quickButtonsReducer, state, action);
};