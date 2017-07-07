import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
let rotateKeyframes = {
  '100%': {
    transform: 'rotate(360deg)'
  }
};

/**
 * @type {object}
 */
let bounceKeyframes = {
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
let rotateAnimationName = insertKeyframesRule(rotateKeyframes);

/**
 * @type {string}
 */
let bounceAnimationName = insertKeyframesRule(bounceKeyframes);

class Loader extends React.Component {

  /**
   * @param {number} size size of the ball
   * @return {object} object with ball properties
   */
  getBallStyle(size) {
    return {
      backgroundColor: this.props.color,
      width: size,
      height: size,
      borderRadius: '100%'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [i === 0 ? rotateAnimationName : bounceAnimationName, '2s', i === 2 ? '-1s' : '0s', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'forwards';

    return {
      animation,
      animationFillMode
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with style properties
   */
  getStyle(i) {
    let { size } = this.props;
    let ballSize = size / 2;

    if (i) {
      return assign(
        this.getBallStyle(ballSize),
        this.getAnimationStyle(i),
        {
          position: 'absolute',
          top: i % 2 ? 0 : 'auto',
          bottom: i % 2 ? 'auto' : 0
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
        <div className="react-spinners--dot">
          <div style={this.getStyle(0)}>
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
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
  size: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 60
};

export default Loader;
