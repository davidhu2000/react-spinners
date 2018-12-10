(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'emotion', 'react', 'prop-types', '@emotion/core', 'recompose/onlyUpdateForKeys', './helpers/index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('emotion'), require('react'), require('prop-types'), require('@emotion/core'), require('recompose/onlyUpdateForKeys'), require('./helpers/index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.emotion, global.react, global.propTypes, global.core, global.onlyUpdateForKeys, global.index);
    global.HashLoader = mod.exports;
  }
})(this, function (exports, _emotion, _react, _propTypes, _core, _onlyUpdateForKeys, _index) {
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

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.thickness = function () {
        var size = _this.props.size;


        return size / 5;
      }, _this.lat = function () {
        var size = _this.props.size;


        return (size - _this.thickness()) / 2;
      }, _this.offset = function () {
        return _this.lat() - _this.thickness();
      }, _this.color = function () {
        var color = _this.props.color;


        return (0, _index.calculateRgba)(color, 0.75);
      }, _this.before = function () {
        var _this$props = _this.props,
            size = _this$props.size,
            sizeUnit = _this$props.sizeUnit;


        var color = _this.color();
        var lat = _this.lat();
        var thickness = _this.thickness();
        var offset = _this.offset();

        return (0, _core.keyframes)('0%{width:', thickness, 'px;box-shadow:', lat, 'px ', -offset, 'px ', color, ',', -lat, 'px ', offset, 'px ', color, '}35%{width:', '' + size + sizeUnit, ';box-shadow:0 ', -offset, 'px ', color, ',0 ', offset, 'px ', color, '}70%{width:', thickness, 'px;box-shadow:', -lat, 'px ', -offset, 'px ', color, ',', lat, 'px ', offset, 'px ', color, '}100%{box-shadow:', lat, 'px ', -offset, 'px ', color, ',', -lat, 'px ', offset, 'px ', color, '}');
      }, _this.after = function () {
        var _this$props2 = _this.props,
            size = _this$props2.size,
            sizeUnit = _this$props2.sizeUnit;


        var color = _this.color();
        var lat = _this.lat();
        var thickness = _this.thickness();
        var offset = _this.offset();

        return (0, _core.keyframes)('0%{height:', thickness, 'px;box-shadow:', offset, 'px ', lat, 'px ', color, ',', -offset, 'px ', -lat, 'px ', color, '}35%{height:', '' + size + sizeUnit, ';box-shadow:', offset, 'px 0 ', color, ',', -offset, 'px 0 ', color, '}70%{height:', thickness, 'px;box-shadow:', offset, 'px ', -lat, 'px ', color, ',', -offset, 'px ', lat, 'px ', color, '}100%{box-shadow:', offset, 'px ', lat, 'px ', color, ',', -offset, 'px ', -lat, 'px ', color, '}');
      }, _this.style = function (i) {
        var _this$props3 = _this.props,
            size = _this$props3.size,
            sizeUnit = _this$props3.sizeUnit;


        return (0, _core.css)('{position:absolute;content:\'\';top:50%;left:50%;display:block;width:', '' + size / 5 + sizeUnit, ';height:', '' + size / 5 + sizeUnit, ';border-radius:', '' + size / 10 + sizeUnit, ';transform:translate(-50%,-50%);animation-fill-mode:none;animation:', i === 1 ? _this.before() : _this.after(), ' 2s infinite;}');
      }, _this.wrapper = function () {
        var _this$props4 = _this.props,
            size = _this$props4.size,
            sizeUnit = _this$props4.sizeUnit;


        var wrapper = (0, _core.css)('{position:relative;width:', '' + size + sizeUnit, ';height:', '' + size + sizeUnit, ';transform:rotate(165deg);}');

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
            className: (0, _emotion.css)(this.style(1))
          }),
          _react2.default.createElement('div', {
            className: (0, _emotion.css)(this.style(2))
          })
        ) : null;
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    size: _propTypes2.default.number,
    color: _propTypes2.default.string,
    sizeUnit: _propTypes2.default.string,
    css: _propTypes2.default.string
  };

  Loader.defaultProps = {
    loading: true,
    size: 50,
    color: '#000000',
    sizeUnit: 'px',
    css: ''
  };

  var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'size', 'sizeUnit', 'css'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});