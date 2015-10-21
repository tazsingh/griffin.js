//import {createStore} from "redux";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Dispatcher = require("./Dispatcher");

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _default = (function () {
  function _default(initialState) {
    var _this = this;

    _classCallCheck(this, _default);

    this.listeners = [];

    //let reduxStore = createStore(this.reducer, initialState);

    //reduxStore.dispatch = this.dispatch;

    // poor man's "extend" since Redux builds the store on the fly
    //Object.assign(this, reduxStore);

    this.state = initialState;

    _Dispatcher2["default"].register(function (action) {
      _this.dispatch(action);
    });
  }

  _createClass(_default, [{
    key: "dispatch",
    value: function dispatch(action) {
      this.state = this.reducer(this.state, action);
    }
  }, {
    key: "subscribe",
    value: function subscribe(listener) {
      var _this2 = this;

      this.listeners.push(listener);

      return function () {
        var index = _this2.listeners.indexOf(listener);

        listeners.splice(index, 1);
      };
    }
  }, {
    key: "reducer",
    value: function reducer(state, action) {
      throw "You need to implement this on your subclass.";
    }
  }, {
    key: "state",
    get: function get() {
      return this._state;
    },
    set: function set(newState) {
      var _this3 = this;

      if (newState !== this.state) {
        this._state = newState;

        this.listeners.forEach(function (listener) {
          listener(_this3._state);
        });
      }

      return this._state;
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];