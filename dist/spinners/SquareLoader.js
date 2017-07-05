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
    global.SquareLoader = mod.exports;
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
    '25%': {
      transform: 'rotateX(180deg) rotateY(0)'
    },
    '50%': {
      transform: 'rotateX(180deg) rotateY(180deg)'
    },
    '75%': {
      transform: 'rotateX(0) rotateY(180deg)'
    },
    '100%': {
      transform: 'rotateX(0) rotateY(0)'
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
      key: 'getSquareStyle',
      value: function getSquareStyle() {
        return {
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size
        };
      }
    }, {
      key: 'getAnimationStyle',
      value: function getAnimationStyle() {
        var animation = [animationName, '3s', '0s', 'infinite', 'cubic-bezier(.09,.57,.49,.9)'].join(' ');
        var animationFillMode = 'both';
        var perspective = '100px';

        return {
          perspective: perspective,
          animation: animation,
          animationFillMode: animationFillMode
        };
      }
    }, {
      key: 'getStyle',
      value: function getStyle() {
        return (0, _appendVendorPrefix2.default)(this.getSquareStyle(), this.getAnimationStyle(), {
          display: 'inline-block'
        });
      }
    }, {
      key: 'renderLoader',
      value: function renderLoader(loading) {
        if (loading) {
          return _react2.default.createElement(
            'div',
            { id: this.props.id, className: this.props.className },
            _react2.default.createElement('div', { style: this.getStyle() })
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
    size: _propTypes2.default.string,
    margin: _propTypes2.default.string

    /**
     * @type {object}
     */
  };Loader.defaultProps = {
    loading: true,
    color: '#ffffff',
    size: '50px',
    margin: '2px'
  };

  exports.default = Loader;
});