"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Reducer build to avoid giant switch */
var createReducer = exports.createReducer = function createReducer(reducer, state, action) {
  return reducer[action.type] ? reducer[action.type](state, action) : state;
};