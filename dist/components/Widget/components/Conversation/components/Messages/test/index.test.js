'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _immutable = require('immutable');

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _messages = require('../../../../../../../utils/messages');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Message = require('../components/Message');

var _Message2 = _interopRequireDefault(_Message);

var _Snippet = require('../components/Snippet');

var _Snippet2 = _interopRequireDefault(_Snippet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('<Messages />', function () {
  var message = (0, _messages.createNewMessage)('Response message 1');
  var linkSnippet = (0, _messages.createLinkSnippet)({ title: 'link', link: 'link' });
  /* eslint-disable react/prop-types */
  var Dummy = function Dummy(_ref) {
    var text = _ref.text;
    return _react2.default.createElement(
      'div',
      null,
      text
    );
  };
  /* eslint-enable */
  var customComp = (0, _messages.createComponentMessage)(Dummy, { text: 'This is a Dummy Component!' });

  var responseMessages = (0, _immutable.List)([message, linkSnippet, customComp]);

  var messagesComponent = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default.WrappedComponent, {
    messages: responseMessages
  }));

  it('should render a Message component', function () {
    expect(messagesComponent.find(_Message2.default)).toHaveLength(1);
  });

  it('should render a Snippet component', function () {
    expect(messagesComponent.find(_Snippet2.default)).toHaveLength(1);
  });

  it('should reder a custom component', function () {
    expect(messagesComponent.find(Dummy)).toHaveLength(1);
  });
});