import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
let rightRotateKeyframes = {
  '0%': {
    transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'

  },
  '100%': {
    transform: 'rotateX(180deg) rotateY(360deg) rotateZ(360deg)'
  }
};

/**
 * @type {object}
 */
let leftRotateKeyframes = {
  '0%': {
    transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)'
  },
  '100%': {
    transform: 'rotateX(360deg) rotateY(180deg) rotateZ(360deg)'
  }
};

/**
 * @type {string}
 */
let rightRotateAnimationName = insertKeyframesRule(rightRotateKeyframes);

/**
 * @type {string}
 */
let leftRotateAnimationName = insertKeyframesRule(leftRotateKeyframes);

class Loader extends React.Component {

  /**
   * @param {number} size circle size
   * @return {object} object with ball properties
   */
  getCircleStyle(size) {
    return {
      width: size,
      height: size,
      border: `${size / 10}px solid ${this.props.color}`,
      opacity: 0.4,
      borderRadius: '100%'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [i === 1 ? rightRotateAnimationName : leftRotateAnimationName, '2s', '0s', 'infinite', 'linear'].join(' ');
    let animationFillMode = 'forwards';
    let perspective = '800px';

    return {
      perspective,
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
    if (i) {
      return assign(
        this.getCircleStyle(size),
        this.getAnimationStyle(i),
        {
          position: 'absolute',
          top: 0,
          left: 0
        }
      );
    }

    return {
      width: size,
      height: size,
      position: 'relative'
    };
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div className="react-spinners--ring">
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
