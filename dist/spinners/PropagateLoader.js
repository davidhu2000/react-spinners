(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'domkit/appendVendorPrefix', 'domkit/insertKeyframesRule', '../helpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('domkit/appendVendorPrefix'), require('domkit/insertKeyframesRule'), require('../helpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.appendVendorPrefix, global.insertKeyframesRule, global.helpers);
    global.PropagateLoader = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _appendVendorPrefix, _insertKeyframesRule, _helpers) {
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

  // 1.5 4.5 7.5
  var distance = [1, 3, 5];
  /**
   * @type {object}
   */
  var keyframes = {
    0: {
      '25%': { transform: 'translateX(-' + distance[0] + 'rem) scale(0.75)' },
      '50%': { transform: 'translateX(-' + distance[1] + 'rem) scale(0.6)' },
      '75%': { transform: 'translateX(-' + distance[2] + 'rem) scale(0.5)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    },
    1: {
      '25%': { transform: 'translateX(-' + distance[0] + 'rem) scale(0.75)' },
      '50%': { transform: 'translateX(-' + distance[1] + 'rem) scale(0.6)' },
      '75%': { transform: 'translateX(-' + distance[1] + 'rem) scale(0.6)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    },
    2: {
      '25%': { transform: 'translateX(-' + distance[0] + 'rem) scale(0.75)' },
      '75%': { transform: 'translateX(-' + distance[0] + 'rem) scale(0.75)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    },
    3: {
      '25%': { transform: 'translateX(' + distance[0] + 'rem) scale(0.75)' },
      '75%': { transform: 'translateX(' + distance[0] + 'rem) scale(0.75)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    },
    4: {
      '25%': { transform: 'translateX(' + distance[0] + 'rem) scale(0.75)' },
      '50%': { transform: 'translateX(' + distance[1] + 'rem) scale(0.6)' },
      '75%': { transform: 'translateX(' + distance[1] + 'rem) scale(0.6)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    },
    5: {
      '25%': { transform: 'translateX(' + distance[0] + 'rem) scale(0.75)' },
      '50%': { transform: 'translateX(' + distance[1] + 'rem) scale(0.6)' },
      '75%': { transform: 'translateX(' + distance[2] + 'rem) scale(0.5)' },
      '95%': { transform: 'translateX(0rem) scale(1)' }
    }

    // /**
    //  * @type {string}
    //  */
    // const animationName = insertKeyframesRule(keyframes);

  };
  var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
      _classCallCheck(this, Loader);

      return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
    }

    _createClass(Loader, [{
      key: 'getBallStyle',
      value: function getBallStyle() {
        return {
          position: 'absolute',
          fontSize: this.props.size / 3,
          width: this.props.size,
          height: this.props.size,
          background: this.props.color,
          borderRadius: '50%'
        };
      }
    }, {
      key: 'getAnimationStyle',
      value: function getAnimationStyle(i) {
        var animationName = (0, _insertKeyframesRule2.default)(keyframes[i]);
        var animation = [animationName, '1.5s', 'infinite'].join(' ');
        var animationFillMode = 'forwards';

        return {
          animation: animation,
          animationFillMode: animationFillMode
        };
      }
    }, {
      key: 'getStyle',
      value: function getStyle(i) {
        return (0, _appendVendorPrefix2.default)(this.getBallStyle(i), this.getAnimationStyle(i));
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader(loading) {
        if (loading) {
          return _react2.default.createElement(
            'div',
            { id: this.props.id, className: this.props.className },
            _react2.default.createElement(
              'div',
              { style: { position: 'relative' } },
              _react2.default.createElement('div', { style: this.getStyle(0) }),
              _react2.default.createElement('div', { style: this.getStyle(1) }),
              _react2.default.createElement('div', { style: this.getStyle(2) }),
              _react2.default.createElement('div', { style: this.getStyle(3) }),
              _react2.default.createElement('div', { style: this.getStyle(4) }),
              _react2.default.createElement('div', { style: this.getStyle(5) })
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
    size: _propTypes2.default.number,
    color: _propTypes2.default.string

    /**
     * @type {object}
     */
  };Loader.defaultProps = {
    loading: true,
    size: 15,
    color: '#000000'
  };

  exports.default = Loader;
});