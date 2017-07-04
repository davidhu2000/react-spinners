import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
var rotateKeyframes = {
  '100%': {
    transform: 'rotate(360deg)'
  }
};

/**
 * @type {object}
 */
var bounceKeyframes = {
  '0%, 100%': {
    transform: 'scale(0)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
};

/**
 * @type {string}
 */
var rotateAnimationName = insertKeyframesRule(rotateKeyframes);

/**
 * @type {string}
 */
var bounceAnimationName = insertKeyframesRule(bounceKeyframes);

class Loader extends React.Component {

  /**
   * @param {string} size size of the ball
   * @return {object} object with ball properties
   */
  getBallStyle(size) {
    return {
      backgroundColor: this.props.color,
      width: size,
      height: size,
      borderRadius: '100%',
      verticalAlign: this.props.verticalAlign
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [i==0 ? rotateAnimationName : bounceAnimationName, '2s', i==2? '-1s': '0s', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'forwards';

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
    var size = parseInt(this.props.size);
    var ballSize = size / 2;

    if (i) {
      return assign(
        this.getBallStyle(ballSize),
        this.getAnimationStyle(i),
        {
          position: 'absolute',
          top: i % 2 ? 0: 'auto',
          bottom: i % 2 ? 'auto': 0
        }
      );
    }

    return assign(
      this.getAnimationStyle(i),
      {
        width: size,
        height: size,
        position: 'relative'
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
          <div style={this.getStyle(0)}>
            <div style={this.getStyle(1)}></div>
            <div style={this.getStyle(2)}></div>
          </div>
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
  size: PropTypes.string,
  margin: PropTypes.string
}

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#ffffff',
  size: '60px',
  margin: '2px'
}

export default Loader;