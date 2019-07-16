'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _fileMock = require('../../../../mocks/fileMock');

var _fileMock2 = _interopRequireDefault(_fileMock);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _layout = require('../layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('<Widget />', function () {
  var profile = _fileMock2.default;
  var handleUserMessage = jest.fn();
  var newMessageEvent = {
    target: {
      message: {
        value: 'New message'
      }
    },
    preventDefault: function preventDefault() {}
  };
  var dispatch = jest.fn();

  var widgetComponent = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default.WrappedComponent, {
    handleNewUserMessage: handleUserMessage,
    profileAvatar: profile,
    dispatch: dispatch
  }));

  it('should render WidgetLayout', function () {
    expect(widgetComponent.find(_layout2.default)).toHaveLength(1);
  });

  it('should prevent events default behavior', function () {
    var spyPreventDefault = jest.spyOn(newMessageEvent, 'preventDefault');
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(spyPreventDefault).toHaveBeenCalled();
  });

  it('should call prop when calling newMessageEvent', function () {
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(handleUserMessage).toBeCalled();
  });

  it('should clear the message input when newMessageEvent', function () {
    widgetComponent.instance().handleMessageSubmit(newMessageEvent);
    expect(newMessageEvent.target.message.value).toBe('');
  });
});