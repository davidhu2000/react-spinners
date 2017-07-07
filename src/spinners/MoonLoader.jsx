import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '100%': {
    transform: 'rotate(360deg)'
  }
};

/**
 * @type {string}
 */
const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @param {string} size size of the ball
   * @return {object} object with ball properties
   */
  getBallStyle(size) {
    return {
      width: size,
      height: size,
      borderRadius: '100%'
    };
  }

  /**
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '0.6s', '0s', 'infinite', 'linear'].join(' ');
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
    let size = parseInt(this.props.size, 10);
    let moonSize = size / 7;

    if (i === 1) {
      return assign(
        this.getBallStyle(moonSize),
        this.getAnimationStyle(i),
        {
          backgroundColor: this.props.color,
          opacity: '0.8',
          position: 'absolute',
          top: (size / 2) - (moonSize / 2)
        }
      );
    } else if (i === 2) {
      return assign(
        this.getBallStyle(size),
        {
          border: `${moonSize}px solid ${this.props.color}`,
          opacity: 0.1
        }
      );
    } else {
      return assign(this.getAnimationStyle(i), { position: 'relative' });
    }
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div className="react-spinners--moon">
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
