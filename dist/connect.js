"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

exports["default"] = function (stateMapping) {
  // for some reason a default argument wasn't compiling correctly...
  stateMapping = stateMapping || {};

  function getState() {
    var newState = {};

    Object.keys(stateMapping).forEach(function (key) {
      newState[key] = stateMapping[key].state;
    });

    return newState;
  }

  return function (Component) {
    return (function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this = this;

        _classCallCheck(this, _class);

        _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, props);

        this.componentDidMount = function () {
          _this.listeners = Object.keys(stateMapping).map(function (key) {
            var store = stateMapping[key];

            store.subscribe(_this.handleStateChange);
          });
        };

        this.componentWillUnmount = function () {
          _this.listeners.forEach(function (unsubscribe) {
            unsubscribe();
          });
        };

        this.handleStateChange = function () {
          _this.setState(getState());
        };

        this.render = function () {
          return _react2["default"].createElement(Component, _extends({}, _this.props, _this.state));
        };

        this.state = getState();
        this.listeners = [];
      }

      return _class;
    })(_react2["default"].Component);
  };
};

module.exports = exports["default"];