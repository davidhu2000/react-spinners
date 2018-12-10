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
    global.MoonLoader = mod.exports;
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

  var moon = (0, _core.keyframes)('100%{transform:rotate(360deg)}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.moonSize = function () {
        var size = _this.props.size;


        return size / 7;
      }, _this.ballStyle = function (size) {
        var sizeUnit = _this.props.sizeUnit;


        return (0, _core.css)('{width:', '' + size + sizeUnit, ';height:', '' + size + sizeUnit, ';border-radius:100%;}');
      }, _this.wrapper = function () {
        var _this$props = _this.props,
            size = _this$props.size,
            sizeUnit = _this$props.sizeUnit;


        return (0, _core.css)('{position:relative;width:', '' + (size + _this.moonSize() * 2) + sizeUnit, ';height:', '' + (size + _this.moonSize() * 2) + sizeUnit, ';animation:', moon, ' 0.6s 0s infinite linear;animation-fill-mode:forwards;}');
      }, _this.ball = function () {
        var _this$props2 = _this.props,
            color = _this$props2.color,
            size = _this$props2.size,
            sizeUnit = _this$props2.sizeUnit;


        return (0, _core.css)(_this.ballStyle(_this.moonSize()), ';background-color:', color, ';opacity:0.8;position:absolute;top:', '' + (size / 2 - _this.moonSize() / 2) + sizeUnit, ';animation:', moon, ' 0.6s 0s infinite linear;animation-fill-mode:forwards;');
      }, _this.circle = function () {
        var _this$props3 = _this.props,
            size = _this$props3.size,
            color = _this$props3.color;


        var wrapper = (0, _core.css)(_this.ballStyle(size), ';border:', _this.moonSize(), 'px solid ', color, ';opacity:0.1;');

        return _this.props.css ? (0, _core.css)(wrapper, ';', _this.props.css) : wrapper;
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
            className: (0, _emotion.css)(this.ball())
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.circle())
          })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    size: _propTypes2.default.number,
    sizeUnit: _propTypes2.default.string,
    css: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    color: '#000000',
    size: 60,
    sizeUnit: 'px',
    css: ''
  };

  var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'size', 'sizeUnit', 'css'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});