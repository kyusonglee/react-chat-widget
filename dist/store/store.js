'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _behaviorReducer = require('./reducers/behaviorReducer');

var _behaviorReducer2 = _interopRequireDefault(_behaviorReducer);

var _messagesReducer = require('./reducers/messagesReducer');

var _messagesReducer2 = _interopRequireDefault(_messagesReducer);

var _quickButtonsReducer = require('./reducers/quickButtonsReducer');

var _quickButtonsReducer2 = _interopRequireDefault(_quickButtonsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({ behavior: _behaviorReducer2.default, messages: _messagesReducer2.default, quickButtons: _quickButtonsReducer2.default });

exports.default = (0, _redux.createStore)(reducer, process.env.NODE_ENV !== 'production' ?
/* eslint-disable no-underscore-dangle */
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : ''
/* eslint-enable */
);