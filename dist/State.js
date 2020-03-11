"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var State = /*#__PURE__*/function () {
  function State() {
    var newState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, State);

    this.setState(newState);
  }

  _createClass(State, [{
    key: "getState",
    value: function getState() {
      return this.states;
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      this.states = newState;
      this.setTypeData();
    }
  }, {
    key: "setTypeData",
    value: function setTypeData() {
      this.states;
    }
  }, {
    key: "getTypeData",
    value: function getTypeData() {
      return this.typeData;
    }
  }, {
    key: "pushState",
    value: function pushState(newState) {
      var _this$states;

      (_this$states = this.states).push.apply(_this$states, _toConsumableArray(newState));
    }
  }, {
    key: "popStateBetween",
    value: function popStateBetween(minState, maxState) {
      var rule = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      rule = rule || function (x) {
        return x >= minState && x <= maxState;
      };

      this.states = this.states.filter(rule);
      return this.states;
    }
  }, {
    key: "sortState",
    value: function sortState() {
      // this.state.sort((a, b) => a.localeCompare(b))
      this.states = this.states.sort(function (a, b) {
        return a - b;
      });
    }
  }, {
    key: "reverseState",
    value: function reverseState() {
      this.states = this.states.reverse();
    }
  }]);

  return State;
}();

var _default = State;
exports["default"] = _default;