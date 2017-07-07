import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '50%': {
    transform: 'rotate(180deg)'
  },
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
   * @return {object} object with ball properties
   */
  getBallStyle() {
    return {
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
      margin: this.props.margin,
      borderRadius: '100%'
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle() {
    let animation = [animationName, '1s', '0s', 'infinite', 'cubic-bezier(.7,-.13,.22,.86)'].join(' ');
    let animationFillMode = 'both';

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
    if (i) {
      return assign(
        this.getBallStyle(i),
        {
          opacity: '0.8',
          position: 'absolute',
          top: 0,
          left: i % 2 ? -28 : 25
        }
      );
    }

    return assign(
      this.getBallStyle(i),
      this.getAnimationStyle(i),
      {
        display: 'inline-block',
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
        <div className="react-spinners--rotate">
          <div style={this.getStyle()}>
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
  size: PropTypes.number,
  margin: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  size: 15,
  margin: 2
};

export default Loader;
