import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';
import { calculateRgba } from '../helpers';

/**
 * @param {number} size
 * @param {string} color
 * @return {object} object with keyframe properties
 */

const keyframesBefore = (size, color) => {
  let thickness = size / 5;
  let lat = (size - thickness) / 2;
  let offset = lat - thickness;
  color = calculateRgba(color, 0.75);
  return {
    '0%': {
      width: `${thickness}px`,
      'box-shadow': `${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}`
    },
    '35%': {
      width: `${size}px`,
      'box-shadow': `0 ${-offset}px ${color}, 0 ${offset}px ${color}`
    },
    '70%': {
      width: `${thickness}px`,
      'box-shadow': `${-lat}px ${-offset}px ${color}, ${lat}px ${offset}px ${color}`
    },
    '100%': {
      'box-shadow': `${lat}px ${-offset}px ${color}, ${-lat}px ${offset}px ${color}`
    }
  };
};

/**
 * @param {number} size
 * @param {string} color
 * @return {object} object with keyframe properties
 */

const keyframesAfter = (size, color) => {
  let thickness = size / 5;
  let lat = (size - thickness) / 2;
  let offset = lat - thickness;
  color = calculateRgba(color, 0.75);
  return {
    '0%': {
      height: `${thickness}px`,
      'box-shadow': `${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}`
    },
    '35%': {
      height: `${size}px`,
      'box-shadow': `${offset}px ${0} ${color}, ${-offset}px ${0} ${color}`
    },
    '70%': {
      height: `${thickness}px`,
      'box-shadow': `${offset}px ${-lat}px ${color}, ${-offset}px ${lat}px ${color}`
    },
    '100%': {
      'box-shadow': `${offset}px ${lat}px ${color}, ${-offset}px ${-lat}px ${color}`
    }
  };
};


class Loader extends React.Component {

  /**
   * @return {object} object with line properties
   */
  getLineStyle() {
    return {
      position: 'absolute',
      content: '',
      top: '50%',
      left: '50%',
      display: 'block',
      width: this.props.size / 5,
      height: this.props.size / 5,
      borderRadius: this.props.size / 10,
      transform: 'translate(-50%, -50%)'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let keyframes;
    let { color, size } = this.props;
    if (i === 1) {
      keyframes = keyframesBefore(size, color);
    } else {
      keyframes = keyframesAfter(size, color);
    }
    const animationName = insertKeyframesRule(keyframes);
    let animation = [animationName, '2s', 'infinite'].join(' ');
    let animationFillMode = '';

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
    return assign(
      this.getLineStyle(),
      this.getAnimationStyle(i)
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    let style = {
      position: 'relative',
      width: this.props.size,
      height: this.props.size,
      transform: 'rotate(165deg)'
    };

    if (loading) {
      return (
        <div className="react-spinners--hash">
          <div style={style}>
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
  size: PropTypes.number,
  color: PropTypes.string
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  size: 50,
  color: "#000000"
};

export default Loader;
