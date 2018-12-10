(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'emotion', 'react', 'prop-types', '@emotion/core', 'recompose/onlyUpdateForKeys'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('emotion'), require('react'), require('prop-types'), require('@emotion/core'), require('recompose/onlyUpdateForKeys'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.emotion, global.react, global.propTypes, global.core, global.onlyUpdateForKeys);
    global.FadeLoader = mod.exports;
  }
})(this, function (exports, _emotion, _react, _propTypes, _core, _onlyUpdateForKeys) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _onlyUpdateForKeys2 = _interopRequireDefault(_onlyUpdateForKeys);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var fade = (0, _core.keyframes)('50%{opacity:0.3}100%{opacity:1}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function (i) {
        var _this$props = _this.props,
            height = _this$props.height,
            width = _this$props.width,
            margin = _this$props.margin,
            color = _this$props.color,
            radius = _this$props.radius,
            widthUnit = _this$props.widthUnit,
            heightUnit = _this$props.heightUnit,
            radiusUnit = _this$props.radiusUnit;


        return (0, _core.css)('{position:absolute;width:', '' + width + widthUnit, ';height:', '' + height + heightUnit, ';margin:', margin, ';background-color:', color, ';border-radius:', '' + radius + radiusUnit, ';transition:2s;animation-fill-mode:\'both\';animation:', fade, ' 1.2s ', i * 0.12, 's infinite ease-in-out;}');
      }, _this.radius = 20, _this.quarter = _this.radius / 2 + _this.radius / 5.5, _this.wrapper = function () {
        var wrapper = (0, _core.css)('{position:relative;font-size:0;top:', _this.radius, 'px;left:', _this.radius, 'px;width:', _this.radius * 3, 'px;height:', _this.radius * 3, 'px;}');

        return _this.props.css ? (0, _core.css)(wrapper, ';', _this.props.css) : wrapper;
      }, _this.a = function () {
        return (0, _core.css)(_this.style(1), ';top:', _this.radius, 'px;left:0;');
      }, _this.b = function () {
        return (0, _core.css)(_this.style(2), ';top:', _this.quarter, 'px;left:', _this.quarter, 'px;transform:rotate(-45deg);');
      }, _this.c = function () {
        return (0, _core.css)(_this.style(3), ';top:0;left:', _this.radius, 'px;transform:rotate(90deg);');
      }, _this.d = function () {
        return (0, _core.css)(_this.style(4), ';top:', -_this.quarter, 'px;left:', _this.quarter, 'px;transform:rotate(45deg);');
      }, _this.e = function () {
        return (0, _core.css)(_this.style(5), ';top:', -_this.radius, 'px;left:0;');
      }, _this.f = function () {
        return (0, _core.css)(_this.style(6), ';top:', -_this.quarter, 'px;left:', -_this.quarter, 'px;transform:rotate(-45deg);');
      }, _this.g = function () {
        return (0, _core.css)(_this.style(7), ';top:0;left:', -_this.radius, 'px;transform:rotate(90deg);');
      }, _this.h = function () {
        return (0, _core.css)(_this.style(8), ';top:', _this.quarter, 'px;left:', -_this.quarter, 'px;transform:rotate(45deg);');
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        var loading = this.props.loading;


        return loading ? _react2.default.createElement(
          'div',
          {
            className: (0, _emotion.css)(this.wrapper())
          },
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.a())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.b())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.c())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.d())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.e())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.f())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.g())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.h())
          })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    margin: _propTypes2.default.string,
    radius: _propTypes2.default.number,
    heightUnit: _propTypes2.default.string,
    widthUnit: _propTypes2.default.string,
    radiusUnit: _propTypes2.default.string,
    css: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    height: 15,
    width: 5,
    margin: '2px',
    radius: 2,
    widthUnit: 'px',
    heightUnit: 'px',
    radiusUnit: 'px',
    css: ''
  };

  var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'height', 'width', 'margin', 'radius', 'widthUnit', 'heightUnit', 'radiusUnit', 'css'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});