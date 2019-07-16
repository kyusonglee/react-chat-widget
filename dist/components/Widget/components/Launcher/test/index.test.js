'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Badge = require('../components/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('<Launcher />', function () {
  var createMessageComponent = function createMessageComponent(_ref) {
    var toggle = _ref.toggle,
        chatOpened = _ref.chatOpened,
        _ref$badge = _ref.badge,
        badge = _ref$badge === undefined ? 0 : _ref$badge;
    return (0, _enzyme.shallow)(_react2.default.createElement(_index2.default.WrappedComponent, {
      toggle: toggle,
      chatOpened: chatOpened,
      badge: badge
    }));
  };

  it('should call toggle prop when clicked', function () {
    var toggle = jest.fn();
    var chatOpened = false;
    var launcherComponent = createMessageComponent({ toggle: toggle, chatOpened: chatOpened });
    launcherComponent.find('.rcw-launcher').simulate('click');
    expect(toggle).toBeCalled();
  });

  it('should render the open-launcher image when chatOpened = false', function () {
    var toggle = jest.fn();
    var chatOpened = false;
    var launcherComponent = createMessageComponent({ toggle: toggle, chatOpened: chatOpened });
    expect(launcherComponent.find('.rcw-open-launcher')).toHaveLength(1);
  });

  it('should render the close-launcher image when chatOpened = true', function () {
    var toggle = jest.fn();
    var chatOpened = true;
    var launcherComponent = createMessageComponent({ toggle: toggle, chatOpened: chatOpened });
    expect(launcherComponent.find('.rcw-close-launcher')).toHaveLength(1);
  });

  it('should render Badge component when closed and new message is in', function () {
    var toggle = jest.fn();
    var chatOpened = false;
    var badge = 1;
    var launcherComponent = createMessageComponent({ toggle: toggle, chatOpened: chatOpened, badge: badge });
    expect(launcherComponent.find(_Badge2.default).props().badge).toBe(1);
  });
});