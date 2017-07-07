import React from 'react';
import PropTypes from 'prop-types';
import assign from 'domkit/appendVendorPrefix';
import insertKeyframesRule from 'domkit/insertKeyframesRule';

/**
 * @type {object}
 */
const keyframes = {
  '0%': {
    transform: 'scaley(1.0)'
  },
  '50%': {
    transform: 'scaley(0.4)'
  },
  '100%': {
    transform: 'scaley(1.0)'
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
  getLineStyle() {
    return {
      backgroundColor: this.props.color,
      height: this.props.height,
      width: this.props.width,
      margin: this.props.margin,
      borderRadius: this.props.radius
    };
  }

  /**
   * @param  {number} i element index
   * @return {object} object with animation properties
   */
  getAnimationStyle(i) {
    let animation = [animationName, '1s', `${i * 0.1}s`, 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' ');
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
    return assign(
      this.getLineStyle(i),
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
        <div className="react-spinners--scale">
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
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.number,
  radius: PropTypes.number
};

/**
 * @type {object}
 */
Loader.defaultProps = {
  loading: true,
  color: '#000000',
  height: 35,
  width: 4,
  margin: 2,
  radius: 2
};

export default Loader;
