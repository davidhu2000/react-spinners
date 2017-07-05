(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'domkit/appendVendorPrefix', 'domkit/insertKeyframesRule'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('domkit/appendVendorPrefix'), require('domkit/insertKeyframesRule'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.appendVendorPrefix, global.insertKeyframesRule);
    global.FadeLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _appendVendorPrefix, _insertKeyframesRule) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _appendVendorPrefix2 = _interopRequireDefault(_appendVendorPrefix);

  var _insertKeyframesRule2 = _interopRequireDefault(_insertKeyframesRule);

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

  /**
   * @type {object}
   */
  var keyframes = {
    '50%': {
      opacity: 0.3
    },
    '100%': {
      opacity: 1
    }

    /**
     * @type {string}
     */
  };var animationName = (0, _insertKeyframesRule2.default)(keyframes);

  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      _classCallCheck(this, Loader);

      return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
    }

    _createClass(Loader, [{
      key: 'getLineStyle',
      value: function getLineStyle() {
        return {
          backgroundColor: this.props.color,
          height: this.props.height,
          width: this.props.width,
          margin: this.props.margin,
          borderRadius: this.props.radius
        };
      }
    }, {
      key: 'getAnimationStyle',
      value: function getAnimationStyle(i) {
        var animation = [animationName, '1.2s', i * 0.12 + 's', 'infinite', 'ease-in-out'].join(' ');
        var animationFillMode = 'both';

        return {
          animation: animation,
          animationFillMode: animationFillMode
        };
      }
    }, {
      key: 'getPosStyle',
      value: function getPosStyle(i) {
        var radius = 20;
        var quarter = radius / 2 + radius / 5.5;

        var lines = {
          l1: {
            top: radius,
            left: 0
          },
          l2: {
            top: quarter,
            left: quarter,
            transform: 'rotate(-45deg)'
          },
          l3: {
            top: 0,
            left: radius,
            transform: 'rotate(90deg)'
          },
          l4: {
            top: -quarter,
            left: quarter,
            transform: 'rotate(45deg)'
          },
          l5: {
            top: -radius,
            left: 0
          },
          l6: {
            top: -quarter,
            left: -quarter,
            transform: 'rotate(-45deg)'
          },
          l7: {
            top: 0,
            left: -radius,
            transform: 'rotate(90deg)'
          },
          l8: {
            top: quarter,
            left: -quarter,
            transform: 'rotate(45deg)'
          }
        };

        return lines['l' + i];
      }
    }, {
      key: 'getStyle',
      value: function getStyle(i) {
        return (0, _appendVendorPrefix2.default)(this.getLineStyle(i), this.getPosStyle(i), this.getAnimationStyle(i), {
          position: 'absolute'
        });
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader(loading) {
        if (loading) {
          var style = {
            position: 'relative',
            fontSize: 0
          };

          return _react2.default.createElement(
            'div',
            { id: this.props.id, className: this.props.className },
            _react2.default.createElement(
              'div',
              { style: style },
              _react2.default.createElement('div', { style: this.getStyle(1) }),
              _react2.default.createElement('div', { style: this.getStyle(2) }),
              _react2.default.createElement('div', { style: this.getStyle(3) }),
              _react2.default.createElement('div', { style: this.getStyle(4) }),
              _react2.default.createElement('div', { style: this.getStyle(5) }),
              _react2.default.createElement('div', { style: this.getStyle(6) }),
              _react2.default.createElement('div', { style: this.getStyle(7) }),
              _react2.default.createElement('div', { style: this.getStyle(8) })
            )
          );
        }

        return null;
      }
    }, {
      key: 'render',
      value: function render() {
        return this.renderLoader(this.props.loading);
      }
    }]);

    return Loader;
  }(_react2.default.Component);

  /**
   * @type {object}
   */
  Loader.propTypes = {
    loading: _propTypes2.default.bool,
    color: _propTypes2.default.string,
    height: _propTypes2.default.number,
    width: _propTypes2.default.number,
    margin: _propTypes2.default.number,
    radius: _propTypes2.default.number

    /**
     * @type {object}
     */
  };Loader.defaultProps = {
    loading: true,
    color: '#ffffff',
    height: 15,
    width: 5,
    margin: 2,
    radius: 2
  };

  exports.default = Loader;
});