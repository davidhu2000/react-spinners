import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {number}
 */
var riseAmount = 30;

/**
 * @type {object}
 */
var keyframesEven = {
  '0%': {
    transform: 'scale(1.1)'
  },
  '25': {
    transform: 'translateY(-' + riseAmount + 'px)'
  },
  '50%': {
    transform: 'scale(0.4)'
  },
  '75%': {
    transform: 'translateY(' + riseAmount + 'px)'
  },
  '100%': {
    transform: 'translateY(0) scale(1.0)'
  }
};

/**
 * @type {object}
 */
var keyframesOdd = {
  '0%': {
    transform: 'scale(0.4)'
  },
  '25': {
    transform: 'translateY(' + riseAmount + 'px)'
  },
  '50%': {
    transform: 'scale(1.1)'
  },
  '75%': {
    transform: 'translateY(-' + riseAmount + 'px)'
  },
  '100%': {
    transform: 'translateY(0) scale(0.75)'
  }
};

/**
 * @type {string}
 */
var animationNameEven = insertKeyframesRule(keyframesEven);

/**
 * @type {string}
 */
var animationNameOdd = insertKeyframesRule(keyframesOdd);

class Loader extends React.Component {

  /**
   * @return {object} object with ball properties
   */
  getBallStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      margin: this.props.margin,
      borderRadius: '100%'
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [i % 2 == 0 ? animationNameEven : animationNameOdd, '1s', '0s', 'infinite', 'cubic-bezier(.15,.46,.9,.6)'].join(' ');
    let animationFillMode = 'both';

    return {
      animation: animation,
      animationFillMode: animationFillMode
    }
  }

  /**
   * @param  {number} i element index
   * @return {object} object with style properties
   */
  getStyle(i) {
    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      {
        display: 'inline-block'
      }
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div id={this.props.id} className={this.props.className}>
          <div style={this.getStyle(1)} />
          <div style={this.getStyle(2)} />
          <div style={this.getStyle(3)} />
          <div style={this.getStyle(4)} />
          <div style={this.getStyle(5)} />
        </div>
      );
    }

    return null;
  }

  render() {
    return this.renderLoader(this.props.loading);
  }
}

/**
 * @type {object}
 */
Loader.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  margin: PropTypes.number
}

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: 2
}

export default Loader;