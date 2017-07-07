import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

// 1.5 4.5 7.5
let distance = [1, 3, 5];
/**
 * @type {object}
 */
const keyframes = {
  0: {
    '25%': { transform: `translateX(-${distance[0]}rem) scale(0.75)` },
    '50%': { transform: `translateX(-${distance[1]}rem) scale(0.6)` },
    '75%': { transform: `translateX(-${distance[2]}rem) scale(0.5)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  },
  1: {
    '25%': { transform: `translateX(-${distance[0]}rem) scale(0.75)` },
    '50%': { transform: `translateX(-${distance[1]}rem) scale(0.6)` },
    '75%': { transform: `translateX(-${distance[1]}rem) scale(0.6)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  },
  2: {
    '25%': { transform: `translateX(-${distance[0]}rem) scale(0.75)` },
    '75%': { transform: `translateX(-${distance[0]}rem) scale(0.75)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  },
  3: {
    '25%': { transform: `translateX(${distance[0]}rem) scale(0.75)` },
    '75%': { transform: `translateX(${distance[0]}rem) scale(0.75)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  },
  4: {
    '25%': { transform: `translateX(${distance[0]}rem) scale(0.75)` },
    '50%': { transform: `translateX(${distance[1]}rem) scale(0.6)` },
    '75%': { transform: `translateX(${distance[1]}rem) scale(0.6)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  },
  5: {
    '25%': { transform: `translateX(${distance[0]}rem) scale(0.75)` },
    '50%': { transform: `translateX(${distance[1]}rem) scale(0.6)` },
    '75%': { transform: `translateX(${distance[2]}rem) scale(0.5)` },
    '95%': { transform: `translateX(0rem) scale(1)` }
  }
};

// /**
//  * @type {string}
//  */
// const animationName = insertKeyframesRule(keyframes);

class Loader extends React.Component {

  /**
   * @return {object} object with ball properties
   */
  getBallStyle() {
    return {
      position: 'absolute',
      fontSize: this.props.size / 3,
      width: this.props.size,
      height: this.props.size,
      background: this.props.color,
      borderRadius: '50%'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animationName = insertKeyframesRule(keyframes[i]);
    let animation = [animationName, '1.5s', 'infinite'].join(' ');
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
    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i)
    );
  }

  /**
   * @param {boolean} loading Check if loading
   * @return {ReactComponent | null} Returns Loader or null
   */
  renderLoader(loading) {
    if (loading) {
      return (
        <div className="react-spinners--propagate">
          <div style={{ position: 'relative' }}>
            <div style={this.getStyle(0)} />
            <div style={this.getStyle(1)} />
            <div style={this.getStyle(2)} />
            <div style={this.getStyle(3)} />
            <div style={this.getStyle(4)} />
            <div style={this.getStyle(5)} />
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
  size: 15,
  color: '#000000'
};

export default Loader;
