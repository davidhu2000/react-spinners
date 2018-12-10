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
    global.ClimbingBoxLoader = mod.exports;
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

  var climbingBox = (0, _core.keyframes)('0%{transform:translate(0,-1em) rotate(-45deg)}5%{transform:translate(0,-1em) rotate(-50deg)}20%{transform:translate(1em,-2em) rotate(47deg)}25%{transform:translate(1em,-2em) rotate(45deg)}30%{transform:translate(1em,-2em) rotate(40deg)}45%{transform:translate(2em,-3em) rotate(137deg)}50%{transform:translate(2em,-3em) rotate(135deg)}55%{transform:translate(2em,-3em) rotate(130deg)}70%{transform:translate(3em,-4em) rotate(217deg)}75%{transform:translate(3em,-4em) rotate(220deg)}100%{transform:translate(0,-1em) rotate(-225deg)}');

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loader);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args))), _this), _this.style = function () {
        var color = _this.props.color;


        return (0, _core.css)('{position:absolute;left:0;bottom:-0.1em;height:1em;width:1em;background-color:transparent;border-radius:15%;border:0.25em solid ', color, ';transform:translate(0,-1em) rotate(-45deg);animation-fill-mode:both;animation:', climbingBox, ' 2.5s infinite cubic-bezier(.79,0,.47,.97);}');
      }, _this.wrapper = function () {
        var _this$props = _this.props,
            size = _this$props.size,
            sizeUnit = _this$props.sizeUnit;


        return (0, _core.css)('{position:absolute;top:50%;left:50%;margin-top:-2.7em;margin-left:-2.7em;width:5.4em;height:5.4em;font-size:', '' + size + sizeUnit, ';}');
      }, _this.hill = function () {
        var color = _this.props.color;


        return (0, _core.css)('{position:absolute;width:7.1em;height:7.1em;top:1.7em;left:1.7em;border-left:0.25em solid ', color, ';transform:rotate(45deg);}');
      }, _this.container = function () {
        var container = (0, _core.css)('{position:relative;width:7.1em;height:7.1em;}');

        return _this.props.css ? (0, _core.css)(container, ';', _this.props.css) : container;
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loader, [{
      key: 'render',
      value: function render() {
        var loading = this.props.loading;


        return loading ? _react2.default.createElement(
          'div',
          {
            className: (0, _emotion.css)(this.container())
          },
          _react2.default.createElement(
            'div',
            {
              className: (0, _emotion.css)(this.wrapper())
            },
            _react2.default.createElement('div', {
              className: (0, _emotion.css)(this.style())
            }),
            _react2.default.createElement('div', {
              className: (0, _emotion.css)(this.hill())
            })
          )
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
    size: 15,
    sizeUnit: 'px',
    css: ''
  };

  var Component = (0, _onlyUpdateForKeys2.default)(['loading', 'color', 'size', 'sizeUnit', 'css'])(Loader);
  Component.defaultProps = Loader.defaultProps;
  exports.default = Component;
});